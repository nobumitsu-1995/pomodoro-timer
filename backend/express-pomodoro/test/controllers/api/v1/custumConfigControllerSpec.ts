import chai, { expect } from 'chai'
import chaiHTTP from 'chai-http'
import { getToken } from '../../../../src/lib/functions/getToken'
import app from '../../../../src/main'
import CustumConfig from '../../../../src/models/custumConfig'

chai.use(chaiHTTP)

beforeEach((done) => {
  CustumConfig.deleteMany({})
    .then(() => {
      done()
    })
    .catch((e) => {
      console.log(e)
      done()
    })
})

describe('custumConfigController', () => {
  let token = ''

  beforeEach(async () => {
    token = await getToken()
  })

  describe('GET api/v1/custum_config', () => {
    it('it should GET all custum_config json', (done) => {
      CustumConfig.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      }).then(() => {
        chai
          .request(app)
          .get('/api/v1/custum_config/')
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(res.body.length).to.eq(1)
            expect(errors).to.be.null
            done()
          })
      })
    })
  })

  describe('GET api/v1/custum_config/:id/show', () => {
    it('it should GET custum_config json with correct id', (done) => {
      CustumConfig.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      }).then((config) => {
        const configId = config._id
        chai
          .request(app)
          .get(`/api/v1/custum_config/${configId}/show`)
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(res.body.workTime).to.eq(30)
            expect(res.body.restTime).to.eq(30)
            expect(res.body.cycle).to.eq(3)
            expect(res.body.longRestTime).to.eq(30)
            expect(res.body.cycleToLongRestTime).to.eq(2)
            expect(errors).to.be.null
            done()
          })
      })
    })

    it('it should not GET custum_config json with wrong id', (done) => {
      CustumConfig.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      }).then(() => {
        const configId = 'xxx'
        chai
          .request(app)
          .get(`/api/v1/custum_config/${configId}/show`)
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res).to.be.status(500)
            done()
          })
      })
    })
  })

  describe('POST api/v1/custum_config/create', () => {
    it('it should POST custum_config json', (done) => {
      const configParams = {
        uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      }

      chai
        .request(app)
        .post(`/api/v1/custum_config/create`)
        .set('Authorization', token)
        .send(configParams)
        .end((errors, res) => {
          expect(res).to.be.status(201)
          expect(res.body.workTime).to.eq(30)
          expect(res.body.restTime).to.eq(30)
          expect(res.body.cycle).to.eq(3)
          expect(res.body.longRestTime).to.eq(30)
          expect(res.body.cycleToLongRestTime).to.eq(2)
          expect(errors).to.be.null
          done()
        })
    })
  })

  describe('PATCH api/v1/custum_config/:id/update', () => {
    it('it should PATCH custum_config json with correct id', (done) => {
      CustumConfig.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      }).then((config) => {
        const configId = config._id
        chai
          .request(app)
          .patch(`/api/v1/custum_config/${configId}/update`)
          .set('Authorization', token)
          .send({
            workTime: 400,
            restTime: 400,
            cycle: 5,
            longRestTime: 500,
            cycleToLongRestTime: 3,
          })
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(res.body.workTime).to.eq(400)
            expect(res.body.restTime).to.eq(400)
            expect(res.body.cycle).to.eq(5)
            expect(res.body.longRestTime).to.eq(500)
            expect(res.body.cycleToLongRestTime).to.eq(3)
            expect(errors).to.be.null
            done()
          })
      })
    })

    it('it should not PATCH custum_config json with wrong id', (done) => {
      CustumConfig.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      }).then(() => {
        const configId = 'xxx'
        chai
          .request(app)
          .patch(`/api/v1/custum_config/${configId}/update`)
          .set('Authorization', token)
          .send({
            workTime: 400,
            restTime: 400,
            cycle: 5,
            longRestTime: 500,
            cycleToLongRestTime: 3,
          })
          .end((errors, res) => {
            expect(res).to.be.status(500)
            done()
          })
      })
    })
  })

  describe('DELETE api/v1/custum_config/:id/delete', () => {
    it('it should DELETE custum_config json with correct id', (done) => {
      CustumConfig.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      }).then((config) => {
        const configId = config._id
        chai
          .request(app)
          .delete(`/api/v1/custum_config/${configId}/delete`)
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res).to.be.status(204)
            done()
          })
      })
    })

    it('it should not DELETE custum_config json with wrong id', (done) => {
      CustumConfig.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        workTime: 30,
        restTime: 30,
        cycle: 3,
        longRestTime: 30,
        cycleToLongRestTime: 2,
      }).then(() => {
        const configId = 'xxx'
        chai
          .request(app)
          .delete(`/api/v1/custum_config/${configId}/delete`)
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res).to.be.status(500)
            done()
          })
      })
    })
  })

  describe('POST api/v1/custum_config/initialize', () => {
    it('it should create 5 custum_config data', (done) => {
      chai
        .request(app)
        .post(`/api/v1/custum_config/initialize`)
        .set('Authorization', token)
        .end((errors, res) => {
          expect(res).to.be.status(200)
          console.log(res.body)
          expect(res.body.length).to.eq(5)
          expect(res.body[0].workTime).to.eq(1500)
          expect(res.body[0].restTime).to.eq(30)
          expect(res.body[0].cycle).to.eq(8)
          expect(res.body[0].longRestTime).to.eq(600)
          expect(res.body[0].cycleToLongRestTime).to.eq(4)
          expect(errors).to.be.null
          done()
        })
    })
  })
})
