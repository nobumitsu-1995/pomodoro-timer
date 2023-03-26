import { api } from './axios'

export const createAchievement = (
  token: string,
  taskId: string,
  time: number
) => {
  const params = {
    taskId: taskId,
    time: time,
  }
  return api(token)
    .post('/v1/achievement/create', params)
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      console.error(e)
    })
}
