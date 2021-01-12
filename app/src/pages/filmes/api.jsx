import axios from "axios";

const api = axios.create({
    baseURL: "/filmes"
});

export default api