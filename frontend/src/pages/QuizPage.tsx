import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock } from 'lucide-react';
import Footer from '@/components/Footer';
import { toast } from '@/components/ui/use-toast';
import axios from 'axios';

export interface QuizTask {
  id: string;
  title: string;
  description: string;
  isUnlocked: boolean;
  slug: string;
}

export interface QuizCategory {
  _id: string;
  category: string;
  title: string;
  description: string;
  tasks: QuizTask[];
}

const QuizPage = () => {
  const navigate = useNavigate();
  const [quizCategories, setQuizCategories] = useState<QuizCategory[]>([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get<QuizCategory[]>('http://localhost:5000/api/quiz');
        setQuizCategories(response.data);
      } catch (error) {
        console.error('Failed to fetch quizzes:', error);
        toast({
          title: 'Error',
          description: 'Failed to load quizzes. Please try again later.',
          variant: 'destructive',
        });
      }
    };

    fetchQuizzes();
  }, []);

  const handleTaskClick = (category: string, task: QuizTask) => {
    if (!task.isUnlocked) {
      toast({
        title: 'Task Locked',
        description: 'Complete the previous task to unlock this one.',
        variant: 'destructive',
      });
      return;
    }

    navigate(`/quiz/${category}/${task.slug}`);
  };

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Interactive Quizzes</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Challenge yourself with exciting quizzes on various topics, including language learning.
          Complete each quiz to unlock new levels and earn rewards as you learn!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizCategories.map((category) => (
            <Card key={category._id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-4 border rounded-md cursor-pointer transition-all ${task.isUnlocked
                      ? 'hover:bg-muted border-muted-foreground/20'
                      : 'opacity-70 bg-muted/30 border-muted-foreground/10'
                      }`}
                    onClick={() => handleTaskClick(category.category, task)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{task.title}</h3>
                        <p className="text-sm text-muted-foreground">{task.description}</p>
                      </div>
                      {!task.isUnlocked && <Lock className="h-5 w-5 text-muted-foreground" />}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuizPage;
