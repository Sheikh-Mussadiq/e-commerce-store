import React from "react";

const SearchBar = () => {
  return (
    <div className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-4 h-fit w-full">
      <h2 className="text-2xl font-bold">Search</h2>
      <input type="text" placeholder="Search" />
      <button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer hover:bg-gray-800">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
