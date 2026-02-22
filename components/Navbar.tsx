
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Wellness', path: '/services' },
    { name: 'Team', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-white/10 dark:border-white/5 py-3 shadow-lg' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-tr from-blue-600 to-indigo-500 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <span className={`text-xl font-extrabold tracking-tight ${isScrolled || theme === 'dark' ? 'text-slate-900 dark:text-white' : 'text-slate-900'}`}>
              Healina Clinic
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold transition-all hover:scale-105 ${
                  isActive(link.path) 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 border-l border-slate-200 dark:border-slate-800 pl-8">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 hover:scale-110 active:scale-95 transition-all shadow-inner"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              
              <Link
                to="/book"
                className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button onClick={toggleTheme} className="p-2 text-slate-600 dark:text-slate-400">
               {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-t dark:border-slate-800 shadow-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 py-8 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="px-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-bold ${isActive(link.path) ? 'text-blue-600' : 'text-slate-600 dark:text-slate-400'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-blue-600 text-white px-5 py-4 rounded-2xl text-lg font-bold"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
