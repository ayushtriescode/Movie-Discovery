import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import Skeleton from '../components/Skeleton';
import { requests } from '../services/api';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="bg-zinc-950 min-h-screen">
        <Skeleton type="hero" />
        <div className="space-y-4 mt-4">
          <Skeleton type="row" />
          <Skeleton type="row" />
        </div>
      </main>
    );
  }

  return (
    <main className="bg-zinc-950 min-h-screen">
      <Hero />
      <div className="relative z-10 -mt-24 bg-zinc-950/10 pt-4 space-y-2">
        <MovieRow title="Trending This Week" fetchUrl={requests.trending} />
        <MovieRow title="Critics' Favorites" fetchUrl={requests.topRated} />
        <MovieRow title="Romantic Getaways" fetchUrl={requests.romance} />
        <MovieRow title="Action & Adrenaline" fetchUrl={requests.action} />
      </div>
    </main>
  );
}