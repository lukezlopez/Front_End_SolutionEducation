import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
});

const DEFAULT_TOKEN = "Bearer professor-token";

api.interceptors.request.use(
    (config) => {
        config.headers = config.headers || {};
        config.headers.Authorization = DEFAULT_TOKEN;
        return config;
    },
    (error) => Promise.reject(error)
);

export { api };
