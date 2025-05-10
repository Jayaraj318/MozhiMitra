export type LanguageOption = 'tamil' | 'malayalam';

// Type definitions
export interface AlphabetItem {
  letter: string;
  transliteration: string;
  audioUrl?: string;
  example?: {
    word: string;
    meaning: string;
    audioUrl?: string;
  };
}

export interface VocabularyItem {
  word: string;
  transliteration: string;
  meaning: string;
  audioUrl?: string;
  imageUrl?: string;
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  category: string;
  language: LanguageOption;
  route: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  totalItems: number;
  completed?: number;
  image?: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
}

// Grammar Item interface
export interface GrammarItem {
  title: string;
  explanation: string;
  examples: {
    original: string;
    transliteration: string;
    meaning: string;
    audioUrl?: string;
  }[];
}

// Categories data
export const categories: Category[] = [
  {
    id: 'alphabets',
    title: 'Alphabets',
    icon: 'AlignJustify'
  },
  {
    id: 'vocabulary',
    title: 'Vocabulary',
    icon: 'BookOpen'
  },
  {
    id: 'grammar',
    title: 'Grammar',
    icon: 'FileText'
  },
  {
    id: 'phrases',
    title: 'Phrases',
    icon: 'MessageSquare'
  },
  {
    id: 'numbers',
    title: 'Numbers',
    icon: 'Hash'
  }
];

// Learning modules data
export const learningModules: LearningModule[] = [
  {
    id: 'tamil-alphabets',
    title: 'Tamil Alphabets',
    description: 'Learn the Tamil script and pronunciation',
    category: 'alphabets',
    language: 'tamil',
    route: '/alphabets',
    level: 'beginner',
    totalItems: 247,
    completed: 30
  },
  {
    id: 'malayalam-alphabets',
    title: 'Malayalam Alphabets',
    description: 'Learn the Malayalam script and pronunciation',
    category: 'alphabets',
    language: 'malayalam',
    route: '/alphabets',
    level: 'beginner',
    totalItems: 53,
    completed: 15
  },
  {
    id: 'tamil-vocabulary-basics',
    title: 'Tamil Basic Vocabulary',
    description: 'Essential Tamil words for beginners',
    category: 'vocabulary',
    language: 'tamil',
    route: '/vocabulary',
    level: 'beginner',
    totalItems: 100,
    completed: 45
  },
  {
    id: 'malayalam-vocabulary-basics',
    title: 'Malayalam Basic Vocabulary',
    description: 'Essential Malayalam words for beginners',
    category: 'vocabulary',
    language: 'malayalam',
    route: '/vocabulary',
    level: 'beginner',
    totalItems: 100,
    completed: 20
  },
  {
    id: 'tamil-grammar-basics',
    title: 'Tamil Grammar Basics',
    description: 'Fundamental grammar rules of Tamil',
    category: 'grammar',
    language: 'tamil',
    route: '/grammar',
    level: 'beginner',
    totalItems: 25,
    completed: 8
  },
  {
    id: 'malayalam-grammar-basics',
    title: 'Malayalam Grammar Basics',
    description: 'Fundamental grammar rules of Malayalam',
    category: 'grammar',
    language: 'malayalam',
    route: '/grammar',
    level: 'beginner',
    totalItems: 25,
    completed: 5
  }
];

// Alphabet data

// Tamil Vowels (Uyir Ezhuthukkal)
export const tamilVowels: AlphabetItem[] = [
  {
    letter: 'அ',
    transliteration: 'a',
    audioUrl: '/audio/tamil/vowels/a.mp3',
    example: {
      word: 'அம்மா',
      meaning: 'Mother',
      audioUrl: '/audio/tamil/examples/amma.mp3'
    }
  },
  {
    letter: 'ஆ',
    transliteration: 'aa',
    audioUrl: '/audio/tamil/vowels/aa.mp3',
    example: {
      word: 'ஆடு',
      meaning: 'Goat',
      audioUrl: '/audio/tamil/examples/aadu.mp3'
    }
  },
  {
    letter: 'இ',
    transliteration: 'i',
    audioUrl: '/audio/tamil/vowels/i.mp3',
    example: {
      word: 'இலை',
      meaning: 'Leaf',
      audioUrl: '/audio/tamil/examples/ilai.mp3'
    }
  },
  {
    letter: 'ஈ',
    transliteration: 'ii',
    audioUrl: '/audio/tamil/vowels/ii.mp3',
    example: {
      word: 'ஈ',
      meaning: 'Fly',
      audioUrl: '/audio/tamil/examples/ii.mp3'
    }
  },
  {
    letter: 'உ',
    transliteration: 'u',
    audioUrl: '/audio/tamil/vowels/u.mp3',
    example: {
      word: 'உரல்',
      meaning: 'Mortar',
      audioUrl: '/audio/tamil/examples/ural.mp3'
    }
  },
  {
    letter: 'ஊ',
    transliteration: 'uu',
    audioUrl: '/audio/tamil/vowels/uu.mp3',
    example: {
      word: 'ஊர்',
      meaning: 'Village',
      audioUrl: '/audio/tamil/examples/oor.mp3'
    }
  },
  {
    letter: 'எ',
    transliteration: 'e',
    audioUrl: '/audio/tamil/vowels/e.mp3',
    example: {
      word: 'எலி',
      meaning: 'Mouse',
      audioUrl: '/audio/tamil/examples/eli.mp3'
    }
  },
  {
    letter: 'ஏ',
    transliteration: 'ee',
    audioUrl: '/audio/tamil/vowels/ee.mp3',
    example: {
      word: 'ஏணி',
      meaning: 'Ladder',
      audioUrl: '/audio/tamil/examples/eni.mp3'
    }
  },
  {
    letter: 'ஐ',
    transliteration: 'ai',
    audioUrl: '/audio/tamil/vowels/ai.mp3',
    example: {
      word: 'ஐயம்',
      meaning: 'Doubt',
      audioUrl: '/audio/tamil/examples/aiyam.mp3'
    }
  },
  {
    letter: 'ஒ',
    transliteration: 'o',
    audioUrl: '/audio/tamil/vowels/o.mp3',
    example: {
      word: 'ஒட்டகம்',
      meaning: 'Camel',
      audioUrl: '/audio/tamil/examples/ottagam.mp3'
    }
  },
  {
    letter: 'ஓ',
    transliteration: 'oo',
    audioUrl: '/audio/tamil/vowels/oo.mp3',
    example: {
      word: 'ஓடு',
      meaning: 'Run',
      audioUrl: '/audio/tamil/examples/odu.mp3'
    }
  },
  {
    letter: 'ஔ',
    transliteration: 'au',
    audioUrl: '/audio/tamil/vowels/au.mp3',
    example: {
      word: 'ஔவையார்',
      meaning: 'Avvaiyar (Poet)',
      audioUrl: '/audio/tamil/examples/auvaiyar.mp3'
    }
  }
];

// Tamil Consonants (Mei Ezhuthukkal)
export const tamilConsonants: AlphabetItem[] = [
  {
    letter: 'க',
    transliteration: 'ka',
    audioUrl: '/audio/tamil/consonants/ka.mp3',
    example: {
      word: 'கல்',
      meaning: 'Stone',
      audioUrl: '/audio/tamil/examples/kal.mp3'
    }
  },
  {
    letter: 'ங',
    transliteration: 'nga',
    audioUrl: '/audio/tamil/consonants/nga.mp3',
    example: {
      word: 'சங்கு',
      meaning: 'Conch',
      audioUrl: '/audio/tamil/examples/sangu.mp3'
    }
  },
  {
    letter: 'ச',
    transliteration: 'cha',
    audioUrl: '/audio/tamil/consonants/cha.mp3',
    example: {
      word: 'சங்கு',
      meaning: 'Conch',
      audioUrl: '/audio/tamil/examples/sangu.mp3'
    }
  },
  {
    letter: 'ஞ',
    transliteration: 'nya',
    audioUrl: '/audio/tamil/consonants/nya.mp3',
    example: {
      word: 'ஞாயிறு',
      meaning: 'Sunday',
      audioUrl: '/audio/tamil/examples/nyayiru.mp3'
    }
  },
  {
    letter: 'ட',
    transliteration: 'ṭa',
    audioUrl: '/audio/tamil/consonants/ta.mp3',
    example: {
      word: 'டமர்',
      meaning: 'Drum',
      audioUrl: '/audio/tamil/examples/tamar.mp3'
    }
  },
  {
    letter: 'ண',
    transliteration: 'ṇa',
    audioUrl: '/audio/tamil/consonants/na.mp3',
    example: {
      word: 'பண்ணை',
      meaning: 'Farm',
      audioUrl: '/audio/tamil/examples/pannai.mp3'
    }
  },
  {
    letter: 'த',
    transliteration: 'tha',
    audioUrl: '/audio/tamil/consonants/tha.mp3',
    example: {
      word: 'தலை',
      meaning: 'Head',
      audioUrl: '/audio/tamil/examples/thalai.mp3'
    }
  },
  {
    letter: 'ந',
    transliteration: 'na',
    audioUrl: '/audio/tamil/consonants/na.mp3',
    example: {
      word: 'நரி',
      meaning: 'Fox',
      audioUrl: '/audio/tamil/examples/nari.mp3'
    }
  },
  {
    letter: 'ப',
    transliteration: 'pa',
    audioUrl: '/audio/tamil/consonants/pa.mp3',
    example: {
      word: 'பல்',
      meaning: 'Tooth',
      audioUrl: '/audio/tamil/examples/pal.mp3'
    }
  },
  {
    letter: 'ம',
    transliteration: 'ma',
    audioUrl: '/audio/tamil/consonants/ma.mp3',
    example: {
      word: 'மரம்',
      meaning: 'Tree',
      audioUrl: '/audio/tamil/examples/maram.mp3'
    }
  },
  {
    letter: 'ய',
    transliteration: 'ya',
    audioUrl: '/audio/tamil/consonants/ya.mp3',
    example: {
      word: 'யானை',
      meaning: 'Elephant',
      audioUrl: '/audio/tamil/examples/yaanai.mp3'
    }
  },
  {
    letter: 'ர',
    transliteration: 'ra',
    audioUrl: '/audio/tamil/consonants/ra.mp3',
    example: {
      word: 'ரத்தம்',
      meaning: 'Blood',
      audioUrl: '/audio/tamil/examples/ratham.mp3'
    }
  },
  {
    letter: 'ல',
    transliteration: 'la',
    audioUrl: '/audio/tamil/consonants/la.mp3',
    example: {
      word: 'லட்டு',
      meaning: 'Laddu',
      audioUrl: '/audio/tamil/examples/lattu.mp3'
    }
  },
  {
    letter: 'வ',
    transliteration: 'va',
    audioUrl: '/audio/tamil/consonants/va.mp3',
    example: {
      word: 'வண்டு',
      meaning: 'Beetle',
      audioUrl: '/audio/tamil/examples/vandu.mp3'
    }
  },
  {
    letter: 'ழ',
    transliteration: 'zha',
    audioUrl: '/audio/tamil/consonants/zha.mp3',
    example: {
      word: 'தமிழ்',
      meaning: 'Tamil',
      audioUrl: '/audio/tamil/examples/tamizh.mp3'
    }
  },
  {
    letter: 'ள',
    transliteration: 'ḷa',
    audioUrl: '/audio/tamil/consonants/la2.mp3',
    example: {
      word: 'வளர்',
      meaning: 'Grow',
      audioUrl: '/audio/tamil/examples/valar.mp3'
    }
  },
  {
    letter: 'ற',
    transliteration: 'ṟa',
    audioUrl: '/audio/tamil/consonants/ra2.mp3',
    example: {
      word: 'பறவை',
      meaning: 'Bird',
      audioUrl: '/audio/tamil/examples/paravai.mp3'
    }
  },
  {
    letter: 'ன',
    transliteration: 'ṉa',
    audioUrl: '/audio/tamil/consonants/na2.mp3',
    example: {
      word: 'அன்னம்',
      meaning: 'Swan',
      audioUrl: '/audio/tamil/examples/annam.mp3'
    }
  }
];

// Malayalam Vowels (Svarangal)
export const malayalamVowels: AlphabetItem[] = [
  {
    letter: 'അ',
    transliteration: 'a',
    audioUrl: '/audio/malayalam/vowels/a.mp3',
    example: {
      word: 'അച്ഛൻ',
      meaning: 'Father',
      audioUrl: '/audio/malayalam/examples/achan.mp3'
    }
  },
  {
    letter: 'ആ',
    transliteration: 'aa',
    audioUrl: '/audio/malayalam/vowels/aa.mp3',
    example: {
      word: 'ആന',
      meaning: 'Elephant',
      audioUrl: '/audio/malayalam/examples/aana.mp3'
    }
  },
  {
    letter: 'ഇ',
    transliteration: 'i',
    audioUrl: '/audio/malayalam/vowels/i.mp3',
    example: {
      word: 'ഇല',
      meaning: 'Leaf',
      audioUrl: '/audio/malayalam/examples/ila.mp3'
    }
  },
  {
    letter: 'ഈ',
    transliteration: 'ii',
    audioUrl: '/audio/malayalam/vowels/ii.mp3',
    example: {
      word: 'ഈച്ച',
      meaning: 'Fly',
      audioUrl: '/audio/malayalam/examples/iicha.mp3'
    }
  },
  {
    letter: 'ഉ',
    transliteration: 'u',
    audioUrl: '/audio/malayalam/vowels/u.mp3',
    example: {
      word: 'ഉരുള',
      meaning: 'Roll',
      audioUrl: '/audio/malayalam/examples/urula.mp3'
    }
  },
  {
    letter: 'ഊ',
    transliteration: 'uu',
    audioUrl: '/audio/malayalam/vowels/uu.mp3',
    example: {
      word: 'ഊഞ്ഞാൽ',
      meaning: 'Swing',
      audioUrl: '/audio/malayalam/examples/oonjal.mp3'
    }
  },
  {
    letter: 'ഋ',
    transliteration: 'ru',
    audioUrl: '/audio/malayalam/vowels/ru.mp3',
    example: {
      word: 'ഋതു',
      meaning: 'Season',
      audioUrl: '/audio/malayalam/examples/ruthu.mp3'
    }
  },
  {
    letter: 'എ',
    transliteration: 'e',
    audioUrl: '/audio/malayalam/vowels/e.mp3',
    example: {
      word: 'എലി',
      meaning: 'Mouse',
      audioUrl: '/audio/malayalam/examples/eli.mp3'
    }
  },
  {
    letter: 'ഏ',
    transliteration: 'ee',
    audioUrl: '/audio/malayalam/vowels/ee.mp3',
    example: {
      word: 'ഏണി',
      meaning: 'Ladder',
      audioUrl: '/audio/malayalam/examples/eni.mp3'
    }
  },
  {
    letter: 'ഐ',
    transliteration: 'ai',
    audioUrl: '/audio/malayalam/vowels/ai.mp3',
    example: {
      word: 'ഐയർ',
      meaning: 'Iyer (name)',
      audioUrl: '/audio/malayalam/examples/aiyar.mp3'
    }
  },
  {
    letter: 'ഒ',
    transliteration: 'o',
    audioUrl: '/audio/malayalam/vowels/o.mp3',
    example: {
      word: 'ഒറ്റ',
      meaning: 'Single',
      audioUrl: '/audio/malayalam/examples/otta.mp3'
    }
  },
  {
    letter: 'ഓ',
    transliteration: 'oo',
    audioUrl: '/audio/malayalam/vowels/oo.mp3',
    example: {
      word: 'ഓട്',
      meaning: 'Run',
      audioUrl: '/audio/malayalam/examples/odu.mp3'
    }
  },
  {
    letter: 'ഔ',
    transliteration: 'au',
    audioUrl: '/audio/malayalam/vowels/au.mp3',
    example: {
      word: 'ഔഷധം',
      meaning: 'Medicine',
      audioUrl: '/audio/malayalam/examples/aushadham.mp3'
    }
  }
];

// Malayalam Consonants (Vyanjanangal)
export const malayalamConsonants: AlphabetItem[] = [
  {
    letter: 'ക',
    transliteration: 'ka',
    audioUrl: '/audio/malayalam/consonants/ka.mp3',
    example: {
      word: 'കണ്ണ്',
      meaning: 'Eye',
      audioUrl: '/audio/malayalam/examples/kannu.mp3'
    }
  },
  {
    letter: 'ഖ',
    transliteration: 'kha',
    audioUrl: '/audio/malayalam/consonants/kha.mp3',
    example: {
      word: 'ഖദീജ',
      meaning: 'Khadija (name)',
      audioUrl: '/audio/malayalam/examples/khadija.mp3'
    }
  },
  {
    letter: 'ഗ',
    transliteration: 'ga',
    audioUrl: '/audio/malayalam/consonants/ga.mp3',
    example: {
      word: 'ഗംഭീരം',
      meaning: 'Seriousness',
      audioUrl: '/audio/malayalam/examples/gambheeram.mp3'
    }
  },
  {
    letter: 'ഘ',
    transliteration: 'gha',
    audioUrl: '/audio/malayalam/consonants/gha.mp3',
    example: {
      word: 'ഘടികാരം',
      meaning: 'Clock',
      audioUrl: '/audio/malayalam/examples/ghadikaram.mp3'
    }
  },
  {
    letter: 'ങ',
    transliteration: 'nga',
    audioUrl: '/audio/malayalam/consonants/nga.mp3',
    example: {
      word: 'ചങ്ങ',
      meaning: 'Conch',
      audioUrl: '/audio/malayalam/examples/changa.mp3'
    }
  },
  {
    letter: 'ച',
    transliteration: 'cha',
    audioUrl: '/audio/malayalam/consonants/cha.mp3',
    example: {
      word: 'ചന്ത',
      meaning: 'Market',
      audioUrl: '/audio/malayalam/examples/chantha.mp3'
    }
  },
  {
    letter: 'ഛ',
    transliteration: 'chha',
    audioUrl: '/audio/malayalam/consonants/chha.mp3',
    example: {
      word: 'ഛായ',
      meaning: 'Shadow',
      audioUrl: '/audio/malayalam/examples/chhaya.mp3'
    }
  },
  {
    letter: 'ജ',
    transliteration: 'ja',
    audioUrl: '/audio/malayalam/consonants/ja.mp3',
    example: {
      word: 'ജലം',
      meaning: 'Water',
      audioUrl: '/audio/malayalam/examples/jalam.mp3'
    }
  },
  {
    letter: 'ഝ',
    transliteration: 'jha',
    audioUrl: '/audio/malayalam/consonants/jha.mp3',
    example: {
      word: 'ഝടം',
      meaning: 'Thunder',
      audioUrl: '/audio/malayalam/examples/jhadam.mp3'
    }
  },
  {
    letter: 'ഞ',
    transliteration: 'nya',
    audioUrl: '/audio/malayalam/consonants/nya.mp3',
    example: {
      word: 'ഞരമ്പ്',
      meaning: 'Nerve',
      audioUrl: '/audio/malayalam/examples/njarampu.mp3'
    }
  }
];

// Vocabulary data
export const tamilFruits: VocabularyItem[] = [
  { word: 'ஆப்பிள்', meaning: 'Apple', transliteration: 'aappil' },
  { word: 'வாழைப்பழம்', meaning: 'Banana', transliteration: 'vaazhaipazham' },
  { word: 'திராட்சை', meaning: 'Grapes', transliteration: 'thiraatchai' },
  { word: 'ஆரஞ்சு', meaning: 'Orange', transliteration: 'aaranju' },
  { word: 'மாம்பழம்', meaning: 'Mango', transliteration: 'maampazham' },
  { word: 'பேரிக்காய்', meaning: 'Pear', transliteration: 'perikkai' },
  { word: 'பைனாப்பிள்', meaning: 'Pineapple', transliteration: 'painappil' },
  { word: 'நிலக்கடலை', meaning: 'Groundnut', transliteration: 'nilakkadalai' },
  { word: 'அவகாடோ', meaning: 'Avocado', transliteration: 'avakaado' },
  { word: 'ஜாம்பிள்', meaning: 'Plum', transliteration: 'jaampil' },
  { word: 'மா வெருக்கை', meaning: 'Coconut', transliteration: 'maa verukkai' },
  { word: 'பப்பாளி', meaning: 'Papaya', transliteration: 'pappali' },
  { word: 'ஸ்ட்ராபெரி', meaning: 'Strawberry', transliteration: 'straaberi' },
  { word: 'தர்பூசணி', meaning: 'Watermelon', transliteration: 'tharboosani' },
  { word: 'கிதரி', meaning: 'Kiwi', transliteration: 'kidhari' },
  { word: 'சீத்தாப்பழம்', meaning: 'Custard Apple', transliteration: 'seethaapazham' },
  { word: 'முலாம்பழம்', meaning: 'Guava', transliteration: 'mulaampazham' },
  { word: 'பச்சைப்பழம்', meaning: 'Green Apple', transliteration: 'pachchaipazham' },
  { word: 'கரும்பு', meaning: 'Sugarcane', transliteration: 'karumbu' },
  { word: 'பேரிச்சை', meaning: 'Dates', transliteration: 'perichchai' },
  { word: 'லெமன்', meaning: 'Lemon', transliteration: 'lemon' },
  { word: 'சக்கரைப்பழம்', meaning: 'Jackfruit', transliteration: 'sakkaraipazham' },
  { word: 'புதினாப்பழம்', meaning: 'Pomegranate', transliteration: 'pudinaapazham' },
  { word: 'கோய்யாப்பழம்', meaning: 'Guava', transliteration: 'koyyaapazham' },
  { word: 'சீனி நெல்லிக்காய்', meaning: 'Gooseberry', transliteration: 'seeni nellikkai' },
  { word: 'நாவல் பழம்', meaning: 'Jamun', transliteration: 'naaval pazham' },
  { word: 'சீனி பழம்', meaning: 'Custard Apple', transliteration: 'seeni pazham' }
];

export const malayalamFruits: VocabularyItem[] = [
  { word: 'ആപ്പിള്‍', meaning: 'Apple', transliteration: 'aappil' },
  { word: 'പഴം', meaning: 'Banana', transliteration: 'pazham' },
  { word: 'മുന്തിരി', meaning: 'Grapes', transliteration: 'munthiri' },
  { word: 'ഓറഞ്ച്', meaning: 'Orange', transliteration: 'oranj' },
  { word: 'മാമ്പഴം', meaning: 'Mango', transliteration: 'maampazham' },
  { word: 'പിയര്‍', meaning: 'Pear', transliteration: 'piar' },
  { word: 'കൈതച്ചക്ക', meaning: 'Pineapple', transliteration: 'kaithachakka' },
  { word: 'കടലക്കൊത്ത', meaning: 'Groundnut', transliteration: 'kadalakkotha' },
  { word: 'അവക്കാഡോ', meaning: 'Avocado', transliteration: 'avakkaado' },
  { word: 'ജാംപ്ലം', meaning: 'Plum', transliteration: 'jaamplum' },
  { word: 'തേങ്ങ', meaning: 'Coconut', transliteration: 'thenga' },
  { word: 'പപ്പായ', meaning: 'Papaya', transliteration: 'pappaya' },
  { word: 'സ്ട്രോബറി', meaning: 'Strawberry', transliteration: 'stroberi' },
  { word: 'തണ്ണിമത്തൻ', meaning: 'Watermelon', transliteration: 'thannimathan' },
  { word: 'കിവി', meaning: 'Kiwi', transliteration: 'kivi' },
  { word: 'സീതപ്പഴം', meaning: 'Custard Apple', transliteration: 'seethappazham' },
  { word: 'മുളമ്പഴം', meaning: 'Guava', transliteration: 'mulampazham' },
  { word: 'പച്ചക്കായി', meaning: 'Green Apple', transliteration: 'pachchakayi' },
  { word: 'കരിമ്പ്', meaning: 'Sugarcane', transliteration: 'karimbu' },
  { word: 'ഈന്തപ്പഴം', meaning: 'Dates', transliteration: 'eenthappazham' },
  { word: 'നാരങ്ങ', meaning: 'Lemon', transliteration: 'naranga' },
  { word: 'ചക്ക', meaning: 'Jackfruit', transliteration: 'chakka' },
  { word: 'കമലപ്പഴം', meaning: 'Pomegranate', transliteration: 'kamalappazham' },
  { word: 'കോയപ്പഴം', meaning: 'Guava', transliteration: 'koyappazham' },
  { word: 'നെല്ലിക്ക', meaning: 'Gooseberry', transliteration: 'nellikka' },
  { word: 'ജാവപ്ലം', meaning: 'Jamun', transliteration: 'jaavaplam' },
  { word: 'സീതപ്പഴം', meaning: 'Custard Apple', transliteration: 'seethappazham' }
];

export const tamilVegetables: VocabularyItem[] = [
  { word: 'உருளைக்கிழங்கு', meaning: 'Potato', transliteration: 'urulaikkizhangu' },
  { word: 'தக்காளி', meaning: 'Tomato', transliteration: 'thakkaali' },
  { word: 'வெங்காயம்', meaning: 'Onion', transliteration: 'vengaayam' },
  { word: 'குடைமிளகாய்', meaning: 'Capsicum', transliteration: 'kudaimilagai' },
  { word: 'முருங்கைக்காய்', meaning: 'Drumstick', transliteration: 'muringaikkai' },
  { word: 'கேரட்', meaning: 'Carrot', transliteration: 'kerat' },
  { word: 'பீன்ஸ்', meaning: 'Beans', transliteration: 'peens' },
  { word: 'பூசணிக்காய்', meaning: 'Pumpkin', transliteration: 'poosanikkai' },
  { word: 'வாழைக்காய்', meaning: 'Raw Banana', transliteration: 'vaazhaikkai' },
  { word: 'பச்சைபயிறு', meaning: 'Green Gram', transliteration: 'pachchaipayiru' },
  { word: 'மல்லி இலை', meaning: 'Coriander Leaf', transliteration: 'malli ilai' },
  { word: 'கத்தரிக்காய்', meaning: 'Brinjal', transliteration: 'katharikkai' },
  { word: 'பீர்க்கங்காய்', meaning: 'Ridge Gourd', transliteration: 'peerkangkai' },
  { word: 'புடலங்காய்', meaning: 'Snake Gourd', transliteration: 'pudalangkai' },
  { word: 'வெந்தையக்கீரை', meaning: 'Fenugreek Leaf', transliteration: 'venthaiyakkeerai' },
  { word: 'கொத்தமல்லி', meaning: 'Coriander Leaf', transliteration: 'koththamalli' },
  { word: 'சின்ன வெங்காயம்', meaning: 'Shallot', transliteration: 'sinna vengaayam' },
  { word: 'தக்காளி', meaning: 'Tomato', transliteration: 'thakkaali' },
  { word: 'முட்டைக்கோஸ்', meaning: 'Cabbage', transliteration: 'muttaikkoos' },
  { word: 'கோஸ்', meaning: 'Cauliflower', transliteration: 'koos' },
  { word: 'பச்சைமிளகாய்', meaning: 'Green Chilli', transliteration: 'pachchaimilagai' },
  { word: 'வெள்ளை பூசணி', meaning: 'Ash Gourd', transliteration: 'vellai poosani' },
  { word: 'கீரை', meaning: 'Spinach', transliteration: 'keerai' },
  { word: 'முள்ளங்கி', meaning: 'Radish', transliteration: 'mullangi' },
  { word: 'வெங்காயத்தாள்', meaning: 'Spring Onion', transliteration: 'vengaayathaal' },
  { word: 'பூண்டு', meaning: 'Garlic', transliteration: 'poondhu' },
  { word: 'இஞ்சி', meaning: 'Ginger', transliteration: 'inji' },
  { word: 'கீரை', meaning: 'Greens', transliteration: 'keerai' },
  { word: 'சுரைக்காய்', meaning: 'Bottle Gourd', transliteration: 'suraikkai' },
  { word: 'அவாரைக்காய்', meaning: 'Broad Beans', transliteration: 'avaaraikkai' }
];
// filepath: /z:/language-learning-frontend/lovabel/tamalearn-galaxy-1/src/lib/data.ts

export const tamilAnimals: VocabularyItem[] = [
  { word: 'நாய்', meaning: 'Dog', transliteration: 'naai' },
  { word: 'பூனை', meaning: 'Cat', transliteration: 'poonai' },
  { word: 'யானை', meaning: 'Elephant', transliteration: 'yaanai' },
  { word: 'குதிரை', meaning: 'Horse', transliteration: 'kuthirai' },
  { word: 'புலி', meaning: 'Tiger', transliteration: 'puli' },
  { word: 'சிங்கம்', meaning: 'Lion', transliteration: 'singam' },
  { word: 'பன்றி', meaning: 'Pig', transliteration: 'panri' },
  { word: 'கோழி', meaning: 'Hen', transliteration: 'kozhi' },
  { word: 'ஆடு', meaning: 'Goat', transliteration: 'aadu' },
  { word: 'மாடு', meaning: 'Cow', transliteration: 'maadu' },
  { word: 'குரங்கு', meaning: 'Monkey', transliteration: 'kurangu' },
  { word: 'செம்மறியாடு', meaning: 'Sheep', transliteration: 'semmaariyadu' },
  { word: 'முதலை', meaning: 'Crocodile', transliteration: 'muthalai' },
  { word: 'திமிங்கலம்', meaning: 'Whale', transliteration: 'thimingalam' },
  { word: 'மீன்', meaning: 'Fish', transliteration: 'meen' },
  { word: 'இறால்', meaning: 'Prawn', transliteration: 'iraal' },
  { word: 'நீர்யானை', meaning: 'Hippopotamus', transliteration: 'neeryaanai' },
  { word: 'தாவரமிருகம்', meaning: 'Giraffe', transliteration: 'thaavaramirugam' },
  { word: 'கழுதை', meaning: 'Donkey', transliteration: 'kazhuthai' },
  { word: 'நரி', meaning: 'Fox', transliteration: 'nari' },
  { word: 'எருமை', meaning: 'Buffalo', transliteration: 'erumai' },
  { word: 'கரடி', meaning: 'Bear', transliteration: 'karadi' },
  { word: 'ஒட்டகம்', meaning: 'Camel', transliteration: 'ottagam' },
  { word: 'நண்டு', meaning: 'Crab', transliteration: 'nandu' },
  { word: 'வௌவால்', meaning: 'Bat', transliteration: 'vowvaal' },
  { word: 'நண்டு', meaning: 'Lobster', transliteration: 'nandu' },
  { word: 'பருந்து', meaning: 'Eagle', transliteration: 'parundu' },
  { word: 'ஆமை', meaning: 'Tortoise', transliteration: 'aamai' },
  { word: 'பன்றி', meaning: 'Wild Boar', transliteration: 'panri' }
];

export const malayalamAnimals: VocabularyItem[] = [
  { word: 'നായ', meaning: 'Dog', transliteration: 'naaya' },
  { word: 'പൂച്ച', meaning: 'Cat', transliteration: 'poocha' },
  { word: 'ആന', meaning: 'Elephant', transliteration: 'aana' },
  { word: 'കുതിര', meaning: 'Horse', transliteration: 'kuthira' },
  { word: 'കടുവ', meaning: 'Tiger', transliteration: 'kaduva' },
  { word: 'സിംഹം', meaning: 'Lion', transliteration: 'simham' },
  { word: 'പന്നി', meaning: 'Pig', transliteration: 'panni' },
  { word: 'കോഴി', meaning: 'Hen', transliteration: 'kozhi' },
  { word: 'ആട്', meaning: 'Goat', transliteration: 'aadu' },
  { word: 'പശു', meaning: 'Cow', transliteration: 'pashu' },
  { word: 'കുരങ്ങ്', meaning: 'Monkey', transliteration: 'kurangu' },
  { word: 'ചെമ്മരിയാട്', meaning: 'Sheep', transliteration: 'chemmariyadu' },
  { word: 'മുതല', meaning: 'Crocodile', transliteration: 'muthala' },
  { word: 'തിമിംഗലം', meaning: 'Whale', transliteration: 'thimingalam' },
  { word: 'മീൻ', meaning: 'Fish', transliteration: 'meen' },
  { word: 'ചെമ്മീൻ', meaning: 'Prawn', transliteration: 'chemmeen' },
  { word: 'ജലഹസ്തി', meaning: 'Hippopotamus', transliteration: 'jalahasthi' },
  { word: 'അശ്വത്താമ', meaning: 'Giraffe', transliteration: 'ashwathama' },
  { word: 'കഴുത', meaning: 'Donkey', transliteration: 'kazhutha' },
  { word: 'നരി', meaning: 'Fox', transliteration: 'nari' },
  { word: 'എരുമ', meaning: 'Buffalo', transliteration: 'eruma' },
  { word: 'കരടി', meaning: 'Bear', transliteration: 'karadi' },
  { word: 'ഒട്ടകം', meaning: 'Camel', transliteration: 'ottakam' },
  { word: 'ഞണ്ട്', meaning: 'Crab', transliteration: 'njandu' },
  { word: 'വവ്വാല്', meaning: 'Bat', transliteration: 'vavval' },
  { word: 'ഞണ്ട്', meaning: 'Lobster', transliteration: 'njandu' },
  { word: 'പരുന്ത്', meaning: 'Eagle', transliteration: 'parunthu' },
  { word: 'ആമ', meaning: 'Tortoise', transliteration: 'aama' },
  { word: 'പന്നി', meaning: 'Wild Boar', transliteration: 'panni' }
];

export const malayalamVegetables: VocabularyItem[] = [
  { word: 'ഉരുളക്കിഴങ്ങ്', meaning: 'Potato', transliteration: 'urulakkizhangu' },
  { word: 'തക്കാളി', meaning: 'Tomato', transliteration: 'thakkaali' },
  { word: 'ഉള്ളി', meaning: 'Onion', transliteration: 'ulli' },
  { word: 'ക്യാപ്സിക്കം', meaning: 'Capsicum', transliteration: 'kyapsikkam' },
  { word: 'മുരിങ്ങക്കായ', meaning: 'Drumstick', transliteration: 'muringakkaaya' },
  { word: 'കാരറ്റ്', meaning: 'Carrot', transliteration: 'kaarat' },
  { word: 'ബീൻസ്', meaning: 'Beans', transliteration: 'beens' },
  { word: 'വെള്ളരിക്ക', meaning: 'Pumpkin', transliteration: 'vellarikka' },
  { word: 'കായപ്പഴം', meaning: 'Raw Banana', transliteration: 'kaayappazham' },
  { word: 'പച്ചപ്പയർ', meaning: 'Green Gram', transliteration: 'pachchappayar' },
  { word: 'മല്ലിയില', meaning: 'Coriander Leaf', transliteration: 'malliyila' },
  { word: 'വഴുതനങ്ങ', meaning: 'Brinjal', transliteration: 'vazhuthananga' },
  { word: 'പീർക്കങ്ങാ', meaning: 'Ridge Gourd', transliteration: 'peerkangaa' },
  { word: 'പുടലങ്കങ്ങ', meaning: 'Snake Gourd', transliteration: 'pudalankanga' },
  { word: 'ഉലുവയില', meaning: 'Fenugreek Leaf', transliteration: 'uluvayila' },
  { word: 'മല്ലിയില', meaning: 'Coriander Leaf', transliteration: 'malliyila' },
  { word: 'ചെറിയ ഉള്ളി', meaning: 'Shallot', transliteration: 'cheriya ulli' },
  { word: 'തക്കാളി', meaning: 'Tomato', transliteration: 'thakkaali' },
  { word: 'മുട്ടക്കോസ്', meaning: 'Cabbage', transliteration: 'muttaakos' },
  { word: 'ബന്ദകാപി', meaning: 'Cauliflower', transliteration: 'bandakaapi' },
  { word: 'പച്ചമുളക്', meaning: 'Green Chilli', transliteration: 'pachchamulak' },
  { word: 'വെളുത്ത പാമ്പു', meaning: 'Ash Gourd', transliteration: 'vellutha paambu' },
  { word: 'ചെറുപയർ', meaning: 'Spinach', transliteration: 'cherupayar' },
  { word: 'മുള്ളങ്കി', meaning: 'Radish', transliteration: 'mullanki' },
  { word: 'ഉള്ളിത്തണ്ട്', meaning: 'Spring Onion', transliteration: 'ullithandu' },
  { word: 'വെളുത്തുള്ളി', meaning: 'Garlic', transliteration: 'velluthulli' },
  { word: 'ഇഞ്ചി', meaning: 'Ginger', transliteration: 'inji' },
  { word: 'ചീര', meaning: 'Greens', transliteration: 'cheera' },
  { word: 'சோரைக்காய்', meaning: 'Bottle Gourd', transliteration: 'soraikkai' },
  { word: 'അവരേക്ക', meaning: 'Broad Beans', transliteration: 'avarekkai' }
];
export const tamilColors: VocabularyItem[] = [
  { word: 'சிவப்பு', meaning: 'Red', transliteration: 'sivappu' },
  { word: 'நீலம்', meaning: 'Blue', transliteration: 'neelam' },
  { word: 'பச்சை', meaning: 'Green', transliteration: 'pachai' },
  { word: 'மஞ்சள்', meaning: 'Yellow', transliteration: 'manjal' },
  { word: 'வெள்ளை', meaning: 'White', transliteration: 'vellai' },
  { word: 'கருப்பு', meaning: 'Black', transliteration: 'karuppu' },
  { word: 'சாம்பல்', meaning: 'Grey', transliteration: 'saambal' },
  { word: 'ஆரஞ்சு', meaning: 'Orange', transliteration: 'aaranju' },
  { word: 'பழுப்பு', meaning: 'Brown', transliteration: 'pazhuppu' },
  { word: 'ஊதா', meaning: 'Purple', transliteration: 'oodha' },
  { word: 'இளஞ்சிவப்பு', meaning: 'Pink', transliteration: 'ilanchivappu' },
  { word: 'பொன்னிறம்', meaning: 'Gold', transliteration: 'ponniram' },
  { word: 'வெள்ளி நிறம்', meaning: 'Silver', transliteration: 'velli nirram' },
  { word: 'அசை வண்ணம்', meaning: 'Ash', transliteration: 'asai vannam' },
  { word: 'நீலப்பச்சை', meaning: 'Turquoise', transliteration: 'neelapachai' },
  { word: 'மஞ்சள்சிவப்பு', meaning: 'Saffron', transliteration: 'manjalsivappu' },
  { word: 'கடல்நீலம்', meaning: 'Navy Blue', transliteration: 'kadalneelam' },
  { word: 'வண்ணமயமான', meaning: 'Multicolored', transliteration: 'vannamayamaanathu' }
];

export const malayalamColors: VocabularyItem[] = [
  { word: 'ചുവപ്പ്', meaning: 'Red', transliteration: 'chuvappu' },
  { word: 'നീല', meaning: 'Blue', transliteration: 'neela' },
  { word: 'പച്ച', meaning: 'Green', transliteration: 'pacha' },
  { word: 'മഞ്ഞ', meaning: 'Yellow', transliteration: 'manja' },
  { word: 'വെള്ള', meaning: 'White', transliteration: 'vella' },
  { word: 'കറുപ്പ്', meaning: 'Black', transliteration: 'karuppu' },
  { word: 'ചാരനിറം', meaning: 'Grey', transliteration: 'chaaraniram' },
  { word: 'ഓറഞ്ച്', meaning: 'Orange', transliteration: 'oranj' },
  { word: 'തവിട്ടുനിറം', meaning: 'Brown', transliteration: 'thavittuniram' },
  { word: 'തവിട്ടുനിറം', meaning: 'Purple', transliteration: 'thavittuniram' },
  { word: 'ഇളംചുവപ്പ്', meaning: 'Pink', transliteration: 'ilamchuvappu' },
  { word: 'സ്വർണ്ണനിറം', meaning: 'Gold', transliteration: 'swarna niram' },
  { word: 'വെള്ളിനിറം', meaning: 'Silver', transliteration: 'velliniram' },
  { word: 'ചാരം', meaning: 'Ash', transliteration: 'charam' },
  { word: 'നീലപച്ച', meaning: 'Turquoise', transliteration: 'neelapacha' },
  { word: 'കുങ്കുമം', meaning: 'Saffron', transliteration: 'kunkumam' },
  { word: 'കടൽനീല', meaning: 'Navy Blue', transliteration: 'kadalmneela' },
  { word: 'നിറച്ചിലക', meaning: 'Multicolored', transliteration: 'nirachilaka' }
];
// filepath: /z:/language-learning-frontend/lovabel/tamalearn-galaxy-1/src/lib/data.ts

export const tamilCountries: VocabularyItem[] = [
  { word: 'இந்தியா', meaning: 'India', transliteration: 'Indhiya' },
  { word: 'அமெரிக்கா', meaning: 'USA', transliteration: 'Amerikka' },
  { word: 'இங்கிலாந்து', meaning: 'UK', transliteration: 'Ingilaanthu' },
  { word: 'கனடா', meaning: 'Canada', transliteration: 'Kanada' },
  { word: 'ஆஸ்திரேலியா', meaning: 'Australia', transliteration: 'Aasthraelia' },
  { word: 'சீனா', meaning: 'China', transliteration: 'Seena' },
  { word: 'ஜப்பான்', meaning: 'Japan', transliteration: 'Japan' },
  { word: 'ஜெர்மனி', meaning: 'Germany', transliteration: 'Jermani' },
  { word: 'பிரான்ஸ்', meaning: 'France', transliteration: 'Piraans' },
  { word: 'இத்தாலி', meaning: 'Italy', transliteration: 'Iththali' },
  { word: 'ரஷ்யா', meaning: 'Russia', transliteration: 'Rashya' },
  { word: 'பிரேசில்', meaning: 'Brazil', transliteration: 'Praesil' },
  { word: 'தென் கொரியா', meaning: 'South Korea', transliteration: 'Then Koriya' },
  { word: 'இலங்கை', meaning: 'Sri Lanka', transliteration: 'Ilankai' },
  { word: 'பாகிஸ்தான்', meaning: 'Pakistan', transliteration: 'Paakistaan' },
  { word: 'வங்காளதேசம்', meaning: 'Bangladesh', transliteration: 'Vangaaladesam' },
  { word: 'சவுதி அரேபியா', meaning: 'Saudi Arabia', transliteration: 'Sauthi Arabiya' },
  { word: 'ஐக்கிய அரபு எமிரேட்ஸ்', meaning: 'UAE', transliteration: 'Aikkiya Arabu Emiraates' },
  { word: 'ஆஃப்கானிஸ்தான்', meaning: 'Afghanistan', transliteration: 'Afganisthaan' },
  { word: 'அர்ஜென்டினா', meaning: 'Argentina', transliteration: 'Arjentina' },
  { word: 'பூடான்', meaning: 'Bhutan', transliteration: 'Pootaan' },
  { word: 'எகிப்து', meaning: 'Egypt', transliteration: 'Egipthu' },
  { word: 'இந்தோனேசியா', meaning: 'Indonesia', transliteration: 'Inthonesia' },
  { word: 'ஈரான்', meaning: 'Iran', transliteration: 'Iran' },
  { word: 'ஈராக்', meaning: 'Iraq', transliteration: 'Iraak' },
  { word: 'இஸ்ரேல்', meaning: 'Israel', transliteration: 'Israil' },
  { word: 'கென்யா', meaning: 'Kenya', transliteration: 'Kenya' },
  { word: 'மலேசியா', meaning: 'Malaysia', transliteration: 'Malaysia' },
  { word: 'மாலத்தீவு', meaning: 'Maldives', transliteration: 'Malatheevu' },
  { word: 'மெக்ஸிகோ', meaning: 'Mexico', transliteration: 'Meksiko' },
  { word: 'நேபாளம்', meaning: 'Nepal', transliteration: 'Nepaalam' },
  { word: 'நைஜீரியா', meaning: 'Nigeria', transliteration: 'Naijiriya' },
  { word: 'நோர்வே', meaning: 'Norway', transliteration: 'Norve' },
  { word: 'பிலிப்பைன்ஸ்', meaning: 'Philippines', transliteration: 'Philippines' },
  { word: 'போர்த்துகல்', meaning: 'Portugal', transliteration: 'Poorthugal' },
  { word: 'கட்டார்', meaning: 'Qatar', transliteration: 'Kattaar' },
  { word: 'சிங்கப்பூர்', meaning: 'Singapore', transliteration: 'Singappur' },
  { word: 'தென் ஆப்ரிக்கா', meaning: 'South Africa', transliteration: 'Then Aaprikka' },
  { word: 'ஸ்பெயின்', meaning: 'Spain', transliteration: 'Spain' },
  { word: 'ஸ்விட்சர்லாந்து', meaning: 'Switzerland', transliteration: 'Switzerland' },
  { word: 'தாய்லாந்து', meaning: 'Thailand', transliteration: 'Thaailandu' },
  { word: 'துருக்கி', meaning: 'Turkey', transliteration: 'Thurukki' },
  { word: 'வியட்நாம்', meaning: 'Vietnam', transliteration: 'Viyatnaam' }
];

export const malayalamCountries: VocabularyItem[] = [
  { word: 'ഇന്ത്യ', meaning: 'India', transliteration: 'India' },
  { word: 'അമേരിക്ക', meaning: 'USA', transliteration: 'Amerikka' },
  { word: 'യുകെ', meaning: 'UK', transliteration: 'UK' },
  { word: 'കാനഡ', meaning: 'Canada', transliteration: 'Kanada' },
  { word: 'ഓസ്‌ട്രേലിയ', meaning: 'Australia', transliteration: 'Australiya' },
  { word: 'ചൈന', meaning: 'China', transliteration: 'China' },
  { word: 'ജപ്പാൻ', meaning: 'Japan', transliteration: 'Japan' },
  { word: 'ജർമനി', meaning: 'Germany', transliteration: 'Jermani' },
  { word: 'ഫ്രാൻസ്', meaning: 'France', transliteration: 'France' },
  { word: 'ഇറ്റലി', meaning: 'Italy', transliteration: 'Italy' },
  { word: 'റഷ്യ', meaning: 'Russia', transliteration: 'Russia' },
  { word: 'ബ്രസീൽ', meaning: 'Brazil', transliteration: 'Brazil' },
  { word: 'ദക്ഷിണ കൊറിയ', meaning: 'South Korea', transliteration: 'Dakshina Koriya' },
  { word: 'ശ്രീലങ്ക', meaning: 'Sri Lanka', transliteration: 'Sreelanka' },
  { word: 'പാകിസ്ഥാൻ', meaning: 'Pakistan', transliteration: 'Pakistan' },
  { word: 'ബംഗ്ലാദേശ്', meaning: 'Bangladesh', transliteration: 'Bangladesh' },
  { word: 'സൗദി അറേബ്യ', meaning: 'Saudi Arabia', transliteration: 'Saudi Arabia' },
  { word: 'യു.എ.ഇ', meaning: 'UAE', transliteration: 'UAE' },
  { word: 'അഫ്ഗാനിസ്ഥാൻ', meaning: 'Afghanistan', transliteration: 'Afganisthan' },
  { word: 'അർജന്റീന', meaning: 'Argentina', transliteration: 'Argentina' },
  { word: 'ഭൂട്ടാൻ', meaning: 'Bhutan', transliteration: 'Bhutan' },
  { word: 'ഈജിപ്ത്', meaning: 'Egypt', transliteration: 'Egypt' },
  { word: 'ഇന്തോനേഷ്യ', meaning: 'Indonesia', transliteration: 'Indonesia' },
  { word: 'ഇറാൻ', meaning: 'Iran', transliteration: 'Iran' },
  { word: 'ഇറാഖ്', meaning: 'Iraq', transliteration: 'Iraq' },
  { word: 'ഇസ്രായേൽ', meaning: 'Israel', transliteration: 'Israel' },
  { word: 'കെനിയ', meaning: 'Kenya', transliteration: 'Kenya' },
  { word: 'മലേഷ്യ', meaning: 'Malaysia', transliteration: 'Malaysia' },
  { word: 'മാലിദ്വീപ്', meaning: 'Maldives', transliteration: 'Maldivu' },
  { word: 'മെക്സിക്കോ', meaning: 'Mexico', transliteration: 'Mexico' },
  { word: 'നേപ്പാൾ', meaning: 'Nepal', transliteration: 'Nepal' },
  { word: 'നൈജീരിയ', meaning: 'Nigeria', transliteration: 'Nigeria' },
  { word: 'നോർവേ', meaning: 'Norway', transliteration: 'Norway' },
  { word: 'ഫിലിപ്പൈൻസ്', meaning: 'Philippines', transliteration: 'Philippines' },
  { word: 'പോർച്ചുഗൽ', meaning: 'Portugal', transliteration: 'Portugal' },
  { word: 'ഖത്തർ', meaning: 'Qatar', transliteration: 'Qatar' },
  { word: 'സിംഗപ്പൂർ', meaning: 'Singapore', transliteration: 'Singapore' },
  { word: 'ദക്ഷിണാഫ്രിക്ക', meaning: 'South Africa', transliteration: 'Dakshina Afrika' },
  { word: 'സ്പെയിൻ', meaning: 'Spain', transliteration: 'Spain' },
  { word: 'സ്വിറ്റ്സർലാൻഡ്', meaning: 'Switzerland', transliteration: 'Switzerland' },
  { word: 'തായ്ലാൻഡ്', meaning: 'Thailand', transliteration: 'Thailand' },
  { word: 'തുര്‍ക്കി', meaning: 'Turkey', transliteration: 'Turkey' },
  { word: 'വിയറ്റ്നാം', meaning: 'Vietnam', transliteration: 'Vietnam' }
];

export const tamilFamily: VocabularyItem[] = [
  { word: 'அப்பா', meaning: 'Father', transliteration: 'Appa' },
  { word: 'அம்மா', meaning: 'Mother', transliteration: 'Amma' },
  { word: 'அண்ணன்', meaning: 'Brother (Elder)', transliteration: 'Annan' },
  { word: 'தம்பி', meaning: 'Brother (Younger)', transliteration: 'Thambi' },
  { word: 'அக்கா', meaning: 'Sister (Elder)', transliteration: 'Akka' },
  { word: 'தங்கை', meaning: 'Sister (Younger)', transliteration: 'Thangai' },
  { word: 'தாத்தா', meaning: 'Grandfather', transliteration: 'Thaatha' },
  { word: 'பாட்டி', meaning: 'Grandmother', transliteration: 'Paatti' },
  { word: 'மகன்', meaning: 'Son', transliteration: 'Mahan' },
  { word: 'மகள்', meaning: 'Daughter', transliteration: 'Mahal' },
  { word: 'கணவன்', meaning: 'Husband', transliteration: 'Kanavan' },
  { word: 'மனைவி', meaning: 'Wife', transliteration: 'Manaivi' },
  { word: 'மாமா', meaning: 'Uncle (Maternal)', transliteration: 'Mama' },
  { word: 'சித்தப்பா', meaning: 'Uncle (Paternal)', transliteration: 'Chithappa' },
  { word: 'அத்தை', meaning: 'Aunt (Paternal)', transliteration: 'Aththai' },
  { word: 'சித்தி', meaning: 'Aunt (Maternal)', transliteration: 'Chithi' },
  { word: 'உறவினன்', meaning: 'Cousin', transliteration: 'Uravinan' },
  { word: 'மருமகன்', meaning: 'Nephew', transliteration: 'Marumagan' },
  { word: 'மருமகள்', meaning: 'Niece', transliteration: 'Marumagal' }
];

export const malayalamFamily: VocabularyItem[] = [
  { word: 'അച്ഛൻ', meaning: 'Father', transliteration: 'Achchan' },
  { word: 'അമ്മ', meaning: 'Mother', transliteration: 'Amma' },
  { word: 'അണ്ണൻ', meaning: 'Brother (Elder)', transliteration: 'Annan' },
  { word: 'ചേട്ടൻ', meaning: 'Brother (Elder)', transliteration: 'Chettan' },
  { word: 'അനിയൻ', meaning: 'Brother (Younger)', transliteration: 'Aniyan' },
  { word: 'ചേച്ചി', meaning: 'Sister (Elder)', transliteration: 'Chechi' },
  { word: 'അനിയത്തി', meaning: 'Sister (Younger)', transliteration: 'Aniyathi' },
  { word: 'അപ്പൂപ്പൻ', meaning: 'Grandfather', transliteration: 'Appooppan' },
  { word: 'അമ്മൂമ്മ', meaning: 'Grandmother', transliteration: 'Ammoomma' },
  { word: 'മകൻ', meaning: 'Son', transliteration: 'Makan' },
  { word: 'മകൾ', meaning: 'Daughter', transliteration: 'Makal' },
  { word: 'ഭർത്താവ്', meaning: 'Husband', transliteration: 'Bharthavu' },
  { word: 'ഭാര്യ', meaning: 'Wife', transliteration: 'Bharya' },
  { word: 'അമ്മാവൻ', meaning: 'Uncle (Maternal)', transliteration: 'Ammavan' },
  { word: 'അച്ചാച്ചൻ', meaning: 'Uncle (Paternal)', transliteration: 'Achachan' },
  { word: 'അമ്മായി', meaning: 'Aunt (Maternal)', transliteration: 'Ammayi' },
  { word: 'അച്ചച്ചി', meaning: 'Aunt (Paternal)', transliteration: 'Achachi' },
  { word: 'കസിൻ', meaning: 'Cousin', transliteration: 'Kasin' },
  { word: 'അനിയൻമകൻ', meaning: 'Nephew', transliteration: 'Aniyanmakan' },
  { word: 'അനിയത്തിമകൾ', meaning: 'Niece', transliteration: 'Aniyaththimakal' }
];
// filepath: /z:/language-learning-frontend/lovabel/tamalearn-galaxy-1/src/lib/data.ts

export const tamilBodyParts: VocabularyItem[] = [
  { word: 'தலை', meaning: 'Head', transliteration: 'Thalai' },
  { word: 'முடி', meaning: 'Hair', transliteration: 'Mudi' },
  { word: 'நெற்றி', meaning: 'Forehead', transliteration: 'Netri' },
  { word: 'கண்கள்', meaning: 'Eyes', transliteration: 'Kangal' },
  { word: 'புருவம்', meaning: 'Eyebrow', transliteration: 'Puruvam' },
  { word: 'மூக்கு', meaning: 'Nose', transliteration: 'Mookku' },
  { word: 'காதுகள்', meaning: 'Ears', transliteration: 'Kaadhugal' },
  { word: 'வாய்', meaning: 'Mouth', transliteration: 'Vaai' },
  { word: 'பற்கள்', meaning: 'Teeth', transliteration: 'Pargal' },
  { word: 'நாக்கு', meaning: 'Tongue', transliteration: 'Naakku' },
  { word: 'கழுத்து', meaning: 'Neck', transliteration: 'Kaluthu' },
  { word: 'தோள்', meaning: 'Shoulder', transliteration: 'Thol' },
  { word: 'கை', meaning: 'Hand', transliteration: 'Kai' },
  { word: 'விரல்கள்', meaning: 'Fingers', transliteration: 'Viralgal' },
  { word: 'முலை', meaning: 'Chest', transliteration: 'Mulai' },
  { word: 'இதயம்', meaning: 'Heart', transliteration: 'Idhayam' },
  { word: 'வயிறு', meaning: 'Stomach', transliteration: 'Vayiru' },
  { word: 'முதுகு', meaning: 'Back', transliteration: 'Mudugu' },
  { word: 'கால்கள்', meaning: 'Legs', transliteration: 'Kaalkal' },
  { word: 'முழங்கு', meaning: 'Knee', transliteration: 'Muzhangu' },
  { word: 'பாதம்', meaning: 'Foot', transliteration: 'Paatham' },
  { word: 'தோல்', meaning: 'Skin', transliteration: 'Thol' },
  { word: 'மூளை', meaning: 'Brain', transliteration: 'Moolai' }
];
// filepath: /z:/language-learning-frontend/lovabel/tamalearn-galaxy-1/src/lib/data.ts

export const tamilWeather: VocabularyItem[] = [
  { word: 'வானிலை', meaning: 'Weather', transliteration: 'Vaanilai' },
  { word: 'மழை', meaning: 'Rain', transliteration: 'Mazhai' },
  { word: 'சூரியன்', meaning: 'Sun', transliteration: 'Sooriyan' },
  { word: 'காற்று', meaning: 'Wind', transliteration: 'Kaatru' },
  { word: 'மேகம்', meaning: 'Cloud', transliteration: 'Megam' },
  { word: 'இடிமின்', meaning: 'Thunder', transliteration: 'Idimin' },
  { word: 'மின்னல்', meaning: 'Lightning', transliteration: 'Minnal' },
  { word: 'பனி', meaning: 'Snow', transliteration: 'Pani' },
  { word: 'மந்தக் காற்று', meaning: 'Fog', transliteration: 'Mandak Kaatru' },
  { word: 'குளிர்', meaning: 'Cold', transliteration: 'Kulir' },
  { word: 'வெப்பம்', meaning: 'Hot', transliteration: 'Veppam' },
  { word: 'கோடை', meaning: 'Summer', transliteration: 'Kodai' },
  { word: 'குளிர்காலம்', meaning: 'Winter', transliteration: 'Kulirkaalam' },
  { word: 'மழைக்காலம்', meaning: 'Rainy Season', transliteration: 'Mazaikalam' },
  { word: 'புயல்', meaning: 'Storm', transliteration: 'Puyal' },
  { word: 'வானவில்', meaning: 'Rainbow', transliteration: 'Vaanavil' },
  { word: 'பனித்துளி', meaning: 'Dew', transliteration: 'Panithuli' },
  { word: 'வெப்பநிலை', meaning: 'Temperature', transliteration: 'Veppa Nilai' }
];

export const malayalamWeather: VocabularyItem[] = [
  { word: 'കാലാവസ്ഥ', meaning: 'Weather', transliteration: 'Kaalavastha' },
  { word: 'മഴ', meaning: 'Rain', transliteration: 'Mazha' },
  { word: 'സൂര്യൻ', meaning: 'Sun', transliteration: 'Sooryan' },
  { word: 'കാറ്റ്', meaning: 'Wind', transliteration: 'Kaatu' },
  { word: 'മേഘം', meaning: 'Cloud', transliteration: 'Megham' },
  { word: 'ഇടിമിന്നൽ', meaning: 'Thunder', transliteration: 'Idiminnal' },
  { word: 'മിന്നൽ', meaning: 'Lightning', transliteration: 'Minnal' },
  { word: 'മഞ്ഞ്', meaning: 'Snow', transliteration: 'Manju' },
  { word: 'മൂടൽമഞ്ഞ്', meaning: 'Fog', transliteration: 'Moodalmanju' },
  { word: 'തണുപ്പ്', meaning: 'Cold', transliteration: 'Thanuppu' },
  { word: 'ചൂട്', meaning: 'Hot', transliteration: 'Choodu' },
  { word: 'വേനൽക്കാലം', meaning: 'Summer', transliteration: 'Venal Kaalam' },
  { word: 'ശൈത്യകാലം', meaning: 'Winter', transliteration: 'Shaithyakaalam' },
  { word: 'മഴക്കാലം', meaning: 'Rainy Season', transliteration: 'Mazhakalam' },
  { word: 'കൊടുങ്കാറ്റ്', meaning: 'Storm', transliteration: 'Kodungkaattu' },
  { word: 'ഇന്ദ്രധനുസ്സ്', meaning: 'Rainbow', transliteration: 'Indradhanussu' },
  { word: 'മഞ്ഞുതുള്ളി', meaning: 'Dew', transliteration: 'Manjuthulli' },
  { word: 'താപനില', meaning: 'Temperature', transliteration: 'Thaapanila' }
];

export const malayalamBodyParts: VocabularyItem[] = [
  { word: 'തല', meaning: 'Head', transliteration: 'Thala' },
  { word: 'മുടി', meaning: 'Hair', transliteration: 'Mudi' },
  { word: 'നെറ്റി', meaning: 'Forehead', transliteration: 'Netti' },
  { word: 'കണ്ണുകൾ', meaning: 'Eyes', transliteration: 'Kannukal' },
  { word: 'പുരികം', meaning: 'Eyebrow', transliteration: 'Purikam' },
  { word: 'മൂക്ക്', meaning: 'Nose', transliteration: 'Mookku' },
  { word: 'ചെവി', meaning: 'Ears', transliteration: 'Chevi' },
  { word: 'വായ്', meaning: 'Mouth', transliteration: 'Vaay' },
  { word: 'പല്ലുകൾ', meaning: 'Teeth', transliteration: 'Pallukal' },
  { word: 'നാക്ക്', meaning: 'Tongue', transliteration: 'Naakku' },
  { word: 'കഴുത്ത്', meaning: 'Neck', transliteration: 'Kazhutthu' },
  { word: 'തോൾ', meaning: 'Shoulder', transliteration: 'Thol' },
  { word: 'കൈ', meaning: 'Hand', transliteration: 'Kai' },
  { word: 'വിരലുകൾ', meaning: 'Fingers', transliteration: 'Viralukal' },
  { word: 'നെഞ്ച്', meaning: 'Chest', transliteration: 'Nenju' },
  { word: 'ഹൃദയം', meaning: 'Heart', transliteration: 'Hridayam' },
  { word: 'വയറ്', meaning: 'Stomach', transliteration: 'Vayar' },
  { word: 'പുറം', meaning: 'Back', transliteration: 'Puram' },
  { word: 'കാൽ', meaning: 'Legs', transliteration: 'Kal' },
  { word: 'മുട്ട്', meaning: 'Knee', transliteration: 'Muttu' },
  { word: 'പാദം', meaning: 'Foot', transliteration: 'Paadam' },
  { word: 'ത്വക്', meaning: 'Skin', transliteration: 'Thvak' },
  { word: 'മസ്തിഷ്‌കം', meaning: 'Brain', transliteration: 'Mastishkam' }
];
// filepath: /z:/language-learning-frontend/lovabel/tamalearn-galaxy-1/src/lib/data.ts

export const tamilTransportation: VocabularyItem[] = [
  { word: 'வாகனம்', meaning: 'Vehicle', transliteration: 'Vaganam' },
  { word: 'கார்', meaning: 'Car', transliteration: 'Kaar' },
  { word: 'பைக்', meaning: 'Bike', transliteration: 'Bike' },
  { word: 'பேருந்து', meaning: 'Bus', transliteration: 'Perunthu' },
  { word: 'தொடர்வண்டி', meaning: 'Train', transliteration: 'Thodarvandi' },
  { word: 'விமானம்', meaning: 'Aeroplane', transliteration: 'Vimaanam' },
  { word: 'கப்பல்', meaning: 'Ship', transliteration: 'Kappal' },
  { word: 'மிதிவண்டி', meaning: 'Bicycle', transliteration: 'Mithivandi' },
  { word: 'டாக்ஸி', meaning: 'Taxi', transliteration: 'Taxi' },
  { word: 'ஆட்டோ', meaning: 'Auto Rickshaw', transliteration: 'Auto' },
  { word: 'லாரி', meaning: 'Truck', transliteration: 'Laari' },
  { word: 'படகு', meaning: 'Boat', transliteration: 'Padagu' },
  { word: 'மேட்ரோ', meaning: 'Metro', transliteration: 'Metro' },
  { word: 'பெட்ரோல்', meaning: 'Petrol', transliteration: 'Petrol' },
  { word: 'டீசல்', meaning: 'Diesel', transliteration: 'Diesel' },
  { word: 'போக்குவரத்து', meaning: 'Traffic', transliteration: 'Pokkuraaththu' },
  { word: 'சாலை', meaning: 'Road', transliteration: 'Saalaai' },
  { word: 'நெடுஞ்சாலை', meaning: 'Highway', transliteration: 'Nedunchaalai' },
  { word: 'பாலம்', meaning: 'Bridge', transliteration: 'Paalaam' },
  { word: 'சீட்டு', meaning: 'Ticket', transliteration: 'Seettu' },
  { word: 'விமான நிலையம்', meaning: 'Airport', transliteration: 'Vimaan Nilayam' },
  { word: 'தொடர்வண்டி நிலையம்', meaning: 'Railway Station', transliteration: 'Thodarvandi Nilayam' },
  { word: 'நிறுத்தம்', meaning: 'Parking', transliteration: 'Niruththam' }
];

export const malayalamTransportation: VocabularyItem[] = [
  { word: 'വാഹനo', meaning: 'Vehicle', transliteration: 'Vahanam' },
  { word: 'കാർ', meaning: 'Car', transliteration: 'Kaar' },
  { word: 'ബൈക്ക്', meaning: 'Bike', transliteration: 'Bike' },
  { word: 'ബസ്', meaning: 'Bus', transliteration: 'Bus' },
  { word: 'ട്രെയിൻ', meaning: 'Train', transliteration: 'Train' },
  { word: 'വിമാനo', meaning: 'Aeroplane', transliteration: 'Vimaanam' },
  { word: 'കപ്പൽ', meaning: 'Ship', transliteration: 'Kappal' },
  { word: 'സൈക്കിൾ', meaning: 'Bicycle', transliteration: 'Saikkil' },
  { word: 'ടാക്സി', meaning: 'Taxi', transliteration: 'Taxi' },
  { word: 'ഓട്ടോ', meaning: 'Auto Rickshaw', transliteration: 'Auto' },
  { word: 'ലോറി', meaning: 'Truck', transliteration: 'Lorry' },
  { word: 'വള്ളം', meaning: 'Boat', transliteration: 'Vallam' },
  { word: 'മെട്രോ', meaning: 'Metro', transliteration: 'Metro' },
  { word: 'പെട്രോൾ', meaning: 'Petrol', transliteration: 'Petrol' },
  { word: 'ഡീസൽ', meaning: 'Diesel', transliteration: 'Diesel' },
  { word: 'ഗതാഗതം', meaning: 'Traffic', transliteration: 'Gathagatham' },
  { word: 'റോഡ്', meaning: 'Road', transliteration: 'Road' },
  { word: 'ഹൈവേ', meaning: 'Highway', transliteration: 'Highway' },
  { word: 'പാലം', meaning: 'Bridge', transliteration: 'Paalaam' },
  { word: 'ടിക്കറ്റ്', meaning: 'Ticket', transliteration: 'Ticket' },
  { word: 'വിമാനത്താവളം', meaning: 'Airport', transliteration: 'Vimaanathaavalam' },
  { word: 'റെയിൽവേ സ്റ്റേഷൻ', meaning: 'Railway Station', transliteration: 'Railway Station' },
  { word: 'പാർക്കിംഗ്', meaning: 'Parking', transliteration: 'Parking' }
];
// filepath: /z:/language-learning-frontend/lovabel/tamalearn-galaxy-1/src/lib/data.ts

export const tamilFood: VocabularyItem[] = [
  { word: 'உணவு', meaning: 'Food', transliteration: 'Unavu' },
  { word: 'தண்ணீர்', meaning: 'Water', transliteration: 'Thanneer' },
  { word: 'பால்', meaning: 'Milk', transliteration: 'Paal' },
  { word: 'அரிசி', meaning: 'Rice', transliteration: 'Arisi' },
  { word: 'ரொட்டி', meaning: 'Bread', transliteration: 'Rotti' },
  { word: 'முட்டை', meaning: 'Egg', transliteration: 'Muttai' },
  { word: 'மீன்', meaning: 'Fish', transliteration: 'Meen' },
  { word: 'இறைச்சி', meaning: 'Meat', transliteration: 'Iraichi' },
  { word: 'கோழி', meaning: 'Chicken', transliteration: 'Kozhi' },
  { word: 'பழம்', meaning: 'Fruit', transliteration: 'Pazham' },
  { word: 'வாழைப்பழம்', meaning: 'Banana', transliteration: 'Vazhaipazham' },
  { word: 'ஆப்பிள்', meaning: 'Apple', transliteration: 'Apple' },
  { word: 'மாம்பழம்', meaning: 'Mango', transliteration: 'Maampazham' },
  { word: 'ஆரஞ்சு', meaning: 'Orange', transliteration: 'Aranju' },
  { word: 'காய்கறிகள்', meaning: 'Vegetables', transliteration: 'Kaikarigal' },
  { word: 'உருளைக்கிழங்கு', meaning: 'Potato', transliteration: 'Urulaikilangu' },
  { word: 'வெங்காயம்', meaning: 'Onion', transliteration: 'Vengayam' },
  { word: 'தக்காளி', meaning: 'Tomato', transliteration: 'Thakkali' },
  { word: 'சர்க்கரை', meaning: 'Sugar', transliteration: 'Sarkkarai' },
  { word: 'உப்பு', meaning: 'Salt', transliteration: 'Uppu' },
  { word: 'தேநீர்', meaning: 'Tea', transliteration: 'Thenir' },
  { word: 'காப்பி', meaning: 'Coffee', transliteration: 'Kaapi' },
  { word: 'தேன்', meaning: 'Honey', transliteration: 'Then' },
  { word: 'எண்ணெய்', meaning: 'Oil', transliteration: 'Ennai' },
  { word: 'ஐஸ் கிரீம்', meaning: 'Ice Cream', transliteration: 'Ice Cream' },
  { word: 'காலை உணவு', meaning: 'Breakfast', transliteration: 'Kaalaai Unavu' },
  { word: 'மதிய உணவு', meaning: 'Lunch', transliteration: 'Madiya Unavu' },
  { word: 'இரவு உணவு', meaning: 'Dinner', transliteration: 'Iravu Unavu' }
];

export const malayalamFood: VocabularyItem[] = [
  { word: 'ഭക്ഷണം', meaning: 'Food', transliteration: 'Bhakshanam' },
  { word: 'വെള്ളം', meaning: 'Water', transliteration: 'Vellam' },
  { word: 'പാലു', meaning: 'Milk', transliteration: 'Paalu' },
  { word: 'അരി', meaning: 'Rice', transliteration: 'Ari' },
  { word: 'റൊട്ടി', meaning: 'Bread', transliteration: 'Rotti' },
  { word: 'മുട്ട', meaning: 'Egg', transliteration: 'Mutta' },
  { word: 'മീൻ', meaning: 'Fish', transliteration: 'Meen' },
  { word: 'ഇറച്ചി', meaning: 'Meat', transliteration: 'Iracchi' },
  { word: 'കോഴി', meaning: 'Chicken', transliteration: 'Kozhi' },
  { word: 'പഴം', meaning: 'Fruit', transliteration: 'Pazham' },
  { word: 'വാഴപ്പഴം', meaning: 'Banana', transliteration: 'Vaazhappazham' },
  { word: 'ആപ്പിൾ', meaning: 'Apple', transliteration: 'Apple' },
  { word: 'മാമ്പഴം', meaning: 'Mango', transliteration: 'Maampazham' },
  { word: 'ഓറഞ്ച്', meaning: 'Orange', transliteration: 'Orange' },
  { word: 'കായകൾ', meaning: 'Vegetables', transliteration: 'Kaayakal' },
  { word: 'ഉരുളകിഴങ്ങ്', meaning: 'Potato', transliteration: 'Urulakizhangu' },
  { word: 'ഉള്ളി', meaning: 'Onion', transliteration: 'Ulli' },
  { word: 'തക്കാളി', meaning: 'Tomato', transliteration: 'Thakkali' },
  { word: 'പഞ്ചസാര', meaning: 'Sugar', transliteration: 'Panchasaara' },
  { word: 'ഉപ്പ്', meaning: 'Salt', transliteration: 'Uppu' },
  { word: 'ചായ', meaning: 'Tea', transliteration: 'Chaaya' },
  { word: 'കാപ്പി', meaning: 'Coffee', transliteration: 'Kaapi' },
  { word: 'തേന്', meaning: 'Honey', transliteration: 'Then' },
  { word: 'എണ്ണ', meaning: 'Oil', transliteration: 'Enna' },
  { word: 'ഐസ്‌ക്രീം', meaning: 'Ice Cream', transliteration: 'Ice Cream' },
  { word: 'പ്രഭാതഭക്ഷണം', meaning: 'Breakfast', transliteration: 'Prabhaatha Bhakshanam' },
  { word: 'ഉച്ചഭക്ഷണം', meaning: 'Lunch', transliteration: 'Uchabhakshanam' },
  { word: 'രാത്രി ഭക്ഷണം', meaning: 'Dinner', transliteration: 'Raathri Bhakshanam' }
];
// filepath: /z:/language-learning-frontend/lovabel/tamalearn-galaxy-1/src/lib/data.ts

export const tamilOccupations: VocabularyItem[] = [
  { word: 'மருத்துவர்', meaning: 'Doctor', transliteration: 'Maruththuvvar' },
  { word: 'பொறியாளர்', meaning: 'Engineer', transliteration: 'Poriyalar' },
  { word: 'ஆசிரியர்', meaning: 'Teacher', transliteration: 'Aasiriyar' },
  { word: 'காவலர்', meaning: 'Police', transliteration: 'Kaavalar' },
  { word: 'ஓட்டுநர்', meaning: 'Driver', transliteration: 'Ottunar' },
  { word: 'விவசாயி', meaning: 'Farmer', transliteration: 'Vivasayi' },
  { word: 'செவிலியர்', meaning: 'Nurse', transliteration: 'Seviliar' },
  { word: 'தச்சர்', meaning: 'Carpenter', transliteration: 'Thachar' },
  { word: 'மின் பொறியாளர்', meaning: 'Electrician', transliteration: 'Min Poriyalar' },
  { word: 'குழாய் பழுது பார்க்கும் தொழிலாளி', meaning: 'Plumber', transliteration: 'Kuzhai Pazhudhu Paarkum Thozhilaali' },
  { word: 'தையல்காரர்', meaning: 'Tailor', transliteration: 'Thaiyalkaarar' },
  { word: 'சமையல்காரர்', meaning: 'Chef', transliteration: 'Samaiyalkaarar' },
  { word: 'வழக்கறிஞர்', meaning: 'Lawyer', transliteration: 'Vazhakkarinjar' },
  { word: 'கலைஞர்', meaning: 'Artist', transliteration: 'Kalaiyar' },
  { word: 'விமானி', meaning: 'Pilot', transliteration: 'Vimaani' },
  { word: 'ராணுவத்தினர்', meaning: 'Soldier', transliteration: 'Ranuvaththinar' },
  { word: 'நடிகர்', meaning: 'Actor', transliteration: 'Nadigar' },
  { word: 'வியாபாரி', meaning: 'Businessman', transliteration: 'Viyaapari' },
  { word: 'கட்டிட தொழிலாளி', meaning: 'Mason', transliteration: 'Kattida Thozhilaali' },
  { word: 'விஞ்ஞானி', meaning: 'Scientist', transliteration: 'Vinjnaani' },
  { word: 'கழுவர்', meaning: 'Barber', transliteration: 'Kazhuvar' },
  { word: 'ஓவியர்', meaning: 'Painter', transliteration: 'Oviyar' },
  { word: 'மீனவர்', meaning: 'Fisherman', transliteration: 'Meenavar' },
  { word: 'பாடகர்', meaning: 'Singer', transliteration: 'Paadakar' },
  { word: 'நீதிபதி', meaning: 'Judge', transliteration: 'Needhipathi' }
];

export const malayalamOccupations: VocabularyItem[] = [
  { word: 'ഡോക്ടർ', meaning: 'Doctor', transliteration: 'Doktar' },
  { word: 'എഞ്ചിനീയർ', meaning: 'Engineer', transliteration: 'Engineeyar' },
  { word: 'അധ്യാപകൻ', meaning: 'Teacher', transliteration: 'Adhyaapakan' },
  { word: 'പൊലീസുകാരൻ', meaning: 'Police', transliteration: 'Policeukaaran' },
  { word: 'ഡ്രൈവർ', meaning: 'Driver', transliteration: 'Driver' },
  { word: 'കർഷകൻ', meaning: 'Farmer', transliteration: 'Karshakan' },
  { word: 'നഴ്സ്', meaning: 'Nurse', transliteration: 'Nurse' },
  { word: 'ചരക്കുപണി', meaning: 'Carpenter', transliteration: 'Thacharan' },
  { word: 'വൈദ്യുതി പ്രവർത്തകൻ', meaning: 'Electrician', transliteration: 'Vaidyuthi Pravarthakan' },
  { word: 'പ്ലംബർ', meaning: 'Plumber', transliteration: 'Plumber' },
  { word: 'തയലക്കാരൻ', meaning: 'Tailor', transliteration: 'Thayalkaaran' },
  { word: 'പാചകക്കാരൻ', meaning: 'Chef', transliteration: 'Paachakakkaaran' },
  { word: 'അഭിഭാഷകൻ', meaning: 'Lawyer', transliteration: 'Abhibhaashakan' },
  { word: 'കലാകാരൻ', meaning: 'Artist', transliteration: 'Kalaakaaran' },
  { word: 'പൈലറ്റ്', meaning: 'Pilot', transliteration: 'Pilot' },
  { word: 'സൈനികൻ', meaning: 'Soldier', transliteration: 'Sainikan' },
  { word: 'അഭിനേതാവ്', meaning: 'Actor', transliteration: 'Abhinethav' },
  { word: 'വ്യാപാരി', meaning: 'Businessman', transliteration: 'Vyaapaari' },
  { word: 'കല്ലാട്ടക്കാരൻ', meaning: 'Mason', transliteration: 'Kallattakkaaran' },
  { word: 'ശാസ്ത്രജ്ഞൻ', meaning: 'Scientist', transliteration: 'Shaastrajnan' },
  { word: 'ക്ഷൗരികൻ', meaning: 'Barber', transliteration: 'Kshaavarikan' },
  { word: 'ചിത്രകാരൻ', meaning: 'Painter', transliteration: 'Chitrakaaran' },
  { word: 'മീൻക്കാരൻ', meaning: 'Fisherman', transliteration: 'Meenkaaran' },
  { word: 'ഗായകൻ', meaning: 'Singer', transliteration: 'Gaayakan' },
  { word: 'നീതിപതി', meaning: 'Judge', transliteration: 'Neethipathi' }
];
// filepath: /z:/language-learning-frontend/lovabel/tamalearn-galaxy-1/src/lib/data.ts

export const tamilDailyActivities: VocabularyItem[] = [
  { word: 'எழுந்து கொள்ளுதல்', meaning: 'Wake up', transliteration: 'Ezhunthu Kolluthal' },
  { word: 'பற்கள் தேய்த்தல்', meaning: 'Brush teeth', transliteration: 'Parkal Theythal' },
  { word: 'குளித்தல்', meaning: 'Take a bath', transliteration: 'Kuliththal' },
  { word: 'காலை உணவு சாப்பிடுதல்', meaning: 'Eat breakfast', transliteration: 'Kaala Unavu Saapiduthal' },
  { word: 'பள்ளிக்கு செல்', meaning: 'Go to school', transliteration: 'Pallikku Sel' },
  { word: 'படித்தல்', meaning: 'Study', transliteration: 'Padiththal' },
  { word: 'விளையாடுதல்', meaning: 'Play', transliteration: 'Vilayaaduthal' },
  { word: 'தொலைக்காட்சி பார்ப்பது', meaning: 'Watch TV', transliteration: 'Tholaikkaatchi Paarpadu' },
  { word: 'மதிய உணவு சாப்பிடுதல்', meaning: 'Eat lunch', transliteration: 'Madiya Unavu Saapiduthal' },
  { word: 'வேலைக்கு செல்', meaning: 'Go to work', transliteration: 'Velaikku Sel' },
  { word: 'வீடு சுத்தம் செய்யுதல்', meaning: 'Clean the house', transliteration: 'Veedu Suththam Seyyuthal' },
  { word: 'சமையல் செய்தல்', meaning: 'Cook food', transliteration: 'Samaiyal Seythal' },
  { word: 'இரவு உணவு சாப்பிடுதல்', meaning: 'Eat dinner', transliteration: 'Iravu Unavu Saapiduthal' },
  { word: 'தூங்குதல்', meaning: 'Sleep', transliteration: 'Thoonguthal' },
  { word: 'நடைபயிற்சி செல்', meaning: 'Go for a walk', transliteration: 'Nadaipayirchi Sel' },
  { word: 'புத்தகம் படித்தல்', meaning: 'Read a book', transliteration: 'Puththagam Padiththal' },
  { word: 'ஆடைகளை கழுவுதல்', meaning: 'Wash clothes', transliteration: 'Aadaigalai Kazhuvuthal' },
  { word: 'உடற்பயிற்சி செய்யுதல்', meaning: 'Exercise', transliteration: 'Udarpayirchi Seyyuthal' },
  { word: 'தொலைபேசியில் பேசுதல்', meaning: 'Talk on phone', transliteration: 'Tholaipaesiyil Paesuthal' },
  { word: 'பொருட்கள் வாங்குதல்', meaning: 'Shopping', transliteration: 'Porutkal Vaanguthal' }
];

export const malayalamDailyActivities: VocabularyItem[] = [
  { word: 'ഉണരുക', meaning: 'Wake up', transliteration: 'Unaruka' },
  { word: 'പല്ല് ബ്രഷ് ചെയ്യുക', meaning: 'Brush teeth', transliteration: 'Pallu Brush Cheyyuka' },
  { word: 'കുളിക്കുക', meaning: 'Take a bath', transliteration: 'Kulikkuka' },
  { word: 'പ്രഭാതഭക്ഷണം കഴിക്കുക', meaning: 'Eat breakfast', transliteration: 'Prabhaatha Bhakshanam Kazhikkuka' },
  { word: 'സ്കൂളിലേക്ക് പോകുക', meaning: 'Go to school', transliteration: 'Schoolilekku Pokuka' },
  { word: 'പഠിക്കുക', meaning: 'Study', transliteration: 'Padikkuka' },
  { word: 'കളിക്കുക', meaning: 'Play', transliteration: 'Kalikkuka' },
  { word: 'ടിവി കാണുക', meaning: 'Watch TV', transliteration: 'TV Kaanuka' },
  { word: 'ഉച്ചഭക്ഷണം കഴിക്കുക', meaning: 'Eat lunch', transliteration: 'Uchabhakshanam Kazhikkuka' },
  { word: 'ജോലിക്ക് പോകുക', meaning: 'Go to work', transliteration: 'Jolikku Pokuka' },
  { word: 'വീട് വൃത്തിയാക്കുക', meaning: 'Clean the house', transliteration: 'Veet Vrithiyaakkuka' },
  { word: 'ഭക്ഷണം പാചകം ചെയ്യുക', meaning: 'Cook food', transliteration: 'Bhakshanam Paachakam Cheyyuka' },
  { word: 'രാത്രി ഭക്ഷണം കഴിക്കുക', meaning: 'Eat dinner', transliteration: 'Raathri Bhakshanam Kazhikkuka' },
  { word: 'ഉറങ്ങുക', meaning: 'Sleep', transliteration: 'Uranguka' },
  { word: 'നടക്കാൻ പോകുക', meaning: 'Go for a walk', transliteration: 'Nadakkan Pokuka' },
  { word: 'പുസ്തകം വായിക്കുക', meaning: 'Read a book', transliteration: 'Pusthakam Vaayikkuka' },
  { word: 'വസ്ത്രം കഴുകുക', meaning: 'Wash clothes', transliteration: 'Vastram Kazhukkuka' },
  { word: 'വ്യായാമം ചെയ്യുക', meaning: 'Exercise', transliteration: 'Vyaayaamam Cheyyuka' },
  { word: 'ഫോണിൽ സംസാരിക്കുക', meaning: 'Talk on phone', transliteration: 'Phone-il Samsaarikkuka' },
  { word: 'ഷോപ്പിംഗ്', meaning: 'Shopping', transliteration: 'Shopping' }
];
// Tamil Grammar Data
const tamilNouns: GrammarItem[] = [
  {
    title: "பெயர்ச்சொல் அறிமுகம் (Introduction to Nouns)",
    explanation: "Tamil nouns can refer to people, places, things, or ideas. They can be modified by adjectives and can function as subjects or objects in sentences.",
    examples: [
      {
        original: "மரம்",
        transliteration: "Maram",
        meaning: "Tree",
      },
      {
        original: "வீடு",
        transliteration: "Veedu",
        meaning: "House",
      }
    ]
  },
  {
    title: "பெயர்ச்சொல் வகைகள் (Types of Nouns)",
    explanation: "Tamil has different types of nouns including proper nouns, common nouns, collective nouns, and abstract nouns.",
    examples: [
      {
        original: "சென்னை",
        transliteration: "Chennai",
        meaning: "Chennai (proper noun)",
      },
      {
        original: "கூட்டம்",
        transliteration: "Koottam",
        meaning: "Crowd (collective noun)",
      }
    ]
  }
];

const tamilVerbs: GrammarItem[] = [
  {
    title: "வினைச்சொல் அறிமுகம் (Introduction to Verbs)",
    explanation: "Tamil verbs express actions, occurrences, or states of being. They change form based on tense, person, number, and mood.",
    examples: [
      {
        original: "சாப்பிடு",
        transliteration: "Saappidu",
        meaning: "Eat (command form)",
      },
      {
        original: "படிக்கிறேன்",
        transliteration: "Padikkiren",
        meaning: "I am studying",
      }
    ]
  }
];

const tamilSentenceStructure: GrammarItem[] = [
  {
    title: "வாக்கிய அமைப்பு (Sentence Structure)",
    explanation: "Tamil follows a Subject-Object-Verb (SOV) word order, unlike English which uses Subject-Verb-Object (SVO).",
    examples: [
      {
        original: "நான் சாதம் சாப்பிடுகிறேன்",
        transliteration: "Naan saatham saapidukiren",
        meaning: "I rice eat (I eat rice)",
      }
    ]
  }
];

const tamilAdjectives: GrammarItem[] = [
  {
    title: "உரிச்சொல் அறிமுகம் (Introduction to Adjectives)",
    explanation: "Tamil adjectives describe or modify nouns. They usually precede the nouns they modify.",
    examples: [
      {
        original: "பெரிய வீடு",
        transliteration: "Periya veedu",
        meaning: "Big house",
      },
      {
        original: "சிறிய பூனை",
        transliteration: "Siriya poonai",
        meaning: "Small cat",
      }
    ]
  }
];

// Malayalam Grammar Data
const malayalamNouns: GrammarItem[] = [
  {
    title: "നാമങ്ങളുടെ അവതരണം (Introduction to Nouns)",
    explanation: "Malayalam nouns refer to people, places, things, or ideas. They can be modified by adjectives and can function as subjects or objects in sentences.",
    examples: [
      {
        original: "മരം",
        transliteration: "Maram",
        meaning: "Tree",
      },
      {
        original: "വീട്",
        transliteration: "Veedu",
        meaning: "House",
      }
    ]
  }
];

const malayalamVerbs: GrammarItem[] = [
  {
    title: "ക്രിയകളുടെ അവതരണം (Introduction to Verbs)",
    explanation: "Malayalam verbs express actions, occurrences, or states of being. They change form based on tense, person, number, and mood.",
    examples: [
      {
        original: "കഴിക്കുക",
        transliteration: "Kazhikkuka",
        meaning: "Eat (infinitive form)",
      },
      {
        original: "പഠിക്കുന്നു",
        transliteration: "Padikkunnu",
        meaning: "Studying",
      }
    ]
  }
];

const malayalamSentenceStructure: GrammarItem[] = [
  {
    title: "വാക്യ ഘടന (Sentence Structure)",
    explanation: "Malayalam follows a Subject-Object-Verb (SOV) word order, unlike English which uses Subject-Verb-Object (SVO).",
    examples: [
      {
        original: "ഞാൻ ചോറ് കഴിക്കുന്നു",
        transliteration: "Njan choru kazhikkunnu",
        meaning: "I rice eat (I eat rice)",
      }
    ]
  }
];

const malayalamAdjectives: GrammarItem[] = [
  {
    title: "വിശേഷണങ്ങളുടെ അവതരണം (Introduction to Adjectives)",
    explanation: "Malayalam adjectives describe or modify nouns. They usually precede the nouns they modify.",
    examples: [
      {
        original: "വലിയ വീട്",
        transliteration: "Valiya veedu",
        meaning: "Big house",
      },
      {
        original: "ചെറിയ പൂച്ച",
        transliteration: "Cheriya poocha",
        meaning: "Small cat",
      }
    ]
  }
];

// Functions to get grammar data based on category
export const getTamilGrammarData = (category: string): GrammarItem[] => {
  switch (category) {
    case 'nouns':
      return tamilNouns;
    case 'verbs':
      return tamilVerbs;
    case 'sentenceStructure':
      return tamilSentenceStructure;
    case 'adjectives':
      return tamilAdjectives;
    default:
      return tamilNouns;
  }
};

export const getMalayalamGrammarData = (category: string): GrammarItem[] => {
  switch (category) {
    case 'nouns':
      return malayalamNouns;
    case 'verbs':
      return malayalamVerbs;
    case 'sentenceStructure':
      return malayalamSentenceStructure;
    case 'adjectives':
      return malayalamAdjectives;
    default:
      return malayalamNouns;
  }
};
