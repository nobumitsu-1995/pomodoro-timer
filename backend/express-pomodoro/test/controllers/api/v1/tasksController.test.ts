import request from 'supertest'
// import { getToken } from '../../../../src/lib/functions/getToken'
import app from '../../../../src/main'
import Task from '../../../../src/models/task'

describe('TaskController', () => {
  const token = ''

  beforeAll(async () => {
    // token = await getToken()
  })

  beforeEach(async () => {
    await Task.deleteMany({})
  })

  afterEach(async () => {
    await Task.deleteMany({})
  })

  describe('GET api/v1/task', () => {
    it('it should GET all task json', async () => {
      await Task.create({
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        title: 'test title',
      })

      const res = await request(app)
        .get('/api/v1/task/')
        .set('Authorization', token)

      expect(res.status).toBe(200)
      expect(res.body.length).toBe(1)
    })
  })

  describe('GET api/v1/task/:id/show', () => {
    it('it should GET task json with correct id', async () => {
      const task = await Task.create({
        // uid: `${process.env.CLIENT_ID}@clients`,
        uid: 'test',
        title: 'test title',
      })

      const taskId = task._id
      const res = await request(app)
        .get(`/api/v1/task/${taskId}/show`)
        .set('Authorization', token)

      expect(res.status).toBe(200)
      expect(res.body.title).toBe('test title')
    })

    it('it should not GET task json with wrong id', async () => {
      await Task.create({
        // uid: `${process.env.CLIENT_ID}@clients`,
        uid: 'test',
        title: 'test title',
      })

      const taskId = 'xxx'
      const res = await request(app)
        .get(`/api/v1/task/${taskId}/show`)
        .set('Authorization', token)

      expect(res.status).toBe(500)
    })
  })

  describe('POST api/v1/task/create', () => {
    it('it should POST task json', async () => {
      const taskParams = {
        // uid: `${process.env.CLIENT_ID}@clients`,
        uid: 'test',
        title: 'a'.repeat(25),
      }

      const res = await request(app)
        .post(`/api/v1/task/create`)
        .set('Authorization', token)
        .send(taskParams)

      expect(res.status).toBe(201)
      expect(res.body.title).toBe('aaaaaaaaaaaaaaaaaaaaaaaaa')
    })

    it('it should not CREATE task with 26 latters title', async () => {
      const taskParams = {
        // uid: `${process.env.CLIENT_ID}@clients`,
        uid: 'test',
        title: 'a'.repeat(26),
      }

      const res = await request(app)
        .post(`/api/v1/task/create`)
        .set('Authorization', token)
        .send(taskParams)

      expect(res.status).toBe(400)
    })

    it('it should not CREATE task with 0 latters title', async () => {
      const taskParams = {
        // uid: `${process.env.CLIENT_ID}@clients`,
        uid: 'test',
        title: '',
      }

      const res = await request(app)
        .post(`/api/v1/task/create`)
        .set('Authorization', token)
        .send(taskParams)

      expect(res.status).toBe(400)
    })

    it('it should not CREATE 11 tasks', async () => {
      const taskParams = {
        // uid: `${process.env.CLIENT_ID}@clients`,
        uid: 'test',
        title: 'a'.repeat(25),
      }

      for (let i = 0; i < 10; i++) {
        await request(app)
          .post(`/api/v1/task/create`)
          .set('Authorization', token)
          .send(taskParams)
      }

      const res = await request(app)
        .get('/api/v1/task/')
        .set('Authorization', token)

      expect(res.status).toBe(200)
      expect(res.body.length).toBe(1)
    })
  })

  describe('PATCH api/v1/task/:id/update', () => {
    it('it should PATCH task json with correct id', async () => {
      const task = await Task.create({
        // uid: `${process.env.CLIENT_ID}@clients`,
        uid: 'test',
        title: 'test title',
      })

      const taskId = task._id
      const res = await request(app)
        .patch(`/api/v1/task/${taskId}/update`)
        .set('Authorization', token)
        .send({
          title: 'updated title',
        })

      expect(res.status).toBe(200)
      expect(res.body.title).toBe('updated title')
    })

    it('it should not PATCH task json with wrong id', async () => {
      await Task.create({
        // uid: `${process.env.CLIENT_ID}@clients`,
        uid: 'test',
        title: 'test title',
      })

      const taskId = 'xxx'
      const res = await request(app)
        .patch(`/api/v1/task/${taskId}/update`)
        .set('Authorization', token)
        .send({
          title: 'updated title',
        })

      expect(res.status).toBe(500)
    })
  })

  describe('DELETE api/v1/task/:id/delete', () => {
    it('it should DELETE task json with correct id', async () => {
      const task = await Task.create({
        // uid: `${process.env.CLIENT_ID}@clients`,
        uid: 'test',
        title: 'test title',
      })

      const taskId = task._id
      const res = await request(app)
        .delete(`/api/v1/task/${taskId}/delete`)
        .set('Authorization', token)

      expect(res.status).toBe(204)
    })

    it('it should not DELETE task json with wrong id', async () => {
      await Task.create({
        // uid: `${process.env.CLIENT_ID}@clients`,
        uid: 'test',
        title: 'test title',
      })

      const taskId = 'xxx'
      const res = await request(app)
        .delete(`/api/v1/task/${taskId}/delete`)
        .set('Authorization', token)

      expect(res.status).toBe(500)
    })
  })
})
