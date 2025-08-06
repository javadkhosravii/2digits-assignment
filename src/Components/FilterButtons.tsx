'use client';

import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
  categories: { slug: string; label: string }[];
};

export default function FilterButtons({ categories }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the current filter from URL
  const currentFilter = searchParams.get('filter');

  // Handle filter button clicks
  const handleClick = (filter: string | undefined) => {
    // Create new URL parameters
    const params = new URLSearchParams(searchParams.toString());

    // Add or remove filter
    if (filter) {
      params.set('filter', filter);
    } else {
      params.delete('filter');
    }

    // Reset to page 1 when filtering
    params.delete('page');

    // Navigate to new URL
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-6 py-6">
      {/* "All blogs" button - shows all posts */}
      <button
        type="button"
        onClick={() => handleClick(undefined)}
        className={`rounded-[8px] px-4 py-2 text-sm ${
          currentFilter
            ? 'border-2 border-[#EDEDED] bg-white text-black hover:border-2 hover:border-[#762BFF]'
            : 'bg-[#762BFF] text-white'
        }`}>
        All blogs
      </button>

      {/* Category filter buttons */}
      {categories.map((cat) => (
        <button
          type="button"
          key={cat.slug}
          onClick={() => handleClick(cat.slug)}
          className={`rounded-[8px] px-4 py-2 text-sm ${
            currentFilter === cat.slug
              ? 'bg-[#762BFF] text-white'
              : 'border-2 border-[#EDEDED] bg-white text-black hover:border-2 hover:border-[#762BFF]'
          }`}>
          {cat.label}
        </button>
      ))}
    </div>
  );
}
