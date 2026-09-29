# 📄 Dokumen Spesifikasi Proyek: Landing Page Klinik Sehat Bersama

## 1. Ringkasan Proyek
* **Nama Klinik**: Klinik Sehat Bersama
* **Kategori**: Klinik Pratama untuk Keluarga
* **Jenis Aplikasi**: Landing Page Profil Statis (*Single Page Application*)
* **Teknologi Utama**: Next.js 16 (App Router), TypeScript, Tailwind CSS
* **Target Deployment**: Netlify (`.netlify.app`)

---

## 2. Latar Belakang & Masalah
* **Latar Belakang**: Warga sekitar klinik sering datang langsung ke klinik hanya untuk menanyakan jadwal dokter, jenis layanan yang tersedia, dan perkiraan biaya tindakan.
* **Masalah Utama**: 
  1. Petugas loket terbebani menjawab pertanyaan yang sama berulang kali setiap hari.
  2. Calon pasien tidak dapat merencanakan waktu dan biaya kunjungan sebelum berangkat dari rumah.
  3. Pasien tidak memiliki satu tempat rujukan informasi terpusat yang resmi, transparan, dan mudah diakses dari ponsel.
* **Tujuan**:
  1. Memberikan pemahaman layanan klinik secara mandiri tanpa harus datang ke loket.
  2. Menyajikan jadwal praktik dokter yang pasti dan mudah dibaca.
  3. Menyediakan transparansi perbandingan paket pemeriksaan.
  4. Memudahkan calon pasien menghubungi klinik via WhatsApp/telepon atau menemukan lokasi klinik.

---

## 3. Profil Sasaran Pengguna (Target Personas)
1. **Warga yang Butuh Berobat Umum**:
   * Kebutuhan: Melihat ketersediaan layanan umum, jadwal dokter jaga hari ini, dan perkiraan biaya dengan cepat melalui ponsel.
2. **Orang Tua yang Membawa Anak**:
   * Kebutuhan: Memeriksa layanan pemeriksaan anak, kesehatan gigi anak, serta membaca testimoni kepuasan orang tua lain.
3. **Warga yang Baru Pindah ke Wilayah Klinik**:
   * Kebutuhan: Memperoleh kesan pertama bahwa klinik rapi, bersih, profesional, tepercaya, serta mudah ditemukan rutenya.

---

## 4. Alur Pengguna (User Flow)
Alur disusun secara psikologis untuk membangun kepercayaan hingga konversi:
```
[Buka Hero] 
    └──> [Melihat Layanan] 
            └──> [Memeriksa Jadwal Dokter] 
                    └──> [Membaca Testimoni] 
                            └──> [Membandingkan Paket] 
                                    └──> [Menghubungi Klinik / Buka Peta]
```

---

## 5. Batasan Lingkup Kerja (Scope Boundaries)
### ✅ Masuk Lingkup (In Scope)
* 1 halaman landing page statis (*Single Page*) dengan 6 *section* utama dan 1 *footer*.
* Dibangun secara bertahap per *section* dengan prompt terpisah.
* Desain responsif (*mobile-friendly*) dengan fokus keterbacaan tinggi di layar ponsel.
* Siap diekspor statis dan ditayangkan ke Netlify.
* Minimal 3 commit Git dengan pesan terstruktur per bagian di akhir pengerjaan lokal.

### ❌ Di Luar Lingkup (Out of Scope)
* Sistem pendaftaran pasien online atau pengisian formulir reservasi database.
* Rekam medis elektronik (EMR).
* Gerbang pembayaran online (*payment gateway*).
* Integrasi antrean langsung (*real-time queue API*).
* Peta interaktif / embed peta berat (cukup berupa tautan navigasi Google Maps).

---

## 6. Rincian Komponen & Struktur Bagian (Sections)

### Header / Navbar
* Logo dan nama **Klinik Sehat Bersama**.
* Menu navigasi cepat (*smooth scroll*): Layanan, Jadwal, Testimoni, Paket, Lokasi.
* Tombol CTA Cepat: WhatsApp loket informasi.

### Section 1: Hero
* **Nama Klinik**: Klinik Sehat Bersama.
* **Kalimat Penjelas**: *"Klinik pratama untuk keluarga"*.
* **Call to Action (CTA)**: Tombol **"Lihat Jadwal"** (scroll langsung ke Section Jadwal).
* **Aksen Tambahan**: Informasi cepat jam operasional hari ini & lokasi singkat.

### Section 2: Services (Layanan Utama)
Terdiri dari **4 Kartu Layanan**, masing-masing memuat: **Nama Layanan**, **Estimasi Durasi**, dan **Satu Kalimat Penjelas**:
1. **Pemeriksaan Umum**: Durasi 15–20 menit. Penanganan keluhan kesehatan umum, konsultasi dokter keluarga, dan resep obat harian.
2. **Kesehatan Gigi**: Durasi 30–45 menit. Pemeriksaan rutin, tambal gigi, pembersihan karang (*scaling*), dan perawatan gusi.
3. **Konsultasi Gizi**: Durasi 30 menit. Panduan pola makan sehat, program diet medis, serta konsultasi nutrisi ibu & balita.
4. **Pemeriksaan Anak**: Durasi 20–30 menit. Pemantauan tumbuh kembang si kecil, imunisasi dasar, dan konsultasi kesehatan anak ramah keluarga.

### Section 3: Schedule (Jadwal Praktik Dokter)
* Tabel/kartu jadwal praktik mingguan (Senin – Minggu).
* Menampilkan nama dokter, spesialisasi/bidang, hari praktik, dan jam operasional.
* **Kriteria penting**: Sangat mudah dibaca di layar ponsel tanpa membuat pengguna bingung.

### Section 4: Testimonials (Testimoni Pasien)
* Kartu ulasan nyata dari warga sekitar dan orang tua pasien.
* Rating bintang, nama pasien/orang tua, dan kutipan singkat tentang keramahan dokter, kebersihan tempat, serta waktu tunggu yang nyaman.

### Section 5: Pricing (Paket Pemeriksaan & Transparansi Biaya)
Terdiri dari **3 Paket Pemeriksaan**: Tiap paket memuat **Nama Paket**, **Harga**, **Jumlah Pemeriksaan**, dan **3 Rincian**:
1. **Paket Dasar**:
   * Harga: Rp75.000
   * Jumlah: 3 Jenis Pemeriksaan
   * Rincian: Konsultasi Dokter Umum, Pengukuran Tanda Vital (Tensi & Suhu), Cek Gula Darah Sewaktu.
2. **Paket Keluarga**:
   * Harga: Rp185.000
   * Jumlah: 4 Jenis Pemeriksaan
   * Rincian: Pemeriksaan Dokter Umum (hingga 2 orang), Konsultasi Kesehatan Gigi Ringan, Cek Kolesterol & Asam Urat, Vitamin Daya Tahan Tubuh.
3. **Paket Lengkap**:
   * Harga: Rp295.000
   * Jumlah: 5 Jenis Pemeriksaan
   * Rincian: Pemeriksaan Dokter Umum Menyeluruh, Pembersihan Karang Gigi Ringan (*Scaling*), Cek Profil Darah Sederhana, Konsultasi Pola Gizi Personal, Rekap Resume Medis.

### Section 6: Location & Contact (Lokasi & Kontak)
* **Alamat Lengkap**: Alamat fisik klinik di kawasan permukiman warga.
* **Jam Buka**: Rincian hari buka loket dan pelayanan darurat ringan.
* **Peta Lokasi**: Berupa tautan langsung (*link*) menuju Google Maps (bukan embed iframe berat).
* **Tautan Telepon**: Tautan `tel:` untuk panggilan langsung.
* **Tautan WhatsApp**: Tautan `https://wa.me/...` dengan teks pembuka otomatis.

### Footer
* Ringkasan izin operasional klinik pratama / SIP.
* Kontak darurat warga.
* Hak cipta (Copyright © Klinik Sehat Bersama).

---

## 7. Kriteria Visual & UI/UX (Berdasarkan Referensi RS JIH)
* **Palet Warna Utama (Mengadopsi Standar RS JIH)**:
  * **Primary / Accent Navy (`#09558B`)**: Warna biru laut khas RS JIH yang melambangkan kredibilitas, profesionalisme medis, dan ketenangan.
  * **Secondary / Medical Aqua (`#5CC6D0`)**: Aksen toska/cyan segar yang memberikan kesan higienis, modern, dan ramah keluarga.
  * **Warm Amber Gold (`#FFC71F`)**: Aksen hangat untuk badge unggulan, rating bintang testimoni, dan penanda jadwal dokter jaga.
  * **Clean Backgrounds (`#FFFFFF` & `#F4F6FE` / `#F8FAFC`)**: Latar belakang putih bersih dengan sentuhan ice blue lembut yang sangat nyaman di mata.
  * **High Contrast Typography (`#111827` & `rgba(0, 11, 71, 1)`)**: Teks gelap bernuansa midnight navy untuk keterbacaan optimal.
  * **Border & Dividers (`#DCE3E9` / `#E2E8F0`)**: Garis batas yang halus dan rapi.
* **Tipografi**: Menggunakan font modern yang menenangkan, ramah, dan sangat terbaca (Poppins / Plus Jakarta Sans / Inter).
* **Responsivitas**: Desain *Mobile-First*, kartu bersudut membulat modern (*rounded-2xl*), efek bayangan halus (*soft elevation shadow*), dan ramah sentuhan jempol di ponsel.

---

## 8. Kriteria Teknis & Kriteria Selesai (*Definition of Done*)
1. Seluruh kode berjalan lancar secara lokal via `npm run dev` tanpa error lint maupun TypeScript.
2. Dibangun per *section* secara bertahap dan teratur.
3. Seluruh 6 section + 1 footer tampil rapi dan proporsional di layar ponsel dan desktop.
4. Di akhir, repositori lokal memuat minimal 3 Git commit dengan pesan yang deskriptif per bagian.
5. Menyiapkan konfigurasi static export (`output: 'export'`) sehingga siap ditayangkan ke Netlify menghasilkan URL `.netlify.app`.
6. Mampu menjelaskan minimal satu *git diff* perubahan kode.

---

## 9. Manajemen Risiko & Mitigasi
* **Risiko**: Tampilan klinik yang berantakan atau terkesan murah dapat menurunkan kepercayaan calon pasien.
* **Mitigasi**: Menggunakan sistem desain terstruktur (Tailwind CSS) dengan palet warna medis yang konsisten, jarak spasi (*spacing*) yang proporsional, dan kartu informasi yang teratur.
