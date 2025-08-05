'use client';

import Image from 'next/image';

type Props = {
  title: string;
  text?: string;
  image?: { url?: string };
};

export default function Hero({ title, text, image }: Props) {
  return (
    <section className="relative w-full text-center text-white" aria-label="Homepage Hero Banner">
      <div className="relative h-[60vh] w-full">
        {/* Background Image */}
        <Image
          src={image?.url || '/default-hero-image.jpg'}
          alt="Hero Image"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="max-w-[700px] font-roboto text-2xl font-bold uppercase text-white sm:text-4xl md:text-6xl">
            {title}
          </h1>

          {text && (
            <p className="mt-4 max-w-[700px] font-openSans text-sm text-white sm:text-base md:text-lg">
              {text}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
