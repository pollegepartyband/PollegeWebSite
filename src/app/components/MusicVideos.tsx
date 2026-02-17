import { motion } from 'motion/react';
import { Youtube, Music, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const videoLinks = [
  {
    title: 'Nirvana - Smells Like Teen Spirit',
    url: 'https://youtube.com/watch?v=hTWKbfoikeg',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop',
  },
  {
    title: 'Foo Fighters - Everlong',
    url: 'https://youtube.com/watch?v=eBG7P-K-r1Y',
    thumbnail: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop',
  },
  {
    title: 'Green Day - Basket Case',
    url: 'https://youtube.com/watch?v=NUTGr5t3MoY',
    thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop',
  },
  {
    title: 'The Killers - Mr. Brightside',
    url: 'https://youtube.com/watch?v=gGdGFtwCNBE',
    thumbnail: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop',
  },
  {
    title: 'Muse - Supermassive Black Hole',
    url: 'https://youtube.com/watch?v=Xsp3_a-PMTw',
    thumbnail: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&auto=format&fit=crop',
  },
  {
    title: 'Arctic Monkeys - Do I Wanna Know?',
    url: 'https://youtube.com/watch?v=bpOSxM0rNPM',
    thumbnail: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&auto=format&fit=crop',
  },
];

export function MusicVideos() {
  const { t } = useLanguage();

  return (
    <section id="music" className="py-24 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-wider">
            {t('music.title')}
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto" />
        </motion.div>

        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-black">
            <TabsTrigger
              value="videos"
              className="text-white bg-black data-[state=active]:bg-orange-600"
            >
              <Youtube className="w-5 h-5 mr-2 text-white" />
              {t('music.videos')}
            </TabsTrigger>
            <TabsTrigger
              value="spotify"
              className="text-white bg-black data-[state=active]:bg-orange-600"
            >
              <Music className="w-5 h-5 mr-2 text-white" />
              {t('music.spotify')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-black/50 p-8 rounded-lg border border-zinc-800 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Youtube className="w-8 h-8 text-orange-600" />
                  {t('music.videoLinks')}
                </h3>
                <p className="text-gray-400 mb-6">
                  {t('music.videoDescription')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoLinks.map((video, i) => (
                  <motion.a
                    key={i}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative overflow-hidden rounded-lg bg-black border border-zinc-800 hover:border-orange-600 transition-all"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-orange-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                          <Youtube className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* External Link Icon */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="text-white font-semibold group-hover:text-orange-400 transition-colors">
                        {video.title}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="spotify" className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-black/50 p-8 rounded-lg border border-zinc-800">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Music className="w-8 h-8 text-orange-600" />
                  {t('music.playlistTitle')}
                </h3>
                <p className="text-gray-400 mb-6">
                  {t('music.playlistDescription')}
                </p>
                <div className="aspect-[2/1] bg-black rounded-lg overflow-hidden shadow-2xl shadow-orange-600/20">
                  <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/playlist/7ARam3sPlrffoSuJ2w8cwr?si=4c1d666ab0be4eaa"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Pollege Rock Playlist"
                  />
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}