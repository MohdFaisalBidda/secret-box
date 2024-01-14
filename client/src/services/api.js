import axois from "axois";

const API_URL = "http://localhost:3001";

const api = axois.create({
  baseUrl: API_URL,
  Headers: {
    "Content-type": "application/json",
  },
});

export default api;
