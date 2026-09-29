"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#DCE3E9] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-[#09558B] hover:text-[#073F67] transition-colors">
              Klinik Sehat Bersama
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#hero"
              className="text-sm font-medium text-slate-600 hover:text-[#09558B] transition-colors"
            >
              Beranda
            </a>
            <a
              href="#layanan"
              className="text-sm font-medium text-slate-600 hover:text-[#09558B] transition-colors"
            >
              Layanan
            </a>
            <a
              href="#jadwal"
              className="text-sm font-semibold text-[#09558B] hover:text-[#073F67] transition-colors flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#5CC6D0] animate-pulse"></span>
              Jadwal Dokter
            </a>
            <a
              href="#paket"
              className="text-sm font-medium text-slate-600 hover:text-[#09558B] transition-colors"
            >
              Paket Biaya
            </a>
            <a
              href="#lokasi"
              className="text-sm font-medium text-slate-600 hover:text-[#09558B] transition-colors"
            >
              Lokasi & Kontak
            </a>
          </nav>

          {/* Loket Quick Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Admin%20Klinik%20Sehat%20Bersama,%20saya%20ingin%20bertanya%20informasi%20layanan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-[#EBF9FA] text-[#09558B] border border-[#5CC6D0]/40 hover:bg-[#5CC6D0]/20 transition-all"
            >
              <svg
                className="w-4 h-4 text-[#09558B]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.45 1.742 1.488 2.665.41.365.756.478.864.53.144.072.23.058.318-.043.087-.101.375-.434.476-.583.101-.149.202-.125.337-.075s.867.409 1.016.483c.149.074.249.111.286.173.037.063.037.362-.107.767z" />
              </svg>
              <span>Loket: 0812-3456-7890</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-700 hover:text-[#09558B] hover:bg-slate-100 focus:outline-none"
              aria-label="Buka menu navigasi"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="#hero"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-[#F4F6FE] hover:text-[#09558B]"
            >
              Beranda
            </a>
            <a
              href="#layanan"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-[#F4F6FE] hover:text-[#09558B]"
            >
              Layanan
            </a>
            <a
              href="#jadwal"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-semibold text-[#09558B] hover:bg-[#F4F6FE]"
            >
              Jadwal Dokter
            </a>
            <a
              href="#paket"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-[#F4F6FE] hover:text-[#09558B]"
            >
              Paket Biaya
            </a>
            <a
              href="#lokasi"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-[#F4F6FE] hover:text-[#09558B]"
            >
              Lokasi & Kontak
            </a>
            <div className="pt-2">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Admin%20Klinik%20Sehat%20Bersama,%20saya%20ingin%20bertanya%20informasi%20layanan"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#09558B] text-white hover:bg-[#073F67]"
              >
                Tanya Loket (WhatsApp)
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
