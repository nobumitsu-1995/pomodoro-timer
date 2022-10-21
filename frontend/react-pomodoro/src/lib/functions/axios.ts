import axios from 'axios'

const url =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000/api/v1'

export const api = axios.create({
  withCredentials: true,
  baseURL: url,
})
