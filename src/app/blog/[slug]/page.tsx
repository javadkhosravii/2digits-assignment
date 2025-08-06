import Image from 'next/image';
import { notFound } from 'next/navigation';

import { fetchBlogBySlug } from '@/server/prepr';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const blog = await fetchBlogBySlug(slug);

  if (!blog) {
    return notFound();
  }

  return (
    <article>
      {blog.banner_image.url && (
        <div className="relative aspect-[1.52] w-full md:aspect-[3.2]">
          <Image
            src={blog.banner_image.url}
            alt={blog.title}
            fill
            className="object-cover"
            loading="eager"
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
          />
        </div>
      )}

      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-6 px-8 py-4 sm:gap-8 md:py-[56px] lg:px-24 xl:px-[166px]">
        <div className="flex flex-col gap-3 sm:gap-4">
          {blog.categories.length > 0 && (
            <p className="w-fit rounded bg-[#b4b4b6] px-3 py-1 text-xs font-semibold text-black sm:text-sm">
              {blog.categories.map((c) => c.body).join(', ')}
            </p>
          )}

          <h1 className="font-roboto text-2xl font-medium leading-tight sm:text-3xl md:text-4xl lg:text-[48px]">
            {blog.title}
          </h1>
        </div>

        <p className="font-openSans text-base font-normal leading-relaxed text-black sm:text-lg md:text-xl lg:text-[21px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur ridiculus mus
          mauris vitae ultricies. Commodo odio aenean sed adipiscing diam donec adipiscing tristique
          risus. Eu sem integer vitae justo eget magna fermentum. Tellus molestie nunc non blandit
          massa enim nec dui.
        </p>

        <h3 className="font-roboto text-lg font-normal text-black sm:text-xl md:text-[21px]">
          Wordpress
        </h3>

        <div className="flex flex-col gap-3 sm:gap-4">
          <p className="font-openSans text-sm font-normal leading-relaxed text-black sm:text-base md:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur
            ridiculus mus mauris vitae ultricies. Commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus. Eu sem integer vitae justo eget magna fermentum. Tellus
            molestie nunc non blandit massa enim nec dui.
          </p>

          <p className="font-openSans text-sm font-normal leading-relaxed text-black sm:text-base md:text-[16px]">
            Tellus id interdum velit laoreet id donec. Eu scelerisque felis imperdiet proin. Blandit
            libero volutpat sed cras ornare arcu dui. Euismod in pellentesque massa placerat duis.
            Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. At elementum eu
            facilisis sed odio morbi quis commodo.
          </p>
        </div>

        <h3 className="font-roboto text-lg font-normal text-black sm:text-xl md:text-[21px]">
          Table tennis
        </h3>

        <div className="flex flex-col gap-3 sm:gap-4">
          <p className="font-openSans text-sm font-normal leading-relaxed text-black sm:text-base md:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur
            ridiculus mus mauris vitae ultricies. Commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus. Eu sem integer vitae justo eget magna fermentum. Tellus
            molestie nunc non blandit massa enim nec dui.
          </p>

          <p className="font-openSans text-sm font-normal leading-relaxed text-black sm:text-base md:text-[16px]">
            Tellus id interdum velit laoreet id donec. Eu scelerisque felis imperdiet proin. Blandit
            libero volutpat sed cras ornare arcu dui. Euismod in pellentesque massa placerat duis.
            Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. At elementum eu
            facilisis sed odio morbi quis commodo.
          </p>
        </div>
      </div>
    </article>
  );
}
