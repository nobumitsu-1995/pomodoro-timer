import request from 'supertest'
import { getToken } from '../../../../src/lib/functions/getToken'
import app from '../../../../src/main'
import Achievement from '../../../../src/models/achievement'
import Task from '../../../../src/models/task'

describe('AchievementController', () => {
  let token = ''
  let taskId = '' as unknown

  beforeEach((done) => {
    Achievement.deleteMany({})
      .then(() => {
        done()
      })
      .catch((e) => {
        console.log(e)
        done()
      })
  })

  beforeEach((done) => {
    const taskParams = {
      uid: 'uid',
      title: 'test title',
    }

    Task.create(taskParams).then((task) => {
      taskId = task._id
      done()
    })
  })

  beforeEach(async () => {
    token = await getToken()
  })

  describe('GET api/v1/achievement', () => {
    test('全ての実績を取得できる', async () => {
      await Achievement.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      })

      const response = await request(app)
        .get('/api/v1/achievement/')
        .set('Authorization', token)

      // expect(response.status).toBe(200)
      expect(response.body).toHaveLength(1)
    })
  })

  describe('GET api/v1/achievement/:id/show', () => {
    test('idに紐づく実績を取得できる', () => {
      Achievement.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }).then((achievement) => {
        const achievementId = achievement._id
        request(app)
          .get(`/api/v1/achievement/${achievementId}/show`)
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res.status).toBe(200)
            expect(res.body.time).toBe(10)
            expect(errors).toBeNull()
          })
      })
    })

    test('it should not GET achievement json with wrong id', () => {
      Achievement.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }).then(() => {
        const achievementId = 'xxx'
        request(app)
          .get(`/api/v1/achievement/${achievementId}/show`)
          .set('Authorization', token)
          .catch((e) => {
            expect(e.status).toBe(500)
          })
      })
    })
  })

  describe('POST api/v1/achievement/create', () => {
    test('it should POST achievement json', (done) => {
      const achievementParams = {
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }
      request(app)
        .post(`/api/v1/achievement/create`)
        .set('Authorization', token)
        .send(achievementParams)
        .end((errors, res) => {
          expect(res.status).toBe(201)
          expect(res.body.time).toBe(10)
          expect(errors).toBeNull()
          done()
        })
    })
  })

  describe('PATCH api/v1/achievement/:id/update', () => {
    test('it should PATCH achievement json with correct id', (done) => {
      Achievement.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }).then((achievement) => {
        const achievementId = achievement._id
        request(app)
          .patch(`/api/v1/achievement/${achievementId}/update`)
          .set('Authorization', token)
          .send({
            time: 15,
          })
          .end((errors, res) => {
            expect(res.status).toBe(200)
            expect(res.body.time).toBe(15)
            expect(errors).toBeNull()
            done()
          })
      })
    })

    test('it should not PATCH achievement json with wrong id', (done) => {
      Achievement.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }).then(() => {
        const achievementId = 'xxx'
        request(app)
          .patch(`/api/v1/achievement/${achievementId}/update`)
          .set('Authorization', token)
          .send({
            time: 15,
          })
          .end((errors, res) => {
            expect(res.status).toBe(500)
            done()
          })
      })
    })
  })

  describe('DELETE api/v1/achievement/:id/delete', () => {
    test('it should DELETE achievement json with correct id', (done) => {
      Achievement.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }).then((achievement) => {
        const achievementId = achievement._id
        request(app)
          .delete(`/api/v1/achievement/${achievementId}/delete`)
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res.status).toBe(204)
            done()
          })
      })
    })

    test('it should not DELETE achievement json with wrong id', (done) => {
      Achievement.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }).then(() => {
        const achievementId = 'xxx'
        request(app)
          .delete(`/api/v1/achievement/${achievementId}/delete`)
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res.status).toBe(500)
            done()
          })
      })
    })
  })
})
