import { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GrammarItem, LanguageOption } from '@/lib/data';
import { handlePlayAudio } from './grammarUtils';
import { GrammarCategory } from './grammarUtils';
import { toast } from '@/components/ui/use-toast';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CategoryTabs from '@/components/grammar/CategoryTabs';

// Import or define mock grammar data
import { getTamilGrammarData, getMalayalamGrammarData } from '@/lib/data';

interface GrammarContentProps {
  language: LanguageOption;
  category: GrammarCategory;
  grammarData: any;
}

const GrammarContent = ({ language, category, grammarData }: GrammarContentProps) => {
  const renderExamples = (examples: any[]) => (
    <div className="space-y-4 mt-4">
      {examples.map((example, index) => (
        <div
          key={index}
          className={`${language === 'tamil'
              ? 'bg-indigo-50 border-indigo-100'
              : 'bg-emerald-50 border-emerald-100'
            } border rounded-lg p-4`}
        >
          <div className="flex items-start justify-between">
            <div className="space-y-3 flex-1">
              <div>
                <p className="text-sm text-gray-500">Example:</p>
                <p className={`text-lg font-medium ${language === 'tamil' ? 'text-indigo-900' : 'text-emerald-900'
                  }`}>
                  {example.example}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Transliteration:</p>
                <p className="text-gray-700">{example.transliteration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Translation:</p>
                <p className="text-gray-700">{example.translation}</p>
              </div>
            </div>
            {example.audio && (
              <button
                onClick={() => handlePlayAudio(example.audio)}
                className={`p-2 rounded-full transition-colors ${language === 'tamil'
                    ? 'hover:bg-indigo-100 text-indigo-600'
                    : 'hover:bg-emerald-100 text-emerald-600'
                  }`}
              >
                <Volume2 className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="prose max-w-none">
        {grammarData.description && (
          <div className="mb-6">
            <p className="text-gray-700">{grammarData.description}</p>
          </div>
        )}
        {grammarData.examples && renderExamples(grammarData.examples)}
        {!grammarData.description && !grammarData.examples && (
          Object.entries(grammarData).map(([key, section]: [string, any]) => (
            <div key={key} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 capitalize">{key}</h3>
              {section.description && (
                <p className="text-gray-700 mb-4">{section.description}</p>
              )}
              {section.examples && renderExamples(section.examples)}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GrammarContent;

const GrammarPage = () => {
  const [language, setLanguage] = useState<LanguageOption>('tamil');
  const [category, setCategory] = useState<GrammarCategory>('sentenceStructure');

  // Get appropriate grammar data based on language and category
  const getGrammarData = () => {
    if (language === 'tamil') {
      return getTamilGrammarData(category);
    } else {
      return getMalayalamGrammarData(category);
    }
  };

  const grammarData = getGrammarData();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Grammar Guide</h1>
          <CategoryTabs
            language={language}
            currentCategory={category}
            onCategoryChange={setCategory}
            onLanguageChange={setLanguage} availableCategories={[]} />
          <GrammarContent language={language} category={category} grammarData={grammarData} />
        </div>
      </main>
      <Footer />
    </div>
  );
};
