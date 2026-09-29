export default function Pricing() {
  const packages = [
    {
      id: "dasar",
      name: "Paket Dasar",
      price: "Rp75.000",
      testsCount: "3 Pemeriksaan Medis",
      isPopular: false,
      description: "Pilihan pemeriksaan kesehatan dasar untuk penanganan keluhan ringan dan cek rutin.",
      details: [
        "Konsultasi Dokter Umum",
        "Pengukuran Tanda Vital (Tensi & Suhu)",
        "Pemeriksaan Gula Darah Sewaktu",
      ],
      ctaText: "Pilih Paket Dasar",
    },
    {
      id: "keluarga",
      name: "Paket Keluarga",
      price: "Rp185.000",
      testsCount: "4 Pemeriksaan Medis",
      isPopular: true,
      description: "Paket hemat paling diminati warga untuk pemeriksaan bersama anggota keluarga.",
      details: [
        "Pemeriksaan Dokter Umum (hingga 2 orang)",
        "Pemeriksaan Kesehatan Gigi Dasar",
        "Cek Kolesterol & Asam Urat Sederhana",
      ],
      ctaText: "Pilih Paket Keluarga",
    },
    {
      id: "lengkap",
      name: "Paket Lengkap",
      price: "Rp295.000",
      testsCount: "5 Pemeriksaan Medis",
      isPopular: false,
      description: "Pemeriksaan kesehatan menyeluruh untuk pencegahan dini dan konsultasi gaya hidup.",
      details: [
        "Pemeriksaan Fisik Dokter Menyeluruh",
        "Pembersihan Karang Gigi Ringan (Scaling)",
        "Konsultasi Nutrisi & Pola Gizi Personal",
      ],
      ctaText: "Pilih Paket Lengkap",
    },
  ];

  return (
    <section id="paket" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09558B] tracking-tight mb-4">
            Paket Pemeriksaan & Biaya
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Perbandingan paket pemeriksaan kesehatan dengan biaya transparan tanpa tambahan biaya tersembunyi di loket.
          </p>
        </div>

        {/* 3 Kartu Paket */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 relative ${
                pkg.isPopular
                  ? "bg-white border-2 border-[#09558B] shadow-xl md:-translate-y-2"
                  : "bg-white border border-[#DCE3E9] shadow-xs hover:shadow-md"
              }`}
            >
              {/* Badge Paling Dipilih */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900 bg-[#FFC71F] shadow-sm">
                    ★ Paling Dipilih
                  </span>
                </div>
              )}

              <div>
                {/* Nama Paket & Deskripsi Singkat */}
                <div className="border-b border-slate-100 pb-5 mb-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Harga & Jumlah Pemeriksaan */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#09558B]">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-500">/paket</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#EBF9FA] text-[#09558B] border border-[#5CC6D0]/30">
                      <svg className="w-3.5 h-3.5 text-[#5CC6D0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {pkg.testsCount}
                    </span>
                  </div>
                </div>

                {/* Tiga Rincian Pemeriksaan */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Rincian Tindakan:
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <svg
                          className="w-4 h-4 text-[#09558B] shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tombol Aksi */}
              <div>
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Admin%20Klinik%20Sehat%20Bersama,%20saya%20ingin%20tanya%20${encodeURIComponent(pkg.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                    pkg.isPopular
                      ? "bg-[#09558B] text-white hover:bg-[#073F67] shadow-md shadow-[#09558B]/20"
                      : "bg-[#F4F6FE] text-[#09558B] border border-[#DCE3E9] hover:bg-[#EBF9FA]"
                  }`}
                >
                  {pkg.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
