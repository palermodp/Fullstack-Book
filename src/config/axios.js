import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5002",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      "Error en la petición:",
      error.response?.data || error.message
    );
    throw error;
  }
);

export default axiosInstance;
