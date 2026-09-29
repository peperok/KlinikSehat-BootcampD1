export default function Services() {
  const servicesList = [
    {
      id: "umum",
      name: "Pemeriksaan Umum",
      duration: "15–20 Menit",
      description:
        "Penanganan keluhan kesehatan harian, pemeriksaan fisik dasar, dan peresepan obat yang tepat untuk seluruh anggota keluarga.",
      icon: (
        <svg className="w-6 h-6 text-[#09558B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "gigi",
      name: "Kesehatan Gigi",
      duration: "30–45 Menit",
      description:
        "Pembersihan karang gigi (scaling), penambalan gigi berlubang, dan perawatan gusi dengan peralatan higienis berstandar medis.",
      icon: (
        <svg className="w-6 h-6 text-[#09558B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "gizi",
      name: "Konsultasi Gizi",
      duration: "30 Menit",
      description:
        "Evaluasi pola makan harian, panduan gizi seimbang, dan perencanaan diet medis terstruktur langsung bersama ahli gizi klinis.",
      icon: (
        <svg className="w-6 h-6 text-[#09558B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      id: "anak",
      name: "Pemeriksaan Anak",
      duration: "20–30 Menit",
      description:
        "Pemantauan tumbuh kembang si kecil, konsultasi keluhan sakit umum anak, dan pemberian imunisasi dasar dengan pendekatan ramah anak.",
      icon: (
        <svg className="w-6 h-6 text-[#09558B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="layanan" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09558B] tracking-tight mb-3">
            Layanan Rawat Jalan Terpadu
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Pilihan layanan kesehatan keluarga dengan estimasi durasi tindakan yang jelas, memudahkan Anda mengatur waktu kunjungan.
          </p>
        </div>

        {/* Empat Kartu - Dua Baris di Layar Desktop (Grid 2 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCE3E9] shadow-xs hover:shadow-lg hover:border-[#09558B]/40 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Baris Atas: Icon, Nama Layanan & Durasi */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#EBF9FA] border border-[#5CC6D0]/30 flex items-center justify-center shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {service.name}
                    </h3>
                  </div>

                  {/* Durasi */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#09558B] bg-[#F4F6FE] border border-[#DCE3E9] shrink-0">
                    <svg className="w-3.5 h-3.5 text-[#5CC6D0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{service.duration}</span>
                  </span>
                </div>

                {/* Satu Kalimat Penjelas */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tautan Aksi Cepat ke Jadwal Dokter */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  Konsultasi langsung di loket
                </span>
                <a
                  href="#jadwal"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#09558B] hover:text-[#073F67] hover:underline"
                >
                  <span>Cek Jadwal Praktik</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
