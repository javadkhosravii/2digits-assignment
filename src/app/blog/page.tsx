import Image from 'next/image';

import BlogCard from '@/Components/BlogCard';
import BlogPageClient from '@/Components/BlogPageClient';
import Pagination from '@/Components/PaginationControl';
import { fetchPaginatedBlogs, fetchSearchedBlogs } from '@/server/prepr';
import type { PreprGetPaginatedBlogsQuery } from '@/server/prepr/generated/preprAPI.schema';

type Props = {
  searchParams: Promise<{ page?: string; search?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = Number.parseInt(params.page || '1', 10);
  const searchQuery = params.search?.trim();
  const limit = 9;

  type Blog = NonNullable<PreprGetPaginatedBlogsQuery['Blogs']>['items'][0];

  let blogs: Blog[] = [];
  let total = 0;

  if (searchQuery) {
    try {
      const searchResult = await fetchSearchedBlogs(searchQuery);
      blogs = searchResult.blogs as Blog[];
      total = searchResult.total;
    } catch (error) {
      console.error('Search error:', error);
      blogs = [];
      total = 0;
    }
  } else {
    const result = await fetchPaginatedBlogs(currentPage, limit);
    blogs = result.blogs;
    total = result.total;
  }

  if (blogs.length === 0) {
    return (
      <main className="px-4 py-[300px] text-center">
        <h1 className="text-3xl font-bold">No blog posts found.</h1>
      </main>
    );
  }

  const totalPages = searchQuery ? 1 : Math.ceil(total / limit);

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

      {/* search input */}
      <BlogPageClient />

      {/* Search results message */}
      {searchQuery && (
        <div className="w-full max-w-[1700px] px-8 xl:px-[166px]">
          <p className="mt-2 text-center text-lg text-gray-500 lg:text-start">
            {total > 0
              ? `Found ${total} result${total === 1 ? '' : 's'} for "${searchQuery}"`
              : `No results found for "${searchQuery}"`}
          </p>
        </div>
      )}

      {/* Blog cards grid */}
      <section className="grid w-full max-w-[1700px] grid-cols-1 gap-6 px-8 py-[100px] md:grid-cols-2 lg:grid-cols-3 xl:px-[166px]">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </section>

      {/* Pagination - only show for non-search results */}
      {!searchQuery && <Pagination currentPage={currentPage} totalPages={totalPages} />}
    </main>
  );
}
