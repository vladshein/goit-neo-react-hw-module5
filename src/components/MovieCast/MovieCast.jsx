import { fetchCast } from "../api/api";
import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  console.log("MovieId:", movieId);

  useEffect(() => {
    if (movieId) {
      const fetching = async () => {
        const { data } = await fetchCast(movieId);
        console.log("res is 11111:", data);
        setCast(data.cast);
      };
      fetching();
    }
  }, [movieId]);

  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width="200px"
                />
              )}
              <b>{name}</b>
              <p>{character}</p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast</p>
      )}
    </div>
  );
};

export default MovieCast;
