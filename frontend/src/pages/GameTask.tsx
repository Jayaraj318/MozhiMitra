import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Footer from '@/components/Footer';
import { toast } from '@/components/ui/use-toast';
import { GameCategory } from './GamesPage';

// Memory Game Component
const MemoryGame = ({ gridSize = { rows: 4, cols: 4 } }) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matches, setMatches] = useState(0);

  useEffect(() => {
    initializeCards();
  }, [gridSize]);

  const initializeCards = () => {
    const totalPairs = (gridSize.rows * gridSize.cols) / 2;
    const values = Array.from({ length: totalPairs }, (_, i) => String.fromCharCode(65 + i));
    const cardValues = [...values, ...values];
    const shuffledCards = cardValues
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
  };

  const handleCardClick = (id) => {
    if (flippedCards.length === 2) return;
    if (cards[id].isMatched) return;
    if (flippedCards.includes(id)) return;

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, id]);

    if (flippedCards.length === 1) {
      const [first] = flippedCards;
      if (cards[first].value === cards[id].value) {
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[first].isMatched = matchedCards[id].isMatched = true;
          setCards(matchedCards);
          setFlippedCards([]);
          setMatches(m => m + 1);
        }, 1000);
      } else {
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[first].isFlipped = resetCards[id].isFlipped = false;
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="p-4">
      <div className="grid gap-4" style={{
        gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`
      }}>
        {cards.map((card) => (
          <Card
            key={card.id}
            className={`aspect-square flex items-center justify-center text-2xl font-bold cursor-pointer transition-all ${
              card.isFlipped || card.isMatched ? 'bg-primary text-primary-foreground' : 'bg-secondary'
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            {(card.isFlipped || card.isMatched) ? card.value : '?'}
          </Card>
        ))}
      </div>
      <Button className="mt-4" onClick={initializeCards}>Reset Game</Button>
    </div>
  );
};

// Word Match Game Component
const WordMatchGame = ({ wordPairs = [] }) => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedTranslation, setSelectedTranslation] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);

  const handleWordClick = (word) => {
    setSelectedWord(word);
    checkMatch(word, selectedTranslation);
  };

  const handleTranslationClick = (translation) => {
    setSelectedTranslation(translation);
    checkMatch(selectedWord, translation);
  };

  const checkMatch = (word, translation) => {
    if (!word || !translation) return;

    const pair = wordPairs.find(p => p.word === word && p.translation === translation);
    if (pair) {
      setMatchedPairs([...matchedPairs, word]);
      setSelectedWord(null);
      setSelectedTranslation(null);
    } else {
      setTimeout(() => {
        setSelectedWord(null);
        setSelectedTranslation(null);
      }, 1000);
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-bold text-lg mb-4">Words</h3>
          {wordPairs.map((pair) => (
            <Card
              key={pair.word}
              className={`p-4 cursor-pointer transition-all ${
                matchedPairs.includes(pair.word)
                  ? 'bg-green-100'
                  : selectedWord === pair.word
                  ? 'bg-blue-100'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => !matchedPairs.includes(pair.word) && handleWordClick(pair.word)}
            >
              {pair.word}
            </Card>
          ))}
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-lg mb-4">Translations</h3>
          {wordPairs.map((pair) => (
            <Card
              key={pair.translation}
              className={`p-4 cursor-pointer transition-all ${
                matchedPairs.includes(pair.word)
                  ? 'bg-green-100'
                  : selectedTranslation === pair.translation
                  ? 'bg-blue-100'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => !matchedPairs.find(w => 
                wordPairs.find(p => p.word === w)?.translation === pair.translation
              ) && handleTranslationClick(pair.translation)}
            >
              {pair.translation}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Sentence Building Game Component
const SentenceBuildingGame = ({ sentences = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState([]);
  const [remainingWords, setRemainingWords] = useState(
    sentences[0]?.words.sort(() => Math.random() - 0.5) || []
  );
  const [feedback, setFeedback] = useState(''); // Add feedback state

  const handleWordSelect = (word) => {
    setSelectedWords([...selectedWords, word]);
    setRemainingWords(remainingWords.filter(w => w !== word));
    setFeedback(''); // Clear feedback when selecting new words
  };

  const handleWordRemove = (index) => {
    const word = selectedWords[index];
    setSelectedWords(selectedWords.filter((_, i) => i !== index));
    setRemainingWords([...remainingWords, word]);
    setFeedback(''); // Clear feedback when removing words
  };

  const checkSentence = () => {
    const currentSentence = sentences[currentIndex];
    const userSentence = selectedWords.join(' ');
    const correctSentence = currentSentence.words.join(' ');
    
    if (userSentence === correctSentence) {
      setFeedback('Correct! Well done!');
      
      // Move to next sentence after delay
      if (currentIndex < sentences.length - 1) {
        setTimeout(() => {
          setCurrentIndex(currentIndex + 1);
          setSelectedWords([]);
          setRemainingWords(sentences[currentIndex + 1].words.sort(() => Math.random() - 0.5));
          setFeedback('');
        }, 1500);
      } else {
        setFeedback('Congratulations! You completed all sentences!');
      }
    } else {
      setFeedback('Incorrect. Try again!');
      // Optionally reset the sentence
      setTimeout(() => {
        setSelectedWords([]);
        setRemainingWords(sentences[currentIndex].words.sort(() => Math.random() - 0.5));
        setFeedback('');
      }, 1500);
    }
  };

  return (
    <div className="p-4 space-y-6">
      <div className="text-center mb-6">
        <p className="text-lg font-medium">Translation:</p>
        <p className="text-xl">{sentences[currentIndex]?.translation}</p>
      </div>

      <div className="min-h-[100px] p-4 border-2 border-dashed rounded-lg">
        <div className="flex flex-wrap gap-2">
          {selectedWords.map((word, index) => (
            <Button
              key={index}
              variant="secondary"
              onClick={() => handleWordRemove(index)}
            >
              {word}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {remainingWords.map((word, index) => (
          <Button
            key={index}
            variant="outline"
            onClick={() => handleWordSelect(word)}
          >
            {word}
          </Button>
        ))}
      </div>

      {feedback && (
        <div className={`text-center p-4 rounded-lg ${
          feedback.includes('Correct') || feedback.includes('Congratulations') 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {feedback}
        </div>
      )}

      <Button 
        className="w-full mt-4"
        onClick={checkSentence}
        disabled={selectedWords.length !== sentences[currentIndex]?.words.length}
      >
        Check Sentence
      </Button>

      <div className="text-center text-sm text-muted-foreground">
        {`Progress: ${currentIndex + 1}/${sentences.length}`}
      </div>
    </div>
  );
};

// Synonym Search Game Component
const SynonymSearchGame = ({ wordSets = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSynonyms, setSelectedSynonyms] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSynonymSelect = (synonym) => {
    if (!selectedSynonyms.includes(synonym)) {
      setSelectedSynonyms([...selectedSynonyms, synonym]);
    } else {
      setSelectedSynonyms(selectedSynonyms.filter(s => s !== synonym));
    }
  };

  const checkAnswer = () => {
    const currentWord = wordSets[currentIndex];
    const correct = selectedSynonyms.every(s => currentWord.synonyms.includes(s)) &&
                   selectedSynonyms.length === currentWord.synonyms.length;
    setIsCorrect(correct);

    if (correct && currentIndex < wordSets.length - 1) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setSelectedSynonyms([]);
        setIsCorrect(null);
      }, 1500);
    }
  };

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{wordSets[currentIndex]?.word}</h3>
        <p className="text-muted-foreground">{wordSets[currentIndex]?.translation}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {wordSets[currentIndex]?.synonyms.map((synonym, index) => (
          <Button
            key={index}
            variant={selectedSynonyms.includes(synonym) ? "secondary" : "outline"}
            onClick={() => handleSynonymSelect(synonym)}
            className="w-full"
          >
            {synonym}
          </Button>
        ))}
      </div>

      <Button 
        className="w-full mt-4"
        onClick={checkAnswer}
        disabled={selectedSynonyms.length === 0}
      >
        Check Synonyms
      </Button>

      {isCorrect !== null && (
        <div className={`text-center p-4 rounded-lg ${
          isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {isCorrect ? 'Correct!' : 'Try again!'}
        </div>
      )}
    </div>
  );
};

// Main Game Task Component
interface GameTaskData {
  wordPairs?: { word: string; translation: string }[];
  sentences?: { words: string[]; translation: string }[];
  wordSets?: { word: string; translation: string; synonyms: string[] }[];
  gridSize?: { rows: number; cols: number };
}

const GameTask = () => {
  const { category, task } = useParams<{ category: string; task: string }>();
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState<GameTaskData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/games/${category}/${task}`);
        if (!response.ok) {
          throw new Error('Failed to fetch task data');
        }
        const data = await response.json();
        setTaskData(data);
      } catch (err) {
        setError(err.message);
        toast({
          title: "Error",
          description: "Failed to load game data. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    if (category && task) {
      fetchTaskData();
    }
  }, [category, task]);

  const getGameComponent = () => {
    if (!taskData) return null;

    if (category === 'memory-match') {
      return <MemoryGame gridSize={taskData.gridSize} />;
    }

    if (category?.includes('word-match')) {
      switch (task) {
        case 'match-words':
          return <WordMatchGame wordPairs={taskData.wordPairs} />;
        case 'sentence-building':
          return <SentenceBuildingGame sentences={taskData.sentences} />;
        case 'synonym-search':
          return <SynonymSearchGame wordSets={taskData.wordSets} />;
        default:
          return null;
      }
    }

    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">Game Coming Soon</h2>
        <p className="text-muted-foreground mb-6">
          We're still working on this game. Please check back later!
        </p>
        <Button onClick={() => navigate('/games')}>Back to Games</Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="w-full max-w-4xl mx-auto">
          {loading && (
            <CardContent className="text-center py-12">
              <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-muted-foreground">Loading game...</p>
            </CardContent>
          )}
          {error && (
            <CardContent className="text-center py-12 text-red-500">
              <p>{error}</p>
              <Button onClick={() => window.location.reload()} className="mt-4">
                Try Again
              </Button>
            </CardContent>
          )}
          {!loading && !error && taskData && (
            <>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>
                    {category && task
                      ? `${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - ${task.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`
                      : 'Game Task'}
                  </CardTitle>
                  <CardDescription>
                    Complete this game to unlock the next level
                  </CardDescription>
                  <Button variant="outline" onClick={() => navigate('/games')}>
                    Back to Games
                  </Button>
                </div>
              </CardHeader>
              <CardContent>{getGameComponent()}</CardContent>
            </>
          )}
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default GameTask;
