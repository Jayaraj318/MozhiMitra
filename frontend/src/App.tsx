import { Toaster } from 'react-hot-toast';
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import AlphabetsPage from "./pages/AlphabetsPage";
import NumbersPage from "./pages/NumbersPage";
import VocabularyPage from "./pages/VocabularyPage";
import PhrasesPage from "./pages/PhrasesPage";
import GrammarPage from "./pages/GrammarPage";
import QuizPage from "./pages/QuizPage";
import QuizTask from "./pages/QuizTask";
import GamesPage from "./pages/GamesPage";
import GameTask from "./pages/GameTask";
import Profile from "./components/Profile/Profile";
import NotFound from "./pages/NotFound";
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

import ProtectedRoute from './context/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  {/* Public routes - accessible to all */}
                  <Route path="/" element={<Index />} />
                  <Route path="/auth/login" element={<Login />} />
                  <Route path="/auth/signup" element={<Signup />} />

                  {/* Protected routes - require authentication */}
                  <Route element={<ProtectedRoute />}>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/alphabets" element={<AlphabetsPage />} />
                    <Route path="/numbers" element={<NumbersPage />} />
                    <Route path="/vocabulary" element={<VocabularyPage />} />
                    <Route path="/phrases" element={<PhrasesPage />} />
                    <Route path="/grammar" element={<GrammarPage />} />
                    <Route path="/grammar/:language/:category" element={<GrammarPage />} />
                    <Route path="/quiz" element={<QuizPage />} />
                    <Route path="/quiz/:category/:task" element={<QuizTask />} />
                    <Route path="/games" element={<GamesPage />} />
                    <Route path="/games/:category/:task" element={<GameTask />} />
                  </Route>

                  {/* 404 route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </AuthProvider>
          <Toaster position="top-right" />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
