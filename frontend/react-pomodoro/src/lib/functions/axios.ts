import axios from 'axios'
import mockAdapter from 'src/mock/mockAdapter'

const url =
  process.env.NODE_ENV === 'production'
    ? 'https://pomodoro-timer-admin-page.click/api'
    : 'http://localhost:80/api'

export const api = (token?: string) => {
  return axios.create({
    withCredentials: true,
    baseURL: url,
    headers: {
      Authorization: token,
    },
    adapter: mockAdapter,
  })
}
