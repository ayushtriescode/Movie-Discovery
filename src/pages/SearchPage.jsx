import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api, { IMAGE_BASE_URL } from "../services/api";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const query = searchParams.get("q");

  useEffect(() => {
    async function fetchSearch() {
      if (!query) return;

      setIsLoading(true);
      try {
        const { data } = await api.get(`/search/movie?query=${query}`);
        setMovies(data.results);
      } catch (error) {
        console.error("Search failed", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSearch();
  }, [query]);

  return (
    <div className="pt-24 px-8 md:px-16 bg-zinc-950 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">
        Results for: <span className="text-red-600">"{query}"</span>
      </h1>

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div key={i} className="space-y-2">
              <div className="aspect-2/3 bg-zinc-800 animate-pulse rounded-lg" />
              <div className="h-4 bg-zinc-800 animate-pulse rounded w-3/4" />
            </div>
          ))}
        </div>
      ) : movies.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {movies.map(
            (movie) =>
              movie.poster_path && (
                <div
                  key={movie.id}
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  className="group cursor-pointer"
                >
                  <div className="overflow-hidden rounded-lg border border-zinc-800 group-hover:border-red-600 transition-all">
                    <img
                      src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-auto transform group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium truncate">
                    {movie.title}
                  </p>
                </div>
              ),
          )}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-zinc-500 text-lg">
            No movies found matching your search.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-red-600 hover:underline"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}
