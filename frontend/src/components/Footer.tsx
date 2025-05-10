
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gradient">TamaLearn</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Master Tamil and Malayalam languages with our interactive learning platform. Fun, 
              efficient and engaging way to learn South Indian languages.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Learn</h4>
            <ul className="space-y-2">
              <li><Link to="/alphabets" className="text-muted-foreground hover:text-primary transition-colors">Alphabets</Link></li>
              <li><Link to="/vocabulary" className="text-muted-foreground hover:text-primary transition-colors">Vocabulary</Link></li>
              <li><Link to="/grammar" className="text-muted-foreground hover:text-primary transition-colors">Grammar</Link></li>
              <li><Link to="/conversation" className="text-muted-foreground hover:text-primary transition-colors">Conversation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-muted-foreground">
              Subscribe to our newsletter
            </p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-background border rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-white px-3 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TamaLearn. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
