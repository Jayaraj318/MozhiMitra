
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { tamilVowels, tamilConsonants, malayalamVowels, malayalamConsonants, AlphabetItem } from '@/lib/data';

const Alphabets = () => {
  const [language, setLanguage] = useState<'tamil' | 'malayalam'>('tamil');
  const [alphabetType, setAlphabetType] = useState<'vowels' | 'consonants'>('vowels');
  
  const handleLanguageChange = (value: string) => {
    setLanguage(value as 'tamil' | 'malayalam');
  };
  
  const handleAlphabetTypeChange = (value: string) => {
    setAlphabetType(value as 'vowels' | 'consonants');
  };
  
  // Get the current alphabet data based on selections
  const getAlphabetData = (): AlphabetItem[] => {
    if (language === 'tamil') {
      return alphabetType === 'vowels' ? tamilVowels : tamilConsonants;
    } else {
      return alphabetType === 'vowels' ? malayalamVowels : malayalamConsonants;
    }
  };
  
  const currentAlphabetData = getAlphabetData();
  
  // Mock audio playback function
  const playAudio = (letter: string) => {
    console.log(`Playing audio for ${letter}`);
    // In a real app, this would play the actual audio file
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header with back button */}
          <div className="mb-8">
            <Button variant="ghost" className="group mb-4" asChild>
              <Link to="/">
                <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Learn Alphabets</h1>
            <p className="text-muted-foreground text-lg">
              Master the writing systems of Tamil and Malayalam
            </p>
          </div>
          
          {/* Language and alphabet type selector */}
          <div className="mb-10">
            <Tabs defaultValue="tamil" onValueChange={handleLanguageChange}>
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="tamil">Tamil</TabsTrigger>
                <TabsTrigger value="malayalam">Malayalam</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="mt-4">
              <Tabs defaultValue="vowels" onValueChange={handleAlphabetTypeChange}>
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="vowels">
                    {language === 'tamil' ? 'Uyir Ezhuthu (Vowels)' : 'Swaraksharam (Vowels)'}
                  </TabsTrigger>
                  <TabsTrigger value="consonants">
                    {language === 'tamil' ? 'Mei Ezhuthu (Consonants)' : 'Vyanjanakaaram (Consonants)'}
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          {/* Alphabet grid */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key={`${language}-${alphabetType}`} // Change key to force re-render on tab change
          >
            {currentAlphabetData.map((item, index) => (
              <motion.div
                key={index}
                className={`glass-panel p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow ${
                  language === 'tamil' ? 'hover:border-tamil/50' : 'hover:border-malayalam/50'
                }`}
                onClick={() => playAudio(item.letter)}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <span className={`text-4xl md:text-5xl mb-2 ${
                  language === 'tamil' ? 'font-tamil' : 'font-malayalam'
                }`}>
                  {item.letter}
                </span>
                <span className="text-sm text-muted-foreground">{item.transliteration}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="mt-2 text-muted-foreground hover:text-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio(item.letter);
                  }}
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Learning tips */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Learning Tips</h2>
            <div className="glass-panel p-6">
              <h3 className="text-lg font-medium mb-2">
                {language === 'tamil' 
                  ? 'Tips for Learning Tamil Alphabet' 
                  : 'Tips for Learning Malayalam Alphabet'}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Practice writing each letter several times to build muscle memory</li>
                <li>Listen to the pronunciation and repeat out loud</li>
                <li>Try to associate each letter with a word that starts with it</li>
                <li>Create flashcards to test your recognition</li>
                <li>Practice a few minutes every day rather than cramming</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Alphabets;
