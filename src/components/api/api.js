import axios from "axios";

const ACCESS_KEY = "N_iT0R_kluhm6oNP9308eYA73iVc_gIeDoUbF70TSus";
axios.defaults.baseURL = "https://api.unsplash.com";

async function fetchPhotos(query, page = 1) {
  const data = await axios.get("/search/photos", {
    params: {
      query,
      client_id: ACCESS_KEY,
      per_page: 12,
      page,
    },
  });

  console.log("response.data.results", data);
  return data;
}

export { fetchPhotos };
