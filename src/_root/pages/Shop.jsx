import { useState, useMemo } from 'react';
import { useCoffee } from '../../hooks/useCoffee';
import CoffeeCard from '../../components/ui/CoffeeCard';

export default function Shop() {
  const { coffees, loading, error, updateCoffee, deleteCoffee } = useCoffee();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrigins, setSelectedOrigins] = useState([]);

  // Extract unique origins dynamically for checkbox filters
  const uniqueOrigins = useMemo(() => {
    const origins = coffees.map((c) => c.origin.trim());
    return [...new Set(origins)].filter(Boolean);
  }, [coffees]);

  // Handles the origin checkbox selection
  const handleOriginChange = (origin) => {
    setSelectedOrigins((prev) =>
      prev.includes(origin)
        ? prev.filter((o) => o !== origin)
        : [...prev, origin]
    );
  };

  // Filter coffees dynamically based on search term and selected locations
  const filteredCoffees = useMemo(() => {
    return coffees.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.origin.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesOrigin =
        selectedOrigins.length === 0 || selectedOrigins.includes(c.origin);

      return matchesSearch && matchesOrigin;
    });
  }, [coffees, searchTerm, selectedOrigins]);

  return (
    <div className="flex-1 flex flex-col md:flex-row min-h-0 select-none">
      <aside className="w-full md:w-80 bg-[#f5f6f7] text-[#302018] p-4 md:p-8 flex flex-col gap-6 md:border-r border-stone-400/20 shadow-lg">
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#302018]/65 mb-2.5">
            Search Different types of Coffee
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#f2f0ef]/80 hover:bg-white focus:bg-white text-stone-900 px-4 py-2.5 pl-10 rounded-full border border-stone-400/30 outline-none focus:ring-2 focus:ring-black placeholder-stone-500 font-semibold shadow-inner transition-all duration-300"
            />
            <svg
              className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#302018]/65 mb-3">
            Origins / Locations
          </h2>
          {uniqueOrigins.length === 0 ? (
            <p className="text-xs text-[#302018]/50 italic font-semibold">
              No locations available
            </p>
          ) : (
            <div className="flex flex-row md:flex-col flex-wrap gap-4 md:gap-3">
              {uniqueOrigins.map((origin) => (
                <label
                  key={origin}
                  className="flex items-center space-x-3 text-sm font-semibold text-[#302018] cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedOrigins.includes(origin)}
                    onChange={() => handleOriginChange(origin)}
                    className="w-4 h-4 bg-white/70 border-stone-400 rounded focus:ring-purple-400 text-stone-800 accent-[#6a2c20] cursor-pointer transition-all duration-200"
                  />
                  <span className="group-hover:text-stone-900 transition-colors">
                    {origin}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </aside>
      <main className="flex-1 bg-[#f5f6f7] p-4 md:p-10 flex flex-col">
        {error && (
          <div className="bg-rose-950/40 border-2 border-rose-500/20 text-rose-300 p-4 rounded-xl mb-6 shadow-sm animate-shake">
            <div className="flex items-center space-x-2 font-bold text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              <span>Database Connection Alert</span>
            </div>
            <p className="text-xs font-semibold mt-1 opacity-90">{error}</p>
          </div>
        )}

        {loading && coffees.length === 0 ? (
          /* Skeleton Loading Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-pulse">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-[#d8d4d2]/60 rounded-2xl p-6 h-64 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-6 bg-stone-400/40 rounded-md w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-stone-400/35 rounded-md"></div>
                    <div className="h-4 bg-stone-400/35 rounded-md w-5/6"></div>
                  </div>
                  <div className="h-5 bg-stone-400/30 rounded-full w-24"></div>
                </div>
                <div className="h-10 bg-stone-400/40 rounded-xl mt-4"></div>
              </div>
            ))}
          </div>
        ) : filteredCoffees.length === 0 ? (
          <div className="flex-1 flex flex-col justify-center items-center text-center p-12 select-none">
            <svg
              className="w-16 h-16 text-black mb-4 animate-[bounce_2s_infinite]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="text-xl font-bold text-black mb-1">
              No Coffee Found
            </h3>
            <p className="text-sm font-semibold text-black/70 max-w-sm">
              Try adjusting your search query or location checkboxes to explore other blends!
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 px-4 py-2 bg-stone-900 text-stone-100 rounded-full hover:bg-stone-800 transition-colors font-semibold"
            >
              Clear Search
            </button>
          </div>
        ) : (
          /* Product Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-[fade-in_0.4s_ease-out]">
            {filteredCoffees.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                coffee={coffee}
                onUpdate={updateCoffee}
                onDelete={deleteCoffee}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
