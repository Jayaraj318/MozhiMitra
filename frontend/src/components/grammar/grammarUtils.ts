import { LanguageOption } from '@/lib/data';
import { playAudio, generateAudio } from '@/utils/audioUtils';
import { toast } from '@/components/ui/use-toast';

export type GrammarCategory =
  | 'sentenceStructure'
  | 'nouns'
  | 'pronouns'
  | 'verbs'
  | 'adjectives'
  | 'adverbs'
  | 'interjections'
  | 'numbers';

export const getCategoryTitle = (language: LanguageOption, category: GrammarCategory): string => {
  const categories = {
    tamil: {
      sentenceStructure: 'வாக்கிய அமைப்பு (Sentence Structure)',
      nouns: 'பெயர்ச்சொல் (Nouns)',
      pronouns: 'பிரதிபெயர் (Pronouns)',
      verbs: 'வினைச்சொல் (Verbs)',
      adjectives: 'உரிச்சொல் (Adjectives)',
      adverbs: 'வினை உரிச்சொல் (Adverbs)',
      interjections: 'இடைச்சொல் (Interjections)',
      numbers: 'எண்கள் (Numbers)'
    },
    malayalam: {
      sentenceStructure: 'വാക്യ ഘടന (Sentence Structure)',
      nouns: 'നാമം (Nouns)',
      pronouns: 'സർവനാമം (Pronouns)',
      verbs: 'ക്രിയ (Verbs)',
      adjectives: 'വിശേഷണം (Adjectives)',
      adverbs: 'ക്രിയാവിശേഷണം (Adverbs)',
      interjections: 'വ്യാക്ഷേപകം (Interjections)',
      numbers: 'സംഖ്യകൾ (Numbers)'
    }
  };

  return categories[language][category] || category;
};

export const handlePlayAudio = async (audioUrl?: string, label: string = 'pronunciation', language: LanguageOption = 'tamil', text?: string) => {
  // Use our API key
  const apiKey = 'Uzi84l9Ggw2h7_XqjX9MHOM3HnPZSko2STYTkAp4eRk6';

  try {
    // If we have text, generate audio for it
    if (text) {
      toast({
        title: "Generating Audio",
        description: `Creating ${language} audio for you...`,
        duration: 2000,
      });

      const generatedAudioUrl = await generateAudio(text, language, apiKey);

      toast({
        title: "Audio Ready",
        description: `Playing ${language} pronunciation`,
        duration: 2000,
      });

      return playAudio(generatedAudioUrl);
    }

    // Otherwise fall back to the provided URL (legacy support)
    if (!audioUrl) {
      toast({
        title: "Audio Unavailable",
        description: `No audio available for this ${label}.`,
        variant: "destructive"
      });
      return Promise.reject(new Error('No audio URL or text provided'));
    }

    return playAudio(audioUrl);
  } catch (err) {
    toast({
      title: "Playback Error",
      description: "Could not generate or play the audio. Please try again.",
      variant: "destructive"
    });
    return Promise.reject(err);
  }
};
