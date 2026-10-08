export type Lang = 'id' | 'en';

export const siteConfig = {
  domain: 'sahfamily.my.id',
  agencyName: 'sahl-tech',
  agencyUrl: 'https://sahl.tech',
  nav: {
    id: [
      { label: 'Tentang', href: '#tentang' },
      { label: 'Belajar', href: '#belajar' },
      { label: 'Journey', href: '#journey' },
      { label: 'Struggles', href: '#struggles' },
      { label: 'Momen', href: '#momen' },
      { label: 'Travel', href: '#travel' },
      { label: 'Expense', href: '#expense' },
      { label: 'Resources', href: '#resources' },
    ],
    en: [
      { label: 'About', href: '#tentang' },
      { label: 'Learning', href: '#belajar' },
      { label: 'Journey', href: '#journey' },
      { label: 'Struggles', href: '#struggles' },
      { label: 'Moments', href: '#momen' },
      { label: 'Travel', href: '#travel' },
      { label: 'Expenses', href: '#expense' },
      { label: 'Resources', href: '#resources' },
    ],
  },
  hero: {
    id: {
      badge: '✨ Cerita & Eksperimen Keluarga',
      title: 'Rumah adalah tempat berpijak, dunia adalah ruang kelasnya.',
      subtitle: 'Catatan perjalanan parenting, homeschooling, worldschooling, dan coding bersama anak-anak. Dibuat dengan penuh rasa ingin tahu dan transparansi.',
      ctaPrimary: 'Lihat Yang Dipelajari Anak',
      ctaSecondary: 'Cerita & Realita',
    },
    en: {
      badge: '✨ Family Journey & Everyday Lab',
      title: 'Home is our launchpad, the whole world is our classroom.',
      subtitle: 'Chronicles of deliberate parenting, homeschooling, worldschooling, and coding adventures with our kids. Built with endless curiosity and radical honesty.',
      ctaPrimary: 'Explore Kids Learning',
      ctaSecondary: 'Real Struggles & Stories',
    },
  },
};
