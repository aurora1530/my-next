'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useRef } from 'react';

export default function BooksLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const txtKeyword = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    router.push(`/books/${txtKeyword.current?.value}`);
  };
  // const handleKeyDown = (event: React.KeyboardEvent) => {
  //   if (event.key === 'Enter' && event.shiftKey) {
  //     event.preventDefault();
  //     handleSearch();
  //   }
  // };
  return (
    <>
      <form action="" className="mt-2 mb-4">
        <input
          type="text"
          name=""
          ref={txtKeyword}
          id=""
          className="bg-gray-100 text-black border border-gray-600 rounded mr-2 px-2 py-2 focus:bg-white focus:outline-none focus:border-red-500"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-500"
        >
          検索
        </button>
      </form>
      <hr />
      {children}
    </>
  );
}