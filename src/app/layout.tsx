import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduNova — Rumus Matematika Original SD sampai Kuliah",
  description: "Koleksi rumus matematika original yang belum pernah ada sebelumnya. Dari SD sampai Kuliah, setiap metode dirancang untuk membuat matematika super gampang. Lengkap dengan contoh soal progressive dan panduan belajar.",
  keywords: ["matematika", "rumus", "belajar", "SD", "SMP", "SMA", "kuliah", "mental math", "edunova"],
  authors: [{ name: "EduNova Team" }],
  openGraph: {
    title: "EduNova — Rumus Matematika Original",
    description: "22 rumus original yang bikin matematika jadi super gampang. SD sampai Kuliah.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
