'use client';

import { useState } from 'react';

type SearchInputProps = {
  onSearch: (query: string) => void;
};

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <div className="flex w-full items-center justify-center bg-[#EEF0F8] py-8">
      <div className="flex w-full max-w-[1700px] flex-col items-center justify-center gap-4 px-8 xl:px-[166px]">
        <h2 className="w-full text-start font-roboto text-xl font-medium text-black">
          Search for blogs
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center gap-2 sm:flex-row">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search your favorite blogs..."
            className="w-full rounded border border-gray-300 px-4 py-2 text-black shadow-sm focus:outline-none"
          />

          <button
            type="submit"
            className="rounded border-2 border-black bg-white px-4 py-2 text-black outline-none hover:bg-black hover:text-white">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
