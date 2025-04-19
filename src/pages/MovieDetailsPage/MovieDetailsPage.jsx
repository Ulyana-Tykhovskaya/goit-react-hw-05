import { useParams, Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from || "/";
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=5be8d2b79de49537a3f44c271cab9fcc&language=en-US`
        );
        setMovie(response.data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setError("Не удалось загрузить информацию о фильме.");
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>Загрузка...</p>;
  }

  const { title, overview, poster_path, genres } = movie;

  return (
    <main>
      <Link to={backLink}>⬅️ Назад</Link>
      <h2>{title}</h2>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
      )}
      <p>{overview}</p>
      <p>
        <strong>Жанры:</strong> {genres.map((g) => g.name).join(", ")}
      </p>

      <hr />
      <p>Дополнительная информация:</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLink }}>
            Актёры
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLink }}>
            Отзывы
          </Link>
        </li>
      </ul>

      <hr />
      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;
