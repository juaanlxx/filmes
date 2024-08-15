import axios from 'axios';

// BASE DA URL: https://api.themoviedb.org/3/
// URL DA API https://api.themoviedb.org/3/movie/550?api_key=10377de4179fa0425aeae5c5b3425c20

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;