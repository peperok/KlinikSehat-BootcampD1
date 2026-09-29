export default function Footer() {
  return (
    <footer className="bg-[#073F67] text-white pt-16 pb-12 border-t border-[#09558B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Konten Utama Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Kolom 1: Profil Klinik Singkat */}
          <div className="md:col-span-5">
            <h3 className="text-xl font-bold tracking-tight text-white mb-3">
              Klinik Sehat Bersama
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mb-6">
              Fasilitas pelayanan kesehatan primer terdekat untuk keluarga. Memberikan kepastian jadwal dokter, pelayanan ramah, dan transparansi biaya bagi warga sekitar.
            </p>
            <div className="text-xs text-slate-400">
              Izin Operasional Klinik Pratama: No. 503/014/DINKES/2024
            </div>
          </div>

          {/* Kolom 2: Jam Operasional Ringkas */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#5CC6D0] mb-3">
              Jam Operasional Ringkas
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Senin – Sabtu:</span>
                <span className="font-semibold text-white">08.00 – 21.00 WIB</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Minggu & Hari Libur:</span>
                <span className="font-semibold text-white">08.00 – 14.00 WIB</span>
              </li>
              <li className="text-xs text-slate-400 pt-1">
                *Poli darurat ringan tetap siaga selama loket operasional buka.
              </li>
            </ul>
          </div>

          {/* Kolom 3: Tautan Media Sosial & Kontak */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#5CC6D0] mb-3">
              Media Sosial & Informasi
            </h4>
            <p className="text-xs text-slate-300 mb-4">
              Ikuti informasi kesehatan terkini dan kegiatan posyandu warga melalui media sosial resmi kami:
            </p>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Klinik"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#5CC6D0] hover:text-[#073F67] flex items-center justify-center text-white transition-all text-xs font-bold"
              >
                IG
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Klinik"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#5CC6D0] hover:text-[#073F67] flex items-center justify-center text-white transition-all text-xs font-bold"
              >
                FB
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Klinik"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#5CC6D0] hover:text-[#073F67] flex items-center justify-center text-white transition-all text-xs font-bold"
              >
                YT
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Loket"
                className="w-9 h-9 rounded-lg bg-[#5CC6D0] text-[#073F67] hover:bg-white flex items-center justify-center transition-all text-xs font-bold"
              >
                WA
              </a>
            </div>
          </div>

        </div>

        {/* Baris Hak Cipta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Klinik Sehat Bersama. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">
              Kembali ke Atas ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
