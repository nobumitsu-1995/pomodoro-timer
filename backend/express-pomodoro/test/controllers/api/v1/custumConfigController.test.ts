import request from 'supertest'
// import { getToken } from '../../../../src/lib/functions/getToken'
import app from '../../../../src/main'
import CustumConfig from '../../../../src/models/custumConfig'

describe('custumConfigController', () => {
  const token = ''

  beforeAll(async () => {
    // token = await getToken()
  })

  beforeEach(async () => {
    await CustumConfig.deleteMany({})
  })

  afterEach(async () => {
    await CustumConfig.deleteMany({})
  })

  describe('GET api/v1/custum_config', () => {
    test('全てのカスタム設定を取得できる', async () => {
      await CustumConfig.create({
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      })

      const res = await request(app)
        .get('/api/v1/custum_config/')
        .set('Authorization', token)

      expect(res.status).toBe(200)
      expect(res.body).toHaveLength(1)
    })
  })

  describe('GET api/v1/custum_config/:id/show', () => {
    test('idに紐づくカスタム設定を取得できる', async () => {
      const config = await CustumConfig.create({
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      })

      const configId = config._id
      const res = await request(app)
        .get(`/api/v1/custum_config/${configId}/show`)
        .set('Authorization', token)

      expect(res.status).toBe(200)
      expect(res.body.workTime).toBe(30)
      expect(res.body.restTime).toBe(30)
      expect(res.body.cycle).toBe(3)
      expect(res.body.longRestTime).toBe(30)
      expect(res.body.cycleToLongRestTime).toBe(2)
    })

    test('無効なidではカスタム設定を取得しない', async () => {
      await CustumConfig.create({
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      })

      const configId = 'xxx'
      const res = await request(app)
        .get(`/api/v1/custum_config/${configId}/show`)
        .set('Authorization', token)

      expect(res.status).toBe(500)
    })
  })

  describe('POST api/v1/custum_config/create', () => {
    test('it should POST custum_config json', async () => {
      const configParams = {
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      }

      const res = await request(app)
        .post(`/api/v1/custum_config/create`)
        .set('Authorization', token)
        .send(configParams)

      expect(res.status).toBe(201)
      expect(res.body.workTime).toBe(30)
      expect(res.body.restTime).toBe(30)
      expect(res.body.cycle).toBe(3)
      expect(res.body.longRestTime).toBe(30)
      expect(res.body.cycleToLongRestTime).toBe(2)
    })
  })

  describe('PATCH api/v1/custum_config/:id/update', () => {
    test('it should PATCH custum_config json with correct id', async () => {
      const config = await CustumConfig.create({
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      })

      const configId = config._id
      const res = await request(app)
        .patch(`/api/v1/custum_config/${configId}/update`)
        .set('Authorization', token)
        .send({
          workTime: 40,
          restTime: 40,
          cycle: 5,
          longRestTime: 50,
          cycleToLongRestTime: 3,
        })

      expect(res.status).toBe(200)
      expect(res.body.workTime).toBe(40)
      expect(res.body.restTime).toBe(40)
      expect(res.body.cycle).toBe(5)
      expect(res.body.longRestTime).toBe(50)
      expect(res.body.cycleToLongRestTime).toBe(3)
    })

    test('it should not PATCH custum_config json with wrong id', async () => {
      await CustumConfig.create({
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      })
      const configId = 'xxx'
      const res = await request(app)
        .patch(`/api/v1/custum_config/${configId}/update`)
        .set('Authorization', token)
        .send({
          workTime: 40,
          restTime: 40,
          cycle: 5,
          longRestTime: 50,
          cycleToLongRestTime: 3,
        })

      expect(res.status).toBe(500)
    })
  })

  describe('DELETE api/v1/custum_config/:id/delete', () => {
    test('it should DELETE custum_config json with correct id', async () => {
      const config = await CustumConfig.create({
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      })

      const configId = config._id
      const res = await request(app)
        .delete(`/api/v1/custum_config/${configId}/delete`)
        .set('Authorization', token)

      expect(res.status).toBe(204)
    })

    test('it should not DELETE custum_config json with wrong id', async () => {
      await CustumConfig.create({
        uid: 'test',
        // uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      })

      const configId = 'xxx'
      const res = await request(app)
        .delete(`/api/v1/custum_config/${configId}/delete`)
        .set('Authorization', token)

      expect(res.status).toBe(500)
    })
  })

  describe('POST api/v1/custum_config/initialize', () => {
    test('it should create 5 custum_config data', async () => {
      const res = await request(app)
        .post(`/api/v1/custum_config/initialize`)
        .set('Authorization', token)

      expect(res.status).toBe(200)
      expect(res.body.length).toBe(5)
      expect(res.body[0].workTime).toBe(25)
      expect(res.body[0].restTime).toBe(5)
      expect(res.body[0].cycle).toBe(8)
      expect(res.body[0].longRestTime).toBe(10)
      expect(res.body[0].cycleToLongRestTime).toBe(4)
    })
  })
})
