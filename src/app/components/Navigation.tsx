import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Languages } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const navLinks = [
  { name: 'nav.band', href: '#band' },
  { name: 'nav.music', href: '#music' },
  { name: 'nav.setlist', href: '#setlist' },
  { name: 'nav.gigs', href: '#gigs' },
  { name: 'nav.contact', href: '#contact' },
];

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'it' ? 'en' : 'it');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-orange-600/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <img 
              src="/logo.png" 
              alt="Pollege" 
              className="h-12 w-auto"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(249, 115, 22, 0.5))',
              }}
            />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-orange-500 font-semibold uppercase text-sm tracking-wider transition-colors relative group"
              >
                {t(link.name)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-orange-500"
            >
              <Languages className="w-4 h-4 mr-1" />
              {language.toUpperCase()}
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase"
            >
              {t('nav.bookNow')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-orange-500"
            >
              <Languages className="w-4 h-4" />
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:text-orange-500 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left text-gray-300 hover:text-orange-500 font-semibold uppercase text-sm tracking-wider transition-colors py-2"
                  >
                    {t(link.name)}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase"
                >
                  {t('nav.bookNow')}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
