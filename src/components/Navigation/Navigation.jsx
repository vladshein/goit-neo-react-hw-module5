import { Route, Routes, NavLink, Link } from "react-router-dom";
import style from "./Navigation.module.css";

const navClasses = ({ isActive }) => (isActive ? style.active : "");

const Navigation = () => {
  return (
    <header>
      <div className={style.headerdiv}>
        <NavLink to="/" className={navClasses}>
          Home
        </NavLink>
        <NavLink to="/movies" className={navClasses}>
          Movies
        </NavLink>
        <br />
      </div>
    </header>
  );
};

export default Navigation;
