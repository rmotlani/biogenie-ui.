'use client';

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e1e1e]">
      <input
        type="text"
        placeholder="Search chats, projects, tags..."
        className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
