'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { ChevronLeft, ChevronRight } from 'lucide-react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const searchParams = useSearchParams();

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    return `/blog?${params.toString()}`;
  };
  const generatePages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show page 1
      pages.push(1);

      // Add ellipsis if there's a gap between 1 and the current page range
      if (currentPage > 3) pages.push('...');

      // Calculate the range around current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      // Add pages around current page (but don't duplicate page 1)
      for (let i = startPage; i <= endPage; i++) {
        if (i !== 1) pages.push(i);
      }

      // Add ellipsis if there's a gap between current range and last page
      if (currentPage < totalPages - 2) pages.push('...');

      // Always show last page (but don't duplicate if it's already included)
      if (totalPages > 1 && !pages.includes(totalPages)) pages.push(totalPages);
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <div className="flex items-center justify-center">
      {/* Mobile layout - stacked */}
      <div className="flex flex-col items-center gap-4 sm:hidden">
        {/* Page numbers */}
        <div className="flex flex-wrap justify-center gap-2">
          {pages.map((page) =>
            page === '...' ? (
              <span
                key={`ellipsis-${Math.random()}`}
                className="flex size-10 items-center justify-center text-gray-400">
                ...
              </span>
            ) : (
              <Link
                key={`page-${page}`}
                href={createPageUrl(page as number)}
                className={`flex size-10 items-center justify-center rounded-md border text-sm font-medium ${
                  currentPage === page
                    ? 'bg-[#2B1E5A] text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}>
                {page}
              </Link>
            ),
          )}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-2">
          <Link
            href={createPageUrl(currentPage - 1)}
            aria-label="Previous"
            className="rounded p-2 text-gray-500 disabled:opacity-50"
            style={{
              pointerEvents: currentPage === 1 ? 'none' : 'auto',
              opacity: currentPage === 1 ? 0.4 : 1,
            }}>
            <ChevronLeft size={24} />
          </Link>

          <Link
            href={createPageUrl(currentPage + 1)}
            aria-label="Next"
            className="rounded p-2 text-gray-500 disabled:opacity-50"
            style={{
              pointerEvents: currentPage === totalPages ? 'none' : 'auto',
              opacity: currentPage === totalPages ? 0.4 : 1,
            }}>
            <ChevronRight size={24} />
          </Link>
        </div>
      </div>

      {/* Desktop layout - numbers between arrows */}
      <div className="hidden items-center gap-2 sm:flex">
        {/* Previous Arrow */}
        <Link
          href={createPageUrl(currentPage - 1)}
          aria-label="Previous"
          className="rounded p-2 text-gray-500 disabled:opacity-50"
          style={{
            pointerEvents: currentPage === 1 ? 'none' : 'auto',
            opacity: currentPage === 1 ? 0.4 : 1,
          }}>
          <ChevronLeft size={20} />
        </Link>

        {/* Page numbers */}
        <div className="flex gap-2">
          {pages.map((page) =>
            page === '...' ? (
              <span
                key={`ellipsis-desktop-${Math.random()}`}
                className="flex size-10 items-center justify-center text-gray-400">
                ...
              </span>
            ) : (
              <Link
                key={`page-${page}`}
                href={createPageUrl(page as number)}
                className={`flex size-10 items-center justify-center rounded-md border text-sm font-medium ${
                  currentPage === page
                    ? 'bg-[#2B1E5A] text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}>
                {page}
              </Link>
            ),
          )}
        </div>

        {/* Next Arrow */}
        <Link
          href={createPageUrl(currentPage + 1)}
          aria-label="Next"
          className="rounded p-2 text-gray-500 disabled:opacity-50"
          style={{
            pointerEvents: currentPage === totalPages ? 'none' : 'auto',
            opacity: currentPage === totalPages ? 0.4 : 1,
          }}>
          <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  );
}
