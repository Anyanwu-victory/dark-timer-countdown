'use client';

import React, {useState, useEffect} from 'react';

const Nav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
    return (
      <nav className="border-gray-200 bg-GreyishBlue dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex items-center justify-between p-4 mx-auto">
          <a href="#" className="flex items-center space-x-3">
            
            <span className="text-2xl font-semibold dark:text-white">Flipida</span>
          </a>
          <button 
            onClick={toggleMenu} 
            className="p-2 w-10  h-10 text-gray-500 rounded-lg focus:outline-none hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className={`${isMenuOpen ? 'block ' : 'hidden'} w-[30rem] mx-35 absolute top-10 `} 
          id="navbar-hamburger">
            <ul className="flex flex-col mt-4 bg-gray-50 dark:bg-gray-800">
              <li><a href="#" className="block py-2 px-3
               text-white bg-gray-800 rounded ">Home</a></li>
    
              <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400
               dark:hover:bg-gray-700">Transvalania timer design</a></li>
               <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400
               dark:hover:bg-gray-700">Dark-timer  design</a></li>
               <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400
               dark:hover:bg-gray-700">One-piece timer design</a></li>
              <li><a href="#" className="block py-2 px-3 text-gray-900 rounded
               hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">Cast</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav;