import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ffda232ba1095b2db867c38e7745d8d7';

export async function getTrending() {
  const response = await axios.get(
    `${API_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
}

export async function getMovieDetail(id) {
  const response = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
  return response.data;
}

export async function getMovieCast(id) {
  const response = await axios.get(
    `${API_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
}

export async function searchMovie(query) {
  const response = await axios.get(
    `${API_URL}/search/movie?api_key=${API_KEY}&page=1&query=${query}`
  );

  return response.data.results;
}

export async function getMovieReviews(id) {
  const response = await axios.get(
    `${API_URL}/movie/${id}/reviews?api_key=${API_KEY}&page=1`
  );

  return response.data.results;
}
