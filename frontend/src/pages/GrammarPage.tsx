import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import GrammarContent from '@/components/grammar/GrammarContent';
import CategoryTabs from '@/components/grammar/CategoryTabs';
import { GrammarCategory } from '@/components/grammar/grammarUtils';
import { LanguageOption } from '@/lib/data';

const GrammarPage = () => {
  const [language, setLanguage] = useState<LanguageOption>('tamil');
  const [category, setCategory] = useState<GrammarCategory>('sentenceStructure');
  const [grammarData, setGrammarData] = useState<any>(null);
  const [availableCategories, setAvailableCategories] = useState<GrammarCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGrammarData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://localhost:5000/api/grammar?language=${language}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch grammar data: ${response.statusText}`);
        }

        const data = await response.json();
        setGrammarData(data);

        // Extract available categories dynamically
        const categories = Object.keys(data) as GrammarCategory[];
        setAvailableCategories(categories);

        // Set the default category if the current one is not available
        if (!categories.includes(category)) {
          setCategory(categories[0]);
        }
      } catch (err) {
        console.error('Error fetching grammar data:', err);
        setError('Failed to fetch grammar data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchGrammarData();
  }, [language]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://localhost:5000/api/grammar?language=${language}&category=${category}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch category data: ${response.statusText}`);
        }

        const data = await response.json();
        setGrammarData(data);
      } catch (err) {
        console.error('Error fetching category data:', err);
        setError('Failed to fetch category data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchCategoryData();
    }
  }, [language, category]);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-3xl font-bold mb-6 ${language === 'tamil' ? 'text-indigo-900' : 'text-emerald-900'
            }`}>
            Grammar Guide
          </h1>

          <CategoryTabs
            language={language}
            currentCategory={category}
            onCategoryChange={setCategory}
            availableCategories={availableCategories}
            onLanguageChange={setLanguage}
          />

          <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            {loading && (
              <div className="flex items-center justify-center py-8">
                <div className={`animate-spin rounded-full h-8 w-8 border-b-2 ${language === 'tamil' ? 'border-indigo-600' : 'border-emerald-600'
                  }`} />
              </div>
            )}
            {error && (
              <div className="text-red-500 p-4 bg-red-50 rounded-lg">
                {error}
              </div>
            )}
            {!loading && !error && grammarData && (
              <GrammarContent
                language={language}
                category={category}
                grammarData={grammarData}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GrammarPage;