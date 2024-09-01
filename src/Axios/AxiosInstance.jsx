import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'https://backend-taupe-six.vercel.app', 
    baseURL: 'http://localhost:5000', 
});

export default axiosInstance;