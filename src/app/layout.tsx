import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduNova Math | Belajar SMA Simpel & Akurat",
  description: "Platform belajar SMA dengan rumus matematika yang disederhanakan dan akurat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
