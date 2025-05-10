import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Mic, Play, Volume2 } from 'lucide-react';
import Footer from '@/components/Footer';
import LanguageTabs from '@/components/LanguageTabs';
import { LanguageOption } from '@/lib/data';
import axios from 'axios';
import { API_ENDPOINTS } from '@/config/api';

interface Phrase {
  phrase: string;
  transliteration: string;
  meaning: string;
}

const PhrasesPage = () => {
  const [language, setLanguage] = useState<LanguageOption>('tamil');
  const [category, setCategory] = useState<
    | 'greetings'
    | 'basics'
    | 'travel'
    | 'commonGreetings'
    | 'informalGreetings'
    | 'festivalGreetings'
    | 'meetingAfterLongTime'
    | 'departureGreetings'
    | 'respectfulGreetings'
    | 'basicConversations'
    | 'casualConversations'
    | 'askingForHelp'
    | 'basicRequests'
    | 'endingConversation'
  >('greetings');
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [recordingPhrase, setRecordingPhrase] = useState<number | null>(null);

  useEffect(() => {
    const fetchPhrases = async () => {
      try {
        const response = await axios.get<Phrase[]>(API_ENDPOINTS.phrases, {
          params: { language, category },
        });
        setPhrases(response.data);
      } catch (error) {
        console.error('Error fetching phrases:', error);
      }
    };

    fetchPhrases();
  }, [language, category]);

  const handleLanguageChange = (value: LanguageOption) => {
    setLanguage(value);
  };

  const playAudio = (index: number) => {
    console.log(`Playing audio for phrase ${index} in ${language}`);
    // In a real app, this would play the audio file
  };

  const startRecording = (index: number) => {
    setRecordingPhrase(index);
    console.log(`Started recording for phrase ${index}`);
    // Simulate recording for 3 seconds
    setTimeout(() => {
      stopRecording();
    }, 3000);
  };

  const stopRecording = () => {
    console.log(`Stopped recording for phrase ${recordingPhrase}`);
    setRecordingPhrase(null);
    // In a real app, this would save the recording and analyze pronunciation
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Basic Phrases</h1>
            <p className="text-muted-foreground mb-8">
              Learn essential phrases in {language === 'tamil' ? 'Tamil' : 'Malayalam'} for everyday situations.
              Listen to the pronunciation and practice speaking.
            </p>
          </motion.div>

          <LanguageTabs onTabChange={handleLanguageChange}>
            <TabsContent value="tamil" className="space-y-8">
              <div className="flex flex-wrap gap-4 mb-6">
                <Button variant={category === 'greetings' ? 'tamil' : 'outline'} onClick={() => setCategory('greetings')}>
                  Greetings
                </Button>
                <Button variant={category === 'basics' ? 'tamil' : 'outline'} onClick={() => setCategory('basics')}>
                  Basic Expressions
                </Button>
                <Button variant={category === 'travel' ? 'tamil' : 'outline'} onClick={() => setCategory('travel')}>
                  Travel Phrases
                </Button>
                <Button
                  variant={category === 'commonGreetings' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('commonGreetings')}
                >
                  Common Greetings
                </Button>
                <Button
                  variant={category === 'informalGreetings' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('informalGreetings')}
                >
                  Informal Greetings
                </Button>
                <Button
                  variant={category === 'festivalGreetings' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('festivalGreetings')}
                >
                  Festival Greetings
                </Button>
                <Button
                  variant={category === 'meetingAfterLongTime' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('meetingAfterLongTime')}
                >
                  Meeting After Long Time
                </Button>
                <Button
                  variant={category === 'departureGreetings' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('departureGreetings')}
                >
                  Departure Greetings
                </Button>
                <Button
                  variant={category === 'respectfulGreetings' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('respectfulGreetings')}
                >
                  Respectful Greetings
                </Button>
                <Button
                  variant={category === 'basicConversations' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('basicConversations')}
                >
                  Basic Conversations
                </Button>
                <Button
                  variant={category === 'casualConversations' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('casualConversations')}
                >
                  Casual Conversations
                </Button>
                <Button
                  variant={category === 'askingForHelp' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('askingForHelp')}
                >
                  Asking for Help
                </Button>
                <Button
                  variant={category === 'basicRequests' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('basicRequests')}
                >
                  Basic Requests
                </Button>
                <Button
                  variant={category === 'endingConversation' ? 'tamil' : 'outline'}
                  onClick={() => setCategory('endingConversation')}
                >
                  Ending Conversation
                </Button>
              </div>

              <div className="space-y-4">
                {phrases.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center gap-4 border-2 border-tamil/10 hover:border-tamil/30 transition-colors"
                  >
                    <div className="flex-grow">
                      <div className="font-tamil text-xl text-tamil-dark">{item.phrase}</div>
                      <div className="text-sm text-muted-foreground mt-1">{item.transliteration}</div>
                      <div className="text-base mt-2">{item.meaning}</div>
                    </div>
                    <div className="flex gap-3 mt-4 sm:mt-0">
                      <Button variant="outline" size="icon" onClick={() => playAudio(index)}>
                        <Volume2 className="h-4 w-4" />
                        <span className="sr-only">Listen</span>
                      </Button>
                      <Button
                        variant={recordingPhrase === index ? 'destructive' : 'outline'}
                        size="icon"
                        onClick={() => (recordingPhrase === index ? stopRecording() : startRecording(index))}
                      >
                        <Mic className={`h-4 w-4 ${recordingPhrase === index ? 'animate-pulse' : ''}`} />
                        <span className="sr-only">Record</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="malayalam" className="space-y-8">
              <div className="flex flex-wrap gap-4 mb-6">
                <Button
                  variant={category === 'greetings' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('greetings')}
                >
                  Greetings
                </Button>
                <Button variant={category === 'basics' ? 'malayalam' : 'outline'} onClick={() => setCategory('basics')}>
                  Basic Expressions
                </Button>
                <Button variant={category === 'travel' ? 'malayalam' : 'outline'} onClick={() => setCategory('travel')}>
                  Travel Phrases
                </Button>
                <Button
                  variant={category === 'commonGreetings' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('commonGreetings')}
                >
                  Common Greetings
                </Button>
                <Button
                  variant={category === 'informalGreetings' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('informalGreetings')}
                >
                  Informal Greetings
                </Button>
                <Button
                  variant={category === 'festivalGreetings' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('festivalGreetings')}
                >
                  Festival Greetings
                </Button>
                <Button
                  variant={category === 'meetingAfterLongTime' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('meetingAfterLongTime')}
                >
                  Meeting After Long Time
                </Button>
                <Button
                  variant={category === 'departureGreetings' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('departureGreetings')}
                >
                  Departure Greetings
                </Button>
                <Button
                  variant={category === 'respectfulGreetings' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('respectfulGreetings')}
                >
                  Respectful Greetings
                </Button>
                <Button
                  variant={category === 'basicConversations' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('basicConversations')}
                >
                  Basic Conversations
                </Button>
                <Button
                  variant={category === 'casualConversations' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('casualConversations')}
                >
                  Casual Conversations
                </Button>
                <Button
                  variant={category === 'askingForHelp' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('askingForHelp')}
                >
                  Asking for Help
                </Button>
                <Button
                  variant={category === 'basicRequests' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('basicRequests')}
                >
                  Basic Requests
                </Button>
                <Button
                  variant={category === 'endingConversation' ? 'malayalam' : 'outline'}
                  onClick={() => setCategory('endingConversation')}
                >
                  Ending Conversation
                </Button>
              </div>

              <div className="space-y-4">
                {phrases.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center gap-4 border-2 border-malayalam/10 hover:border-malayalam/30 transition-colors"
                  >
                    <div className="flex-grow">
                      <div className="font-malayalam text-xl text-malayalam-dark">{item.phrase}</div>
                      <div className="text-sm text-muted-foreground mt-1">{item.transliteration}</div>
                      <div className="text-base mt-2">{item.meaning}</div>
                    </div>
                    <div className="flex gap-3 mt-4 sm:mt-0">
                      <Button variant="outline" size="icon" onClick={() => playAudio(index)}>
                        <Volume2 className="h-4 w-4" />
                        <span className="sr-only">Listen</span>
                      </Button>
                      <Button
                        variant={recordingPhrase === index ? 'destructive' : 'outline'}
                        size="icon"
                        onClick={() => (recordingPhrase === index ? stopRecording() : startRecording(index))}
                      >
                        <Mic className={`h-4 w-4 ${recordingPhrase === index ? 'animate-pulse' : ''}`} />
                        <span className="sr-only">Record</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </LanguageTabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PhrasesPage;
