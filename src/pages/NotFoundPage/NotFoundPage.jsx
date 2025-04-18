import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <main>
      <h1>404 - Not Found</h1>
      <p>
        Цю сторінку не знайдено. Перейти на{" "}
        <link to="/src/pages/HomePage">головну</link>
      </p>
    </main>
  );
};

export default NotFoundPage;
