import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-black w-full px-6 md:px-16 py-4 border-b border-white/10 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center text-lg md:text-xl font-medium tracking-wide">
        {/* Left Link */}
        <div className="w-1/3 flex justify-start">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative pb-1 hover:text-white transition-colors duration-200 text-[18px] ${
                isActive ? 'text-black bg-white rounded-full px-2 font-semibold' : 'text-stone-300'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home
              </>
            )}
          </NavLink>
        </div>

        {/* Center Link */}
        <div className="w-1/3 flex justify-center">
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `relative pb-1 hover:text-white transition-colors duration-200 text-[18px] ${
                isActive ? 'text-black bg-white rounded-full px-2 font-semibold' : 'text-stone-300'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Shop
              </>
            )}
          </NavLink>
        </div>

        {/* Right Link */}
        <div className="w-1/3 flex justify-end">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `relative pb-1  transition-colors duration-200 text-[18px] ${
                isActive ? 'text-black bg-white rounded-full hover:text-black px-4 flex items-center justify-center py-2 font-semibold' : 'text-stone-300'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Admin Portal
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
