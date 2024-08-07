import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viktor Codes",
  description: "Viktor Rura's personal blog",
};

export default function RootLayout({
  children

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">

        {children}

      </body>
    </html>
  );
}
