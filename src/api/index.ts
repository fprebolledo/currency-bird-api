import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const apiClient = axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: {
    'Content-type': 'application/json'
  }
})

export default apiClient
