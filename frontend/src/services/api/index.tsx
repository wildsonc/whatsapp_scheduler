import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8088/api",
});

export default api;
