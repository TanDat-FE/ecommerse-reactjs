import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://be-project-reactjs.vercel.app/api/v1/",
  timeout: 30000, // Tăng timeout lên 30 giây
  headers: { "Content-Type": "application/json" },
});

export default axiosClient;
