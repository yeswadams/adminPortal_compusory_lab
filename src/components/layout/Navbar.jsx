import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black w-full px-6 md:px-16 py-4 border-b border-white/10 shadow-lg relative z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand Name (Optional, but good for mobile) */}
        <div className="flex items-center">
          <span className="text-white font-serif font-bold text-xl md:hidden">Coffee R Us</span>
        </div>

        {/* Hamburger Icon */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex justify-between items-center w-full text-lg md:text-xl font-medium tracking-wide">
          <div className="w-1/3 flex justify-start">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative pb-1 hover:text-white transition-colors duration-200 text-[18px] ${
                  isActive ? 'text-black bg-white rounded-full px-4 font-semibold' : 'text-stone-300'
                }`
              }
            >
              Home
            </NavLink>
          </div>

          <div className="w-1/3 flex justify-center">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `relative pb-1 hover:text-white transition-colors duration-200 text-[18px] ${
                  isActive ? 'text-black bg-white rounded-full px-4 font-semibold' : 'text-stone-300'
                }`
              }
            >
              Shop
            </NavLink>
          </div>

          <div className="w-1/3 flex justify-end">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `relative pb-1 transition-colors duration-200 text-[18px] ${
                  isActive ? 'text-black bg-white rounded-full hover:text-black px-4 flex items-center justify-center py-2 font-semibold' : 'text-stone-300'
                }`
              }
            >
              Admin Portal
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col p-4 gap-4 items-center">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `w-full text-center py-2 transition-colors duration-200 ${
                isActive ? 'text-black bg-white rounded-xl font-semibold' : 'text-stone-300'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `w-full text-center py-2 transition-colors duration-200 ${
                isActive ? 'text-black bg-white rounded-xl font-semibold' : 'text-stone-300'
              }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/admin"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `w-full text-center py-2 transition-colors duration-200 ${
                isActive ? 'text-black bg-white rounded-xl font-semibold' : 'text-stone-300'
              }`
            }
          >
            Admin Portal
          </NavLink>
        </div>
      </div>
    </header>
  );
}
