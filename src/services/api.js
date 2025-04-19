const API_KEY = "5be8d2b79de49537a3f44c271cab9fcc";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("find the movie");
  }

  const data = await response.json();
  return data.results;
};
