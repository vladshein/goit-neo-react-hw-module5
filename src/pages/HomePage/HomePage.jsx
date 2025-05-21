import { useEffect, useState } from "react";
import { fetchTrending } from "../../components/api/api";
import { Link, NavLink } from "react-router-dom";
import style from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const { data } = await fetchTrending();
        setTrendingMovies([...data.results]);
      } catch (error) {
        // setError(true);
        setTrendingMovies([]);
        console.log(error);
      } finally {
        // setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
