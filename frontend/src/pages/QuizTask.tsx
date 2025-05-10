import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '@/components/Footer';
import { toast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { API_ENDPOINTS } from '@/config/api';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface QuizResponse {
  questions: Question[];
}

const QuizTask = () => {
  const { category, task } = useParams<{ category: string; task: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (!category || !task) return;

      try {
        const response = await axios.get<QuizResponse>(`http://localhost:5000/api/quiz/${category}/${task}`);
        if (response.data.questions) {
          setQuestions(response.data.questions);
        }
      } catch (error) {
        console.error('Failed to fetch questions:', error);
        toast({
          title: 'Error',
          description: 'Failed to load quiz questions. Please try again later.',
          variant: 'destructive',
        });
      }
    };

    fetchQuestions();
  }, [category, task]);

  const handleNext = async () => {
    if (selectedOption === null) {
      toast({
        title: 'Please select an answer',
        description: 'You must select an option to continue.',
        variant: 'destructive',
      });
      return;
    }

    const isCorrect = questions[currentQuestion].correctAnswer === selectedOption;
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizComplete(true);
      if (score + 1 >= questions.length / 2) {
        await axios.post(`http://localhost:5000/api/quiz/${category}/unlock-next/${task}`);
      }
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setQuizComplete(false);
  };

  const handleBackToQuizzes = () => {
    navigate('/quiz');
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center">Loading questions...</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {!quizComplete ? (
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1} of {questions.length}</h2>
                <p className="text-lg mb-6">{questions[currentQuestion].question}</p>

                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className={`w-full p-4 text-left rounded-lg border ${selectedOption === option
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                        }`}
                      onClick={() => setSelectedOption(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <button
                className="w-full bg-primary text-primary-foreground p-4 rounded-lg"
                onClick={handleNext}
              >
                Next Question
              </button>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
              <p className="text-xl mb-8">Your score: {score} out of {questions.length}</p>

              <div className="space-x-4">
                <button
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg"
                  onClick={handleRetry}
                >
                  Try Again
                </button>
                <button
                  className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg"
                  onClick={handleBackToQuizzes}
                >
                  Back to Quizzes
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuizTask;

