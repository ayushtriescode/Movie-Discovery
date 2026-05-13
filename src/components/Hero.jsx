import { useEffect, useState } from 'react';
import api, { requests, IMAGE_BASE_URL } from '../services/api';

export default function Hero({ onLoaded }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchHero() {
      try{
      const { data } = await api.get(requests.trending);
      setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
      if (onLoaded) onLoaded();
    } catch (error) {
        console.error(error);
        if (onLoaded) onLoaded();
    }
  }
  fetchHero();
  }, [onLoaded]);

  if (!movie) return <div className="h-[80vh] bg-zinc-900 animate-pulse" />;

  return (
    <header 
    className="relative h-[70vh] md:h-[85vh] w-full bg-cover bg-center md:bg-top"
    style={{ backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path})` }}
  >
    <div className="absolute inset-0 h-[70vh] md:h-auto bg-linear-to-t from-zinc-950 via-zinc-950/60 md:via-zinc-950/40 to-transparent" />
    
    <div className="absolute bottom-12 md:bottom-32 left-6 md:left-16 max-w-[90%] md:max-w-2xl space-y-3 md:space-y-4">
      <h1 className="text-3xl md:text-6xl font-bold drop-shadow-xl">{movie.title}</h1>
      <p className="hidden sm:block text-zinc-200 text-sm md:text-lg line-clamp-3 drop-shadow-md">
        {movie.overview}
      </p>
      <button className="bg-white text-black px-6 md:px-10 py-2 md:py-3 rounded-md font-bold hover:bg-opacity-80 transition active:scale-95">
        Play Now
      </button>
    </div>
  </header>
  );
}