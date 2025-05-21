import { fetchReview } from "../api/api";
import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  console.log("MovieId:", movieId);

  useEffect(() => {
    if (movieId) {
      const fetching = async () => {
        const { data } = await fetchReview(movieId);
        console.log("res is 22222:", data);
        setReview(data.results);
      };
      fetching();
    }
  }, [movieId]);

  return (
    <div>
      {review.length > 0 ? (
        <ul>
          {review.map(({ id, content, author }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <br />
              <p>{content}</p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No Review</p>
      )}
    </div>
  );
};

export default MovieCast;
