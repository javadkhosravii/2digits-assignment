'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import SearchInput from './BlogSearchInput';

export default function BlogPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (query.trim()) {
      params.set('search', query.trim());
      params.delete('page');
    } else {
      params.delete('search');
    }

    router.push(`/blog?${params.toString()}`);
  };

  return <SearchInput onSearch={handleSearch} />;
}
