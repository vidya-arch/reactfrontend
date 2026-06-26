import axios from "axios";

const api = axios.create({
 baseURL: "https://reactbackend-2.onrender.com"
});

export default api;
