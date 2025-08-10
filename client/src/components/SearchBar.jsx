import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div className="flex items-center bg-white border rounded-xl p-2 shadow-md">
      <input
        type="text"
        placeholder="Search jobs by title or description..."
        className="flex-grow p-2 outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        <Search size={18} />
      </button>
    </div>
  );
}
