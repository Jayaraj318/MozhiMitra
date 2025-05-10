import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import Footer from '@/components/Footer';
import { LanguageOption } from '@/lib/data';
import { toast } from '@/components/ui/use-toast';
import React from 'react';
import { shuffle } from 'lodash';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// Define game category types
export type GameCategoryType =
  | 'tamil-word-match'
  | 'malayalam-word-match'
  | 'memory-match';

// Interface for game tasks
export interface GameTask {
  id: string;
  title: string;
  description: string;
  isUnlocked: boolean;
  category: GameCategoryType;
  slug: string;
}

export interface GameCategory {
  id: string;
  title: string;
  description: string;
  tasks: GameTask[];
}

const GamesPage = () => {
  const navigate = useNavigate();
  const [gameCategories, setGameCategories] = useState<GameCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/games');
        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }
        const data = await response.json();
        setGameCategories(data);
      } catch (err) {
        setError(err.message);
        toast({
          title: "Error",
          description: "Failed to load games. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const handleTaskClick = (task: GameTask) => {
    if (!task.isUnlocked) {
      toast({
        title: "Game Locked",
        description: "Complete the previous task to unlock this game.",
        variant: "destructive"
      });
      return;
    }

    // Navigate to the game task
    navigate(`/games/${task.category}/${task.slug}`);
  };

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Show loading state */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground">Loading games...</p>
          </div>
        )}

        {/* Show error state */}
        {error && (
          <div className="text-center py-12 text-red-500">
            <p>{error}</p>
            <Button onClick={() => window.location.reload()} className="mt-4">
              Try Again
            </Button>
          </div>
        )}

        {/* Your existing JSX code remains the same */}
        {!loading && !error && (
          <>
            <h1 className="text-4xl font-bold text-center mb-8">Interactive Games</h1>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Unwind and have fun with our interactive games while learning languages.
              Win games to improve your language skills and track your progress.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gameCategories.map((category) => (
                <Card key={category.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.tasks.map((task) => (
                      <div
                        key={task.id}
                        className={`p-4 border rounded-md cursor-pointer transition-all ${task.isUnlocked
                          ? 'hover:bg-muted border-muted-foreground/20'
                          : 'opacity-70 bg-muted/30 border-muted-foreground/10'
                          }`}
                        onClick={() => handleTaskClick(task)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">{task.title}</h3>
                            <p className="text-sm text-muted-foreground">{task.description}</p>
                          </div>
                          {!task.isUnlocked && (
                            <Lock className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                The next game will only unlock after completing the current task, keeping your learning path structured and engaging.
              </p>
              <p className="text-sm text-muted-foreground/70">
                Note: Game progress will be saved when you connect your account.
              </p>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

interface WordPair {
  id: number;
  tamil: string;
  english: string;
}

const WordMatchGame = () => {
  const [shuffledTranslations, setShuffledTranslations] = useState<string[]>([]);
  const [selectedWord, setSelectedWord] = useState<number | null>(null);
  const [selectedTranslation, setSelectedTranslation] = useState<string | null>(null);
  const [matches, setMatches] = useState<{ [key: number]: string }>({});

  // Fetch word pairs from backend with proper type safety
  const { data: wordPairs, isLoading, error } = useQuery<WordPair[], Error>({
    queryKey: ['wordMatchGame'],
    queryFn: async () => {
      const response = await axios.get<WordPair[]>(`${process.env.REACT_APP_API_URL}/api/games/word-match`);
      return response.data;
    }
  });

  // Update the shuffle logic to be more robust
  useEffect(() => {
    if (wordPairs && wordPairs.length > 0) {
      // Create a copy of the meanings array and shuffle it
      const meanings = [...wordPairs.map(pair => pair.english)];
      const shuffled = shuffle(meanings);
      setShuffledTranslations(shuffled);
    }
  }, [wordPairs]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !wordPairs) {
    return (
      <div className="text-center text-red-500 p-4">
        Failed to load game data. Please try again later.
      </div>
    );
  }

  const checkMatch = (wordId: number, translation: string) => {
    const wordPair = wordPairs.find(p => p.id === wordId);
    if (wordPair && wordPair.english === translation) {
      setMatches(prev => ({ ...prev, [wordId]: translation }));
      toast({
        title: "Success!",
        description: "Correct match! 🎉",
        variant: "default"
      });
    } else {
      toast({
        title: "Try Again",
        description: "That's not the correct match.",
        variant: "destructive"
      });
    }
    setSelectedWord(null);
    setSelectedTranslation(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-8 text-center">Tamil Word Match Game</h2>

      <div className="grid grid-cols-2 gap-8">
        {/* Tamil Words Column - Stays in original order */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 text-center">Tamil Words</h3>
          {wordPairs.map((pair) => (
            <button
              key={pair.id}
              onClick={() => {
                setSelectedWord(pair.id);
                if (selectedTranslation) checkMatch(pair.id, selectedTranslation);
              }}
              disabled={!!matches[pair.id]}
              className={`w-full p-4 rounded-lg text-lg font-medium transition-colors
                ${selectedWord === pair.id ? 'bg-blue-500 text-white' :
                  matches[pair.id] ? 'bg-green-500 text-white' :
                    'bg-gray-100 hover:bg-gray-200'}`}
            >
              {pair.tamil}
            </button>
          ))}
        </div>

        {/* English Translations Column - Using shuffled array */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 text-center">English Meanings</h3>
          {shuffledTranslations.map((translation, index) => (
            <button
              key={`${translation}-${index}`} // Updated key for better uniqueness
              onClick={() => {
                setSelectedTranslation(translation);
                if (selectedWord) checkMatch(selectedWord, translation);
              }}
              disabled={Object.values(matches).includes(translation)}
              className={`w-full p-4 rounded-lg text-lg font-medium transition-colors
                ${selectedTranslation === translation ? 'bg-blue-500 text-white' :
                  Object.values(matches).includes(translation) ? 'bg-green-500 text-white' :
                    'bg-gray-100 hover:bg-gray-200'}`}
            >
              {translation}
            </button>
          ))}
        </div>
      </div>

      {/* Game Progress */}
      <div className="mt-8 text-center">
        <p className="text-lg">
          Matched: {Object.keys(matches).length} / {wordPairs.length}
        </p>
      </div>
    </div>
  );
};

export default GamesPage;
export { WordMatchGame };
