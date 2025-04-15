import React from "react";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gray-100 h-screen w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-bold text-center mb-4">
            Creating comfort, redefining spaces.
            <br />
            <span>Your Home, Your Signature Style!</span>
          </h1>

          <p className="text-gray-500 text-center text-xl max-w-xl mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quos.
          </p>

          <div className="flex flex-col items-center justify-center mt-4">
            <div className="flex items-center justify-center relative w-52">
              <input
                type="text"
                placeholder="Search An Item"
                className="border-2 border-gray-300 rounded-full p-2 w-full"
              />
              <button className="absolute right-0 bg-black text-white px-2 py-2 mr-2 rounded-full">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
