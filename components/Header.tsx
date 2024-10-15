"use client"
import { useState } from 'react';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'; // Ensure this is properly imported

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
            DIVINE FRAGRANCE
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="hover:text-yellow-500">Home</a>
            <a href="/products" className="hover:text-yellow-500">Products</a>
            <a href="/about" className="hover:text-yellow-500">About Us</a>
            <a href="/contact" className="hover:text-yellow-500">Contact</a>
            <div className="flex items-center space-x-2">
              <UserIcon className="h-6 w-6" />
              <ShoppingCartIcon className="h-6 w-6" />
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {/* Hamburger Icon */}
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block hover:text-yellow-500">Home</a>
            <a href="/products" className="block hover:text-yellow-500">Products</a>
            <a href="/about" className="block hover:text-yellow-500">About Us</a>
            <a href="/contact" className="block hover:text-yellow-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;


