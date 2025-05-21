import { useState, useEffect } from "react";
import { fetchMovies } from "../../components/api/api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    if (query === "") return;
    setSearchParams({ query });
  };

  useEffect(() => {
    if (!searchParams.get("query")) return;

    const getMovies = async () => {
      try {
        const { data } = await fetchMovies(searchParams.get("query"));
        setSearchMovies([...data.results]);
      } catch (error) {
        setSearchMovies([]);
        console.log(error);
      } finally {
        // setLoading(false);
      }
    };

    getMovies();
  }, [searchParams]);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="query" placeholder="Enter search query" />
          <button type="submit">Search</button>
        </form>
      </div>

      {searchMovies.length > 0 ? <MovieList movies={searchMovies} /> : <></>}
    </div>
  );
};

export default MoviesPage;
