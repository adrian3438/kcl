import axios from "axios";

const instance = axios.create({
    baseURL : 'https://marineplaza.org/kclvalve-api/controller',
})

export default instance;
