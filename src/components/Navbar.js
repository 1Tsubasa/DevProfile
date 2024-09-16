'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import config from '@/config';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      closeMenu();
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <header className="bg-gray-900 sticky top-0 z-50">
      <nav className="mx-auto flex items-center justify-between w-full max-w-7xl p-4 lg:px-8" ref={node}>
        <div className="flex items-center">
          <Link href="/" className="-m-1.5 p-1.5">
            <img 
              src={`${config.nav_icon}`}  
              alt="Profile Icon"
              className="rounded-full shadow-md brightness-100 saturate-100 w-12 h-12 sm:w-16 sm:h-16"
            />
          </Link>
          <span className='text-center ml-2 sm:ml-4 font-bold text-white text-sm sm:text-base'>Developer Profile</span>
        </div>
        <div className="hidden md:flex md:gap-x-8">
          <Link href="#Profile" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">Profile</Link>
          <Link href="#Projects" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">Projets</Link>
          <Link href="#Contact" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">Contact</Link>
        </div>
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-gray-800 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#Profile" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" onClick={closeMenu}>Profile</Link>
          <Link href="#Projects" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" onClick={closeMenu}>Projets</Link>
          <Link href="#Contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
