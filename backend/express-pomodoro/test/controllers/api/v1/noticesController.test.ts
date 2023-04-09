import request from 'supertest'
import app from '../../../../src/main'
import Notice from '../../../../src/models/notice'

beforeEach(async () => {
  await Notice.deleteMany({})
})

describe('noticesController', () => {
  describe('GET api/v1/notices', () => {
    it('it should GET all notices json', async () => {
      await Notice.create({
        content: 'notice content test',
        title: 'title',
        publishedAt: new Date(),
      })

      const res = await request(app).get('/api/v1/notices')

      expect(res.status).toBe(200)
      expect(res.body.length).toBe(1)
    })
  })
})
