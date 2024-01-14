import axios from "axios";

// const API_URL = "http://localhost:3001/api/";

const api = axios.create({
  baseUrl: "",
  Headers: {
    "Content-type": "application/json",
  },
});

export default api;
