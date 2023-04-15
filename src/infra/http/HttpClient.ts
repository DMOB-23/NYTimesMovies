import axios from "axios";
import { ApiConfig } from "../../config/api";

const httpClient = axios.create({ 
    baseURL: ApiConfig.MOVIES_API_BASE_URL,
})

httpClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${ApiConfig.MOVIES_API_KEY}`
    return config
})

export default httpClient
