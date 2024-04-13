import axios from "axios"

const BASE_URL = "http://localhost:3500"

export const axiosConfig = axios.create({
    baseURL: BASE_URL,
})

axiosConfig.defaults.headers.common["Content-Type"] = "application/json"
axiosConfig.defaults.headers.common.Accept = "application/json"
