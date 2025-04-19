import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=5be8d2b79de49537a3f44c271cab9fcc&language=en-US`
        );
        setReviews(response.data.results);
      } catch (err) {
        console.error(err);
        setError("Не удалось загрузить отзывы.");
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (reviews.length === 0) {
    return <p>Нет отзывов или идёт загрузка...</p>;
  }

  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
