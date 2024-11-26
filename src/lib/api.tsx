import axios from "axios";

const instance = axios.create({
    baseURL : 'https://marineplaza.org/kcl-api/controller',
})

export default instance;
