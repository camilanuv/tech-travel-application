import axios from "axios";

const api = axios.create({
    baseURL: 'https://63e02379a76cfd41058eab28.mockapi.io/'
})

export default api;