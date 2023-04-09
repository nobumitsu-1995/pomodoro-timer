import request from 'supertest'
import app from '../../src/main'
import Notice from '../../src/models/notice'
import * as noticesController from '../../src/controllers/noticesController'

const userName = process.env.ADMIN_USER || ''
const userPass = process.env.ADMIN_PASSWORD || ''

beforeEach(async () => {
  await Notice.deleteMany({})
})

describe('noticesController', () => {
  describe('GET /notices', () => {
    it('it should GET all notices', async () => {
      await Notice.create({
        content: 'notice content test',
        title: 'title',
        publishedAt: new Date(),
      })

      const res = await request(app)
        .get('/notices/')
        .auth(userName, userPass, { type: 'auto' })

      expect(res.status).toBe(200)
    })
  })

  describe('GET /notices/:id/show', () => {
    it('it should GET notice by ID', async () => {
      const notice = await Notice.create({
        content: 'notice content test',
        title: 'title',
        publishedAt: new Date(),
      })

      const noticeId = notice._id
      const res = await request(app)
        .get(`/notices/${noticeId}/show`)
        .auth(userName, userPass, { type: 'auto' })
      expect(res.status).toBe(200)
    })

    it('it should not GET notice by wrong ID', async () => {
      await Notice.create({
        content: 'notice content test',
        title: 'title',
        publishedAt: new Date(),
      })

      const noticeId = 'xxx'
      const res = await request(app)
        .get(`/notices/${noticeId}/show`)
        .auth(userName, userPass, { type: 'auto' })

      expect(res.status).toBe(404)
    })
  })

  describe('GET /notices/new', () => {
    it('it should render new page', async () => {
      const res = await request(app)
        .get('/notices/new')
        .auth(userName, userPass, { type: 'auto' })

      expect(res.status).toBe(200)
    })
  })

  describe('POST /notices/create', () => {
    it('it should POST notice with correct params', async () => {
      const noticeParams = {
        content: 'notice content test',
        title: 'title',
        publishedAt: new Date(),
      }

      const res = await request(app)
        .post('/notices/create')
        .auth(userName, userPass, { type: 'auto' })
        .send(noticeParams)

      expect(res.status).toBe(201)
    })

    it('it should not POST notice without content', async () => {
      const noticeParams = {
        content: '',
        title: 'title',
        publishedAt: new Date(),
      }

      const res = await request(app)
        .post('/notices/create')
        .auth(userName, userPass, { type: 'auto' })
        .send(noticeParams)

      expect(res.status).toBe(404)
    })

    it('it should not POST notice without publishedAt', async () => {
      const noticeParams = {
        content: 'notice content test',
        title: 'title',
        publishedAt: '',
      }

      const res = await request(app)
        .post('/notices/create')
        .auth(userName, userPass, { type: 'auto' })
        .send(noticeParams)

      expect(res.status).toBe(404)
    })
  })

  describe('GET /notices/:id/edit', () => {
    it('it should render edit page with ID', async () => {
      const notice = await Notice.create({
        content: 'notice content test',
        title: 'title',
        publishedAt: new Date(),
      })

      const noticeId = notice._id
      const res = await request(app)
        .get(`/notices/${noticeId}/edit`)
        .auth(userName, userPass, { type: 'auto' })

      expect(res.status).toBe(200)
    })

    it('it should not render edit page with wrong ID', async () => {
      await Notice.create({
        content: 'notice content test',
        title: 'title',
        publishedAt: new Date(),
      })

      const noticeId = 'xxx'
      const res = await request(app)
        .get(`/notices/${noticeId}/edit`)
        .auth(userName, userPass, { type: 'auto' })

      expect(res.status).toBe(404)
    })
  })

  describe('PATCH /notices/:id/update', () => {
    it('it should PATCH notice by ID', async () => {
      const notice = await Notice.create({
        content: 'notice content test',
        title: 'title',
        publishedAt: new Date(),
      })

      const noticeId = notice._id
      const res = await request(app)
        .patch(`/notices/${noticeId}/update`)
        .auth(userName, userPass, { type: 'auto' })
        .send({
          content: 'updated content',
          publishedAt: new Date(),
        })

      expect(res.status).toBe(200)
    })

    it('it should not PATCH notice by wrong ID', async () => {
      await Notice.create({
        content: 'notice content test',
        title: 'title',
        publishedAt: new Date(),
      })

      const noticeId = 'xxx'
      const res = await request(app)
        .patch(`/notices/${noticeId}/update`)
        .auth(userName, userPass, { type: 'auto' })
        .send({
          content: 'updated content',
        })

      expect(res.status).toBe(404)
    })

    it('it should not PATCH notice without content', async () => {
      const notice = await Notice.create({
        content: 'notice content test',
        title: 'title',
        publishedAt: new Date(),
      })

      const noticeId = notice._id
      const res = await request(app)
        .patch(`/notices/${noticeId}/update`)
        .auth(userName, userPass, { type: 'auto' })
        .send({
          content: '',
        })

      expect(res.status).toBe(404)
    })

    it('it should not PATCH notice without publishedAt', async () => {
      const notice = await Notice.create({
        content: 'notice content test',
        title: 'title',
        publishedAt: new Date(),
      })

      const noticeId = notice._id
      const res = await request(app)
        .patch(`/notices/${noticeId}/update`)
        .auth(userName, userPass, { type: 'auto' })

      expect(res.status).toBe(404)
    })
  })

  describe('DELETE /notices/:id/delete', () => {
    it('it should DELETE notice by ID', async () => {
      const notice = await Notice.create({
        content: 'notice content test',
        title: 'title',
        publishedAt: new Date(),
      })

      const noticeId = notice._id
      const res = await request(app)
        .delete(`/notices/${noticeId}/delete`)
        .auth(userName, userPass, { type: 'auto' })

      expect(res.status).toBe(200)
    })

    it('it should not DELETE notice by wrong ID', async () => {
      await Notice.create({
        content: 'notice content test',
        title: 'title',
        publishedAt: new Date(),
      })

      const noticeId = 'xxx'
      const res = await request(app)
        .delete(`/notices/${noticeId}/delete`)
        .auth(userName, userPass, { type: 'auto' })

      expect(res.status).toBe(404)
    })
  })

  describe('function getNoticeParams', () => {
    it('return notice', () => {
      const body = {
        content: 'test',
        title: 'title',
        publishedAt: new Date('2022-1-1'),
      }

      expect(noticesController.getNoticeParams(body)).toEqual({
        content: 'test',
        publishedAt: new Date('2022-1-1'),
        title: 'title',
      })
    })
  })
})
