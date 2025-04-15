import React from "react";
import { ShoppingCart, User, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gray-100 flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center">
            <p className="text-2xl font-bold">Logo</p>
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
