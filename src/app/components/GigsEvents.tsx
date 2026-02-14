import { motion } from 'motion/react';
import Slider from 'react-slick';
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const upcomingGigs = [
  {
    id: 1,
    date: '2026-03-15',
    venue: 'The Rock Arena',
    city: 'Milan',
    time: '21:00',
    status: 'tickets',
  },
  {
    id: 2,
    date: '2026-03-28',
    venue: 'Underground Club',
    city: 'Rome',
    time: '22:00',
    status: 'tickets',
  },
  {
    id: 3,
    date: '2026-04-10',
    venue: 'Music Hall',
    city: 'Turin',
    time: '20:30',
    status: 'soldout',
  },
  {
    id: 4,
    date: '2026-04-22',
    venue: 'Live Music Venue',
    city: 'Florence',
    time: '21:30',
    status: 'tickets',
  },
];

const pastGigs = [
  {
    id: 1,
    date: '2026-02-10',
    venue: 'Rock Festival',
    city: 'Bologna',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    date: '2026-01-25',
    venue: 'City Arena',
    city: 'Verona',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    date: '2026-01-12',
    venue: 'The Stage',
    city: 'Genoa',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    date: '2025-12-30',
    venue: "New Year's Eve Party",
    city: 'Naples',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    date: '2025-12-15',
    venue: 'Winter Rock Fest',
    city: 'Venice',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&auto=format&fit=crop',
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return {
    day: date.getDate(),
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    year: date.getFullYear(),
  };
}

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-cyan-600 hover:bg-cyan-700 p-3 rounded-full transition-all"
    >
      <ChevronRight className="w-6 h-6 text-white" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-cyan-600 hover:bg-cyan-700 p-3 rounded-full transition-all"
    >
      <ChevronLeft className="w-6 h-6 text-white" />
    </button>
  );
};

export function GigsEvents() {
  const { t } = useLanguage();
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="gigs" className="py-24 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-wider">
            {t('gigs.title')}
          </h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto" />
        </motion.div>

        {/* Upcoming Gigs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-cyan-600" />
            {t('gigs.upcoming')}
          </h3>
          <div className="space-y-4">
            {upcomingGigs.map((gig) => {
              const { day, month, year } = formatDate(gig.date);
              return (
                <div
                  key={gig.id}
                  className="bg-black/50 border border-zinc-800 rounded-lg p-6 hover:border-cyan-600 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Date Box */}
                    <div className="bg-cyan-600 text-white p-4 rounded-lg text-center min-w-[100px]">
                      <div className="text-3xl font-black">{day}</div>
                      <div className="text-sm font-bold">{month}</div>
                      <div className="text-xs opacity-80">{year}</div>
                    </div>

                    {/* Gig Info */}
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-600 transition-colors">
                        {gig.venue}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-gray-400">
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {gig.city}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {gig.time}
                        </span>
                      </div>
                    </div>

                    {/* Status/Action */}
                    <div>
                      {gig.status === 'soldout' ? (
                        <div className="bg-zinc-800 px-6 py-3 rounded text-gray-400 font-bold">
                          {t('gigs.soldout')}
                        </div>
                      ) : (
                        <Button className="bg-cyan-600 hover:bg-cyan-700 px-8 py-6">
                          {t('gigs.tickets')}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Past Gigs Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-cyan-600" />
            {t('gigs.past')}
          </h3>
          <div className="past-gigs-slider">
            <Slider {...sliderSettings}>
              {pastGigs.map((gig) => {
                const { day, month } = formatDate(gig.date);
                return (
                  <div key={gig.id} className="px-2">
                    <div className="relative group overflow-hidden rounded-lg">
                      <img
                        src={gig.image}
                        alt={`${gig.venue} - ${gig.city}`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                      <div className="absolute top-4 left-4 bg-cyan-600 text-white px-4 py-2 rounded font-bold">
                        {day} {month}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h4 className="text-xl font-bold text-white mb-1">
                          {gig.venue}
                        </h4>
                        <p className="text-cyan-400 font-semibold">{gig.city}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </motion.div>
      </div>

      <style>{`
        .past-gigs-slider .slick-dots {
          bottom: -40px;
        }
        .past-gigs-slider .slick-dots li button:before {
          color: #06b6d4;
          font-size: 12px;
        }
        .past-gigs-slider .slick-dots li.slick-active button:before {
          color: #06b6d4;
        }
      `}</style>
    </section>
  );
}