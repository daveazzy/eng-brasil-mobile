import axios from 'axios';
import { CONFIG } from './config'



const apiUrl = CONFIG.API_URL
const apiKey = CONFIG.API_KEY


const api = axios.create({
    baseURL: apiUrl,
    headers:{
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`
    }
})

export default api;