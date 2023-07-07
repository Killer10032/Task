import axios from "axios"

const request = axios.create({
    baseURL: "http://localhost:8888",
    timeout: 2000
})

request.interceptors.response.use((response) => {
    return response.data.data;
}, (err) => {
    return Promise.reject(err)
})

export default request