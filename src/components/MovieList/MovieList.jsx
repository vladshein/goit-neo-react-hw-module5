import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      {movies.length > 0 ? (
        <div>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                {console.log(movie.id)}
                <Link to={`/movies/${movie.id}`} state={location}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default MovieList;
