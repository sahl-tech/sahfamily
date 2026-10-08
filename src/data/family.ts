import type { Lang } from './siteConfig';

export interface FamilyMember {
  id: string;
  role: { id: string; en: string };
  nickname: string;
  tagline: { id: string; en: string };
  bio: { id: string; en: string };
  interests: string[];
  emoji: string;
  accentColor: string;
}

export const familyMembers: FamilyMember[] = [
  {
    id: 'ayah',
    role: { id: 'Ayah / Tech Lead & Navigator', en: 'Dad / Tech Lead & Navigator' },
    nickname: 'Ayah',
    tagline: {
      id: 'Suka ngotak-ngatik software & nyusun itinerary fleksibel.',
      en: 'Tinkering with software systems & drafting nimble itineraries.',
    },
    bio: {
      id: 'Software engineer di sahl-tech. Memandu anak belajar computational thinking lewat lego, block coding, dan problem solving sehari-hari.',
      en: 'Software builder at sahl-tech. Guides the kids into computational thinking through physical legos, visual blocks, and daily curiosity.',
    },
    interests: ['Linux', 'World Geography', 'Coffee Brew', 'Indie Web'],
    emoji: '👨‍💻',
    accentColor: 'border-amber-400 bg-amber-50 text-amber-900',
  },
  {
    id: 'bunda',
    role: { id: 'Bunda / Chief Learning Curator', en: 'Mom / Chief Learning Curator' },
    nickname: 'Bunda',
    tagline: {
      id: 'Pengatur ritme belajar, membaca dongeng, dan financial anchor.',
      en: 'Heartbeat of family rhythms, book curation, and mindful logistics.',
    },
    bio: {
      id: 'Merancang kurikulum tematik, memilih bacaan sastra anak bermutu, dan menjaga suasana rumah tetap hangat di tengah dinamika berpindah kota.',
      en: 'Designs inquiry-based thematic projects, hand-picks literature, and maintains grounding emotional routines across travels.',
    },
    interests: ['Read Aloud', 'Nature Journaling', 'Home Cooking', 'Minimalism'],
    emoji: '👩‍🏫',
    accentColor: 'border-rose-400 bg-rose-50 text-rose-900',
  },
  {
    id: 'kakak',
    role: { id: 'Kakak (8 Tahun) / Little Explorer', en: 'Elder Child (8 yo) / Little Explorer' },
    nickname: 'Kakak',
    tagline: {
      id: 'Penasaran sama cara kerja mesin, semesta, dan puzzle rumit.',
      en: 'Passionate about mechanics, universe mysteries, and tricky puzzles.',
    },
    bio: {
      id: 'Sedang asyik eksplorasi Scratch, ekosistem laut, berhitung manipulatif, dan mengumpulkan batu unik dari tiap pantai yang dikunjungi.',
      en: 'Currently into Scratch animations, marine biology, hands-on math crafts, and gathering pebble specimens across every visited beach.',
    },
    interests: ['Scratch Coding', 'Astronomi', 'Swimming', 'Minecraft Redstone'],
    emoji: '🚀',
    accentColor: 'border-teal-400 bg-teal-50 text-teal-900',
  },
  {
    id: 'adik',
    role: { id: 'Adik (4 Tahun) / Chief Joy Officer', en: 'Younger Child (4 yo) / Chief Joy Officer' },
    nickname: 'Adik',
    tagline: {
      id: 'Dunia adalah panggung bermain warna, tanah liat, dan tawa lepas.',
      en: 'Life is an endless playground of bright colors, sensory sand, and giggles.',
    },
    bio: {
      id: 'Fokus pada motorik halus, dongeng interaktif, pengenalan huruf fonik, serta menjadi penemu serangga paling teliti di taman.',
      en: 'Deep in sensory exploration, phonics storytelling, gross-motor obstacle courses, and discovering backyard micro-insects.',
    },
    interests: ['Finger Painting', 'Audiobooks', 'Park Obstacles', 'Dinosaur Lore'],
    emoji: '🎨',
    accentColor: 'border-purple-400 bg-purple-50 text-purple-900',
  },
];
