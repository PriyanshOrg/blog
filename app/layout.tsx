import Link from "next/link";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blogs | Priyansh Development',
  description: '',
};

const header = (
  <header>
    <div className="text-center bg-gray-800 p-8 my-6 rounded-md shadow-lg">
    <Link href="../">
      <Image
        alt="logo"
        src="/logo.png"
        width={50}
        height={50}
        className="mx-auto"
      />
        <h1 className="text-3xl text-purple-400 font-bold mt-2 hover:text-purple-400">
          PriyanshOrg../blog
        </h1>
      </Link>
    </div>
  </header>
);

const footer = (
  <footer className="border-t border-gray-600 mt-12 py-6 text-center text-gray-500">
    <Link href="/">
      <h3 className="hover:text-purple-400">Priyansh Development</h3>
    </Link>
  </footer>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}