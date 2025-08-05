'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-white px-8 py-4 xl:px-[166px]">
      <Link href="/" className="text-2xl font-bold text-black">
        <Image
          src="/images/logo.svg"
          alt="2DIGITS Logo"
          width={120}
          height={40}
          className="md:w-[200px]"
        />
      </Link>

      <nav className={`flex gap-6 font-roboto text-lg font-medium text-[#141414]`}>
        <Link href="/blogs" className="transition hover:text-blue-600">
          Blogs
        </Link>
      </nav>
    </header>
  );
}
