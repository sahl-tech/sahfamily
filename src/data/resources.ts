export interface ResourceItem {
  id: string;
  title: string;
  type: 'book' | 'app' | 'gear';
  targetAge: string;
  badge: { id: string; en: string };
  desc: { id: string; en: string };
  recommendedLink?: string;
  icon: string;
}

export const curatedResources: ResourceItem[] = [
  // Books
  {
    id: 'book-readaloud',
    title: 'The Read-Aloud Handbook (Jim Trelease)',
    type: 'book',
    targetAge: 'Orang Tua',
    badge: { id: 'Fondasi Utama', en: 'Core Pillar' },
    desc: {
      id: 'Buku wajib orang tua yang mengubah cara kami membacakan dongeng setiap malam. Terbukti menumbuhkan kosakata tanpa tekanan.',
      en: 'The seminal handbook that revolutionized our nighttime read-alouds, unlocking massive organic vocabulary growth.',
    },
    icon: '📖',
  },
  {
    id: 'book-nature-anatomy',
    title: 'Nature Anatomy (Julia Rothman)',
    type: 'book',
    targetAge: '4-9 th',
    badge: { id: 'Visual Cantik', en: 'Stunning Visuals' },
    desc: {
      id: 'Ilustrasi sains alam yang sangat indah untuk menemani jurnal alam saat jalan-jalan ke pantai atau hutan.',
      en: 'Exquisite watercolor biological illustrations guiding outdoor nature journaling and field sketches.',
    },
    icon: '🎨',
  },
  {
    id: 'book-bedtime-math',
    title: 'Bedtime Math Series (Laura Overdeck)',
    type: 'book',
    targetAge: '4-8 th',
    badge: { id: 'Matematika Seru', en: 'Fun Logic' },
    desc: {
      id: 'Cerita pendek konyol berujung teka-teki logika matematika 3 tingkat kesulitan. Favorit sebelum tidur.',
      en: 'Hilarious bedtime mini-stories leading to 3 tiered tiers of mental math puzzles without rote drilling.',
    },
    icon: '🧮',
  },

  // Apps & Software
  {
    id: 'app-scratch',
    title: 'Scratch 3.0 & ScratchJr (MIT Media Lab)',
    type: 'app',
    targetAge: '5-9 th',
    badge: { id: 'Coding Anak', en: 'Kids Coding' },
    desc: {
      id: 'Platform block-coding gratis tanpa iklan yang memperkenalkan konsep logika, variabel, koordinat x/y, dan algoritma.',
      en: 'Ad-free block programming environment teaching algorithms, loops, x/y plane coordinates, and creative logic.',
    },
    icon: '🧩',
  },
  {
    id: 'app-stellarium',
    title: 'Stellarium Planetarium Sky Map',
    type: 'app',
    targetAge: 'Semua Umur',
    badge: { id: 'Astronomi', en: 'Astronomy' },
    desc: {
      id: 'Aplikasi peta bintang open-source yang dipakai saat camping malam hari untuk mengidentifikasi konstelasi bintang nyata.',
      en: 'Open-source star map software used during camping nights to identify constellations above our tents.',
    },
    icon: '✨',
  },
  {
    id: 'app-seek',
    title: 'Seek by iNaturalist',
    type: 'app',
    targetAge: 'Semua Umur',
    badge: { id: 'Identifikasi Alam', en: 'Bio ID' },
    desc: {
      id: 'Arahkan kamera ke daun, bunga, atau serangga untuk mengetahui nama spesies dan fakta sainsnya dengan aman tanpa data pribadi.',
      en: 'Point the phone camera at plants, leaves, and bugs to identify species and unlock badges without social privacy risks.',
    },
    icon: '🔍',
  },

  // Gear & Tools
  {
    id: 'gear-microscope',
    title: 'Carson MicroBrite Plus 60x-120x Pocket Scope',
    type: 'gear',
    targetAge: '6+ th',
    badge: { id: 'Alat Lapangan', en: 'Field Kit' },
    desc: {
      id: 'Mikroskop saku dengan lampu LED portabel seukuran genggaman tangan. Wajib ada di saku backpack saat hiking.',
      en: 'Pocket-sized LED microscope providing crystal-clear 120x zoom into leaf stomata and fabric weaves on the trail.',
    },
    icon: '🔬',
  },
  {
    id: 'gear-nature-journal',
    title: 'Watercolor Sketchbook 300gsm & Travel Pan',
    type: 'gear',
    targetAge: 'Semua Umur',
    badge: { id: 'Kreasi Fisik', en: 'Tactile Art' },
    desc: {
      id: 'Kertas tebal tahan air untuk anak menggambar spesimen daun, peta harta karun buatan, atau pemandangan sunset.',
      en: 'Heavyweight watercolor papers allowing kids to paint field specimens, custom treasure maps, and sunsets.',
    },
    icon: '🖌️',
  },
];
