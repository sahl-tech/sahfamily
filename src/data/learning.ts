export interface LearningSubject {
  id: string;
  title: { id: string; en: string };
  category: { id: string; en: string };
  ageRange: string;
  icon: string;
  summary: { id: string; en: string };
  outcomes: { id: string[]; en: string[] };
  handsOnActivity: { id: string; en: string };
  bgColor: string;
}

export const learningSubjects: LearningSubject[] = [
  {
    id: 'computational-thinking',
    title: { id: 'Logika & Computational Thinking', en: 'Logic & Computational Thinking' },
    category: { id: 'Tech & Math', en: 'Tech & Math' },
    ageRange: '6-9 th',
    icon: '💻',
    summary: {
      id: 'Bukan sekadar hafalan sintaks, tapi cara memecah masalah besar jadi langkah-langkah terstruktur dan reusable.',
      en: 'Not about rote syntax memorization, but deconstructing complex puzzles into intuitive, structured, reusable routines.',
    },
    outcomes: {
      id: ['Memahami loop & conditional via Scratch', 'Desain game mini sederhana', 'Debug puzzle logika fisik'],
      en: ['Loops & conditionals with Scratch blocks', 'Designing micro arcade games', 'Debugging unplugged physical logic grids'],
    },
    handsOnActivity: {
      id: 'Bikin game maze interaktif di mana karakter harus menghindari rintangan laba-laba.',
      en: 'Creating a maze game where a hero sprite must dynamically evade spider obstacles.',
    },
    bgColor: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  },
  {
    id: 'nature-science',
    title: { id: 'Sains Alam & Eksplorasi Nyata', en: 'Nature Science & Outdoor Inquiry' },
    category: { id: 'Hands-on Science', en: 'Hands-on Science' },
    ageRange: 'Semua Umur',
    icon: '🌿',
    summary: {
      id: 'Belajar biologi dan fisika dasar langsung di kebun, pantai, sungai, dan cagar alam ketimbang hanya gambar buku teks.',
      en: 'Grasping foundational biology and physical geography directly at tidal pools, forests, and farm sanctuaries.',
    },
    outcomes: {
      id: ['Jurnal sketsa flora & fauna lokal', 'Paham siklus air & cuaca saat traveling', 'Eksperimen mikroskop saku portabel'],
      en: ['Field sketches of regional flora & fauna', 'Understanding microclimates while nomadic', 'Pocket microscope specimen reviews'],
    },
    handsOnActivity: {
      id: 'Memeriksa plankton air laut dan kristal garam menggunakan pocket microscope 60x.',
      en: 'Inspecting saltwater plankton organisms and salt crystals through a 60x pocket lens.',
    },
    bgColor: 'bg-amber-50 border-amber-200 text-amber-800',
  },
  {
    id: 'practical-math',
    title: { id: 'Matematika Kontekstual & Belanja', en: 'Living Math & Everyday Geometry' },
    category: { id: 'Practical Life', en: 'Practical Life' },
    ageRange: '4-8 th',
    icon: '📐',
    summary: {
      id: 'Menghitung diskon pasar tradisional, menimbang bahan kue, membaca peta rute jalan, dan mengukur furniture kamar.',
      en: 'Calculating budget splits at farmer markets, baking ratios, navigation bearings, and spatial measurement.',
    },
    outcomes: {
      id: ['Mental math penjumlahan uang belanja', 'Pecahan melalui potong buah & martabak', 'Paham koordinat kompas & peta sederhana'],
      en: ['Rapid mental calculations at grocery checkouts', 'Fractions using fruit & flatbread slices', 'Basic directional coordinates & elevation maps'],
    },
    handsOnActivity: {
      id: 'Diberi amplop anggaran jajan buah Rp 20.000 untuk memilih 3 kombinasi buah terbaik di pasar lokal.',
      en: 'Hands-on market budget challenge: optimizing fruit nutrition and varieties within pocket money bounds.',
    },
    bgColor: 'bg-cyan-50 border-cyan-200 text-cyan-800',
  },
  {
    id: 'bilingual-literacy',
    title: { id: 'Literasi Bahasa & Storytelling', en: 'Bilingual Literacy & Storytelling' },
    category: { id: 'Languages', en: 'Languages' },
    ageRange: 'Semua Umur',
    icon: '📖',
    summary: {
      id: 'Membangun kecintaan membaca lewat Read Aloud harian, komik edukasi, serta latihan menulis jurnal ekspresif dwibahasa.',
      en: 'Fostering lifelong reader instincts with daily Read Aloud rituals, graphic novels, and dual-language journals.',
    },
    outcomes: {
      id: ['Kosakata aktif Bahasa Indonesia & English', 'Kemampuan mendongeng balik (retelling)', 'Menulis catatan perjalanan mingguan'],
      en: ['Rich vocabulary in Indonesian & English', 'Oral narrative retelling competence', 'Weekly illustrated travel journal entries'],
    },
    handsOnActivity: {
      id: 'Membuat buku cerita mini 4 halaman bertema monster ramah yang tersesat di stasiun kereta.',
      en: 'Writing and binding a 4-page booklet about a friendly monster navigating transit stations.',
    },
    bgColor: 'bg-rose-50 border-rose-200 text-rose-800',
  },
  {
    id: 'worldschooling',
    title: { id: 'Worldschooling & Geografi Hidup', en: 'Worldschooling & Living History' },
    category: { id: 'Culture & World', en: 'Culture & World' },
    ageRange: 'Family',
    icon: '🧭',
    summary: {
      id: 'Mempelajari sejarah peradaban, rempah-rempah nusantara, dan kebiasaan sosial dengan tinggal sementara di komunitas berbeda.',
      en: 'Absorbing civilizations, historical spice routes, and community customs by temporarily living among locales.',
    },
    outcomes: {
      id: ['Empati lintas budaya & tata krama lokal', 'Paham sejarah tempat yang dikunjungi', 'Adaptasi bahasa sapaan setempat'],
      en: ['Cross-cultural empathy & respect for local norms', 'Grounded sense of place & origin history', 'Basic vernacular greetings everywhere'],
    },
    handsOnActivity: {
      id: 'Wawancara santai dengan pengrajin gerabah tradisional tentang tanah liat dan proses pembakaran.',
      en: 'Casual interview with a traditional potter regarding clay mineral elasticity and kiln heat.',
    },
    bgColor: 'bg-purple-50 border-purple-200 text-purple-800',
  },
  {
    id: 'life-skills',
    title: { id: 'Life Skills, Resiliensi & Memasak', en: 'Life Skills, Resilience & Culinary' },
    category: { id: 'Self-Reliance', en: 'Self-Reliance' },
    ageRange: 'Semua Umur',
    icon: '🍳',
    summary: {
      id: 'Kemandirian mengemas koper sendiri, mencuci piring, merapikan tenda/kamar, serta mengelola emosi saat rencana berubah.',
      en: 'Self-reliance in packing backpacks, dish duties, room upkeep, and emotional self-regulation when itineraries shift.',
    },
    outcomes: {
      id: ['Tanggung jawab koper sendiri', 'Menyiapkan sarapan simpel mandiri', 'Regulasi emosi saat delay perjalanan'],
      en: ['Carrying ownership of personal travel gear', 'Making breakfast eggs & smoothies independently', 'Resilience tactics during travel hiccups'],
    },
    handsOnActivity: {
      id: 'Challenge packing koper kabin tanpa bantuan untuk perjalanan 4 hari dengan checklist visual bergambar.',
      en: 'Solo cabin-bag packing challenge with visual icons checklist for a 4-day trip.',
    },
    bgColor: 'bg-orange-50 border-orange-200 text-orange-800',
  },
];
