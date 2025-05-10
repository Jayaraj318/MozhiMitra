
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProgressBar from './ProgressBar';
import { LearningModule } from '@/lib/data';

interface LearningCardProps {
  module: LearningModule;
  index: number;
}

const LearningCard = ({ module, index }: LearningCardProps) => {
  // Placeholder for progress data that would come from user context in real app
  const progress = {
    completed: module.completed || Math.floor(Math.random() * module.totalItems),
    total: module.totalItems,
  };
  
  // Calculate animation delay based on index
  const delay = index * 0.1;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay, 
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -5, transition: { delay: 0 } }}
    >
      <Link to={module.route} className="block h-full">
        <div className="learning-card">
          <div className={`text-xs font-medium uppercase tracking-wider px-2 py-1 rounded-full inline-self-start mb-3 ${
            module.language === 'tamil' ? 'bg-tamil/10 text-tamil-dark' : 'bg-malayalam/10 text-malayalam-dark'
          }`}>
            {module.language}
          </div>
          
          <h3 className="text-xl font-bold mb-2">{module.title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{module.description}</p>
          
          <ProgressBar 
            value={progress.completed} 
            total={progress.total}
            variant={module.language === 'tamil' ? 'tamil' : 'malayalam'}
            className="mt-auto"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default LearningCard;
