import { useState } from 'react';
import { motion } from 'framer-motion';
import { TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import AlphabetCard from '@/components/AlphabetCard';
import LanguageTabs from '@/components/LanguageTabs';
import { LanguageOption, tamilVowels, tamilConsonants, malayalamVowels, malayalamConsonants } from '@/lib/data';

const AlphabetsPage = () => {
  const [language, setLanguage] = useState<LanguageOption>('tamil');
  const [section, setSection] = useState<'vowels' | 'consonants'>('vowels');
  
  const handleLanguageChange = (value: LanguageOption) => {
    setLanguage(value);
  };
  
  const getAlphabetData = () => {
    if (language === 'tamil') {
      return section === 'vowels' ? tamilVowels : tamilConsonants;
    } else {
      return section === 'vowels' ? malayalamVowels : malayalamConsonants;
    }
  };
  
  const getSectionTitle = () => {
    if (language === 'tamil') {
      return section === 'vowels' ? 'Uyir Ezhuthu (Vowels)' : 'Mei Ezhuthu (Consonants)';
    } else {
      return section === 'vowels' ? 'Swaraksharam (Vowels)' : 'Vyanjanakaaram (Consonants)';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Alphabets</h1>
            <p className="text-muted-foreground mb-8">
              Learn the building blocks of {language === 'tamil' ? 'Tamil' : 'Malayalam'} language. 
              Click on a letter to see an example word.
            </p>
          </motion.div>
          
          <LanguageTabs onTabChange={handleLanguageChange}>
            <TabsContent value="tamil" className="space-y-8">
              <div className="flex flex-wrap gap-4 mb-6">
                <Button
                  variant={section === 'vowels' ? 'tamil' : 'outline'}
                  onClick={() => setSection('vowels')}
                >
                  Uyir Ezhuthu (Vowels)
                </Button>
                <Button
                  variant={section === 'consonants' ? 'tamil' : 'outline'}
                  onClick={() => setSection('consonants')}
                >
                  Mei Ezhuthu (Consonants)
                </Button>
              </div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              >
                {section === 'vowels' ? 
                  tamilVowels.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <AlphabetCard item={item} language="tamil" />
                    </motion.div>
                  )) : 
                  tamilConsonants.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <AlphabetCard item={item} language="tamil" />
                    </motion.div>
                  ))
                }
              </motion.div>
            </TabsContent>
            
            <TabsContent value="malayalam" className="space-y-8">
              <div className="flex flex-wrap gap-4 mb-6">
                <Button
                  variant={section === 'vowels' ? 'malayalam' : 'outline'}
                  onClick={() => setSection('vowels')}
                >
                  Swaraksharam (Vowels)
                </Button>
                <Button
                  variant={section === 'consonants' ? 'malayalam' : 'outline'}
                  onClick={() => setSection('consonants')}
                >
                  Vyanjanakaaram (Consonants)
                </Button>
              </div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              >
                {section === 'vowels' ? 
                  malayalamVowels.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <AlphabetCard item={item} language="malayalam" />
                    </motion.div>
                  )) : 
                  malayalamConsonants.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <AlphabetCard item={item} language="malayalam" />
                    </motion.div>
                  ))
                }
              </motion.div>
            </TabsContent>
          </LanguageTabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AlphabetsPage;
