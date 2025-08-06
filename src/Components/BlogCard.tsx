'use client';

import Image from 'next/image';
import Link from 'next/link';

type Blog = {
  _id: string;
  title: string;
  _slug: string;
  banner_image: { url?: string };
  categories?: { _id?: string; body?: string; slug?: string }[];
};

type BlogCardProps = {
  blog: Blog;
  index?: number;
};

export default function BlogCard({ blog, index = 0 }: BlogCardProps) {
  const getBorderRadiusClass = (): string => {
    return index === 0 ? 'rounded-[6px]' : 'rounded-br-[6px]';
  };

  return (
    <div className="flex flex-col gap-6">
      {blog.banner_image.url && (
        <div className={`relative aspect-[16/9] w-full overflow-hidden ${getBorderRadiusClass()}`}>
          <Image
            src={blog.banner_image.url}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            loading="eager"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            priority={false}
          />

          {blog.categories && blog.categories.length > 0 && (
            <span className="absolute bottom-2 left-2 inline-block rounded bg-[#E9EBF4] px-3 py-1 text-sm font-semibold text-black">
              {blog.categories[0]?.body || blog.categories[0]?.slug || 'Category'}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col gap-4">
        <h3 className="font-roboto text-[21px] font-medium">{blog.title}</h3>

        <p className="font-openSans text-[16px] font-normal text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus velit id ex
          vestibulum, in tristique risus tincidunt.{' '}
        </p>

        <Link
          href={`/blog/${blog._slug}`}
          className="flex items-center gap-4 font-roboto text-sm font-medium text-[#762BFF]">
          <span>Read more</span>

          <span>
            <Image width={16} height={16} src="/images/arrow.svg" alt="" />
          </span>
        </Link>
      </div>
    </div>
  );
}
