import chai, { expect } from 'chai'
import chaiHTTP from 'chai-http'
import app from '../../../../src/main'
import WorkTime from '../../../../src/models/workTime'
import Task from '../../../../src/models/task'
import { getToken } from '../../../../src/lib/functions/getToken'

chai.use(chaiHTTP)

beforeEach((done) => {
  WorkTime.deleteMany({})
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

describe('WorkTimeController', () => {
  let token = ''

  beforeEach(async () => {
    token = await getToken()
  })

  describe('GET api/v1/work_time', () => {
    it('it should GET all workTime json', (done) => {
      WorkTime.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      }).then(() => {
        chai
          .request(app)
          .get('/api/v1/work_time/')
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

  describe('GET api/v1/work_time/:id/show', () => {
    it('it should GET workTime json with correct id', (done) => {
      WorkTime.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      }).then((workTime) => {
        const workTimeId = workTime._id
        chai
          .request(app)
          .get(`/api/v1/work_time/${workTimeId}/show`)
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(res.body.workTime).to.eq(10)
            expect(errors).to.be.null
            done()
          })
      })
    })

    it('it should not GET workTime json with wrong id', (done) => {
      WorkTime.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      }).then(() => {
        const workTimeId = 'xxx'
        chai
          .request(app)
          .get(`/api/v1/work_time/${workTimeId}/show`)
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res).to.be.status(500)
            done()
          })
      })
    })
  })

  describe('POST api/v1/work_time/create', () => {
    it('it should POST workTime json', (done) => {
      const workTimeParams = {
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      }

      chai
        .request(app)
        .post(`/api/v1/work_time/create`)
        .set('Authorization', token)
        .send(workTimeParams)
        .end((errors, res) => {
          expect(res).to.be.status(201)
          expect(res.body.workTime).to.eq(10)
          expect(errors).to.be.null
          done()
        })
    })
  })

  describe('PATCH api/v1/workTime/:id/update', () => {
    it('it should PATCH workTime json with correct id', (done) => {
      WorkTime.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      }).then((workTime) => {
        const workTimeId = workTime._id
        chai
          .request(app)
          .patch(`/api/v1/work_time/${workTimeId}/update`)
          .set('Authorization', token)
          .send({
            workTime: 15,
          })
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(res.body.workTime).to.eq(15)
            expect(errors).to.be.null
            done()
          })
      })
    })

    it('it should not PATCH workTime json with wrong id', (done) => {
      WorkTime.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      }).then(() => {
        const workTimeId = 'xxx'
        chai
          .request(app)
          .patch(`/api/v1/work_time/${workTimeId}/update`)
          .set('Authorization', token)
          .send({
            workTime: 15,
          })
          .end((errors, res) => {
            expect(res).to.be.status(500)
            done()
          })
      })
    })
  })

  describe('DELETE api/v1/work_time/:id/delete', () => {
    it('it should DELETE workTime json with correct id', (done) => {
      WorkTime.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      }).then((workTime) => {
        const workTimeId = workTime._id
        chai
          .request(app)
          .delete(`/api/v1/work_time/${workTimeId}/delete`)
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res).to.be.status(204)
            done()
          })
      })
    })

    it('it should not DELETE workTime json with wrong id', (done) => {
      WorkTime.create({
        uid: `${process.env.CLIENT_ID}@clients`,
        taskId: taskId,
        workTime: 10,
      }).then(() => {
        const workTimeId = 'xxx'
        chai
          .request(app)
          .delete(`/api/v1/work_time/${workTimeId}/delete`)
          .set('Authorization', token)
          .end((errors, res) => {
            expect(res).to.be.status(500)
            done()
          })
      })
    })
  })
})
