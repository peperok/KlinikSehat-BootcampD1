export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#F4F6FE] via-white to-white py-20 sm:py-28 lg:py-32"
    >
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-20 w-[600px] h-72 rounded-full bg-[#5CC6D0]/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Nama Klinik */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#09558B] tracking-tight leading-[1.15] mb-6">
          Klinik Sehat Bersama
        </h1>

        {/* Narasi Ringkas & Solutif */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
          Pusat informasi resmi bagi warga sekitar untuk memeriksa jadwal dokter yang pasti,
          melihat layanan kesehatan yang tersedia, serta transparansi biaya sebelum datang berobat.
        </p>

        {/* Tombol Utama: Lihat Jadwal & Tombol Loket */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#jadwal"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#09558B] hover:bg-[#073F67] shadow-md shadow-[#09558B]/20 hover:shadow-lg hover:shadow-[#09558B]/30 hover:-translate-y-0.5 transition-all"
          >
            <span>Lihat Jadwal</span>
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Admin%20Klinik%20Sehat%20Bersama,%20saya%20ingin%20tanya%20jadwal%20dan%20layanan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-[#09558B] bg-white border border-[#09558B]/30 hover:border-[#09558B] hover:bg-[#F4F6FE] transition-all"
          >
            <svg
              className="w-5 h-5 text-[#5CC6D0]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.45 1.742 1.488 2.665.41.365.756.478.864.53.144.072.23.058.318-.043.087-.101.375-.434.476-.583.101-.149.202-.125.337-.075s.867.409 1.016.483c.149.074.249.111.286.173.037.063.037.362-.107.767z" />
            </svg>
            <span>Tanya Petugas Loket</span>
          </a>
        </div>

      </div>
    </section>
  );
}
