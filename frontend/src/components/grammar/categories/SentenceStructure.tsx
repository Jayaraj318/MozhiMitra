import { LanguageOption } from '@/lib/data';

interface SentenceStructureProps {
  language: LanguageOption;
}

const SentenceStructure = ({ language }: SentenceStructureProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Sentence Structure (SOV Order)</h2>
      
      <div className="prose max-w-none dark:prose-invert">
        <p>Basic sentence structure follows Subject-Object-Verb (SOV) order:</p>
        
        <div className="bg-muted p-4 rounded-lg my-4">
          <p className="font-semibold mb-2">Example:</p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Subject</p>
              <p>John</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Object</p>
              <p>apple</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Verb</p>
              <p>eats</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Key Rules:</h3>
        <ul>
          <li>Subject comes first in the sentence</li>
          <li>Object follows the subject</li>
          <li>Verb appears at the end</li>
          <li>Modifiers usually come before the word they modify</li>
        </ul>
      </div>
    </div>
  );
};

export default SentenceStructure;