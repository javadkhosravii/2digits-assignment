import Image from 'next/image';

import BlogCard from '@/Components/BlogCard';
import Pagination from '@/Components/PaginationControl';
import { fetchPaginatedBlogs } from '@/server/prepr';

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = Number.parseInt(params.page || '1', 10);
  const limit = 9;

  const { blogs, total } = await fetchPaginatedBlogs(currentPage, limit);

  if (blogs.length === 0) {
    return (
      <main className="px-4 py-8 text-center">
        <h1 className="text-3xl font-bold">No blog posts found.</h1>
      </main>
    );
  }

  const totalPages = Math.ceil(total / limit);

  // Use the dedicated blog banner image from design
  const pageBannerImage = '/images/blog-banner.png';

  return (
    <main className="flex flex-col items-center justify-center py-10">
      <div className="relative aspect-[2.2] w-full md:aspect-[5.5]">
        <Image
          src={pageBannerImage}
          alt="Blog Header"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="font-roboto text-4xl font-bold text-white drop-shadow-lg">Blogs</h1>
        </div>
      </div>

      {/* Blog cards grid */}
      <section className="grid w-full max-w-[1700px] grid-cols-1 gap-6 px-8 py-[100px] md:grid-cols-2 lg:grid-cols-3 xl:px-[166px]">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </section>

      {/* Pagination */}
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}
