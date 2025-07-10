import React, { useState } from "react";

const PriceRange = ({ onPriceRangeChange }) => {
  const [selectedRanges, setSelectedRanges] = useState([]);

  const priceRanges = [
    { min: 0, max: 50, label: "$0 - $50" },
    { min: 50, max: 100, label: "$50 - $100" },
    { min: 100, max: 200, label: "$100 - $200" },
    { min: 200, max: 500, label: "$200 - $500" },
    { min: 500, max: Infinity, label: "$500+" },
  ];

  const handleRangeChange = (range) => {
    const newSelectedRanges = selectedRanges.includes(range)
      ? selectedRanges.filter((r) => r !== range)
      : [...selectedRanges, range];

    setSelectedRanges(newSelectedRanges);
    onPriceRangeChange(newSelectedRanges);
    console.log(newSelectedRanges);
  };

  return (
    <div className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-4 h-fit w-full">
      <h2 className="text-2xl font-bold">Price Range</h2>
      <div className="flex flex-col gap-2">
        {priceRanges.map((range, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`price-${index}`}
              checked={selectedRanges.includes(range)}
              onChange={() => handleRangeChange(range)}
            />
            <label htmlFor={`price-${index}`}>{range.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceRange;
