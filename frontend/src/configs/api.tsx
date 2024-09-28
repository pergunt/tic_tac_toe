import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

API.interceptors.response.use(
  (config) => config,
  (error) => {
    // eslint-disable-next-line
    console.error(error.response.data);

    throw error;
  },
);

export default API;
