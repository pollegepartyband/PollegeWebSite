import { useState } from 'react';
import { motion } from 'motion/react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Music2, GripVertical, Trash2, Mail, X, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { toast } from 'sonner';
import { useLanguage } from '../contexts/LanguageContext';

const availableSongs = [

  { id: 1, title: 'Somebody Told Me', artist: 'The Killers', decade: '2000s' },
  { id: 2, title: 'Feel Good Inc.', artist: 'Gorillaz, De La Soul', decade: '2000s' },
  { id: 3, title: 'Narcotic', artist: 'Liquido', decade: '90s' },
  { id: 4, title: 'Bohemian Like You', artist: 'The Dandy Warhols', decade: '2000s' },
  { id: 5, title: 'Alright', artist: 'Supergrass', decade: '90s' },
  { id: 6, title: 'Chelsea Dagger', artist: 'The Fratellis', decade: '2000s' },
  { id: 7, title: 'Lonely Boy', artist: 'The Black Keys', decade: '2010s+' },
  { id: 8, title: 'I Bet You Look Good On The Dancefloor', artist: 'Arctic Monkeys', decade: '2000s' },
  { id: 9, title: 'Take Me Out', artist: 'Franz Ferdinand', decade: '2000s' },
  { id: 10, title: 'Reptilia', artist: 'The Strokes', decade: '2000s' },
  { id: 11, title: 'Gli Spari Sopra (Celebrate)', artist: 'Vasco Rossi', decade: '90s' },
  { id: 12, title: 'Under the Bridge', artist: 'Red Hot Chili Peppers', decade: '90s' },
  { id: 13, title: 'Discolabirinto', artist: 'Subsonica', decade: '90s' },
  { id: 14, title: "What's My Age Again?", artist: 'blink-182', decade: '90s' },
  { id: 15, title: 'Basket Case', artist: 'Green Day', decade: '90s' },
  { id: 16, title: 'Higher Ground', artist: 'Red Hot Chili Peppers', decade: '80s' },
  { id: 17, title: 'All The Small Things', artist: 'blink-182', decade: '90s' },
  { id: 18, title: 'I\'ll Be There for You', artist: 'The Rembrandts', decade: '90s' },
  { id: 19, title: 'Song 2', artist: 'Blur', decade: '90s' },
  { id: 20, title: 'Aeroplane', artist: 'Red Hot Chili Peppers', decade: '90s' },
  { id: 21, title: 'Holiday', artist: 'Green Day', decade: '2000s' },
  { id: 22, title: 'Mr. Brightside', artist: 'The Killers', decade: '2000s' },
  { id: 23, title: 'X Colpa Di Chi?', artist: 'Zucchero', decade: '90s' },
  { id: 24, title: 'Killing In the Name', artist: 'Rage Against The Machine', decade: '90s' },
  { id: 25, title: 'Kids', artist: 'MGMT', decade: '2010s+' },
  { id: 26, title: 'Walkin on the sun', artist: 'Smash Mouth', decade: '90s' },
  { id: 27, title: 'By The Way', artist: 'Red Hot Chili Peppers', decade: '2000s' },
  { id: 28, title: 'Shipping Up To Boston', artist: 'Dropkick Murphys', decade: '2000s' },
  { id: 29, title: 'Jerk It Out', artist: 'The Caesars', decade: '2000s' },
  { id: 30, title: 'Club Foot', artist: 'Kasabian', decade: '2000s' },
  { id: 31, title: 'Buddy Holly', artist: 'Weezer', decade: '90s' },


];

interface Song {
  id: number;
  title: string;
  artist: string;
  decade: string;
  isCustom?: boolean;
}

interface DraggableSongProps {
  song: Song;
  index?: number;
  isInSetlist?: boolean;
  onRemove?: (id: number) => void;
}

const DraggableSong = ({ song, index, isInSetlist, onRemove }: DraggableSongProps) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'song',
    item: { song, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`bg-zinc-900 p-4 rounded border border-zinc-800 hover:border-orange-600 transition-all cursor-move group ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <GripVertical className="w-4 h-4 text-gray-600 group-hover:text-orange-600 transition-colors" />
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold truncate">{song.title}</p>
          <p className="text-sm text-gray-400 truncate">{song.artist}</p>
        </div>
        {isInSetlist && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove?.(song.id)}
            className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-600/20 hover:text-orange-600"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
        {!isInSetlist && !song.isCustom && (
          <span className="text-xs text-orange-600 font-semibold px-2 py-1 bg-orange-600/10 rounded">
            {song.decade}
          </span>
        )}
        {song.isCustom && (
          <span className="text-xs text-amber-500 font-semibold px-2 py-1 bg-amber-500/10 rounded">
            Custom
          </span>
        )}
      </div>
    </div>
  );
};

interface SetlistDropZoneProps {
  setlist: Song[];
  onDrop: (song: Song, index: number) => void;
  onRemove: (id: number) => void;
}

const SetlistDropZone = ({ setlist, onDrop, onRemove }: SetlistDropZoneProps) => {
  const { t } = useLanguage();
  const [{ isOver }, drop] = useDrop({
    accept: 'song',
    drop: (item: { song: Song; index?: number }) => {
      const dropIndex = setlist.length;
      onDrop(item.song, dropIndex);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`min-h-[400px] bg-black/50 rounded-lg border-2 border-dashed p-6 transition-all ${
        isOver ? 'border-orange-600 bg-orange-600/10' : 'border-zinc-800'
      }`}
    >
      {setlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center py-12">
          <Music2 className="w-16 h-16 text-gray-600 mb-4" />
          <p className="text-gray-400 text-lg">{t('setlist.drag')}</p>
          <p className="text-gray-600 text-sm mt-2">{t('setlist.dragDescription')}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {setlist.map((song, index) => (
            <div key={`${song.id}-${index}`} className="flex items-center gap-3">
              <span className="text-orange-600 font-bold text-lg w-8">{index + 1}.</span>
              <div className="flex-1">
                <DraggableSong song={song} index={index} isInSetlist onRemove={onRemove} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export function SetlistBuilder() {
  const { t } = useLanguage();
  const [setlist, setSetlist] = useState<Song[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [customSongs, setCustomSongs] = useState<Song[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customArtist, setCustomArtist] = useState('');
  const [nextCustomId, setNextCustomId] = useState(1000);

  const handleDrop = (song: Song, index: number) => {
    // Check if song is already in setlist
    if (setlist.some((s) => s.id === song.id)) {
      toast.error(t('setlist.alreadyInSetlist'));
      return;
    }
    setSetlist([...setlist, song]);
    toast.success(`"${song.title}" ${t('setlist.added')}`);
  };

  const handleRemove = (id: number) => {
    setSetlist(setlist.filter((song) => song.id !== id));
    toast.success(t('setlist.removed'));
  };

  const handleSendSetlist = () => {
    if (setlist.length === 0) {
      toast.error(t('setlist.addSongs'));
      return;
    }

    const setlistText = setlist
      .map((song, i) => `${i + 1}. ${song.title} - ${song.artist}`)
      .join('\n');
    
    const subject = 'Custom Setlist Request - Pollege';
    const body = `Hi Pollege,\n\nI'd love to hear these songs at your next show:\n\n${setlistText}\n\nThanks!`;
    
    window.location.href = `mailto:booking@pollege.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleClearSetlist = () => {
    setSetlist([]);
    toast.success(t('setlist.cleared'));
  };

  const handleAddCustomSong = () => {
    if (!customTitle.trim() || !customArtist.trim()) {
      return;
    }

    const newSong: Song = {
      id: nextCustomId,
      title: customTitle.trim(),
      artist: customArtist.trim(),
      decade: 'custom',
      isCustom: true,
    };

    setCustomSongs([...customSongs, newSong]);
    setNextCustomId(nextCustomId + 1);
    setCustomTitle('');
    setCustomArtist('');
    setIsDialogOpen(false);
    toast.success(t('setlist.customAdded'));
  };

  const allAvailableSongs = [...availableSongs, ...customSongs];
  const filteredSongs = filter === 'all' 
    ? allAvailableSongs 
    : allAvailableSongs.filter(song => song.decade === filter);

  return (
    <DndProvider backend={HTML5Backend}>
      <section id="setlist" className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-wider">
              {t('setlist.title')}
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('setlist.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Available Songs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Music2 className="w-6 h-6 text-orange-600" />
                  {t('setlist.available')}
                </h3>
                
                {/* Filter & Add Custom */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {['all', '90s', '2000s', '2010s+'].map((decade) => (
                    <Button
                      key={decade}
                      onClick={() => setFilter(decade)}
                      variant={filter === decade ? 'default' : 'outline'}
                      className={
                        filter === decade
                          ? 'bg-orange-600 hover:bg-orange-700'
                          : 'border-zinc-800 hover:border-orange-600'
                      }
                    >
                      {decade === 'all' ? t('setlist.all') : decade}
                    </Button>
                  ))}
                </div>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full mb-4 border-orange-600 text-orange-600 hover:bg-orange-600/10"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      {t('setlist.addCustom')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-zinc-900 border-zinc-800">
                    <DialogHeader>
                      <DialogTitle className="text-white">{t('setlist.addCustom')}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-400 mb-2">
                          {t('setlist.customTitle')} *
                        </label>
                        <Input
                          value={customTitle}
                          onChange={(e) => setCustomTitle(e.target.value)}
                          placeholder="Enter song title"
                          className="bg-black border-zinc-800 focus:border-orange-600 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-400 mb-2">
                          {t('setlist.customArtist')} *
                        </label>
                        <Input
                          value={customArtist}
                          onChange={(e) => setCustomArtist(e.target.value)}
                          placeholder="Enter artist name"
                          className="bg-black border-zinc-800 focus:border-orange-600 text-white"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={handleAddCustomSong}
                          disabled={!customTitle.trim() || !customArtist.trim()}
                          className="flex-1 bg-orange-600 hover:bg-orange-700"
                        >
                          {t('setlist.add')}
                        </Button>
                        <Button
                          onClick={() => {
                            setIsDialogOpen(false);
                            setCustomTitle('');
                            setCustomArtist('');
                          }}
                          variant="outline"
                          className="border-zinc-800"
                        >
                          {t('setlist.cancel')}
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredSongs.map((song) => (
                    <DraggableSong key={song.id} song={song} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Setlist Drop Zone */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-zinc-900 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    {t('setlist.your')} ({setlist.length})
                  </h3>
                  {setlist.length > 0 && (
                    <Button
                      variant="ghost"
                      onClick={handleClearSetlist}
                      className="text-gray-400 hover:text-orange-600"
                    >
                      <X className="w-4 h-4 mr-2" />
                      {t('setlist.clear')}
                    </Button>
                  )}
                </div>

                <SetlistDropZone
                  setlist={setlist}
                  onDrop={handleDrop}
                  onRemove={handleRemove}
                />

                {setlist.length > 0 && (
                  <Button
                    onClick={handleSendSetlist}
                    className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg font-bold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    {t('setlist.send')}
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </DndProvider>
  );
}