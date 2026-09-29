export default function Schedule() {
  const doctorSchedules = [
    {
      id: 1,
      name: "dr. Siti Rahmawati",
      specialty: "Dokter Umum",
      service: "Poli Pemeriksaan Umum",
      days: "Senin – Jumat",
      hours: "08.00 – 14.00 WIB",
      status: "Praktik Pagi",
      note: "Pemeriksaan umum anak & dewasa, resep obat keluarga.",
    },
    {
      id: 2,
      name: "drg. Ahmad Fauzan",
      specialty: "Dokter Gigi",
      service: "Poli Kesehatan Gigi",
      days: "Senin, Rabu & Jumat",
      hours: "16.00 – 20.00 WIB",
      status: "Praktik Sore",
      note: "Pembersihan karang gigi (scaling), tambal & cabut gigi.",
    },
    {
      id: 3,
      name: "Nurul Hidayati, S.Gz",
      specialty: "Ahli Gizi Klinis",
      service: "Poli Konsultasi Gizi",
      days: "Selasa, Kamis & Sabtu",
      hours: "09.00 – 13.00 WIB",
      status: "Praktik Pagi",
      note: "Konsultasi pola makan, diet medis & nutrisi tumbuh kembang.",
    },
  ];

  return (
    <section id="jadwal" className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09558B] tracking-tight mb-4">
            Jadwal Praktik Dokter
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Informasi hari dan jam praktik dokter untuk memudahkan Anda merencanakan kunjungan berobat tanpa antre berulang di loket.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 1. TAMPILAN PONSEL: Kartu Jadwal Vertikal (Sangat Mudah Dibaca) */}
        {/* ========================================================= */}
        <div className="block md:hidden space-y-4">
          {doctorSchedules.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl p-5 border border-[#DCE3E9] shadow-xs"
            >
              {/* Info Dokter */}
              <div className="flex items-start justify-between gap-3 pb-3.5 border-b border-slate-100 mb-3.5">
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-medium text-[#09558B] mt-0.5">
                    {doc.service}
                  </p>
                </div>
                <span className="inline-flex px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#EBF9FA] text-[#09558B] border border-[#5CC6D0]/30 shrink-0">
                  {doc.status}
                </span>
              </div>

              {/* Rincian Hari & Jam Praktik */}
              <div className="space-y-2.5 bg-[#F8FAFC] rounded-xl p-3.5 border border-slate-200/80 mb-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#5CC6D0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Hari Praktik:
                  </span>
                  <span className="font-bold text-slate-900">{doc.days}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#09558B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Jam Operasional:
                  </span>
                  <span className="font-bold text-[#09558B] bg-white px-2 py-0.5 rounded border border-[#DCE3E9]">
                    {doc.hours}
                  </span>
                </div>
              </div>

              {/* Catatan Pelayanan */}
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {doc.note}
              </p>

              {/* Aksi Tanya Loket untuk Dokter Ini */}
              <a
                href={`https://wa.me/6281234567890?text=Halo%20Admin,%20apakah%20${encodeURIComponent(doc.name)}%20praktik%20hari%20ini?`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#09558B] bg-white border border-[#09558B]/30 hover:bg-[#F4F6FE] transition-colors"
              >
                <span>Tanya Antrean {doc.specialty}</span>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.45 1.742 1.488 2.665.41.365.756.478.864.53.144.072.23.058.318-.043.087-.101.375-.434.476-.583.101-.149.202-.125.337-.075s.867.409 1.016.483c.149.074.249.111.286.173.037.063.037.362-.107.767z" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* 2. TAMPILAN DESKTOP: Tabel Bersih Berstandar Medis */}
        {/* ========================================================= */}
        <div className="hidden md:block bg-white rounded-2xl border border-[#DCE3E9] shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#09558B] text-white text-sm font-semibold tracking-wide">
                <th className="py-4 px-6">Nama Dokter & Layanan</th>
                <th className="py-4 px-6">Hari Praktik</th>
                <th className="py-4 px-6">Jam Praktik</th>
                <th className="py-4 px-6">Keterangan</th>
                <th className="py-4 px-6 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DCE3E9] text-sm">
              {doctorSchedules.map((doc) => (
                <tr key={doc.id} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-5 px-6">
                    <div className="font-bold text-slate-900 text-base">{doc.name}</div>
                    <div className="text-xs font-semibold text-[#09558B] mt-0.5">{doc.service}</div>
                  </td>
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center gap-1.5 font-medium text-slate-800">
                      <svg className="w-4 h-4 text-[#5CC6D0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {doc.days}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center gap-1.5 font-bold text-[#09558B] bg-[#EBF9FA] px-3 py-1 rounded-lg border border-[#5CC6D0]/30">
                      <svg className="w-4 h-4 text-[#09558B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {doc.hours}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-slate-600 max-w-xs text-xs leading-relaxed">
                    {doc.note}
                  </td>
                  <td className="py-5 px-6 text-center">
                    <a
                      href={`https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20tanya%20jadwal%20${encodeURIComponent(doc.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#09558B] bg-white border border-[#09558B]/30 hover:border-[#09558B] hover:bg-[#F4F6FE] transition-colors"
                    >
                      <span>Tanya Loket</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Informasi Pendaftaran Loket */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-[#DCE3E9] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-[#5CC6D0] shrink-0"></span>
            <span>
              <strong>Ketentuan Loket:</strong> Pendaftaran dibuka mulai pukul <strong>07.30 WIB</strong>. Pasien disarankan datang 15 menit sebelum jam praktik berakhir.
            </span>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Admin%20Klinik%20Sehat%20Bersama,%20saya%20ingin%20tanya%20antrean%20hari%20ini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#09558B] font-semibold hover:underline shrink-0"
          >
            Hubungi Loket via WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
}
