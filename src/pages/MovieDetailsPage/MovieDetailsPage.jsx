import { useState, useEffect } from "react";
import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { fetchSingle } from "../../components/api/api";
import style from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  console.log("MovieId:", movieId);
  const navigate = useNavigate();

  useEffect(() => {
    if (movieId) {
      const fetching = async () => {
        const { data } = await fetchSingle(movieId);
        console.log("res is:", data);
        setMovie(data);
      };
      fetching();
    }
  }, [movieId]);

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleOnClick}>Go back</button>
      <br />
      <br />
      <div className={style.container}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
          width={250}
        />
        <div>
          <h2>
            {movie.original_title} (
            {movie.release_date && movie.release_date.slice(0, 4)})
          </h2>

          <p>User score: {Math.round(Number(movie.vote_average) * 10)}%</p>
          <br />
          <h3>Overview</h3>
          <br />

          <p>{movie.overview}</p>
          <br />

          <h4>Genres</h4>
          <p>
            {movie.genres
              ? movie.genres.map(genre => genre.name).join(", ")
              : "No genres available"}
          </p>
          <br />
        </div>
      </div>

      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="review">review</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
