import { Button } from "@/components/ui/button";
import { Menu, X, UserCircle } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname.startsWith(path);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Alphabets", path: "/alphabets" },
    { name: "Numbers", path: "/numbers" },
    { name: "Vocabulary", path: "/vocabulary" },
    { name: "Phrases", path: "/phrases" },
    { name: "Grammar", path: "/grammar" },
    { name: "Quizzes", path: "/quiz" },
    { name: "Games", path: "/games" },
  ];

  return (
    <header className="bg-background border-b">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl md:text-2xl font-bold">
            Language Learning
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={isActive(item.path) ? "default" : "ghost"}
                className="text-sm"
                asChild
              >
                <Link to={item.path}>{item.name}</Link>
              </Button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/profile')}
              className="rounded-full"
              aria-label="Profile"
            >
              <UserCircle className="h-5 w-5" />
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/profile')}
              className="rounded-full"
              aria-label="Profile"
            >
              <UserCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={isActive(item.path) ? "default" : "ghost"}
                className="w-full justify-start mb-2"
                onClick={() => setMenuOpen(false)}
                asChild
              >
                <Link to={item.path}>{item.name}</Link>
              </Button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
