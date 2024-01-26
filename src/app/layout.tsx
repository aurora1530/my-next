import type { Metadata } from 'next';
import Link from 'next/link';
import { Inconsolata } from 'next/font/google';
import './globals.css';

const fnt = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Reading Recorder',
  description: '自分が読んだ書籍の記録を残すためのアプリ',
  authors: [{ name: '@aurora1530', url: 'https://github.com/aurora1530' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={fnt.className}>
        <h1 className="text-4xl text-indigo-800 font-bold my-2">Reading Recorder</h1>

        <ul className="flex bg-blue-600 mb-4 pl-2">
          <li className="block px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue-300" href="/">
              Home
            </Link>
          </li>
          <li className="block text-blue-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue-300" href="/books">
              Search
            </Link>
          </li>
          <li className="block text-blue-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <a
              className="no-underline text-blue-300"
              href="https://wings.msn.to/"
              target="_blank"
            >
              Support
            </a>
          </li>
        </ul>
        <div className="ml-2">{children}</div>
      </body>
    </html>
  );
}
