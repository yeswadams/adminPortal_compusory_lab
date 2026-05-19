import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar.jsx';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#9e7158] text-white flex flex-col font-sans antialiased selection:bg-[#6a2c20] selection:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <Outlet />
      </main>
      <footer className="py-4 text-center text-xs text-stone-300 bg-[#88766a]/30 border-t border-stone-500/20">
        &copy; {new Date().getFullYear()} Coffee R Us Portal. Developed for Administration and Showcase.
      </footer>
    </div>
  );
}
