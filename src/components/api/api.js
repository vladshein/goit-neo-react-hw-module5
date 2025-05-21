import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const url_trending = "trending/movie/day";
const url_search = "search/movie";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDM2MDVlMjA3ODFlODEwMzkyMzFkMjBmYjJkOThmMCIsIm5iZiI6MTc0NzY0MjIwOS4xNTgwMDAyLCJzdWIiOiI2ODJhZTc2MWVmNjg4Mzc3OWJmNTVkNzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pEb-WsrvHiQCM1WLvLdHwZEhZLYsfhG_XmttLrfUz4s";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

async function fetchTrending() {
  const response = await axios.get(url_trending, options);

  console.log("response.data.results", response);
  return response;
}

async function fetchSingle(movie_id) {
  const response = await axios.get(`movie/${movie_id}`, options);

  console.log("response.data.results", response);
  return response;
}

async function fetchCast(movie_id) {
  const response = await axios.get(`movie/${movie_id}/credits`, options);

  console.log("response.data.results", response);
  return response;
}

async function fetchReview(movie_id) {
  const response = await axios.get(`movie/${movie_id}/reviews`, options);

  console.log("response.data.results", response);
  return response;
}

async function fetchMovies(query) {
  const response = await axios.get(`${url_search}?query=${query}`, options);

  console.log("response.data.results", response);
  return response;
}

export { fetchTrending, fetchSingle, fetchMovies, fetchCast, fetchReview };
