export interface StruggleItem {
  id: string;
  topic: { id: string; en: string };
  icon: string;
  theStruggle: { id: string; en: string };
  theRealityCheck: { id: string; en: string };
  lessonLearned: { id: string; en: string };
  practicalTip: { id: string; en: string };
}

export const strugglesData: StruggleItem[] = [
  {
    id: 'routine-chaos',
    topic: { id: 'Jadwal yang Kerap Berantakan', en: 'Shattered Schedules & Mood Swings' },
    icon: '🌪️',
    theStruggle: {
      id: 'Awalnya kami membuat jadwal seperti lonceng sekolah (08.00 Math, 09.00 Science). Hasilnya? Air mata anak, stres orang tua, dan resistensi setiap pagi.',
      en: 'We initially drafted rigid timetable blocks like conventional schools (08:00 Math, 09:00 Science). The outcome? Meltdowns, parental burnout, and morning resentment.',
    },
    theRealityCheck: {
      id: 'Anak bukan robot jam weker. Minat belajar mereka meledak saat rasa ingin tahu terpancing, bukan karena jarum jam menunjukkan pukul tertentu.',
      en: 'Children are not mechanical clocks. Peak cognitive engagement sparks from spontaneous wonder, not arbitrary bell chimes.',
    },
    lessonLearned: {
      id: 'Beralih dari "Jadwal Jam Kaku" ke "Ritme Harian Alami" (Morning Basket -> Outdoor Activity -> Creative Block -> Evening Read).',
      en: 'Switched from rigid hourly grids to intuitive daily rhythms (Morning Basket -> Outdoor Play -> Creative Block -> Twilight Read).',
    },
    practicalTip: {
      id: 'Gunakan checklist 3 prioritas inti per hari, sisanya biarkan mengalir fleksibel.',
      en: 'Limit daily focal goals to just 3 anchor items, letting remaining hours flow organically.',
    },
  },
  {
    id: 'screen-time-dilemma',
    topic: { id: 'Dilema Screen Time vs Alat Kreasi', en: 'The Screen-Time Paradox' },
    icon: '📱',
    theStruggle: {
      id: 'Sebagai engineer, Ayah ingin anak melek teknologi, tapi takut anak terjebak dopamin video pendek atau kecanduan game instan tanpa arti.',
      en: 'As a software engineer, Dad wants tech fluency, yet dreaded the trap of passive short-form video dopamine loops.',
    },
    theRealityCheck: {
      id: 'Layar pasif (nonton tanpa interaksi) berbahaya, tapi layar aktif (coding, composing audio, drawing canvas) melatih kecerdasan pencipta.',
      en: 'Passive consumption dulls curiosity; active creative tooling (coding, sketching, sound design) sharpens craftsmanship.',
    },
    lessonLearned: {
      id: 'Aturan emas: Konsumsi dibatasi ketat, Kreasi didukung penuh. Kalau sedang buat project Scratch, waktu tidak diputus kaku.',
      en: 'Golden family rule: Restrict mindless feed scrolls, passionately empower creator mode.',
    },
    practicalTip: {
      id: 'Perangkat kerja dan tablet belajar dibuat tanpa aplikasi sosial media atau algoritma recommendation feed.',
      en: 'Strip learning tablets clean of social feeds, autoplay loops, and algorithmic notifications.',
    },
  },
  {
    id: 'travel-fatigue',
    topic: { id: 'Kelelahan Logistik Saat Berpindah Kota', en: 'Nomadic Fatigue & Overstimulation' },
    icon: '🧳',
    theStruggle: {
      id: 'Ingin mengunjungi 5 spot wisata dalam sehari saat trip. Hasilnya anak tantrum di taksi, tertidur di museum, dan semua orang kelelahan emosional.',
      en: 'Trying to pack 5 tourist attractions in a single day. Outcome: sensory overload, tantrums, sleeping kids, and exhausted parents.',
    },
    theRealityCheck: {
      id: 'Worldschooling bukan sightseeing checklist turis cepat. Ini adalah memindahkan ruang hidup keluarga ke tempat baru dengan tempo lambat.',
      en: 'Worldschooling is not a breathless holiday checklist. It is transplanting gentle everyday living into new cultural grounds.',
    },
    lessonLearned: {
      id: 'Satu destinasi per hari sudah sangat cukup. Sisakan waktu luang untuk nongkrong di taman kota dan mengamati burung lokal.',
      en: 'One core anchor spot per day is plenty. Unscheduled playground visits unlock the richest serendipity.',
    },
    practicalTip: {
      id: 'Selalu sisakan 1 hari penuh istirahat total (zero itinerary day) setelah perjalanan antarkota.',
      en: 'Always bake in one zero-agenda rest buffer day right after travel transitions.',
    },
  },
  {
    id: 'socialization-worry',
    topic: { id: 'Kekhawatiran Sosialisasi & Teman Sebaya', en: 'Socialization Insecurities' },
    icon: '🤝',
    theStruggle: {
      id: 'Kerabat sering bertanya: "Nanti anaknya nggak punya teman gimana?". Pertanyaan itu sempat membuat kami overthinking dan ragu melangkah.',
      en: 'Relatives often asked: "Won\'t your kids turn socially isolated?" That question triggered lingering second-guesses.',
    },
    theRealityCheck: {
      id: 'Di dunia nyata, sosialisasi sehat terjadi lintas usia (berbincang dengan nelayan, kasir, balita, kakek-nenek), bukan hanya teman seangkatan kelas.',
      en: 'In natural reality, healthy human connection is multi-generational—interacting with bakers, farmers, toddlers, and elders.',
    },
    lessonLearned: {
      id: 'Anak justru lebih percaya diri memulai obrolan dengan siapapun karena terbiasa berinteraksi di ruang sosial terbuka.',
      en: 'The kids developed remarkable poise speaking with diverse strangers by engaging in public shared realms.',
    },
    practicalTip: {
      id: 'Ikut komunitas olahraga lokal (renang, taekwondo, sanggar seni) di kota manapun kami singgah.',
      en: 'Enroll in local weekly sports clubs or community workshops wherever we anchor.',
    },
  },
];
