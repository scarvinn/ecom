import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mobileapp-backend-91e4.onrender.com',
    timeout: 100000,
});
export default api;
