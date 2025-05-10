
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';

type ModuleProgress = {
  moduleId: string;
  completed: number;
  lastAccessed: Date;
};

type UserProgress = {
  modules: Record<string, ModuleProgress>;
  currentStreak: number;
  totalPoints: number;
  level: number;
};

type ProgressContextType = {
  progress: UserProgress;
  updateModuleProgress: (moduleId: string, completed: number) => void;
  getModuleProgress: (moduleId: string) => ModuleProgress | undefined;
  addPoints: (points: number) => void;
};

const defaultProgress: UserProgress = {
  modules: {},
  currentStreak: 0,
  totalPoints: 0,
  level: 1
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);

  // Load progress from localStorage when user changes
  useEffect(() => {
    if (user) {
      const savedProgress = localStorage.getItem(`progress_${user.id}`);
      if (savedProgress) {
        try {
          setProgress(JSON.parse(savedProgress));
        } catch (error) {
          console.error('Error parsing progress data:', error);
          setProgress(defaultProgress);
        }
      } else {
        setProgress(defaultProgress);
      }
    } else {
      setProgress(defaultProgress);
    }
  }, [user]);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(`progress_${user.id}`, JSON.stringify(progress));
    }
  }, [progress, user]);

  const updateModuleProgress = (moduleId: string, completed: number) => {
    setProgress(prev => {
      const updatedModules = {
        ...prev.modules,
        [moduleId]: {
          moduleId,
          completed,
          lastAccessed: new Date()
        }
      };

      return {
        ...prev,
        modules: updatedModules
      };
    });
  };

  const getModuleProgress = (moduleId: string) => {
    return progress.modules[moduleId];
  };

  const addPoints = (points: number) => {
    setProgress(prev => {
      const newTotalPoints = prev.totalPoints + points;
      const newLevel = Math.floor(newTotalPoints / 100) + 1; // Simple level calculation
      
      return {
        ...prev,
        totalPoints: newTotalPoints,
        level: newLevel
      };
    });
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        updateModuleProgress,
        getModuleProgress,
        addPoints
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
