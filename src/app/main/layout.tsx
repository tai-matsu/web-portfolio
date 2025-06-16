import "../globals.css";
import { Bodoni_Moda, Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import AOSProvider from "@/app/lib/aos";
import Link from "next/link";

const noto_Sans_JP = Noto_Sans_JP({ subsets: ["latin"] });
const shippori_Mincho = Shippori_Mincho({ subsets: ["latin"], weight: ["400"] });
const bodoni_Moda = Bodoni_Moda({ subsets: ["latin"] });


export const metadata = {
  title: "Taichi Matsusaki Portfolio",
  description: "松崎太一のポートフォリオサイト",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ja" className={`${noto_Sans_JP.className} ${shippori_Mincho.className} ${bodoni_Moda.className}`}>
      <body>
        <header className="fixed top-0 w-full h-[60px] z-1 bg-black">
          <Link href="/loading">
            <div data-aos="fade-in" className="header_left fixed left-[20px] top-[10px] w-[212px] h-[32px]" >TAICHI MATSUSAKI</div>
          </Link>
          <nav>
            <ul data-aos="fade-in" className="nav-list header_right fixed right-[72px] top-[20px]">
              <li className="transition hover:opacity-50"><a href="/main">HOME</a></li>
              <li className="transition hover:opacity-50"><a href="/main/works">WORKS</a></li>
              <li className="transition hover:opacity-50"><a href="/main/about">ABOUT</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <AOSProvider/>
          {children}
        </main>
        <footer className="footer">
          © 2025 Taichi Matsusaki
        </footer>
      </body>
    </html>
  );
}
