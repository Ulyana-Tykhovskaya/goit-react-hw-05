import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = "5be8d2b79de49537a3f44c271cab9fcc";
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <h1>Home Page</h1>
      <MovieList movies={movies} />
    </main>
  );
};
export default HomePage;
// домашня сторінка із списком популярних кінофільмів
