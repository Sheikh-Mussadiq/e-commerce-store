import React from "react";

const RangeOfCategories = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          View Our Range Of Categories
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Bedroom Furniture */}
        <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-lg">
          <div className="aspect-w-3 aspect-h-4 h-full">
            <img
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&auto=format&fit=crop"
              alt="Bedroom Furniture"
              className="w-full h-full object-cover transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-semibold text-white">Bedroom Furniture</h3>
            </div>
          </div>
        </div>

        {/* Living Room Furniture */}
        <div className="md:col-span-4 group relative overflow-hidden rounded-lg">
          <div className="aspect-w-4 aspect-h-3">
            <img
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop"
              alt="Living Room Furniture"
              className="w-full h-full object-cover transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-semibold text-white">Living Room Furniture</h3>
            </div>
          </div>
        </div>

        {/* Sofa Sets */}
        <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-lg">
          <div className="aspect-w-3 aspect-h-4 h-full">
            <img
              src="https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&auto=format&fit=crop"
              alt="Sofa Sets"
              className="w-full h-full object-cover transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-semibold text-white">Sofa Sets</h3>
            </div>
          </div>
        </div>

        {/* Dining Room Furniture */}
        <div className="md:col-span-4 group relative overflow-hidden rounded-lg">
          <div className="aspect-w-4 aspect-h-3">
            <img
              src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop"
              alt="Dining Room Furniture"
              className="w-full h-full object-cover transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-semibold text-white">Sofa Sets</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeOfCategories;
