import { motion } from 'motion/react';
import { Music2 } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
const logo = '/assets/48a27fa934bb1b60a719d135d27d9548b79973ae.png';

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHN0YWdlJTIwbGlnaHRpbmclMjBjb25jZXJ0fGVufDF8fHx8MTc3MTA3NjY4Mnww&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Stage Lighting Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
            top: '20%',
            left: '10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
            top: '30%',
            right: '10%',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-6"
        >
          <img 
            src={logo} 
            alt="Pollege Logo" 
            className="w-64 md:w-96 h-auto"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.5))',
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-cyan-400 font-bold mb-12 tracking-wide"
        >
          {t('hero.tagline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={scrollToContact}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-7 text-xl font-bold rounded-none transform hover:scale-105 transition-all shadow-lg shadow-cyan-600/50"
          >
            {t('hero.cta')}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <p className="text-gray-400 text-sm uppercase tracking-widest">
            {t('hero.scroll')}
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-4"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center pt-2">
              <div className="w-1 h-3 bg-cyan-600 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
