import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-full grid place-content-center bg-slate-500">
      <h1 className="text-3xl text-red-700">Hello world</h1>
      <Link href="/about">
        Go to about page
      </Link>
    </main>
  );
}
