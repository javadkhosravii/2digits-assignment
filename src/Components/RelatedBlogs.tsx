'use client';

import BlogCard from './BlogCard';

type Blog = {
  _id: string;
  title: string;
  _slug: string;
  banner_image: { url?: string };
  categories?: { _id?: string; body?: string; slug?: string }[];
};

type RelatedBlogsProps = {
  blogs: Blog[];
};

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
  if (blogs.length === 0) {
    return;
  }

  return (
    <div className="w-full max-w-[1700px] px-8 py-10 lg:px-24 xl:px-[166px]">
      <h2 className="mb-8 font-roboto text-2xl font-medium text-black sm:text-3xl">
        Related blogs
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <BlogCard key={blog._id} blog={blog} index={index} />
        ))}
      </div>
    </div>
  );
}
