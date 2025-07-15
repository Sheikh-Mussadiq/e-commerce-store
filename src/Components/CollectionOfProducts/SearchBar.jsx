import React, { useState } from "react";

const SearchBar = ({ onSearch, onClearSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log("Search:", search);
  };

  const handleClearSearch = () => {
    setSearch("");
    onClearSearch();
  };

  return (
    <div className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-4 h-fit w-full">
      <h2 className="text-2xl font-bold">Search</h2>
      <input
        type="text"
        placeholder="Search"
        className="border-2 border-gray-300 rounded-md p-2"
        value={search}
        onChange={handleSearch}
      />
      <button
        className="bg-black text-white px-4 py-2 rounded-full cursor-pointer hover:bg-gray-800"
        onClick={() => onSearch(search)}
      >
        Search
      </button>
      <button
        className="bg-white underline text-black px-4 py-2 rounded-full cursor-pointer hover:bg-gray-800"
        onClick={handleClearSearch}
      >
        Clear Search
      </button>
    </div>
  );
};

export default SearchBar;
