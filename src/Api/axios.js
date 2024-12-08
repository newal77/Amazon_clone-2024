import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://amazone-backend-vfrt.onrender.com",
});
export { axiosInstance };
