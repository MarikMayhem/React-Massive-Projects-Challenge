import axios from 'axios';

console.log('here', process.env)
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: { Authorization: `Bearer ${process.env.REACT_APP_MOVIEDB_BEARER_API_TOKEN}` }
})

export default instance;