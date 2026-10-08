export interface TravelSpot {
  id: string;
  destination: string;
  region: string;
  flagEmoji: string;
  kidFriendlyScore: number; // 1-5
  idealStayDuration: { id: string; en: string };
  bestSeason: { id: string; en: string };
  whyKidsLoveIt: { id: string; en: string };
  practicalTips: { id: string[]; en: string[] };
  tags: string[];
}

export const travelSpots: TravelSpot[] = [
  {
    id: 'yogyakarta-heritage',
    destination: 'Yogyakarta & Kaki Merapi',
    region: 'Jawa Tengah & DIY',
    flagEmoji: '🇮🇩',
    kidFriendlyScore: 5,
    idealStayDuration: { id: '7 - 14 Hari', en: '7 - 14 Days' },
    bestSeason: { id: 'Mei - September (Kemarau sejuk)', en: 'May - September (Dry season)' },
    whyKidsLoveIt: {
      id: 'Museum geologi interaktif, sewa sepeda santai di pedesaan candi, sanggar wayang kertas, dan jajanan pasar ramah lidah anak.',
      en: 'Interactive volcano stations, slow bicycle tours through temple village hamlets, shadow puppet workshops, and gentle street food.',
    },
    practicalTips: {
      id: [
        'Pilih homestay di area pedesaan selatan / barat daripada hotel jalan protokol macet.',
        'Kunjungi Candi Sambisari di pagi hari jam 06.30 saat rumput masih berembun.',
        'Bawa payung lipat dan botol minum besar saat jalan kaki di kompleks keraton.',
      ],
      en: [
        'Book slow homestays in suburban villages over busy central transit corridors.',
        'Visit underground Sambisari temple by 06:30 AM when morning dew still lingers.',
        'Pack collapsible sun umbrellas and refill water thermoses for walking tours.',
      ],
    },
    tags: ['Culture', 'Nature', 'Bicycle', 'Heritage'],
  },
  {
    id: 'batu-malang-hills',
    destination: 'Batu & Dataran Tinggi Malang',
    region: 'Jawa Timur',
    flagEmoji: '🇮🇩',
    kidFriendlyScore: 5,
    idealStayDuration: { id: '5 - 10 Hari', en: '5 - 10 Days' },
    bestSeason: { id: 'Juli - Oktober', en: 'July - October' },
    whyKidsLoveIt: {
      id: 'Udara pegunungan sejuk bikin anak tidak gampang rewel, kebun petik apel organik, dan museum transportasi berstandar dunia.',
      en: 'Crisp mountain breezes prevent travel meltdowns, organic apple picking orchards, and globally curated transportation museums.',
    },
    practicalTips: {
      id: [
        'Bawa jaket windbreaker dan kaus kaki cadangan tebal untuk sore hari.',
        'Hindari akhir pekan panjang (long weekend) karena jalur tanjakan padat.',
        'Beli susu segar pasteurisasi lokal di KUD setempat untuk asupan nutrisi sehat.',
      ],
      en: [
        'Bring windbreaker jackets and extra woolen socks for chilly twilight drops.',
        'Avoid public holidays as local mountain winding roads congest heavily.',
        'Support local agricultural cooperatives for fresh daily whole milk treats.',
      ],
    },
    tags: ['Cool Climate', 'Orchards', 'Museums', 'Mountain'],
  },
  {
    id: 'bali-north-slow',
    destination: 'Pesisir Utara & Danau Tamblingan',
    region: 'Bali Utara',
    flagEmoji: '🇮🇩',
    kidFriendlyScore: 4,
    idealStayDuration: { id: '10 - 21 Hari', en: '10 - 21 Days' },
    bestSeason: { id: 'April - Oktober', en: 'April - October' },
    whyKidsLoveIt: {
      id: 'Jauh dari kebisingan klub pantai selatan, laut tenang tanpa ombak besar ramah balita belajar snorkeling, dan hutan hujan kuno.',
      en: 'Distant from south party crowds; serene mirror-flat coastlines ideal for toddler snorkeling, plus ancient protected rainforest lakes.',
    },
    practicalTips: {
      id: [
        'Sewa mobil dengan car seat terpercaya dari bandara sebelum menempuh jalur bukit.',
        'Bawa sepatu air (water shoes) karena banyak terumbu batu alami di tepi pantai.',
        'Manfaatkan warung lokal dengan menu ikan bakar segar non-pedas.',
      ],
      en: [
        'Reserve rental cars with certified child seats before embarking on highland passes.',
        'Pack neoprene reef booties to safeguard small feet against rocky pebbles.',
        'Rely on coastal family warungs for freshly grilled mild fish dishes.',
      ],
    },
    tags: ['Calm Sea', 'Snorkeling', 'Lakes', 'Slow Living'],
  },
  {
    id: 'penang-unesco',
    destination: 'George Town & Pulau Penang',
    region: 'Malaysia',
    flagEmoji: '🇲🇾',
    kidFriendlyScore: 5,
    idealStayDuration: { id: '7 - 12 Hari', en: '7 - 12 Days' },
    bestSeason: { id: 'Desember - Februari', en: 'December - February' },
    whyKidsLoveIt: {
      id: 'Perburuan mural jalanan interaktif, kereta kabel bukit Penang Hill, suaka kupu-kupu Entopia, dan pedestrian yang tertata rapi.',
      en: 'Interactive street art scavenger hunts, Penang Hill funicular rail, Entopia insect biome, and stroller-navigable historic walkways.',
    },
    practicalTips: {
      id: [
        'Gunakan bus umum Rapid Penang CAT (free shuttle di zona kota tua).',
        'Beli tiket Entopia secara online H-1 untuk menghindari antrean panjang.',
        'Selalu sediakan uang koin dan kartu transit Touch \'n Go untuk kemudahan.',
      ],
      en: [
        'Leverage free Rapid Penang CAT historic shuttle loops with kids.',
        'Pre-book nature biome admission 1 day in advance to bypass ticket queues.',
        'Keep Touch \'n Go transit cards loaded for frictionless bus commutes.',
      ],
    },
    tags: ['Street Art', 'Trains', 'Insects Biome', 'Food Trail'],
  },
];
