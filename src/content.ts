import type { L } from "@/i18n";

/* ============================================================
 * SAHFAMILY LANDING PAGE — PUSAT KONTEN
 * Semua teks dummy ada di file ini. Tinggal ganti isi `id`/`en`
 * atau tambah/kurangi item array tanpa menyentuh komponen.
 * ============================================================ */

export const ui = {
  brand: "SahFamily",
  nav: [
    { href: "#belajar", label: { id: "Belajar", en: "Learning" } as L },
    { href: "#perjalanan", label: { id: "Perjalanan", en: "Journey" } as L },
    { href: "#perjuangan", label: { id: "Perjuangan", en: "Struggles" } as L },
    { href: "#portofolio", label: { id: "Portofolio", en: "Portfolio" } as L },
    { href: "#momen", label: { id: "Momen", en: "Moments" } as L },
    { href: "#travel", label: { id: "Travel", en: "Travel" } as L },
    { href: "#biaya", label: { id: "Biaya", en: "Expenses" } as L },
  ],
  menu: { id: "Menu", en: "Menu" } as L,
};

export const hero = {
  badge: { id: "👨‍👩‍👧‍👦 Keluarga Sah", en: "👨‍👩‍👧‍👦 The Sah Family" } as L,
  title1: { id: "Belajar, Tumbuh,", en: "Learn, Grow," } as L,
  title2: { id: "& Berpetualang Bersama", en: "& Explore Together" } as L,
  subtitle: {
    id: "Jurnal digital keluarga kami: apa yang dipelajari anak, perjalanan kami, perjuangan yang nyata, sampai rekomendasi travelling dan catatan biaya.",
    en: "Our family's digital journal: what the kids learn, our journeys, the real struggles, plus travel recommendations and expense notes.",
  } as L,
  ctaPrimary: { id: "Ikuti Perjalanan Kami", en: "Follow Our Journey" } as L,
  ctaSecondary: { id: "Rekomendasi Travel", en: "Travel Picks" } as L,
  members: [
    { emoji: "👨", name: "Papa Sahl", role: { id: "Ayah & kapten trip", en: "Dad & trip captain" } as L },
    { emoji: "👩", name: "Mama", role: { id: "Ibu & manajer belajar", en: "Mom & learning manager" } as L },
    { emoji: "🧒", name: "Kakak", role: { id: "6 tahun · penjelajah cilik", en: "6 y.o. · little explorer" } as L },
    { emoji: "👶", name: "Adik", role: { id: "3 tahun · peniru ulung", en: "3 y.o. · master imitator" } as L },
  ],
};

export const learning = {
  title: { id: "Apa yang Dipelajari Anak", en: "What the Kids Are Learning" } as L,
  subtitle: {
    id: "Bukan cuma pelajaran sekolah — kami percaya bermain adalah belajar.",
    en: "Not just school subjects — we believe play is learning.",
  } as L,
  items: [
    {
      emoji: "📚",
      color: "bg-coral",
      title: { id: "Membaca & Bercerita", en: "Reading & Storytelling" } as L,
      desc: {
        id: "Membaca 15 menit sebelum tidur, lalu menceritakan ulang dengan boneka.",
        en: "15 minutes of bedtime reading, then retelling the story with puppets.",
      } as L,
      level: 80,
    },
    {
      emoji: "🔢",
      color: "bg-teal",
      title: { id: "Matematika Menyenangkan", en: "Fun Math" } as L,
      desc: {
        id: "Berhitung lewat permainan pasar-pasaran dan Lego.",
        en: "Counting through pretend shop games and Lego.",
      } as L,
      level: 65,
    },
    {
      emoji: "🌿",
      color: "bg-grape",
      title: { id: "Sains & Alam", en: "Science & Nature" } as L,
      desc: {
        id: "Berkebun di halaman, mengamati serangga, eksperimen dapur sederhana.",
        en: "Gardening at home, bug watching, simple kitchen experiments.",
      } as L,
      level: 70,
    },
    {
      emoji: "🎨",
      color: "bg-sunny",
      title: { id: "Seni & Kreativitas", en: "Art & Creativity" } as L,
      desc: {
        id: "Menggambar, mewarnai, dan prakarya dari barang bekas tiap akhir pekan.",
        en: "Drawing, coloring, and weekend crafts from recycled stuff.",
      } as L,
      level: 90,
    },
    {
      emoji: "💻",
      color: "bg-teal",
      title: { id: "Coding Dasar", en: "Basic Coding" } as L,
      desc: {
        id: "Logika pemrograman lewat Scratch Jr dan permainan robot-robotan.",
        en: "Programming logic through Scratch Jr and robot pretend play.",
      } as L,
      level: 45,
    },
    {
      emoji: "🗣️",
      color: "bg-coral",
      title: { id: "Dua Bahasa", en: "Bilingual" } as L,
      desc: {
        id: "Sehari Indonesia, sehari English — lewat lagu dan kartun favorit.",
        en: "Indonesian one day, English the next — through songs and favorite cartoons.",
      } as L,
      level: 60,
    },
  ],
};

export const journey = {
  title: { id: "Perjalanan Kami", en: "Our Journey" } as L,
  subtitle: {
    id: "Dari dua orang jadi empat, dan setiap tahun ada cerita baru.",
    en: "From two of us to four, and every year brings a new story.",
  } as L,
  milestones: [
    {
      year: "2018",
      emoji: "💍",
      title: { id: "Awal Cerita", en: "Where It Began" } as L,
      desc: { id: "Kami menikah dan memulai petualangan berdua.", en: "We got married and started this adventure as a pair." } as L,
    },
    {
      year: "2019",
      emoji: "👶",
      title: { id: "Anggota Baru", en: "New Member Arrives" } as L,
      desc: { id: "Kakak lahir — dunia kami berubah selamanya (dan kurang tidur).", en: "Our first child was born — our world changed forever (and lost sleep)." } as L,
    },
    {
      year: "2021",
      emoji: "🚗",
      title: { id: "Road Trip Pertama", en: "First Road Trip" } as L,
      desc: { id: "Perjalanan keluarga pertama ke luar kota. Drama, tawa, semuanya lengkap.", en: "Our first family trip out of town. Drama, laughter, the whole package." } as L,
    },
    {
      year: "2022",
      emoji: "🍼",
      title: { id: "Adik Lahir", en: "Little Sibling Is Born" } as L,
      desc: { id: "Keluarga genap empat. Kakak resmi jadi kakak.", en: "Family of four at last. Our firstborn officially became a big sibling." } as L,
    },
    {
      year: "2024",
      emoji: "🎒",
      title: { id: "Hari Pertama Sekolah", en: "First Day of School" } as L,
      desc: { id: "Kakak masuk SD. Tangis di gerbang berubah jadi semangat dalam seminggu.", en: "Big kid started school. Gate tears turned into excitement within a week." } as L,
    },
    {
      year: "2025",
      emoji: "🚀",
      title: { id: "Hobi Baru", en: "New Hobbies" } as L,
      desc: { id: "Coding cilik, menggambar komik, dan situs keluarga ini lahir.", en: "Kids' coding, comic drawing, and this family website was born." } as L,
    },
  ],
};

export const struggles = {
  title: { id: "Perjuangan (yang Jujur)", en: "Struggles (the Honest Ones)" } as L,
  subtitle: {
    id: "Tidak semua mulus. Ini sisi nyata parenting versi kami.",
    en: "Not everything is smooth. Here's the real side of our parenting.",
  } as L,
  items: [
    {
      emoji: "😤",
      title: { id: "Tantrum di Tempat Umum", en: "Public Tantrums" } as L,
      struggle: {
        id: "Menjatuhkan diri di lantai mall sambil ditatap satu toko.",
        en: "Full-body meltdowns on the mall floor while the whole store stares.",
      } as L,
      growth: {
        id: "Kami belajar tetap tenang, validasi perasaan, dan punya 'kode keluarga' sebelum pergi.",
        en: "We learned to stay calm, validate feelings, and have a family 'game plan' before outings.",
      } as L,
    },
    {
      emoji: "📱",
      title: { id: "Perang Screen Time", en: "The Screen Time Battle" } as L,
      struggle: {
        id: "Menutup tablet selalu berakhir negosiasi ala diplomat kecil.",
        en: "Closing the tablet always ends in negotiations with a tiny diplomat.",
      } as L,
      growth: {
        id: "Aturan jelas: layar maksimal 1 jam/hari, diganti main di luar dan prakarya.",
        en: "Clear rules: max 1 hour of screen a day, swapped for outdoor play and crafts.",
      } as L,
    },
    {
      emoji: "🥦",
      title: { id: "Pilih-pilih Makanan", en: "Picky Eating" } as L,
      struggle: {
        id: "Sayur dianggap musuh nomor satu di meja makan.",
        en: "Vegetables were treated as public enemy number one at the dinner table.",
      } as L,
      growth: {
        id: "Anak dilibatkan memasak dan berkebun — ternyata makan sayur hasil tanam sendiri rasanya beda.",
        en: "We involved the kids in cooking and gardening — veggies you grew yourself taste different, apparently.",
      } as L,
    },
    {
      emoji: "🌙",
      title: { id: "Drama Tidur Malam", en: "Bedtime Drama" } as L,
      struggle: {
        id: "'Satu cerita lagi...' yang berubah jadi sepuluh cerita lagi.",
        en: "'One more story...' that turns into ten more stories.",
      } as L,
      growth: {
        id: "Rutinitas tetap: mandi → cerita → lampu tidur. Konsisten ternyata kuncinya.",
        en: "A fixed routine: bath → story → night light. Consistency turned out to be the key.",
      } as L,
    },
  ],
  labels: {
    struggle: { id: "Tantangan", en: "The challenge" } as L,
    growth: { id: "Cara Kami Tumbuh", en: "How we grew" } as L,
  },
};

export const portfolio = {
  title: { id: "Portofolio Anak", en: "Kids' Portfolio" } as L,
  subtitle: {
    id: "Karya dan pencapaian kecil yang kami rayakan besar-besaran.",
    en: "Small creations and wins we celebrate like they're huge.",
  } as L,
  items: [
    {
      emoji: "🖍️",
      gradient: "from-coral to-sunny",
      year: "2024",
      title: { id: "Seri Gambar Keluarga", en: "Family Drawing Series" } as L,
      desc: { id: "12 gambar krayon bertema keluarga dan hewan peliharaan.", en: "12 crayon drawings themed around family and pets." } as L,
    },
    {
      emoji: "🧩",
      gradient: "from-teal to-grape",
      year: "2024",
      title: { id: "Puzzle 100 Keping Pertama", en: "First 100-Piece Puzzle" } as L,
      desc: { id: "Selesai dalam 3 hari tanpa bantuan (dan tanpa menyerah).", en: "Finished in 3 days with no help (and no giving up)." } as L,
    },
    {
      emoji: "🤖",
      gradient: "from-grape to-teal",
      year: "2025",
      title: { id: "Animasi Scratch Pertama", en: "First Scratch Animation" } as L,
      desc: { id: "Kucing menari 10 detik — karya coding pertama Kakak.", en: "A 10-second dancing cat — our big kid's first coding work." } as L,
    },
    {
      emoji: "🌱",
      gradient: "from-sunny to-teal",
      year: "2025",
      title: { id: "Kebun Mini Keluarga", en: "Family Mini Garden" } as L,
      desc: { id: "Menanam tomat & kangkung dari biji sampai panen pertama.", en: "Growing tomatoes & spinach from seed to first harvest." } as L,
    },
    {
      emoji: "📖",
      gradient: "from-coral to-grape",
      year: "2025",
      title: { id: "Buku Cerita Pertama", en: "First Story Book" } as L,
      desc: { id: "Cerita bergambar 8 halaman karya sendiri, dijilid Mama.", en: "A self-made 8-page picture book, bound by Mom." } as L,
    },
    {
      emoji: "🏊",
      gradient: "from-teal to-sunny",
      year: "2025",
      title: { id: "Bisa Berenang!", en: "Can Swim Now!" } as L,
      desc: { id: "Dari takut air jadi berani melompat ke kolam sendiri.", en: "From afraid of water to jumping into the pool solo." } as L,
    },
  ],
};

export const moments = {
  title: { id: "Momen Keluarga", en: "Family Moments" } as L,
  subtitle: {
    id: "Kebahagiaan kecil yang kami simpan rapat-rapat.",
    en: "Little joys we keep close to our hearts.",
  } as L,
  items: [
    { emoji: "🏖️", gradient: "from-sunny to-coral", caption: { id: "Pantai pertama Adik", en: "Little one's first beach" } as L },
    { emoji: "🎂", gradient: "from-coral to-grape", caption: { id: "Ulang tahun ke-6", en: "6th birthday party" } as L },
    { emoji: "⛺", gradient: "from-teal to-grape", caption: { id: "Camping di halaman", en: "Backyard camping" } as L },
    { emoji: "🚂", gradient: "from-grape to-teal", caption: { id: "Naik kereta pertama kali", en: "First train ride" } as L },
    { emoji: "🦒", gradient: "from-sunny to-teal", caption: { id: "Weekend di kebun binatang", en: "Zoo weekend" } as L },
    { emoji: "🌧️", gradient: "from-teal to-sunny", caption: { id: "Hujan-hujanan sekeluarga", en: "Getting soaked together" } as L },
  ],
  note: {
    id: "💡 Ganti kartu ini dengan foto asli — taruh gambar di folder public/ lalu ubah komponen Moments.",
    en: "💡 Swap these cards with real photos — drop images into public/ and update the Moments component.",
  } as L,
};

export const travel = {
  title: { id: "Rekomendasi Travelling Keluarga", en: "Family Travel Picks" } as L,
  subtitle: {
    id: "Destinasi yang sudah kami coba dan ramah anak, lengkap dengan tipsnya.",
    en: "Destinations we've tried that are kid-friendly, tips included.",
  } as L,
  labels: {
    budget: { id: "Estimasi biaya", en: "Est. budget" } as L,
    kidFriendly: { id: "Ramah anak", en: "Kid-friendly" } as L,
    tip: { id: "Tips", en: "Tip" } as L,
  },
  items: [
    {
      emoji: "🌋",
      city: { id: "Bandung", en: "Bandung" } as L,
      vibe: { id: "Udara sejuk & wisata edukasi", en: "Cool air & educational spots" } as L,
      tip: {
        id: "Datang di hari biasa untuk hindari macet akhir pekan. Wajib: Farm House & Observatorium Bosscha.",
        en: "Visit on weekdays to beat weekend traffic. Must-do: Farm House & Bosscha Observatory.",
      } as L,
      budget: "Rp 1,5 jt / 2 hari",
      rating: 5,
    },
    {
      emoji: "🛕",
      city: { id: "Yogyakarta", en: "Yogyakarta" } as L,
      vibe: { id: "Budaya & sejarah hidup", en: "Culture & living history" } as L,
      tip: {
        id: "Sewa mobil + supir lokal. Ajak anak naik andong ke Malioboro, mereka paling senang!",
        en: "Rent a car with a local driver. Take the kids on an andong ride to Malioboro — they love it!",
      } as L,
      budget: "Rp 2 jt / 3 hari",
      rating: 5,
    },
    {
      emoji: "🏝️",
      city: { id: "Bali", en: "Bali" } as L,
      vibe: { id: "Pantai & alam tanpa habis", en: "Endless beaches & nature" } as L,
      tip: {
        id: "Pilih area Sanur untuk keluarga — ombak tenang dan banyak taman bermain.",
        en: "Pick Sanur for families — calm waves and plenty of playgrounds.",
      } as L,
      budget: "Rp 5 jt / 4 hari",
      rating: 4,
    },
    {
      emoji: "🎡",
      city: { id: "Singapura", en: "Singapore" } as L,
      vibe: { id: "Luar negeri pertama yang gampang", en: "The easiest first trip abroad" } as L,
      tip: {
        id: "Transportasi umum sangat ramah stroller. Beli kartu EZ-Link untuk sekeluarga.",
        en: "Public transport is super stroller-friendly. Get EZ-Link cards for the whole family.",
      } as L,
      budget: "Rp 9 jt / 3 hari",
      rating: 4,
    },
  ],
};

export const expenses = {
  title: { id: "Catatan Biaya Keluarga", en: "Family Expense Notes" } as L,
  subtitle: {
    id: "Transparan soal uang = bagian dari belajar. Ini gambaran kasarnya (angka dummy).",
    en: "Being transparent about money is part of learning. Here's the rough picture (dummy numbers).",
  } as L,
  monthly: {
    title: { id: "Pengeluaran Anak per Bulan", en: "Monthly Kid-Related Spending" } as L,
    rows: [
      {
        label: { id: "Pendidikan (SPP & buku)", en: "Education (tuition & books)" } as L,
        amount: "Rp 1.200.000",
      },
      {
        label: { id: "Kursus & aktivitas", en: "Classes & activities" } as L,
        amount: "Rp 600.000",
      },
      {
        label: { id: "Kesehatan", en: "Healthcare" } as L,
        amount: "Rp 400.000",
      },
      {
        label: { id: "Mainan edukasi", en: "Educational toys" } as L,
        amount: "Rp 250.000",
      },
      {
        label: { id: "Tabungan pendidikan", en: "Education savings" } as L,
        amount: "Rp 1.000.000",
      },
    ],
    total: { id: "Total per bulan", en: "Monthly total" } as L,
    totalAmount: "Rp 3.450.000",
  },
  annual: {
    title: { id: "Budget Travelling Tahunan", en: "Annual Travel Budget" } as L,
    items: [
      {
        label: { id: "2 trip dekat (Bandung/Jogja)", en: "2 nearby trips (Bandung/Yogya)" } as L,
        amount: "Rp 4.000.000",
      },
      {
        label: { id: "1 trip jauh (Bali dll.)", en: "1 big trip (Bali etc.)" } as L,
        amount: "Rp 6.000.000",
      },
      {
        label: { id: "Dana darurat trip", en: "Trip emergency fund" } as L,
        amount: "Rp 1.500.000",
      },
    ],
  },
  tips: {
    title: { id: "Cara Kami Berhemat", en: "How We Save" } as L,
    items: [
      {
        emoji: "📅",
        text: { id: "Booking jauh hari — tiket & hotel bisa hemat sampai 40%.", en: "Book early — tickets & hotels can be up to 40% cheaper." } as L,
      },
      {
        emoji: "🎟️",
        text: { id: "Manfaatkan kartu keluarga untuk diskon tempat wisata.", en: "Use family membership cards for attraction discounts." } as L,
      },
      {
        emoji: "🧺",
        text: { id: "Bawa bekal & mainan sendiri saat travelling.", en: "Pack your own snacks & toys when travelling." } as L,
      },
      {
        emoji: "🏦",
        text: { id: "Pisahkan rekening khusus anak & khusus travel sejak awal.", en: "Separate kid & travel accounts from day one." } as L,
      },
    ],
  },
};

export const footer = {
  tagline: {
    id: "Rumah digital Keluarga Sah — tempat cerita, belajar, dan petualangan kami tersimpan.",
    en: "The Sah Family's digital home — where our stories, learning, and adventures live.",
  } as L,
  techLink: {
    id: "Punya proyek digital? Kunjungi Sahl Tech — software house kami 🛠️",
    en: "Have a digital project? Visit Sahl Tech — our software house 🛠️",
  } as L,
  rights: { id: "Dibuat dengan ❤️ oleh Keluarga Sah.", en: "Made with ❤️ by the Sah Family." } as L,
  // Ganti tahun di sini (static supaya aman untuk prerender Next.js)
  year: "2025",
};
