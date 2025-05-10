import { useState } from 'react';
import { motion } from 'framer-motion';
import { TabsContent } from '@/components/ui/tabs';
import Footer from '@/components/Footer';
import LanguageTabs from '@/components/LanguageTabs';
import { LanguageOption } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Volume2 } from 'lucide-react';
import { generateAudio, playAudio } from '@/utils/audioUtils';
import { toast } from '@/components/ui/use-toast';

const NumbersPage = () => {
  const [language, setLanguage] = useState<LanguageOption>('tamil');
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  
  // Placeholder data for Tamil numbers 1-10
  const tamilNumbers = [
    { number: 1, word: 'ஒன்று', transliteration: 'onṟu' },
    { number: 2, word: 'இரண்டு', transliteration: 'iraṇṭu' },
    { number: 3, word: 'மூன்று', transliteration: 'mūnṟu' },
    { number: 4, word: 'நான்கு', transliteration: 'nānku' },
    { number: 5, word: 'ஐந்து', transliteration: 'aintu' },
    { number: 6, word: 'ஆறு', transliteration: 'āṟu' },
    { number: 7, word: 'ஏழு', transliteration: 'ēḻu' },
    { number: 8, word: 'எட்டு', transliteration: 'eṭṭu' },
    { number: 9, word: 'ஒன்பது', transliteration: 'onpatu' },
    { number: 10, word: 'பத்து', transliteration: 'pattu' },
  ];
  
  // Placeholder data for Malayalam numbers 1-10
  const malayalamNumbers = [
    { number: 1, word: 'ഒന്ന്', transliteration: 'onnŭ' },
    { number: 2, word: 'രണ്ട്', transliteration: 'raṇḍŭ' },
    { number: 3, word: 'മൂന്ന്', transliteration: 'mūnnŭ' },
    { number: 4, word: 'നാല്', transliteration: 'nālŭ' },
    { number: 5, word: 'അഞ്ച്', transliteration: 'añcŭ' },
    { number: 6, word: 'ആറ്', transliteration: 'āṟŭ' },
    { number: 7, word: 'ഏഴ്', transliteration: 'ēḻŭ' },
    { number: 8, word: 'എട്ട്', transliteration: 'eṭṭŭ' },
    { number: 9, word: 'ഒൻപത്', transliteration: 'onpatŭ' },
    { number: 10, word: 'പത്ത്', transliteration: 'pattŭ' },
  ];
  
  const handleLanguageChange = (value: LanguageOption) => {
    setLanguage(value);
  };
  
  const getNumberData = () => {
    return language === 'tamil' ? tamilNumbers : malayalamNumbers;
  };
  
  const playAudioForNumber = async (number: number, word: string) => {
    if (playingIndex !== null) return; // Already playing something
    
    setPlayingIndex(number);
    try {
      toast({
        title: "Generating Audio",
        description: `Creating ${language} audio for you...`,
        duration: 2000,
      });
      
      const audioUrl = await generateAudio(word, language);
      
      toast({
        title: "Audio Ready",
        description: `Playing ${language} pronunciation for ${number}`,
        duration: 2000,
      });
      
      await playAudio(audioUrl);
    } catch (error) {
      console.error('Error playing audio:', error);
      toast({
        title: "Playback Error",
        description: "Could not play the audio. Please try again.",
        variant: "destructive"
      });
    } finally {
      setPlayingIndex(null);
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Numbers</h1>
            <p className="text-muted-foreground mb-8">
              Learn to count in {language === 'tamil' ? 'Tamil' : 'Malayalam'} from 1 to 100.
              Click on the sound icon to hear the pronunciation!
            </p>
          </motion.div>
          
          <LanguageTabs onTabChange={handleLanguageChange}>
            <TabsContent value="tamil" className="space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {tamilNumbers.map((item) => (
                  <div 
                    key={item.number}
                    className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center justify-center border-2 border-tamil/20 hover:border-tamil transition-colors"
                  >
                    <div className="text-3xl font-bold text-tamil-dark">{item.number}</div>
                    <div className="text-2xl font-tamil mt-2">{item.word}</div>
                    <div className="text-sm text-muted-foreground mt-1">{item.transliteration}</div>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className={`mt-2 ${playingIndex === item.number ? 'animate-pulse' : ''}`}
                      onClick={() => playAudioForNumber(item.number, item.word)}
                      disabled={playingIndex !== null}
                    >
                      <Volume2 className={playingIndex === item.number ? 'text-primary' : ''} />
                      <span className="sr-only">Play pronunciation</span>
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-muted/30 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Number Groups in Tamil</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Units (1-10)</h4>
                    <p>ஒன்று (1), இரண்டு (2), ... பத்து (10)</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Tens (10-100)</h4>
                    <p>பத்து (10), இருபது (20), ... நூறு (100)</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="malayalam" className="space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {malayalamNumbers.map((item) => (
                  <div 
                    key={item.number}
                    className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center justify-center border-2 border-malayalam/20 hover:border-malayalam transition-colors"
                  >
                    <div className="text-3xl font-bold text-malayalam-dark">{item.number}</div>
                    <div className="text-2xl font-malayalam mt-2">{item.word}</div>
                    <div className="text-sm text-muted-foreground mt-1">{item.transliteration}</div>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className={`mt-2 ${playingIndex === item.number ? 'animate-pulse' : ''}`}
                      onClick={() => playAudioForNumber(item.number, item.word)}
                      disabled={playingIndex !== null}
                    >
                      <Volume2 className={playingIndex === item.number ? 'text-primary' : ''} />
                      <span className="sr-only">Play pronunciation</span>
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-muted/30 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Number Groups in Malayalam</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Units (1-10)</h4>
                    <p>ഒന്ന് (1), രണ്ട് (2), ... പത്ത് (10)</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Tens (10-100)</h4>
                    <p>പത്ത് (10), ഇരുപത് (20), ... നൂറ് (100)</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </LanguageTabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NumbersPage;
