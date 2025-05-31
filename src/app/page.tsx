import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center gap-6">
      <h1 className="text-4xl font-bold">Taichi Matsusaki</h1>

      <p className="text-lg max-w-md">
        空間デザイナー&nbsp;&times;&nbsp;XRクリエイター<br />
        余白とつながりを生む体験を設計します。
      </p>

      <Link
        href="/projects"
        className="px-6 py-3 bg-black text-white rounded-lg shadow"
      >
        Projects
      </Link>
    </main>
  );
}
