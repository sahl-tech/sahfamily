export interface ExpenseCategory {
  id: string;
  category: { id: string; en: string };
  percentage: number;
  color: string;
  icon: string;
  description: { id: string; en: string };
  allocationFocus: { id: string; en: string };
}

export const expenseAllocation: ExpenseCategory[] = [
  {
    id: 'living-anchor',
    category: { id: 'Tempat Tinggal & Operasional Rumah', en: 'Home Base & Housing Operations' },
    percentage: 35,
    color: '#3B82F6', // Blue
    icon: '🏡',
    description: {
      id: 'Sewa basecamp hunian yang nyaman, listrik, internet gigabit berkecepatan tinggi untuk kerja remote di sahl-tech, dan utilitas rumah tangga.',
      en: 'Cozy family home base rental, high-speed fiber internet for remote sahl-tech client engineering, and utility bills.',
    },
    allocationFocus: {
      id: 'Memastikan ruang tinggal memiliki pencahayaan alami melimpah dan ruang lapang untuk anak bergerak bebas.',
      en: 'Prioritizing natural daylight, fresh ventilation, and uncluttered play floor space.',
    },
  },
  {
    id: 'travel-worldschool',
    category: { id: 'Travel & Worldschooling Expedition', en: 'Travel & Worldschooling Expedition' },
    percentage: 25,
    color: '#F59E0B', // Amber
    icon: '🌍',
    description: {
      id: 'Tiket transportasi antar kota/negara, penginapan slow-travel ramah keluarga, tiket masuk cagar alam/museum, dan sewa transportasi lokal.',
      en: 'Inter-city rail/air transit, kid-friendly long stays, museum & nature park passes, and local mobility rentals.',
    },
    allocationFocus: {
      id: 'Mendukung pengalaman hidup langsung di lapangan yang nilainya bertahan seumur hidup.',
      en: 'Investing in tangible living memories and experiential horizon broadening.',
    },
  },
  {
    id: 'education-resources',
    category: { id: 'Bahan Kurikulum & Alat Eksplorasi', en: 'Curriculum & Learning Tools' },
    percentage: 15,
    color: '#10B981', // Emerald
    icon: '📚',
    description: {
      id: 'Buku bacaan berkualitas, langganan platform edukasi interaktif, mikroskop, kit sains hands-on, dan peralatan gambar/karya.',
      en: 'Curated read-aloud literature, quality learning software, pocket microscopes, physical math manipulatives, and art stock.',
    },
    allocationFocus: {
      id: 'Materi fisik bebas layar dan buku fisik bermutu tinggi yang bisa diwariskan ke adik.',
      en: 'Screen-free tactile exploration toolkits and durable books that cascade down siblings.',
    },
  },
  {
    id: 'nutrition-health',
    category: { id: 'Nutrisi Segar & Kesehatan Fisik', en: 'Fresh Nutrition & Family Wellness' },
    percentage: 15,
    color: '#F43F5E', // Rose
    icon: '🥗',
    description: {
      id: 'Belanja bahan makanan utuh (whole foods) di pasar lokal, buah-buahan organik harian, vitamin, serta asuransi kesehatan keluarga lengkap.',
      en: 'Wholesome market produce, daily fresh orchard fruits, wellness supplements, and comprehensive family health coverage.',
    },
    allocationFocus: {
      id: 'Energi tubuh dan pikiran anak ditopang langsung oleh asupan gizi yang tidak diproses berlebihan.',
      en: 'Sustained cognitive stamina fueled by unprocessed regional harvests.',
    },
  },
  {
    id: 'resilience-savings',
    category: { id: 'Dana Darurat & Investasi Masa Depan', en: 'Emergency Buffer & Long-term Growth' },
    percentage: 10,
    color: '#8B5CF6', // Purple
    icon: '🛡️',
    description: {
      id: 'Dana darurat likuid untuk fleksibilitas perpindahan tanpa beban utang, serta portofolio investasi jangka panjang anak.',
      en: 'Liquid safety reserves allowing unforced travel pivots, plus generational growth portfolios.',
    },
    allocationFocus: {
      id: 'Memberikan ketenangan mental bagi orang tua sehingga keputusan parenting tidak didorong oleh kepanikan finansial.',
      en: 'Securing parental mental calm so pedagogical choices remain anchored in values.',
    },
  },
];
