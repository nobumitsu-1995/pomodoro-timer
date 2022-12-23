import chai, { expect } from 'chai'
import chaiHTTP from 'chai-http'
import app from '../../../../src/main'
import Task from '../../../../src/models/task'

chai.use(chaiHTTP)

beforeEach((done) => {
  Task.deleteMany({})
    .then(() => {
      done()
    })
    .catch((e) => {
      console.log(e)
      done()
    })
})

describe('TaskController', () => {
  describe('GET api/v1/task', () => {
    it('it should GET all task json', (done) => {
      Task.create({
        uid: process.env.SUB_TEST,
        title: 'test title',
      }).then(() => {
        chai
          .request(app)
          .get('/api/v1/task/')
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(res.body.length).to.eq(1)
            expect(errors).to.be.null
            done()
          })
      })
    })
  })

  describe('GET api/v1/task/:id/show', () => {
    it('it should GET task json with correct id', (done) => {
      Task.create({
        uid: process.env.SUB_TEST,
        title: 'test title',
      }).then((task) => {
        const taskId = task._id
        chai
          .request(app)
          .get(`/api/v1/task/${taskId}/show`)
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(res.body.title).to.eq('test title')
            expect(errors).to.be.null
            done()
          })
      })
    })

    it('it should not GET task json with wrong id', (done) => {
      Task.create({
        uid: process.env.SUB_TEST,
        title: 'test title',
      }).then(() => {
        const taskId = 'xxx'
        chai
          .request(app)
          .get(`/api/v1/task/${taskId}/show`)
          .end((errors, res) => {
            expect(res).to.be.status(500)
            done()
          })
      })
    })
  })

  describe('POST api/v1/task/create', () => {
    it('it should POST task json', (done) => {
      const taskParams = {
        uid: process.env.SUB_TEST,
        title: 'test title',
      }

      chai
        .request(app)
        .post(`/api/v1/task/create`)
        .send(taskParams)
        .end((errors, res) => {
          expect(res).to.be.status(201)
          expect(res.body.title).to.eq('test title')
          expect(errors).to.be.null
          done()
        })
    })
  })

  describe('PATCH api/v1/task/:id/update', () => {
    it('it should PATCH task json with correct id', (done) => {
      Task.create({
        uid: process.env.SUB_TEST,
        title: 'test title',
      }).then((task) => {
        const taskId = task._id
        chai
          .request(app)
          .patch(`/api/v1/task/${taskId}/update`)
          .send({
            title: 'updated title',
          })
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(res.body.title).to.eq('updated title')
            expect(errors).to.be.null
            done()
          })
      })
    })

    it('it should not PATCH task json with wrong id', (done) => {
      Task.create({
        uid: process.env.SUB_TEST,
        title: 'test title',
      }).then(() => {
        const taskId = 'xxx'
        chai
          .request(app)
          .patch(`/api/v1/task/${taskId}/update`)
          .send({
            title: 'updated title',
          })
          .end((errors, res) => {
            expect(res).to.be.status(500)
            done()
          })
      })
    })
  })

  describe('DELETE api/v1/task/:id/delete', () => {
    it('it should DELETE task json with correct id', (done) => {
      Task.create({
        uid: process.env.SUB_TEST,
        title: 'test title',
      }).then((task) => {
        const taskId = task._id
        chai
          .request(app)
          .delete(`/api/v1/task/${taskId}/delete`)
          .end((errors, res) => {
            expect(res).to.be.status(204)
            done()
          })
      })
    })

    it('it should not DELETE task json with wrong id', (done) => {
      Task.create({
        uid: process.env.SUB_TEST,
        title: 'test title',
      }).then(() => {
        const taskId = 'xxx'
        chai
          .request(app)
          .delete(`/api/v1/task/${taskId}/delete`)
          .end((errors, res) => {
            expect(res).to.be.status(500)
            done()
          })
      })
    })
  })
})