import { Outlet } from "react-router-dom";
const MovieDetailsPage = () => {
  return (
    <main>
      <h1>Movie Details Page</h1>.
      <Outlet />
      {/* Здесь мы вложим маршруты что бы правильно рендерить он помогает если в одной странице есть еще несколько для дочерних элементов */}
    </main>
  );
};
export default MovieDetailsPage;

// MovieDetailsPage, сторінка із детальною інформацією про кінофільм
