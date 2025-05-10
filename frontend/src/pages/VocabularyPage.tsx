import { useState } from 'react';
import { motion } from 'framer-motion';
import { TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import VocabularyCard from '@/components/VocabularyCard';
import LanguageTabs from '@/components/LanguageTabs';
import {
  LanguageOption, tamilFruits, malayalamFruits, tamilVegetables, malayalamVegetables, tamilAnimals, malayalamAnimals, tamilColors, malayalamColors,
  tamilCountries, malayalamCountries, tamilFamily, malayalamFamily, tamilBodyParts, malayalamBodyParts,
  tamilWeather, malayalamWeather, tamilTransportation, malayalamTransportation, tamilFood, malayalamFood,
  tamilOccupations, malayalamOccupations, tamilDailyActivities, malayalamDailyActivities, VocabularyItem
} from '@/lib/data';

type VocabularyCategory =
  | 'fruits'
  | 'vegetables'
  | 'animals'
  | 'colors'
  | 'body'
  | 'countries'
  | 'family'
  | 'weather'
  | 'transportation'
  | 'food'
  | 'occupations'
  | 'dailyActivities';

const VocabularyPage = () => {
  const [language, setLanguage] = useState<LanguageOption>('tamil');
  const [category, setCategory] = useState<VocabularyCategory>('fruits');

  const handleLanguageChange = (value: LanguageOption) => {
    setLanguage(value);
  };

  const getVocabularyData = (): VocabularyItem[] => {
    if (language === 'tamil') {
      switch (category) {
        case 'fruits':
          return tamilFruits;
        case 'vegetables':
          return tamilVegetables;
        case 'animals':
          return tamilAnimals;
        case 'colors':
          return tamilColors;
        case 'countries':
          return tamilCountries;
        case 'family':
          return tamilFamily;
        case 'body':
          return tamilBodyParts;
        case 'weather':
          return tamilWeather;
        case 'transportation':
          return tamilTransportation;
        case 'food':
          return tamilFood;
        case 'occupations':
          return tamilOccupations;
        case 'dailyActivities':
          return tamilDailyActivities;
        // For now, return fruits for all categories since we only have fruit data
        default:
          return tamilFruits;
      }
    } else {
      switch (category) {
        case 'fruits':
          return malayalamFruits;
        case 'vegetables':
          return malayalamVegetables;
        case 'animals':
          return malayalamAnimals;
        case 'colors':
          return malayalamColors;
        case 'countries':
          return malayalamCountries;
        case 'family':
          return malayalamFamily;
        case 'body':
          return malayalamBodyParts;
        case 'weather':
          return malayalamWeather;
        case 'transportation':
          return malayalamTransportation;
        case 'food':
          return malayalamFood;
        case 'occupations':
          return malayalamOccupations;
        case 'dailyActivities':
          return malayalamDailyActivities;
        // For now, return fruits for all categories since we only have fruit data
        default:
          return malayalamFruits;
      }
    }
  };

  const getCategoryTitle = () => {
    switch (category) {
      case 'fruits':
        return language === 'tamil' ? 'பழங்கள் (Fruits)' : 'പഴങ്ങൾ (Fruits)';
      case 'vegetables':
        return language === 'tamil' ? 'காய்கறிகள் (Vegetables)' : 'പച്ചക്കറികൾ (Vegetables)';
      case 'animals':
        return language === 'tamil' ? 'விலங்குகள் (Animals)' : 'മൃഗങ്ങൾ (Animals)';
      case 'colors':
        return language === 'tamil' ? 'நிறங்கள் (Colors)' : 'നിറങ്ങൾ (Colors)';
      case 'body':
        return language === 'tamil' ? 'உடல் பாகங்கள் (Body Parts)' : 'ശരീര ഭാഗങ്ങൾ (Body Parts)';
      case 'countries':
        return language === 'tamil' ? 'நாடுகள் (Countries)' : 'രാജ്യങ്ങൾ (Countries)';
      case 'family':
        return language === 'tamil' ? 'குடும்ப உறுப்பினர்கள் (Family Members)' : 'കുടുംബാംഗങ്ങൾ (Family Members)';
      case 'weather':
        return language === 'tamil' ? 'காலநிலை (Weather)' : 'കാലാവസ്ഥ (Weather)';
      case 'transportation':
        return language === 'tamil' ? 'போக்குவரத்து (Transportation)' : 'ഗതാഗതം (Transportation)';
      case 'food':
        return language === 'tamil' ? 'உணவுப் பொருட்கள் (Food Items)' : 'ഭക്ഷണ വസ്തുക്കൾ (Food Items)';
      case 'occupations':
        return language === 'tamil' ? 'வேலைகள் (Occupations)' : 'തൊഴിലുകൾ (Occupations)';
      case 'dailyActivities':
        return language === 'tamil' ? 'தினசரி செயல்கள் (Daily Activities)' : 'ദിവസേനുള്ള പ്രവർത്തനങ്ങൾ (Daily Activities)';
      default:
        return 'Vocabulary';
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Vocabulary</h1>
            <p className="text-muted-foreground mb-8">
              Learn essential {language === 'tamil' ? 'Tamil' : 'Malayalam'} vocabulary.
              Click on a card to see its meaning.
            </p>
          </motion.div>

          <LanguageTabs onTabChange={handleLanguageChange}>
            <TabsContent value="tamil" className="space-y-8">
              <div className="flex flex-wrap gap-4 mb-6">
                <Button
                  variant={category === 'fruits' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('fruits')}
                >
                  பழங்கள் (Fruits)
                </Button>
                <Button
                  variant={category === 'vegetables' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('vegetables')}
                >
                  காய்கறிகள் (Vegetables)
                </Button>
                <Button
                  variant={category === 'animals' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('animals')}
                >
                  விலங்குகள் (Animals)
                </Button>
                <Button
                  variant={category === 'colors' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('colors')}
                >
                  நிறங்கள் (Colors)
                </Button>
                <Button
                  variant={category === 'body' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('body')}
                >
                  உடல் பாகங்கள் (Body Parts)
                </Button>
                <Button
                  variant={category === 'countries' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('countries')}
                >
                  நாடுகள் (Countries)
                </Button>
                <Button
                  variant={category === 'family' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('family')}
                >
                  குடும்ப உறுப்பினர்கள் (Family Members)
                </Button>
                <Button
                  variant={category === 'weather' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('weather')}
                >
                  காலநிலை (Weather)
                </Button>
                <Button
                  variant={category === 'transportation' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('transportation')}
                >
                  போக்குவரத்து (Transportation)
                </Button>
                <Button
                  variant={category === 'food' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('food')}
                >
                  உணவுப் பொருட்கள் (Food Items)
                </Button>
                <Button
                  variant={category === 'occupations' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('occupations')}
                >
                  வேலைகள் (Occupations)
                </Button>
                <Button
                  variant={category === 'dailyActivities' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('dailyActivities')}
                >
                  தினசரி செயல்கள் (Daily Activities)
                </Button>
              </div>

              <h2 className="text-2xl font-semibold mb-4">{getCategoryTitle()}</h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              >
                {getVocabularyData().map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <VocabularyCard item={item} language="tamil" />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="malayalam" className="space-y-8">
              <div className="flex flex-wrap gap-4 mb-6">
                <Button
                  variant={category === 'fruits' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('fruits')}
                >
                  പഴങ്ങൾ (Fruits)
                </Button>
                <Button
                  variant={category === 'vegetables' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('vegetables')}
                >
                  പച്ചക്കറികൾ (Vegetables)
                </Button>
                <Button
                  variant={category === 'animals' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('animals')}
                >
                  മൃഗങ്ങൾ (Animals)
                </Button>
                <Button
                  variant={category === 'colors' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('colors')}
                >
                  നിറങ്ങൾ (Colors)
                </Button>
                <Button
                  variant={category === 'body' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('body')}
                >
                  ശരീര ഭാഗങ്ങൾ (Body Parts)
                </Button>
                <Button
                  variant={category === 'countries' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('countries')}
                >
                  രാജ്യങ്ങൾ (Countries)
                </Button>
                <Button
                  variant={category === 'family' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('family')}
                >
                  കുടുംബാംഗങ്ങൾ (Family Members)
                </Button>
                <Button
                  variant={category === 'weather' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('weather')}
                >
                  കാലാവസ്ഥ (Weather)
                </Button>
                <Button
                  variant={category === 'transportation' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('transportation')}
                >
                  ഗതാഗതം (Transportation)
                </Button>
                <Button
                  variant={category === 'food' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('food')}
                >
                  ഭക്ഷണ വസ്തുക്കൾ (Food Items)
                </Button>
                <Button
                  variant={category === 'occupations' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('occupations')}
                >
                  തൊഴിലുകൾ (Occupations)
                </Button>
                <Button
                  variant={category === 'dailyActivities' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('dailyActivities')}
                >
                  ദിവസേനുള്ള പ്രവർത്തനങ്ങൾ (Daily Activities)
                </Button>
              </div>

              <h2 className="text-2xl font-semibold mb-4">{getCategoryTitle()}</h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              >
                {getVocabularyData().map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <VocabularyCard item={item} language="malayalam" />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </LanguageTabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VocabularyPage;
