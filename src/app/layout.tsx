import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { LangProvider } from "@/i18n";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SahFamily — Belajar, Tumbuh & Berpetualang Bersama",
  description:
    "Jurnal digital Keluarga Sah: learning journey anak, perjuangan parenting, portofolio, momen keluarga, rekomendasi travelling, dan catatan biaya. / The Sah Family digital journal: kids' learning journey, parenting struggles, portfolio, family moments, travel picks, and expense notes.",
  metadataBase: new URL("https://sahfamily.my.id"),
  openGraph: {
    title: "SahFamily — Learn, Grow & Explore Together",
    description:
      "Jurnal digital Keluarga Sah: belajar, perjalanan, momen, travel, dan biaya keluarga.",
    url: "https://sahfamily.my.id",
    siteName: "SahFamily",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="min-h-screen antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
