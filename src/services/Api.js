import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/search/repositories?q=dnit",
});

export default api;