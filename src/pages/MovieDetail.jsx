import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api, { requests, IMAGE_BASE_URL } from '../services/api';

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api.get(requests.details(id)).then(res => setMovie(res.data));
  }, [id]);

  if (!movie) return <div className="p-20 text-center">Loading...</div>;

  return (
    <div className="pt-28 pb-12 px-6 md:px-20 min-h-screen bg-zinc-950">
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
      <img 
        className="w-full max-w-sm mx-auto md:mx-0 rounded-xl shadow-2xl border border-zinc-800"
        src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
        alt={movie.title} 
      />
      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-red-600">{movie.title}</h1>
        <p className="text-zinc-400 italic">{movie.tagline}</p>
        <p className="text-lg leading-relaxed">{movie.overview}</p>
        <div className="flex gap-4">
          <span className="bg-zinc-800 px-4 py-1 rounded">Release: {movie.release_date}</span>
          <span className="text-yellow-500 font-bold">Rating: {movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </div>
    </div>
  );
}