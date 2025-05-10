import { Button } from '@/components/ui/button';
import { LanguageOption } from '@/lib/data';
import { GrammarCategory, getCategoryTitle } from './grammarUtils';

interface CategoryTabsProps {
  language: LanguageOption;
  currentCategory: GrammarCategory;
  onCategoryChange: (category: GrammarCategory) => void;
  availableCategories: GrammarCategory[];
  onLanguageChange: (language: LanguageOption) => void;
}

const defaultCategories: GrammarCategory[] = [
  'sentenceStructure',
  'nouns',
  'pronouns',
  'verbs',
  'adjectives',
  'adverbs',
  'interjections',
  'numbers'
];

const CategoryTabs = ({
  language,
  currentCategory,
  onCategoryChange,
  onLanguageChange,
}: CategoryTabsProps) => {
  return (
    <div className="space-y-6">
      {/* Language Selection Tabs */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex gap-4 border-b border-gray-200">
          <button
            onClick={() => onLanguageChange('tamil')}
            className={`px-6 py-3 -mb-px text-lg font-medium transition-colors ${language === 'tamil'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-600 hover:text-gray-800'
              }`}
          >
            Tamil
          </button>
          <button
            onClick={() => onLanguageChange('malayalam')}
            className={`px-6 py-3 -mb-px text-lg font-medium transition-colors ${language === 'malayalam'
                ? 'border-b-2 border-emerald-600 text-emerald-600'
                : 'text-gray-600 hover:text-gray-800'
              }`}
          >
            Malayalam
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {defaultCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`p-4 rounded-lg text-center transition-all ${currentCategory === cat
                  ? language === 'tamil'
                    ? 'bg-indigo-100 text-indigo-700 shadow-sm'
                    : 'bg-emerald-100 text-emerald-700 shadow-sm'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
            >
              <span className="block text-sm font-medium mb-1">
                {getCategoryTitle(language, cat).split('(')[0]}
              </span>
              <span className="block text-xs text-gray-500">
                ({getCategoryTitle(language, cat).split('(')[1]?.replace(')', '')}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
