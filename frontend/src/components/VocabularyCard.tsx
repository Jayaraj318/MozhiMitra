
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VocabularyItem } from '@/lib/data';
import { playAudio, generateAudio } from '@/utils/audioUtils';
import { toast } from '@/components/ui/use-toast';

interface VocabularyCardProps {
  item: VocabularyItem;
  language: 'tamil' | 'malayalam';
}

const VocabularyCard = ({ item, language }: VocabularyCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayAudio = async (text?: string) => {
    const apiKey = 'Uzi84l9Ggw2h7_XqjX9MHOM3HnPZSko2STYTkAp4eRk6';
    
    setIsPlaying(true);
    
    try {
      // Show a friendly toast message
      toast({
        title: "Let's learn together!",
        description: `Listen to the ${language === 'tamil' ? 'Tamil' : 'Malayalam'} pronunciation.`,
        duration: 2000,
      });
      
      // Generate audio for the word if text is provided
      if (text) {
        const audioUrl = await generateAudio(text, language, apiKey);
        await playAudio(audioUrl);
        
        // Show success toast
        toast({
          title: "Well done!",
          description: "Try saying it yourself now.",
          duration: 3000,
        });
        
        return;
      }
      
      // If no text and we have a legacy audio URL, use it
      if (item.audioUrl) {
        await playAudio(item.audioUrl);
        return;
      }
      
      // If we don't have either, throw an error
      toast({
        title: "Audio Unavailable",
        description: "No audio available for this word.",
        variant: "destructive"
      });
      
    } catch (err) {
      toast({
        title: "Playback Error",
        description: "Could not play the audio. Please try again.",
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
      className="vocabulary-card"
      whileHover={{ scale: 1.05 }}
      onClick={toggleFlip}
    >
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <div className={`p-6 bg-white rounded-xl shadow-md flex flex-col items-center justify-center gap-3 h-full border-2 ${
            language === 'tamil' ? 'border-tamil/20' : 'border-malayalam/20'
          }`}>
            {item.imageUrl && (
              <div className="w-20 h-20 mb-2 overflow-hidden rounded-full flex items-center justify-center bg-muted/30">
                <img src={item.imageUrl} alt={item.meaning} className="object-cover w-full h-full" />
              </div>
            )}
            <div className={`text-2xl font-bold ${
              language === 'tamil' ? 'font-tamil text-tamil-dark' : 'font-malayalam text-malayalam-dark'
            }`}>
              {item.word}
            </div>
            <div className="text-sm text-muted-foreground">{item.transliteration}</div>
            <Button 
              size="icon" 
              variant="ghost" 
              className={`mt-2 ${isPlaying ? 'animate-pulse' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                handlePlayAudio(item.word);
              }}
              disabled={isPlaying}
            >
              <Volume2 className={isPlaying ? 'text-primary' : ''} />
              <span className="sr-only">Play pronunciation</span>
            </Button>
          </div>
        </div>
        
        <div className="card-back">
          <div className={`p-6 bg-white rounded-xl shadow-md flex flex-col items-center justify-center gap-3 h-full border-2 ${
            language === 'tamil' ? 'border-tamil/20' : 'border-malayalam/20'
          }`}>
            <div className="text-xl font-bold text-center">{item.meaning}</div>
            <div className="text-muted-foreground text-center">{item.transliteration}</div>
            <Button 
              size="icon" 
              variant="ghost"
              className={`mt-2 ${isPlaying ? 'animate-pulse' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                handlePlayAudio(item.word);
              }}
              disabled={isPlaying}
            >
              <Volume2 className={isPlaying ? 'text-primary' : ''} />
              <span className="sr-only">Play pronunciation</span>
            </Button>
          </div>
        </div>
      </div>
      
      <style>
        {`
        .vocabulary-card {
          perspective: 1000px;
          width: 100%;
          height: 230px;
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

export default VocabularyCard;
