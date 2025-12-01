import axios from "axios"
export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-fy.onrender.com" : "/api",
  withCredentials: true,
});
