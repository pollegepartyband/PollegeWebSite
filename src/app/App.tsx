import { Toaster } from './components/ui/sonner';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { BandMembers } from './components/BandMembers';
import { MusicVideos } from './components/MusicVideos';
import { SetlistBuilder } from './components/SetlistBuilder';
import { GigsEvents } from './components/GigsEvents';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black">
        <Navigation />
        <Hero />
        <BandMembers />
        <MusicVideos />
        <SetlistBuilder />
        <GigsEvents />
        <Contact />
        <Footer />
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#18181b',
              color: '#fff',
              border: '1px solid #27272a',
            },
          }}
        />
      </div>
    </LanguageProvider>
  );
}