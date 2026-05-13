import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api, { IMAGE_BASE_URL } from '../services/api';

export default function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(fetchUrl).then(res => setMovies(res.data.results));
  }, [fetchUrl]);

  return (
    <div className="my-8 md:my-12 px-6 md:px-16">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-zinc-100 uppercase tracking-wide">
        {title}
      </h2>
      
      <div className="flex overflow-x-scroll scrollbar-hide space-x-4 py-4">
        {movies.map(movie => (
          movie.poster_path && (
            <img
              key={movie.id}
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="w-32 md:w-48 lg:w-56 rounded-md cursor-pointer transform hover:scale-105 transition duration-300 shadow-lg"
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
          )
        ))}
      </div>
    </div>
  );
}