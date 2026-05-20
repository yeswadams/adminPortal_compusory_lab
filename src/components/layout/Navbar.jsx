import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  const activeStyles = 'text-black bg-white rounded-full px-4 font-semibold';
  const inactiveStyles = 'text-stone-300';
  const baseStyles = 'relative pb-1 hover:text-white transition-colors duration-200 text-[18px]';

  return (
    <header className="bg-black w-full px-6 md:px-16 py-4 border-b border-white/10 shadow-lg relative z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white font-serif font-bold text-xl">Coffee R Us</span>
        </div>

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

        <div className="hidden md:flex justify-end items-center gap-8 w-full text-lg md:text-xl font-medium tracking-wide">
          <NavLink to="/" className={({ isActive }) => `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}>
            Shop
          </NavLink>

          {/* Conditional rendering of the adminPortal links on the navbar */}
          {isAuthenticated ? (
            <>
              <NavLink to="/admin" className={({ isActive }) => `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}>
                Portal
              </NavLink>
              <NavLink to="/admin/profile" className={({ isActive }) => `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}>
                Profile
              </NavLink>
              <button 
                onClick={logout}
                className="text-stone-300 hover:text-white border border-stone-500 px-4 py-1 rounded-full text-[18px] transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className={({ isActive }) => `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}>
              Login
            </NavLink>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col p-4 gap-4 items-center">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `w-full text-center py-2 ${isActive ? 'text-black bg-white rounded-xl' : 'text-stone-300'}`}>Home</NavLink>
          <NavLink to="/shop" onClick={() => setIsOpen(false)} className={({ isActive }) => `w-full text-center py-2 ${isActive ? 'text-black bg-white rounded-xl' : 'text-stone-300'}`}>Shop</NavLink>
          
          {isAuthenticated ? (
            <>
              <NavLink to="/admin" onClick={() => setIsOpen(false)} className={({ isActive }) => `w-full text-center py-2 ${isActive ? 'text-black bg-white rounded-xl' : 'text-stone-300'}`}>Portal</NavLink>
              <NavLink to="/admin/profile" onClick={() => setIsOpen(false)} className={({ isActive }) => `w-full text-center py-2 ${isActive ? 'text-black bg-white rounded-xl' : 'text-stone-300'}`}>Profile</NavLink>
              <button onClick={() => { logout(); setIsOpen(false); }} className="w-full text-center py-2 text-red-400">Logout</button>
            </>
          ) : (
            <NavLink to="/login" onClick={() => setIsOpen(false)} className={({ isActive }) => `w-full text-center py-2 ${isActive ? 'text-black bg-white rounded-xl' : 'text-stone-300'}`}>Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
}
