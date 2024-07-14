import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next'

 
export const metadata: Metadata = {
  title: "Title",
  description: "Description",
}

export default function Home() {
  return (
    <main className="min-h-full grid place-content-center bg-slate-500">
      <h1 className="text-3xl text-indigo-800">Hello world</h1>
      <Link href="/about">
        Go to about page
      </Link>
    </main>
  );
}
