
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AlphabetItem } from '@/lib/data';
import { playAudio, generateAudio } from '@/utils/audioUtils';
import { toast } from '@/components/ui/use-toast';

interface AlphabetCardProps {
  item: AlphabetItem;
  language: 'tamil' | 'malayalam';
}

const AlphabetCard = ({ item, language }: AlphabetCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayAudio = async (audioType: string = 'pronunciation', textToSpeak?: string) => {
    // Use the hardcoded API key
    const apiKey = 'Uzi84l9Ggw2h7_XqjX9MHOM3HnPZSko2STYTkAp4eRk6';
    
    setIsPlaying(true);
    
    try {
      // Show a friendly toast for kids and beginners
      if (audioType === 'pronunciation') {
        toast({
          title: "Let's learn the alphabet!",
          description: `Listen to how this ${language === 'tamil' ? 'Tamil' : 'Malayalam'} letter sounds.`,
          duration: 2000,
        });
      } else {
        toast({
          title: "Learn by example!",
          description: `Here's a word using this ${language === 'tamil' ? 'Tamil' : 'Malayalam'} letter.`,
          duration: 2000,
        });
      }
      
      let audioUrl;
      
      // Determine what text to generate audio for
      const text = textToSpeak || 
        (audioType === 'pronunciation' ? item.letter : 
         audioType === 'example' && item.example ? item.example.word : item.letter);
      
      // Generate the audio
      audioUrl = await generateAudio(text, language, apiKey);
      
      // Play the generated audio
      await playAudio(audioUrl);
      
      // Show success toast
      toast({
        title: "Great job listening!",
        description: "Try repeating what you heard.",
        duration: 3000,
      });
    } catch (err) {
      console.error('Audio generation or playback error:', err);
      toast({
        title: "Playback Error",
        description: "Could not generate or play the audio. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsPlaying(false);
    }
  };
  
  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div 
      className="alphabet-card"
      whileHover={{ scale: 1.05 }}
      onClick={toggleFlip}
    >
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <div className={`p-6 bg-white rounded-xl shadow-md flex flex-col items-center justify-center gap-3 h-full border-2 ${
            language === 'tamil' ? 'border-tamil/20' : 'border-malayalam/20'
          }`}>
            <div className={`text-6xl font-bold ${
              language === 'tamil' ? 'font-tamil text-tamil-dark' : 'font-malayalam text-malayalam-dark'
            }`}>
              {item.letter}
            </div>
            <div className="text-xl text-muted-foreground mt-2">{item.transliteration}</div>
            <Button 
              size="icon" 
              variant="ghost" 
              className={`mt-2 ${isPlaying ? 'animate-pulse' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                handlePlayAudio('pronunciation');
              }}
              disabled={isPlaying}
            >
              <Volume2 className={isPlaying ? 'text-primary' : ''} />
              <span className="sr-only">Play pronunciation</span>
            </Button>
          </div>
        </div>
        
        <div className="card-back">
          {item.example ? (
            <div className={`p-6 bg-white rounded-xl shadow-md flex flex-col items-center justify-center gap-3 h-full border-2 ${
              language === 'tamil' ? 'border-tamil/20' : 'border-malayalam/20'
            }`}>
              <div className={`text-2xl font-bold ${
                language === 'tamil' ? 'font-tamil text-tamil-dark' : 'font-malayalam text-malayalam-dark'
              }`}>
                {item.example.word}
              </div>
              <div className="text-muted-foreground">{item.example.meaning}</div>
              <div className="flex gap-2 mt-2">
                <Button 
                  size="icon" 
                  variant="ghost"
                  className={isPlaying ? 'animate-pulse' : ''}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayAudio('example');
                  }}
                  disabled={isPlaying}
                >
                  <Play className={isPlaying ? 'text-primary' : ''} />
                  <span className="sr-only">Play example</span>
                </Button>
              </div>
            </div>
          ) : (
            <div className={`p-6 bg-white rounded-xl shadow-md flex flex-col items-center justify-center gap-3 h-full border-2 ${
              language === 'tamil' ? 'border-tamil/20' : 'border-malayalam/20'
            }`}>
              <p className="text-muted-foreground">No example available</p>
            </div>
          )}
        </div>
      </div>
      
      <style>
        {`
        .alphabet-card {
          perspective: 1000px;
          width: 100%;
          height: 180px;
          cursor: pointer;
        }
        
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        
        .flipped {
          transform: rotateY(180deg);
        }
        
        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 0.75rem;
          overflow: hidden;
        }
        
        .card-back {
          transform: rotateY(180deg);
        }
        `}
      </style>
    </motion.div>
  );
};

export default AlphabetCard;
