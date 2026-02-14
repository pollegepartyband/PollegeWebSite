import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  it: {
    // Navigation
    'nav.band': 'Band',
    'nav.music': 'Musica',
    'nav.setlist': 'Setlist',
    'nav.gigs': 'Date',
    'nav.contact': 'Contatti',
    'nav.bookNow': 'Prenota Ora',

    // Hero
    'hero.tagline': 'Rock Party Hits dagli anni 90 ad oggi',
    'hero.cta': 'PRENOTACI ORA',
    'hero.scroll': 'Scorri per scoprire',

    // Band
    'band.title': 'LA BAND',
    'band.vocals': 'Voce',
    'band.leadGuitar': 'Chitarra Solista',
    'band.drums': 'Batteria',
    'band.bass': 'Basso',
    'band.keyboards': 'Tastiere',

    // Music
    'music.title': 'MUSICA & VIDEO',
    'music.videos': 'Video',
    'music.spotify': 'Spotify',
    'music.videoLinks': 'Guarda le Nostre Performance',
    'music.videoDescription': 'Scopri le nostre performance ad alta energia dei classici rock! Dal grunge agli inni rock moderni, portiamo la festa su ogni palco.',
    'music.playlistTitle': 'La Nostra Playlist',
    'music.playlistDescription': 'Ascolta i nostri rock hit preferiti che amiamo suonare dal vivo. Ecco come suona un tipico show dei Pollege!',

    // Setlist
    'setlist.title': 'CREA LA TUA SETLIST',
    'setlist.description': 'Costruisci la setlist dei tuoi sogni! Trascina e rilascia le tue canzoni preferite per creare una playlist personalizzata per il tuo evento.',
    'setlist.available': 'Canzoni Disponibili',
    'setlist.all': 'Tutte',
    'setlist.your': 'La Tua Setlist',
    'setlist.clear': 'Cancella',
    'setlist.send': 'Invia Richiesta Setlist',
    'setlist.drag': 'Trascina qui le canzoni per costruire la tua setlist',
    'setlist.dragDescription': 'La tua setlist personalizzata apparirà qui',
    'setlist.addCustom': 'Aggiungi Canzone Personalizzata',
    'setlist.customTitle': 'Titolo Canzone',
    'setlist.customArtist': 'Artista',
    'setlist.add': 'Aggiungi',
    'setlist.cancel': 'Annulla',
    'setlist.alreadyInSetlist': 'Canzone già nella setlist!',
    'setlist.added': 'aggiunto alla setlist',
    'setlist.removed': 'Canzone rimossa dalla setlist',
    'setlist.cleared': 'Setlist cancellata',
    'setlist.addSongs': 'Aggiungi prima le canzoni alla tua setlist!',
    'setlist.customAdded': 'Canzone personalizzata aggiunta!',

    // Gigs
    'gigs.title': 'DATE & EVENTI',
    'gigs.upcoming': 'Prossimi Concerti',
    'gigs.past': 'Concerti Passati',
    'gigs.soldout': 'SOLD OUT',
    'gigs.tickets': 'Biglietti',

    // Contact
    'contact.title': 'CONTATTI & BOOKING',
    'contact.subtitle': 'Pronto a far rock al tuo evento? Contattaci per prenotazioni, collaborazioni, o semplicemente per salutare!',
    'contact.formTitle': 'Inviaci un Messaggio',
    'contact.name': 'Il Tuo Nome',
    'contact.email': 'Indirizzo Email',
    'contact.phone': 'Numero di Telefono',
    'contact.eventDate': 'Data Evento',
    'contact.message': 'Messaggio',
    'contact.send': 'Invia Richiesta di Prenotazione',
    'contact.required': '*',
    'contact.getInTouch': 'Contattaci',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Telefono',
    'contact.based': 'Con sede a',
    'contact.location': 'Milano, Italia',
    'contact.follow': 'Seguici',
    'contact.booking': 'Booking',
    'contact.ready': 'Pronti a Rockare?',
    'contact.readyDescription': 'Prenota i Pollege per il tuo prossimo evento e vivi performance rock ad alta energia che terranno il tuo pubblico in piedi!',
    'contact.quote': 'Richiedi un Preventivo',
    'contact.opening': 'Apertura del client email...',
    'contact.placeholder.name': 'Mario Rossi',
    'contact.placeholder.email': 'mario@esempio.it',
    'contact.placeholder.phone': '+39 123 456 7890',
    'contact.placeholder.message': 'Parlaci del tuo evento...',

    // Footer
    'footer.description': 'Band rock party ad alta energia che suona i successi più famosi dagli anni 90 ad oggi.',
    'footer.quickLinks': 'Link Rapidi',
    'footer.followUs': 'Seguici',
    'footer.copyright': 'Tutti i diritti riservati. | Rock Party Hits dagli anni 90 ad oggi',
  },
  en: {
    // Navigation
    'nav.band': 'Band',
    'nav.music': 'Music',
    'nav.setlist': 'Setlist',
    'nav.gigs': 'Gigs',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',

    // Hero
    'hero.tagline': 'Rock Party Hits from 90s to Now',
    'hero.cta': 'BOOK US NOW',
    'hero.scroll': 'Scroll to discover',

    // Band
    'band.title': 'THE BAND',
    'band.vocals': 'Vocals',
    'band.leadGuitar': 'Lead Guitar',
    'band.drums': 'Drums',
    'band.bass': 'Bass',
    'band.keyboards': 'Keyboards',

    // Music
    'music.title': 'MUSIC & VIDEOS',
    'music.videos': 'Videos',
    'music.spotify': 'Spotify',
    'music.videoLinks': 'Watch Our Performances',
    'music.videoDescription': 'Check out our high-energy performances of classic rock hits! From grunge anthems to modern rock classics, we bring the party to every stage.',
    'music.playlistTitle': 'Our Playlist',
    'music.playlistDescription': 'Listen to our favorite rock hits that we love to perform live. This is what a typical Pollege show sounds like!',

    // Setlist
    'setlist.title': 'BUILD YOUR SETLIST',
    'setlist.description': 'Build your dream setlist! Drag and drop your favorite songs to create a custom playlist for your event.',
    'setlist.available': 'Available Songs',
    'setlist.all': 'All',
    'setlist.your': 'Your Setlist',
    'setlist.clear': 'Clear',
    'setlist.send': 'Send Setlist Request',
    'setlist.drag': 'Drag songs here to build your setlist',
    'setlist.dragDescription': 'Your custom setlist will appear here',
    'setlist.addCustom': 'Add Custom Song',
    'setlist.customTitle': 'Song Title',
    'setlist.customArtist': 'Artist',
    'setlist.add': 'Add',
    'setlist.cancel': 'Cancel',
    'setlist.alreadyInSetlist': 'Song already in setlist!',
    'setlist.added': 'added to setlist',
    'setlist.removed': 'Song removed from setlist',
    'setlist.cleared': 'Setlist cleared',
    'setlist.addSongs': 'Please add songs to your setlist first!',
    'setlist.customAdded': 'Custom song added!',

    // Gigs
    'gigs.title': 'GIGS & EVENTS',
    'gigs.upcoming': 'Upcoming Shows',
    'gigs.past': 'Past Shows',
    'gigs.soldout': 'SOLD OUT',
    'gigs.tickets': 'Get Tickets',

    // Contact
    'contact.title': 'CONTACT & BOOKING',
    'contact.subtitle': 'Ready to rock your event? Get in touch with us for bookings, collaborations, or just to say hi!',
    'contact.formTitle': 'Send Us a Message',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.eventDate': 'Event Date',
    'contact.message': 'Message',
    'contact.send': 'Send Booking Inquiry',
    'contact.required': '*',
    'contact.getInTouch': 'Get In Touch',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Phone',
    'contact.based': 'Based in',
    'contact.location': 'Milan, Italy',
    'contact.follow': 'Follow Us',
    'contact.booking': 'Booking',
    'contact.ready': 'Ready to Rock?',
    'contact.readyDescription': 'Book Pollege for your next event and experience high-energy rock performances that will keep your crowd on their feet!',
    'contact.quote': 'Request a Quote',
    'contact.opening': 'Opening your email client...',
    'contact.placeholder.name': 'John Doe',
    'contact.placeholder.email': 'john@example.com',
    'contact.placeholder.phone': '+39 123 456 7890',
    'contact.placeholder.message': 'Tell us about your event...',

    // Footer
    'footer.description': 'High-energy rock party band playing famous hits from the 90s to today.',
    'footer.quickLinks': 'Quick Links',
    'footer.followUs': 'Follow Us',
    'footer.copyright': 'All rights reserved. | Rock Party Hits from 90s to Now',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
