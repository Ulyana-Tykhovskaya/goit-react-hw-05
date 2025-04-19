import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5be8d2b79de49537a3f44c271cab9fcc`
        );
        setCast(response.data.cast);
      } catch (err) {
        console.error(err);
        setError("Не удалось загрузить актёрский состав.");
      }
    };

    fetchMovieCast();
  }, [movieId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (cast.length === 0) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      <h3>Актёры</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <h4>{actor.name}</h4>
            <p>Роль: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
