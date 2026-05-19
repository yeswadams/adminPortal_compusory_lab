import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-[#88766a] w-full px-6 md:px-16 py-4 border-b border-white/10 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center text-lg md:text-xl font-medium tracking-wide">
        {/* Left Link */}
        <div className="w-1/3 flex justify-start">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative pb-1 hover:text-white transition-colors duration-200 ${
                isActive ? 'text-white font-semibold' : 'text-stone-300'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-white rounded-full animate-[scale-in_0.2s_ease-out]" />
                )}
              </>
            )}
          </NavLink>
        </div>

        {/* Center Link */}
        <div className="w-1/3 flex justify-center">
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `relative pb-1 hover:text-white transition-colors duration-200 ${
                isActive ? 'text-white font-semibold' : 'text-stone-300'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Shop
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-white rounded-full animate-[scale-in_0.2s_ease-out]" />
                )}
              </>
            )}
          </NavLink>
        </div>

        {/* Right Link */}
        <div className="w-1/3 flex justify-end">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `relative pb-1 hover:text-white transition-colors duration-200 ${
                isActive ? 'text-white font-semibold' : 'text-stone-300'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Admin Portal
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-white rounded-full animate-[scale-in_0.2s_ease-out]" />
                )}
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
