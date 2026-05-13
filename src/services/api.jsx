import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});

export const requests = {
  trending: `/trending/movie/week`,
  topRated: `/movie/top_rated`,
  action: `/discover/movie?with_genres=28`,
  romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  details: (id) => `/movie/${id}`,
};

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
export default api;