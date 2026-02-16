import { motion } from 'motion/react';
import { Guitar, Mic, Drum, Music4, Piano } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const members = [
  {
    name: 'Andrea Calabrese',
    instrument: 'band.vocals',
    image: 'https://images.unsplash.com/photo-1759415535838-33b2835316d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcm9jayUyMHNpbmdlciUyMG1pY3JvcGhvbmV8ZW58MXx8fHwxNzcxMDc2NjgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Mic,
  },
  {
    name: 'Giuseppe Divella',
    instrument: 'band.leadGuitar',
    image: 'https://images.unsplash.com/photo-1762160768542-35019618bf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZ3VpdGFyaXN0JTIwcm9jayUyMG11c2ljaWFufGVufDF8fHx8MTc3MTA3NjY4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Guitar,
  },
  {
    name: 'Davide Gamberini',
    instrument: 'band.drums',
    image: 'https://images.unsplash.com/photo-1762870357538-fa78adcdbc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnVtbWVyJTIwcGxheWluZyUyMGRydW1zJTIwbGl2ZXxlbnwxfHx8fDE3NzEwNzY2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Drum,
  },
  {
    name: 'Nicolò Bosio',
    instrument: 'band.bass',
    image: 'https://images.unsplash.com/photo-1528489496900-d841974f5290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNzJTIwZ3VpdGFyaXN0JTIwcm9jayUyMG11c2ljaWFufGVufDF8fHx8MTc3MTA3NjY4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Music4,
  },
  {
    name: 'Riccardo Pesserelli',
    instrument: 'band.keyboards',
    image: 'https://images.unsplash.com/photo-1763598821439-2e80f7e23562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMHBsYXllciUyMG11c2ljaWFuJTIwbGl2ZXxlbnwxfHx8fDE3NzEwNzY2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Piano,
  },
];

export function BandMembers() {
  const { t } = useLanguage();
  
  return (
    <section id="band" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-wider">
            {t('band.title')}
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {members.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden bg-zinc-900 aspect-square">
                  {/* Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 bg-orange-600 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-orange-400 font-semibold uppercase text-sm tracking-wide">
                      {t(member.instrument)}
                    </p>
                  </div>
                  
                  {/* Hover effect border */}
                  <div className="absolute inset-0 border-4 border-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}