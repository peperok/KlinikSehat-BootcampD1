import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klinik Sehat Bersama | Klinik Pratama untuk Keluarga",
  description:
    "Klinik pratama terpercaya untuk warga sekitar. Melayani pemeriksaan umum, kesehatan gigi, dan konsultasi gizi dengan jadwal dokter yang pasti dan biaya transparan.",
  keywords: [
    "Klinik Sehat Bersama",
    "Klinik Pratama",
    "Dokter Umum",
    "Kesehatan Gigi",
    "Konsultasi Gizi",
    "Jadwal Dokter",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen bg-white text-slate-800 antialiased selection:bg-jih-navy selection:text-white">
        {children}
      </body>
    </html>
  );
}
