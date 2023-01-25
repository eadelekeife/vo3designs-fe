import axios from 'axios';

const axiosCall = axios.create({
    // http://172.20.10.2:9000
    // http://192.168.0.120:9000
    // http://localhost:9000
    // https://backend.vo3designs.com
    baseURL: "https://backend.vo3designs.com/api/v1/furniture"
})

export default axiosCall;