import React from "react";
import { ShoppingCart, User, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <AnimatePresence>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="bg-gray-800 flex justify-between items-center px-20 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="logo" />
          </div>

          {/* Categories Dropdown */}
          <div className="flex items-center gap-8">
            <div className="text-white">
              <button>Home</button>
            </div>
            <div className="text-white relative">
              <button
                className="flex items-center cursor-pointer"
                onClick={(e) => {
                  const dropdown = e.currentTarget.nextElementSibling;
                  dropdown.classList.toggle("hidden");
                }}
              >
                Categories
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <ul className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden">
                <div className="py-1">
                  <li
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Furniture
                  </li>
                  <li
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Decor
                  </li>
                  <li
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Lighting
                  </li>
                  <li
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Outdoor
                  </li>
                </div>
              </ul>
            </div>
            <div className="text-white">
              <button>Contact Us</button>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-4">
            <button className="bg-white p-2 rounded-full">
              <User className="w-4 h-4 text-gray-500" />
            </button>

            {/* Cart */}
            <button className="bg-white p-2 rounded-full">
              <ShoppingCart className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
