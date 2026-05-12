# Next.js Landing Page for CV PRIMATECH SUKSES MANDIRI

Membangun landing page modern, sangat interaktif, dan non-mainstream untuk CV PRIMATECH SUKSES MANDIRI (High-Precision Lathe Machining Workshop). Website ini akan menggunakan tema *Industrial Precision & Dark Cyber-Brutalism* untuk memberikan kesan high-tech, HD, dan premium.

## User Review Required

> [!IMPORTANT]  
> Ini akan menginisialisasi proyek Next.js baru di workspace saat ini (`c:\Users\ASUS\Hanif\Primatech`). Pastikan direktori ini adalah tempat yang benar untuk proyek ini.

## Open Questions

> [!WARNING]  
> 1. Apakah Anda memiliki aset gambar/video spesifik untuk Hero Section dan Gallery (misal: percikan api, mesin bubut), atau haruskah saya menggunakan *placeholder* dan efek CSS untuk sementara?
> 2. Apakah Anda memiliki file logo resmi untuk "CV PRIMATECH SUKSES MANDIRI", atau haruskah saya menggunakan teks/ikon *placeholder* di Navbar sementara?

## Proposed Changes

### Setup Proyek & Konfigurasi
- Menginisialisasi proyek Next.js 14 (App Router) dengan Tailwind CSS.
- Menginstal dependensi tambahan: `framer-motion` (untuk animasi) dan `lucide-react` (untuk ikon).
- Mengonfigurasi `tailwind.config.ts` untuk menyertakan palet warna *Deep Gunmetal/Matte Black*, *Hot Metal Amber*, dan *Laser Cyan*.
- Menyiapkan font (seperti Space Grotesk/Syncopate untuk heading dan Inter/Plus Jakarta Sans untuk body).

### Komponen UI (Frontend)

Semua komponen akan dirancang dengan gaya *dark glassmorphism*, *border* tipis (1px solid border), tanpa *drop shadow* tebal.

#### `src/components/Navbar.tsx`
Navbar *floating* dengan efek *glassmorphism* (blur), teks/logo "CV PRIMATECH SUKSES MANDIRI" presisi di kiri, link standar, dan tombol CTA "Minta Penawaran" bergaya *glow/outline*.

#### `src/components/Hero.tsx`
Section hero dengan background dramatis (overlay gelap). Menampilkan *headline* tebal "Presisi Tinggi. Kualitas Industri.", sub-headline tentang presisi/kecepatan, dan dua tombol CTA (Primary *solid accent*, Secondary *outline*).

#### `src/components/Services.tsx`
Menampilkan layanan (Bubut CNC, Milling, Fabrikasi, dll) menggunakan layout *Bento Grid* yang asimetris modern. Menyertakan *micro-interaction* *scale* saat di-*hover*.

#### `src/components/Stats.tsx`
*Dark banner* (marquee berjalan atau grid minimalis) yang menyoroti spesifikasi toleransi/keunggulan (misal: "Akurasi hingga 0.01mm", "Operasional: Senin-Jumat", logo brand mesin).

#### `src/components/Gallery.tsx`
*Slider* gambar beresolusi tinggi (*HD*) dari komponen/part besi hasil pengerjaan. Menggunakan efek *grayscale* yang berubah menjadi berwarna saat di-*hover*.

#### `src/components/Footer.tsx`
Footer minimalis, bersih, dengan mode gelap (*dark mode*) yang memuat:
- **Alamat:** Jl. Perum Graha Prima No.371, Satriajaya, Kec. Tambun Utara, Kabupaten Bekasi, Jawa Barat 17510
- **Kontak:** 0812-8501-348
- **Jam Operasional:** Senin-Jumat 08.00–17.00 (Sabtu-Minggu Tutup)
- **Google Maps Embed:** Menggunakan iframe dari tautan Google Maps (https://maps.app.goo.gl/fLDrPTZP3HE5nMYb6)
- *Social links* (opsional).

### Halaman Utama

#### `src/app/page.tsx`
Menyatukan semua komponen di atas dengan *wrapper* `framer-motion` untuk efek *scroll-reveal* yang halus (elemen muncul perlahan saat di-*scroll*).

#### `src/app/globals.css`
Menyiapkan *base styles*, warna *background* utama (*matte black*), dan tekstur *noise* jika diperlukan.

## Verification Plan

### Manual Verification
1. Menjalankan server *development* (`npm run dev`).
2. Memeriksa setiap bagian halaman secara visual di browser untuk memverifikasi kesesuaian dengan panduan desain (*dark theme*, warna aksen, tipografi).
3. Menguji *scroll-reveal animations* dan *hover states* di *Bento Grid* dan *Gallery*.
4. Memastikan desain responsif di berbagai ukuran layar (mobile, tablet, desktop).
