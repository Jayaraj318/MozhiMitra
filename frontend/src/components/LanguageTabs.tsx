
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LanguageOption } from '@/lib/data';

interface LanguageTabsProps {
  children: React.ReactNode;
  defaultValue?: LanguageOption;
  value?: LanguageOption;
  onTabChange?: (value: LanguageOption) => void;
}

const LanguageTabs = ({ children, defaultValue = 'tamil', value, onTabChange }: LanguageTabsProps) => {
  const [activeTab, setActiveTab] = useState<LanguageOption>(value || defaultValue);
  
  useEffect(() => {
    if (value && value !== activeTab) {
      setActiveTab(value);
    }
  }, [value]);
  
  const handleTabChange = (newValue: string) => {
    const typedValue = newValue as LanguageOption;
    setActiveTab(typedValue);
    if (onTabChange) {
      onTabChange(typedValue);
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <TabsList className="grid grid-cols-2 mb-8">
        <TabsTrigger 
          value="tamil" 
          className="data-[state=active]:bg-tamil/20 data-[state=active]:text-tamil-dark"
        >
          Tamil
        </TabsTrigger>
        <TabsTrigger 
          value="malayalam" 
          className="data-[state=active]:bg-malayalam/20 data-[state=active]:text-malayalam-dark"
        >
          Malayalam
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

export default LanguageTabs;
