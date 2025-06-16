import "../globals.css";
import { Bodoni_Moda } from "next/font/google";

const bodoni_Moda = Bodoni_Moda({ subsets: ["latin"] });

export const metadata = {
  title: "Taichi Matsusaki Portfolio",
  description: "松崎太一のポートフォリオサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${bodoni_Moda.className}`}>
      <body>{children}</body>
    </html>
  )
}
