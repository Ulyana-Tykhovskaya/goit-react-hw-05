import { NavLink } from "react-router-dom";
import "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/src/pages/HomePage">Home</NavLink>
        </li>
        <li>
          <NavLink to="/src/pages/MoviesPage">Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
