export interface MomentItem {
  id: string;
  title: { id: string; en: string };
  date: string;
  location: string;
  caption: { id: string; en: string };
  doodleSvg: string; // SVG doodle representation to protect face privacy
  category: { id: string; en: string };
  tapeColor: string;
}

export const momentsData: MomentItem[] = [
  {
    id: 'tidepool-discovery',
    title: { id: 'Lab Sains di Bintang Laut', en: 'Tidepool Micro-Exploration' },
    date: 'Juni 2024',
    location: 'Pantai Pesisir Selatan, DIY',
    caption: {
      id: 'Duduk 2 jam jongkok mengamati kelomang bertukar cangkang. Pembelajaran biologi paling membekas tanpa membuka satu pun buku cetak.',
      en: 'Squatting for 2 quiet hours watching hermit crabs switch shells. Unforgettable marine biology learned without cracking a single textbook.',
    },
    doodleSvg: 'crab',
    category: { id: 'Alam & Biologi', en: 'Nature Inquiry' },
    tapeColor: 'bg-amber-300',
  },
  {
    id: 'first-scratch-game',
    title: { id: 'Peluncuran Game Pertama', en: 'First Scratch Arcade Launch' },
    date: 'November 2024',
    location: 'Living Room Desk',
    caption: {
      id: 'Kakak berhasil menyelesaikan logika collision detection di Scratch setelah 4 hari gagal dan frustrasi. Senyum leganya tak ternilai!',
      en: 'Elder child conquered 2D collision logic blocks after 4 days of syntax friction. The ecstatic triumphant grin was priceless!',
    },
    doodleSvg: 'rocket',
    category: { id: 'Coding & Maker', en: 'Maker Moment' },
    tapeColor: 'bg-teal-300',
  },
  {
    id: 'train-ride-reading',
    title: { id: 'Kereta Menembus Kabut Bukit', en: 'Mist Train Read-Aloud' },
    date: 'Maret 2025',
    location: 'Rute Kereta Panoramic Jawa',
    caption: {
      id: 'Membaca kisah petualangan sambil memandang sawah berundak dan jembatan tinggi. Menghubungkan geografi dengan narasi buku.',
      en: 'Reading epic adventure lore while tracing terraced paddy fields through panoramic rail carriages. Literature meets living geography.',
    },
    doodleSvg: 'train',
    category: { id: 'Slow Travel', en: 'Slow Travel' },
    tapeColor: 'bg-rose-300',
  },
  {
    id: 'pottery-mess',
    title: { id: 'Tanah Liat & Tangan Penuh Lumpur', en: 'Mud & Wheel Pottery' },
    date: 'September 2025',
    location: 'Sanggar Seni Tradisional',
    caption: {
      id: 'Adik membuat mangkok asimetris yang penuh goresan jari mungilnya. Belajar bahwa ketidaksempurnaan adalah ciri khas karya buatan tangan.',
      en: 'Youngest shaped an imperfect wobbly clay bowl. Learning that organic asymmetry is the soul of authentic craftsmanship.',
    },
    doodleSvg: 'pottery',
    category: { id: 'Seni Rupa', en: 'Fine Arts' },
    tapeColor: 'bg-purple-300',
  },
];
