import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery("");
      setIsSearchOpen(false); 
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-12 py-4 flex items-center justify-between ${
        isScrolled ? "bg-zinc-950/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {!isSearchOpen && (
        <Link to="/" className="text-lg md:text-2xl font-black text-red-600 uppercase tracking-tighter">
          Movie Discovery
        </Link>
      )}

      <div className="flex items-center gap-4 grow justify-end">
        <div className="hidden md:flex gap-6 text-sm font-semibold mr-8">
          <Link to="/" className="hover:text-zinc-400">Home</Link>
          <span className="cursor-pointer hover:text-zinc-400">TV Shows</span>
          <span className="cursor-pointer hover:text-zinc-400">Movies</span>
        </div>

        <form onSubmit={handleSearch} className={`flex items-center gap-2 ${isSearchOpen ? 'w-full' : ''}`}>
          <div className="relative flex items-center w-full justify-end">
            <input
              type="text"
              autoFocus={isSearchOpen}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search movies..."
              className={`
                h-9 bg-zinc-900/50 pl-10 pr-4 rounded-full border border-zinc-700 focus:border-red-600 outline-none transition-all
                ${isSearchOpen ? "block w-full" : "hidden md:block w-64"}
              `}
            />
            
            <button 
              type="button"
              onClick={() => !isSearchOpen ? setIsSearchOpen(true) : handleSearch}
              className="md:absolute md:left-3 p-2 hover:bg-zinc-800 rounded-full transition"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>

            {isSearchOpen && (
              <button 
                type="button" 
                onClick={() => setIsSearchOpen(false)}
                className="md:hidden ml-2 text-zinc-400"
              >
                ✕
              </button>
            )}
          </div>
          
          {!isSearchOpen && (
            <button type="button" className="p-2 hover:bg-zinc-800 rounded-full transition">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
          )}
        </form>
      </div>
    </nav>
  );
}