import { motion } from 'motion/react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Pollege" 
                className="h-16 w-auto"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(249, 115, 22, 0.5))',
                }}
              />
            </div>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {['Band', 'Music', 'Setlist', 'Gigs', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {t(`nav.${link.toLowerCase()}`)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">
              {t('footer.followUs')}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/pollege"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 p-3 rounded-lg hover:bg-orange-600 transition-colors group"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://instagram.com/pollege"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 p-3 rounded-lg hover:bg-orange-600 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://youtube.com/@pollege"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 p-3 rounded-lg hover:bg-orange-600 transition-colors group"
              >
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              {t('contact.booking')}: <a href="mailto:booking@pollege.com" className="text-orange-600 hover:underline">booking@pollege.com</a>
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-900 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Pollege. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
