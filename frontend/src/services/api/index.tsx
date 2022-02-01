import axios from "axios";

const api = axios.create({
  baseURL: "http://10.9.35.86:8088",
});

export default api;
