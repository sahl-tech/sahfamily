export interface JourneyMilestone {
  year: string;
  badge: { id: string; en: string };
  title: { id: string; en: string };
  desc: { id: string; en: string };
  highlight: { id: string; en: string };
  icon: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: '2020 - 2021',
    badge: { id: 'Awal Mula', en: 'Inception' },
    title: { id: 'Eksperimen Pertama: Membuka Rumah untuk Belajar', en: 'The Pivot: Opening Home into a Classroom' },
    desc: {
      id: 'Ketika rutinitas konvensional terhenti saat pandemi, kami mulai merintis ritme homeschooling mandiri. Dari sekadar membaca buku bersama hingga menyusun sudut sains kecil di ruang tengah.',
      en: 'When conventional routines halted during lockdowns, we piloted gentle home education rhythms. From shared couch read-alouds to building a cozy science nook in our living room.',
    },
    highlight: { id: 'Mendirikan mini-library 300+ buku anak', en: 'Curating our first 300+ book home library' },
    icon: '🌱',
  },
  {
    year: '2022 - 2023',
    badge: { id: 'Ekspansi Ruang', en: 'Expanding Horizons' },
    title: { id: 'Melangkah Keluar: Worldschooling Domestik', en: 'Stepping Outdoors: Domestic Worldschooling' },
    desc: {
      id: 'Kami mulai menguji konsep worldschooling: staycation mingguan di desa nelayan, kaki gunung, dan kota budaya. Anak belajar bahwa museum bukan satu-satunya tempat sejarah hidup.',
      en: 'Field-testing worldschooling: slow stays across fishing villages, mountain valleys, and heritage towns. Experiencing history through living conversations rather than static textbooks.',
    },
    highlight: { id: '12 kota dijelajahi dalam mode slow-travel', en: '12 regional cities explored via slow-travel' },
    icon: '🗺️',
  },
  {
    year: '2024 - 2025',
    badge: { id: 'Fase Coding & Kreasi', en: 'Maker Era' },
    title: { id: 'Dari Konsumen Menjadi Pencipta Digital', en: 'From Media Consumers to Digital Creators' },
    desc: {
      id: 'Kakak mulai membuat animasi Scratch pertamanya dan Adik belajar storytelling audio. Teknologi diperlakukan bukan sebagai pengalih perhatian, tapi kanvas kreasi keluarga.',
      en: 'Our 8yo completed their first interactive Scratch game; our youngest authored playful audio stories. Technology transformed from a passive diversion into a family creative studio.',
    },
    highlight: { id: 'Proyek game interaktif pertama dirilis', en: 'First family-crafted arcade mini-game deployed' },
    icon: '⚡',
  },
  {
    year: '2026 - Sekarang',
    badge: { id: 'Harmoni & Berbagi', en: 'Harmonious Rhythm' },
    title: { id: 'sahfamily.my.id & Ekosistem Terbuka', en: 'Launching sahfamily.my.id & Open Stories' },
    desc: {
      id: 'Mendokumentasikan apa yang berhasil, apa yang berantakan, dan bagaimana menyeimbangkan pekerjaan remote software agency sahl-tech dengan pengasuhan anak yang hadir seutuhnya.',
      en: 'Documenting the gems, the messy days, and how remote agency development at sahl-tech gracefully coexists with fully intentional family presence.',
    },
    highlight: { id: 'Platform dokumentasi terbuka diluncurkan', en: 'Public archive and transparent insights launched' },
    icon: '🎈',
  },
];
