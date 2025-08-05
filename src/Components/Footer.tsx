import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="flex w-full flex-col items-center justify-between gap-4 px-8 py-4 md:flex-row xl:px-[166px]"
      style={{
        background: 'linear-gradient(270deg, #141414 0%, #2B1E57 100%)',
      }}>
      <nav className="flex gap-6 text-sm font-normal text-white">
        <Link href="/terms" className="transition hover:text-purple-300">
          Terms and conditions
        </Link>

        <Link href="/privacy" className="transition hover:text-purple-300">
          Privacy statement
        </Link>
      </nav>

      <Link href="/">
        <Image
          src="/images/white-logo.svg"
          alt="2DIGITS Logo"
          width={120}
          height={40}
          className="md:w-[200px]"
        />
      </Link>
    </footer>
  );
}
