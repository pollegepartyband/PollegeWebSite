import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Booking Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Date: ${formData.eventDate}

Message:
${formData.message}
    `.trim();
    
    window.location.href = `mailto:booking@pollege.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast.success(t('contact.opening'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-wider">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 p-8 rounded-lg border border-zinc-800"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Send className="w-6 h-6 text-orange-600" />
              {t('contact.formTitle')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-400 mb-2">
                  {t('contact.name')} {t('contact.required')}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black border-zinc-800 focus:border-orange-600 text-white"
                  placeholder={t('contact.placeholder.name')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-400 mb-2">
                  {t('contact.email')} {t('contact.required')}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black border-zinc-800 focus:border-orange-600 text-white"
                  placeholder={t('contact.placeholder.email')}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-400 mb-2">
                  {t('contact.phone')}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-black border-zinc-800 focus:border-orange-600 text-white"
                  placeholder={t('contact.placeholder.phone')}
                />
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-400 mb-2">
                  {t('contact.eventDate')}
                </label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="bg-black border-zinc-800 focus:border-orange-600 text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-400 mb-2">
                  {t('contact.message')} {t('contact.required')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-black border-zinc-800 focus:border-orange-600 text-white resize-none"
                  placeholder={t('contact.placeholder.message')}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg font-bold"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('contact.send')}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.getInTouch')}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{t('contact.emailLabel')}</p>
                    <a
                      href="mailto:booking@pollege.com"
                      className="text-white font-semibold hover:text-orange-600 transition-colors"
                    >
                      booking@pollege.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{t('contact.phoneLabel')}</p>
                    <a
                      href="tel:+39123456789"
                      className="text-white font-semibold hover:text-orange-600 transition-colors"
                    >
                      +39 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{t('contact.based')}</p>
                    <p className="text-white font-semibold">{t('contact.location')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.follow')}</h3>
              <div className="space-y-4">
                <a
                  href="https://facebook.com/pollege"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black/50 rounded-lg hover:bg-orange-600/10 hover:border-orange-600 border border-transparent transition-all group"
                >
                  <Facebook className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-white font-semibold">Facebook</p>
                    <p className="text-gray-400 text-sm">@pollege</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/pollege"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black/50 rounded-lg hover:bg-orange-600/10 hover:border-orange-600 border border-transparent transition-all group"
                >
                  <Instagram className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-white font-semibold">Instagram</p>
                    <p className="text-gray-400 text-sm">@pollege</p>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@pollege"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black/50 rounded-lg hover:bg-orange-600/10 hover:border-orange-600 border border-transparent transition-all group"
                >
                  <Youtube className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-white font-semibold">YouTube</p>
                    <p className="text-gray-400 text-sm">@pollege</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="bg-gradient-to-br from-orange-600 to-orange-800 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-3">{t('contact.ready')}</h3>
              <p className="text-orange-100 mb-6">
                {t('contact.readyDescription')}
              </p>
              <Button
                onClick={() => {
                  const contactForm = document.querySelector('#contact form');
                  contactForm?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-orange-600 hover:bg-gray-100 font-bold"
              >
                {t('contact.quote')}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}