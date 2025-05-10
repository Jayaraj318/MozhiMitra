
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Volume2, Search, Filter, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { tamilFruits, malayalamFruits, VocabularyItem } from '@/lib/data';

const Vocabulary = () => {
  const [language, setLanguage] = useState<'tamil' | 'malayalam'>('tamil');
  const [category, setCategory] = useState<'fruits' | 'vegetables' | 'animals'>('fruits');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMeaning, setShowMeaning] = useState(true);
  const [showTransliteration, setShowTransliteration] = useState(true);
  
  // Get vocabulary data based on selections
  const getVocabularyData = (): VocabularyItem[] => {
    if (language === 'tamil') {
      if (category === 'fruits') return tamilFruits;
      // In a real app, we would have separate data for these categories
      return tamilFruits; // Placeholder
    } else {
      if (category === 'fruits') return malayalamFruits;
      // In a real app, we would have separate data for these categories
      return malayalamFruits; // Placeholder
    }
  };
  
  const vocabularyData = getVocabularyData();
  
  // Filter vocabulary data based on search query
  const filteredVocabularyData = vocabularyData.filter(item => 
    item.word.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.transliteration.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Mock audio playback function
  const playAudio = (word: string) => {
    console.log(`Playing audio for ${word}`);
    // In a real app, this would play the actual audio file
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Vocabulary</h1>
            <p className="text-muted-foreground text-lg">
              Learn essential words in Tamil and Malayalam
            </p>
          </div>
          
          {/* Control panel */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Language Selector */}
            <div className="flex space-x-2">
              <Button 
                variant={language === 'tamil' ? 'default' : 'outline'} 
                onClick={() => setLanguage('tamil')}
                className={language === 'tamil' ? 'bg-tamil hover:bg-tamil-dark' : ''}
              >
                Tamil
              </Button>
              <Button 
                variant={language === 'malayalam' ? 'default' : 'outline'} 
                onClick={() => setLanguage('malayalam')}
                className={language === 'malayalam' ? 'bg-malayalam hover:bg-malayalam-dark' : ''}
              >
                Malayalam
              </Button>
            </div>
            
            {/* Category Selector */}
            <div className="flex space-x-2">
              <Button 
                variant={category === 'fruits' ? 'default' : 'outline'} 
                onClick={() => setCategory('fruits')}
                size="sm"
              >
                Fruits
              </Button>
              <Button 
                variant={category === 'vegetables' ? 'default' : 'outline'} 
                onClick={() => setCategory('vegetables')}
                size="sm"
              >
                Vegetables
              </Button>
              <Button 
                variant={category === 'animals' ? 'default' : 'outline'} 
                onClick={() => setCategory('animals')}
                size="sm"
              >
                Animals
              </Button>
            </div>
            
            {/* Search and Filter */}
            <div className="flex-grow mt-4 md:mt-0 md:ml-4 flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search vocabulary..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Display Options
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuCheckboxItem
                    checked={showMeaning}
                    onCheckedChange={setShowMeaning}
                  >
                    Show Meaning
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showTransliteration}
                    onCheckedChange={setShowTransliteration}
                  >
                    Show Transliteration
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {/* Vocabulary List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredVocabularyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-panel p-6 flex flex-col"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-2xl font-medium ${
                    language === 'tamil' ? 'font-tamil' : 'font-malayalam'
                  }`}>
                    {item.word}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => playAudio(item.word)}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Volume2 className="h-5 w-5" />
                  </Button>
                </div>
                
                {showTransliteration && (
                  <div className="text-sm text-muted-foreground mb-2">
                    {item.transliteration}
                  </div>
                )}
                
                {showMeaning && (
                  <div className="text-base font-medium mt-1">
                    {item.meaning}
                  </div>
                )}
                
                {/* In a real app, we would display an image here */}
                <div className="mt-4 h-24 bg-muted/50 rounded-md flex items-center justify-center text-muted-foreground">
                  Image placeholder for {item.meaning}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Empty state */}
          {filteredVocabularyData.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-4">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">No vocabulary items found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setShowMeaning(true);
                  setShowTransliteration(true);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
          
          {/* Learning tips */}
          <div className="max-w-3xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Vocabulary Learning Tips</h2>
            <div className="glass-panel p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Use new words in sentences to reinforce your memory</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Practice regularly with flashcards or spaced repetition</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Label items around your home with their {language === 'tamil' ? 'Tamil' : 'Malayalam'} names</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Listen to the pronunciation and practice speaking aloud</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Try to learn words in context rather than isolated vocabulary</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Vocabulary;
