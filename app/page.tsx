import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Personal Blog - Thoughts on Technology, Travel, and Life',
  description: 'Join me on my personal blog where I share my thoughts on the latest in technology, my travel adventures, and musings on life. Updated weekly!',
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
