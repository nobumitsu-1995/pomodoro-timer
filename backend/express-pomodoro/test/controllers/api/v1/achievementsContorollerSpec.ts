import chai, { expect } from 'chai'
import chaiHTTP from 'chai-http'
import { getToken } from '../../../../src/lib/functions/getToken'
import app from '../../../../src/main'
import Achievement from '../../../../src/models/achievement'
import Task from '../../../../src/models/task'

chai.use(chaiHTTP)

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

let taskId = '' as unknown

before((done) => {
  const taskParams = {
    uid: 'uid',
    title: 'test title',
  }

  Task.create(taskParams).then((task) => {
    taskId = task._id
    done()
  })
})

describe('AchievementController', () => {
  let token = ''

  beforeEach(async () => {
    token = await getToken()
  })

  describe('GET api/v1/achievement', () => {
    it('it should GET all Achievement json', (done) => {
      Achievement.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }).then(() => {
        chai
          .request(app)
          .get('/api/v1/achievement/')
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

  describe('GET api/v1/achievement/:id/show', () => {
    it('it should GET achievement json with correct id', (done) => {
      Achievement.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }).then((achievement) => {
        const achievementId = achievement._id
        chai
          .request(app)
          .get(`/api/v1/achievement/${achievementId}/show`)
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(res.body.time).to.eq(10)
            expect(errors).to.be.null
            done()
          })
      })
    })

    it('it should not GET achievement json with wrong id', (done) => {
      Achievement.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }).then(() => {
        const achievementId = 'xxx'
        chai
          .request(app)
          .get(`/api/v1/achievement/${achievementId}/show`)
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res).to.be.status(500)
            done()
          })
      })
    })
  })

  describe('POST api/v1/achievement/create', () => {
    it('it should POST achievement json', (done) => {
      const achievementParams = {
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }

      chai
        .request(app)
        .post(`/api/v1/achievement/create`)
        .set('Authorization', token)
        .send(achievementParams)
        .end((errors, res) => {
          expect(res).to.be.status(201)
          expect(res.body.time).to.eq(10)
          expect(errors).to.be.null
          done()
        })
    })
  })

  describe('PATCH api/v1/achievement/:id/update', () => {
    it('it should PATCH achievement json with correct id', (done) => {
      Achievement.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }).then((achievement) => {
        const achievementId = achievement._id
        chai
          .request(app)
          .patch(`/api/v1/achievement/${achievementId}/update`)
          .set('Authorization', token)
          .send({
            time: 15,
          })
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(res.body.time).to.eq(15)
            expect(errors).to.be.null
            done()
          })
      })
    })

    it('it should not PATCH achievement json with wrong id', (done) => {
      Achievement.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }).then(() => {
        const achievementId = 'xxx'
        chai
          .request(app)
          .patch(`/api/v1/achievement/${achievementId}/update`)
          .set('Authorization', token)
          .send({
            time: 15,
          })
          .end((errors, res) => {
            expect(res).to.be.status(500)
            done()
          })
      })
    })
  })

  describe('DELETE api/v1/achievement/:id/delete', () => {
    it('it should DELETE achievement json with correct id', (done) => {
      Achievement.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }).then((achievement) => {
        const achievementId = achievement._id
        chai
          .request(app)
          .delete(`/api/v1/achievement/${achievementId}/delete`)
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res).to.be.status(204)
            done()
          })
      })
    })

    it('it should not DELETE achievement json with wrong id', (done) => {
      Achievement.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        time: 10,
      }).then(() => {
        const achievementId = 'xxx'
        chai
          .request(app)
          .delete(`/api/v1/achievement/${achievementId}/delete`)
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res).to.be.status(500)
            done()
          })
      })
    })
  })
})
