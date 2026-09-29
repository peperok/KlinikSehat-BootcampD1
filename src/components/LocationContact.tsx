export default function LocationContact() {
  return (
    <section id="lokasi" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09558B] tracking-tight mb-4">
            Lokasi & Kontak Klinik
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Akses mudah dan dekat dengan permukiman warga. Hubungi kami langsung atau buka panduan rute melalui tautan peta.
          </p>
        </div>

        {/* Grid 2 Kolom: Alamat & Jam Buka, serta Tautan Peta & Kontak */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Kolom 1: Alamat Lengkap & Jam Buka */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#DCE3E9] shadow-xs flex flex-col justify-between">
            <div>
              {/* Alamat */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#EBF9FA] text-[#09558B] flex items-center justify-center shrink-0 border border-[#5CC6D0]/30">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Alamat Klinik
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Jl. Kesehatan Raya No. 45, RT 03 / RW 05, Kelurahan Sehat Sejahtera, Kecamatan Bahagia (Dekat Lapangan Warga).
                  </p>
                </div>
              </div>

              {/* Jam Buka Operasional */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EBF9FA] text-[#09558B] flex items-center justify-center shrink-0 border border-[#5CC6D0]/30">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Jam Operasional Loket
                  </h3>
                  <div className="space-y-1 text-sm text-slate-600">
                    <p>
                      <strong>Senin – Sabtu:</strong> 08.00 – 21.00 WIB
                    </p>
                    <p>
                      <strong>Minggu / Hari Libur:</strong> 08.00 – 14.00 WIB (Poli Darurat Ringan)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Catatan Area Parkir */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Tersedia area parkir motor dan mobil yang aman bagi pasien & keluarga.</span>
            </div>
          </div>

          {/* Kolom 2: Tautan Peta Lokasi, Telepon, dan WhatsApp */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#DCE3E9] shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Akses Navigasi & Komunikasi
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Gunakan tautan di bawah ini untuk membuka navigasi rute Google Maps atau langsung terhubung dengan petugas loket.
              </p>

              {/* Tautan Peta Lokasi (Google Maps) */}
              <div className="mb-4">
                <a
                  href="https://maps.google.com/?q=Klinik+Sehat+Bersama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-[#F4F6FE] border border-[#DCE3E9] hover:border-[#09558B] hover:bg-[#EBF9FA] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white text-[#09558B] flex items-center justify-center shadow-xs">
                      🗺️
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#09558B] transition-colors">
                        Buka Peta Lokasi di Google Maps
                      </h4>
                      <p className="text-xs text-slate-500">
                        Petunjuk arah jalan dan rute transportasi terdekat
                      </p>
                    </div>
                  </div>
                  <span className="text-[#09558B] font-bold text-sm">Buka →</span>
                </a>
              </div>

              {/* Tautan WhatsApp Loket */}
              <div className="mb-4">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Admin%20Klinik%20Sehat%20Bersama,%20saya%20ingin%20tanya%20informasi%20layanan%20dan%20lokasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-white border border-[#DCE3E9] hover:border-[#09558B] hover:bg-[#F8FAFC] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs">
                      💬
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#09558B] transition-colors">
                        WhatsApp Loket Informasi
                      </h4>
                      <p className="text-xs text-slate-500">
                        0812-3456-7890 (Respon cepat jam kerja)
                      </p>
                    </div>
                  </div>
                  <span className="text-emerald-600 font-bold text-sm">Chat →</span>
                </a>
              </div>

              {/* Tautan Telepon Langsung */}
              <div>
                <a
                  href="tel:0274123456"
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-white border border-[#DCE3E9] hover:border-[#09558B] hover:bg-[#F8FAFC] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#09558B] flex items-center justify-center shadow-xs">
                      📞
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#09558B] transition-colors">
                        Telepon Klinik
                      </h4>
                      <p className="text-xs text-slate-500">
                        (0274) 123-456 (Layanan sambungan telepon loket)
                      </p>
                    </div>
                  </div>
                  <span className="text-[#09558B] font-bold text-sm">Panggil →</span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
              *Pertanyaan terkait rincian jadwal dan ketersediaan obat dapat ditanyakan langsung ke loket.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
