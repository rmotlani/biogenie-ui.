'use client';

import SearchBar from "@/components/Shared/SearchBar";

export default function SearchPage() {
  return (
    <main className="h-screen flex flex-col">
      <SearchBar />
      <div className="p-4 text-center text-gray-500 dark:text-gray-400">Search results will appear here...</div>
    </main>
  );
}
