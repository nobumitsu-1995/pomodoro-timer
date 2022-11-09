import chai, { expect } from 'chai'
import chaiHTTP from 'chai-http'
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

describe('noticesController', () => {
  describe('GET api/v1/custum_config', () => {
    it('it should GET all custum_config json', (done) => {
      CustumConfig.create({
        uid: process.env.SUB_TEST,
        workTime: 100,
        restTime: 100,
        cycle: 3,
        longRestTime: 300,
        cycleToLongRestTime: 2,
      }).then(() => {
        chai
          .request(app)
          .get('/api/v1/custum_config/')
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
        uid: process.env.SUB_TEST,
        workTime: 100,
        restTime: 100,
        cycle: 3,
        longRestTime: 300,
        cycleToLongRestTime: 2,
      }).then((config) => {
        const configId = config._id
        chai
          .request(app)
          .get(`/api/v1/custum_config/${configId}/show`)
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(res.body.workTime).to.eq(100)
            expect(res.body.restTime).to.eq(100)
            expect(res.body.cycle).to.eq(3)
            expect(res.body.longRestTime).to.eq(300)
            expect(res.body.cycleToLongRestTime).to.eq(2)
            expect(errors).to.be.null
            done()
          })
      })
    })

    it('it should not GET custum_config json with wrong id', (done) => {
      CustumConfig.create({
        uid: process.env.SUB_TEST,
        workTime: 100,
        restTime: 100,
        cycle: 3,
        longRestTime: 300,
        cycleToLongRestTime: 2,
      }).then(() => {
        const configId = 'xxx'
        chai
          .request(app)
          .get(`/api/v1/custum_config/${configId}/show`)
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
        uid: process.env.SUB_TEST,
        workTime: 100,
        restTime: 100,
        cycle: 3,
        longRestTime: 300,
        cycleToLongRestTime: 2,
      }

      chai
        .request(app)
        .post(`/api/v1/custum_config/create`)
        .send(configParams)
        .end((errors, res) => {
          expect(res).to.be.status(201)
          expect(res.body.workTime).to.eq(100)
          expect(res.body.restTime).to.eq(100)
          expect(res.body.cycle).to.eq(3)
          expect(res.body.longRestTime).to.eq(300)
          expect(res.body.cycleToLongRestTime).to.eq(2)
          expect(errors).to.be.null
          done()
        })
    })
  })

  describe('PATCH api/v1/custum_config/:id/update', () => {
    it('it should PATCH custum_config json with correct id', (done) => {
      CustumConfig.create({
        uid: process.env.SUB_TEST,
        workTime: 100,
        restTime: 100,
        cycle: 3,
        longRestTime: 300,
        cycleToLongRestTime: 2,
      }).then((config) => {
        const configId = config._id
        chai
          .request(app)
          .patch(`/api/v1/custum_config/${configId}/update`)
          .send({
            workTime: 200,
            restTime: 200,
            cycle: 5,
            longRestTime: 500,
            cycleToLongRestTime: 3,
          })
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(res.body.workTime).to.eq(200)
            expect(res.body.restTime).to.eq(200)
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
        uid: process.env.SUB_TEST,
        workTime: 100,
        restTime: 100,
        cycle: 3,
        longRestTime: 300,
        cycleToLongRestTime: 2,
      }).then(() => {
        const configId = 'xxx'
        chai
          .request(app)
          .patch(`/api/v1/custum_config/${configId}/update`)
          .send({
            workTime: 200,
            restTime: 200,
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
        uid: process.env.SUB_TEST,
        workTime: 100,
        restTime: 100,
        cycle: 3,
        longRestTime: 300,
        cycleToLongRestTime: 2,
      }).then((config) => {
        const configId = config._id
        chai
          .request(app)
          .delete(`/api/v1/custum_config/${configId}/delete`)
          .end((errors, res) => {
            expect(res).to.be.status(204)
            done()
          })
      })
    })

    it('it should not DELETE custum_config json with wrong id', (done) => {
      CustumConfig.create({
        uid: process.env.SUB_TEST,
        workTime: 100,
        restTime: 100,
        cycle: 3,
        longRestTime: 300,
        cycleToLongRestTime: 2,
      }).then(() => {
        const configId = 'xxx'
        chai
          .request(app)
          .delete(`/api/v1/custum_config/${configId}/delete`)
          .end((errors, res) => {
            expect(res).to.be.status(500)
            done()
          })
      })
    })
  })
})
