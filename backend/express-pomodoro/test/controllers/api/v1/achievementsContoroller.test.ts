import request from 'supertest'
// import { getToken } from '../../../../src/lib/functions/getToken'
import app from '../../../../src/main'
import Achievement from '../../../../src/models/achievement'
import Task from '../../../../src/models/task'

describe('AchievementController', () => {
  const token = ''
  let taskId = '' as unknown

  beforeAll(async () => {
    // token = await getToken()
    const taskParams = {
      uid: 'uid',
      title: 'test title',
    }

    const task = await Task.create(taskParams)
    taskId = task._id
  })

  beforeEach(async () => {
    await Achievement.deleteMany({})
  })

  describe('GET api/v1/achievement', () => {
    test('全ての実績を取得できる', async () => {
      await Achievement.create({
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      })

      const response = await request(app)
        .get('/api/v1/achievement/')
        .set('Authorization', token)

      expect(response.status).toBe(200)
      expect(response.body).toHaveLength(1)
    })
  })

  describe('GET api/v1/achievement/:id/show', () => {
    test('idに紐づく実績を取得できる', async () => {
      const achievement = await Achievement.create({
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      })

      const achievementId = achievement._id
      const res = await request(app)
        .get(`/api/v1/achievement/${achievementId}/show`)
        .set('Authorization', token)

      expect(res.status).toBe(200)
      expect(res.body.time).toBe(10)
    })

    test('無効なidでは実績を取得しない', async () => {
      await Achievement.create({
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      })
      const achievementId = 'xxx'
      const e = await request(app)
        .get(`/api/v1/achievement/${achievementId}/show`)
        .set('Authorization', token)

      expect(e.status).toBe(500)
    })
  })

  describe('POST api/v1/achievement/create', () => {
    test('it should POST achievement json', async () => {
      const achievementParams = {
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }
      const res = await request(app)
        .post(`/api/v1/achievement/create`)
        .set('Authorization', token)
        .send(achievementParams)

      expect(res.status).toBe(201)
      expect(res.body.time).toBe(10)
    })
  })

  describe('PATCH api/v1/achievement/:id/update', () => {
    test('it should PATCH achievement json with correct id', async () => {
      const achievement = await Achievement.create({
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      })

      const achievementId = achievement._id
      const res = await request(app)
        .patch(`/api/v1/achievement/${achievementId}/update`)
        .set('Authorization', token)
        .send({
          time: 15,
        })

      expect(res.status).toBe(200)
      expect(res.body.time).toBe(15)
    })

    test('it should not PATCH achievement json with wrong id', async () => {
      await Achievement.create({
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      })

      const achievementId = 'xxx'
      const res = await request(app)
        .patch(`/api/v1/achievement/${achievementId}/update`)
        .set('Authorization', token)
        .send({
          time: 15,
        })

      expect(res.status).toBe(500)
    })
  })

  describe('DELETE api/v1/achievement/:id/delete', () => {
    test('it should DELETE achievement json with correct id', async () => {
      const achievement = await Achievement.create({
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      })

      const achievementId = achievement._id
      const res = await request(app)
        .delete(`/api/v1/achievement/${achievementId}/delete`)
        .set('Authorization', token)

      expect(res.status).toBe(204)
    })

    test('it should not DELETE achievement json with wrong id', async () => {
      await Achievement.create({
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      })

      const achievementId = 'xxx'
      const res = await request(app)
        .delete(`/api/v1/achievement/${achievementId}/delete`)
        .set('Authorization', token)

      expect(res.status).toBe(500)
    })
  })
})
