import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taichi Matsusaki Portfolio",
  description: "Space Designer × XR Creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        {/* ──────◎ ナビバー ◎────── */}
        <header className="w-full bg-black/90 backdrop-blur border-b">
          <nav className="mx-auto max-w-4xl flex items-center gap-8 px-6 py-4">
            <Link href="/" className="font-bold text-xl">
              TM&nbsp;Portfolio
            </Link>

            <ul className="flex gap-6 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* ──────◎ ページ固有コンテンツ ◎────── */}
        <main className="flex-1">{children}</main>
        {/* ──────◎ フッター ◎────── */}
        <footer className="text-center py-4 text-xs text-gray-500">
          © 2025 Taichi Matsusaki
        </footer>
      </body>
    </html>
  );
}
