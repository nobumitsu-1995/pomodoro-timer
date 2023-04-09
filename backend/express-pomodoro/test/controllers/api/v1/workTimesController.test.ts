import request from 'supertest'
import app from '../../../../src/main'
import WorkTime from '../../../../src/models/workTime'
import Task from '../../../../src/models/task'
// import { getToken } from '../../../../src/lib/functions/getToken'

let taskId = '' as unknown

describe('WorkTimeController', () => {
  const token = ''

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
    await WorkTime.deleteMany({})
  })

  describe('GET api/v1/work_time', () => {
    it('it should GET all workTime json', async () => {
      await WorkTime.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      })

      const res = await request(app)
        .get('/api/v1/work_time/')
        .set('Authorization', token)

      expect(res.status).toBe(200)
      expect(res.body.length).toBe(1)
    })
  })

  describe('GET api/v1/work_time/:id/show', () => {
    it('it should GET workTime json with correct id', async () => {
      const workTime = await WorkTime.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      })

      const workTimeId = workTime._id
      const res = await request(app)
        .get(`/api/v1/work_time/${workTimeId}/show`)
        .set('Authorization', token)

      expect(res.status).toBe(200)
      expect(res.body.workTime).toBe(10)
    })

    it('it should not GET workTime json with wrong id', async () => {
      await WorkTime.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      })

      const workTimeId = 'xxx'
      const res = await request(app)
        .get(`/api/v1/work_time/${workTimeId}/show`)
        .set('Authorization', token)

      expect(res.status).toBe(500)
    })
  })

  describe('POST api/v1/work_time/create', () => {
    it('it should POST workTime json', async () => {
      const workTimeParams = {
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      }

      const res = await request(app)
        .post(`/api/v1/work_time/create`)
        .set('Authorization', token)
        .send(workTimeParams)

      expect(res.status).toBe(201)
      expect(res.body.workTime).toBe(10)
    })
  })

  describe('PATCH api/v1/workTime/:id/update', () => {
    it('it should PATCH workTime json with correct id', async () => {
      const workTime = await WorkTime.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      })

      const workTimeId = workTime._id
      const res = await request(app)
        .patch(`/api/v1/work_time/${workTimeId}/update`)
        .set('Authorization', token)
        .send({
          workTime: 15,
        })

      expect(res.status).toBe(200)
      expect(res.body.workTime).toBe(15)
    })

    it('it should not PATCH workTime json with wrong id', async () => {
      await WorkTime.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      })

      const workTimeId = 'xxx'
      const res = await request(app)
        .patch(`/api/v1/work_time/${workTimeId}/update`)
        .set('Authorization', token)
        .send({
          workTime: 15,
        })

      expect(res.status).toBe(500)
    })
  })

  describe('DELETE api/v1/work_time/:id/delete', () => {
    it('it should DELETE workTime json with correct id', async () => {
      const workTime = await WorkTime.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      })

      const workTimeId = workTime._id
      const res = await request(app)
        .delete(`/api/v1/work_time/${workTimeId}/delete`)
        .set('Authorization', token)

      expect(res.status).toBe(204)
    })

    it('it should not DELETE workTime json with wrong id', async () => {
      await WorkTime.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      })

      const workTimeId = 'xxx'
      const res = await request(app)
        .delete(`/api/v1/work_time/${workTimeId}/delete`)
        .set('Authorization', token)

      expect(res.status).toBe(500)
    })
  })
})
