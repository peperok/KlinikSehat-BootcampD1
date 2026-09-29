export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Sangat terbantu karena jadwal praktiknya pasti. Saya periksa keluhan lambung dan tensi, dokternya menjelaskan penyebab dan aturan minum obat dengan sangat ramah tanpa terburu-buru.",
      author: "Bapak Hendro Prasetyo",
      age: "42 tahun",
      service: "Pemeriksaan Umum",
      initial: "HP",
    },
    {
      id: 2,
      quote:
        "Anak saya biasanya rewel kalau ke klinik, tapi ruang periksanya tenang dan dokternya sangat sabar saat imunisasi. Penjelasan pemantauan tumbuh kembang balita juga sangat lengkap.",
      author: "Ibu Rina Wulandari",
      age: "34 tahun",
      service: "Pemeriksaan Anak",
      initial: "RW",
    },
    {
      id: 3,
      quote:
        "Tindakan pembersihan karang gigi (scaling) di sini nyaman dan peralatannya higienis. Yang paling penting, estimasi waktu tindakan dan rincian biayanya benar-benar jelas sejak awal.",
      author: "Dimas Pratama",
      age: "28 tahun",
      service: "Kesehatan Gigi",
      initial: "DP",
    },
  ];

  return (
    <section id="testimoni" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09558B] tracking-tight mb-4">
            Pengalaman Pasien & Warga
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Cerita pengalaman warga dan keluarga sekitar yang telah mempercayakan pemeriksaan kesehatannya di Klinik Sehat Bersama.
          </p>
        </div>

        {/* Tiga Kartu Testimoni (Grid 3 Kolom di Desktop, Vertikal di Ponsel) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DCE3E9] shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Badge Layanan yang Dipakai */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EBF9FA] text-[#09558B] border border-[#5CC6D0]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5CC6D0]"></span>
                    Layanan: {item.service}
                  </span>
                </div>

                {/* Kutipan Pasien */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Identitas Pasien: Nama dan Usia */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#09558B] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {item.initial}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Usia: <span className="font-medium text-slate-700">{item.age}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
