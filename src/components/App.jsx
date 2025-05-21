import { lazy, Suspense } from "react";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));

import style from "./App.module.css";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={style.container}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />}></Route>
            <Route path="review" element={<MovieReviews />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
