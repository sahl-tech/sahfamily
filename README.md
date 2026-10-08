# sahfamily.my.id

Landing page resmi dan living archive keluarga **sahfamily.my.id** yang memuat:
- Kurikulum & apa yang dipelajari anak (Inquiry-based homeschool, coding Scratch, living math, sains alam)
- Lini masa perjalanan (Journey timeline)
- Cerita jujur & refleksi tantangan (Struggles, lessons learned, and reality checks)
- Galeri momen berharga (Privacy-safe scrapbook polaroid & doodle)
- Rekomendasi tempat wisata slow travel ramah anak (Kid-friendly score, tips logistik)
- Proporsi anggaran & pengeluaran keluarga (Transparan berbasis persentase tanpa nominal kaku)
- Kurasi sumber belajar (Buku, aplikasi edukasi, dan gear eksplorasi)
- Agency showcase badge untuk [sahl-tech](https://sahl.tech)

---

## Tech Stack
- **Framework:** [Astro](https://astro.build/) (Static Site Generation / SSG)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography:** `@fontsource-variable/fredoka` & `@fontsource-variable/nunito`
- **Bilingual:** Bahasa Indonesia (`/`) & English (`/en/`)
- **Hosting Target:** Cloudflare Pages

---

## Menjalankan Proyek Lokal

```bash
cd /root/workspaces/github.com/sahl-tech/sahfamily

# Install dependencies (jika belum)
npm install

# Jalankan development server
npm run dev

# Build static output untuk production
npm run build

# Preview hasil build lokal
npm run preview
```

---

## Deploy ke Cloudflare Pages

### Opsi 1: Menghubungkan Git Repository via Cloudflare Dashboard
1. Buka dashboard [Cloudflare Pages](https://dash.cloudflare.com/).
2. Buat proyek baru dan hubungkan ke repository git `sahl-tech/sahfamily`.
3. Set pengaturan build:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy!

### Opsi 2: Deploy langsung via Wrangler CLI
```bash
npm install -g wrangler
wrangler pages deploy dist --project-name=sahfamily
```

---

## Struktur Konten
Seluruh konten teks disusun rapi dan modular di dalam folder `src/data/`:
- `src/data/family.ts`: Data profil anggota keluarga
- `src/data/learning.ts`: 6 pilar pembelajaran anak
- `src/data/journey.ts`: Milestone perjalanan
- `src/data/struggles.ts`: Catatan friksi nyata dan takeaways
- `src/data/moments.ts`: Scrapbook kenangan
- `src/data/travel.ts`: Rekomendasi destinasi ramah anak
- `src/data/expense.ts`: Alokasi proporsi biaya hidup & edukasi
- `src/data/resources.ts`: Daftar buku dan tools kurasi
