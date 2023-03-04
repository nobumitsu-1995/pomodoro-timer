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
  api(token)
    .post('/v1/achievement/create', params)
    .then((res) => {
      console.log(res)
    })
    .catch((e) => {
      console.error(e)
    })
}
