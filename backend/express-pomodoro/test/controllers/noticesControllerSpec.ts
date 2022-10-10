import chai, { expect } from 'chai'
import chaiHTTP from 'chai-http'
import app from '../../src/main'
import Notice from '../../src/models/notice'
import * as noticesController from '../../src/controllers/noticesController'

chai.use(chaiHTTP)

beforeEach((done) => {
  Notice.deleteMany({})
    .then(() => {
      done()
    })
    .catch((e) => {
      console.log(e)
      done()
    })
})

describe('noticesController', () => {
  describe('GET /notices', () => {
    it('it should GET all notices', (done) => {
      Notice.create({
        content: 'notice content test',
        publishedAt: new Date(),
      }).then(() => {
        chai
          .request(app)
          .get('/notices')
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(errors).to.be.null
            done()
          })
      })
    })
  })

  describe('GET /notices/:id/show', () => {
    it('it should GET notice by ID', (done) => {
      Notice.create({
        content: 'notice content test',
        publishedAt: new Date(),
      }).then((notice) => {
        const noticeId = notice._id
        chai
          .request(app)
          .get(`/notices/${noticeId}/show`)
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(errors).to.be.null
            done()
          })
      })
    })

    it('it should not GET notice by wrong ID', (done) => {
      Notice.create({
        content: 'notice content test',
        publishedAt: new Date(),
      }).then(() => {
        const noticeId = ''
        chai
          .request(app)
          .get(`/notices/${noticeId}/show`)
          .end((errors, res) => {
            expect(res).to.be.status(404)
            expect(errors).to.be.null
            done()
          })
      })
    })
  })

  describe('GET /notices/new', () => {
    it('it should render new page', (done) => {
      chai
        .request(app)
        .get('/notices/new')
        .end((errors, res) => {
          expect(res).to.be.status(200)
          expect(errors).to.be.null
          done()
        })
    })
  })

  describe('POST /notices/create', () => {
    it('it should POST notice with correct params', (done) => {
      const noticeParams = {
        content: 'notice content test',
        publishedAt: new Date(),
      }

      chai
        .request(app)
        .post('/notices/create')
        .send(noticeParams)
        .end((errors, res) => {
          expect(res).to.be.status(201)
          expect(errors).to.be.null
          done()
        })
    })

    it('it should not POST notice without content', (done) => {
      const noticeParams = {
        content: '',
        publishedAt: new Date(),
      }

      chai
        .request(app)
        .post('/notices/create')
        .send(noticeParams)
        .end((errors, res) => {
          expect(res).to.be.status(404)
          expect(errors).to.be.null
          done()
        })
    })

    it('it should not POST notice without publishedAt', (done) => {
      const noticeParams = {
        content: 'notice content test',
        publishedAt: '',
      }

      chai
        .request(app)
        .post('/notices/create')
        .send(noticeParams)
        .end((errors, res) => {
          expect(res).to.be.status(404)
          expect(errors).to.be.null
          done()
        })
    })
  })

  describe('GET /notices/:id/edit', () => {
    it('it should render edit page with ID', (done) => {
      Notice.create({
        content: 'notice content test',
        publishedAt: new Date(),
      }).then((notice) => {
        const noticeId = notice._id
        chai
          .request(app)
          .get(`/notices/${noticeId}/edit`)
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(errors).to.be.null
            done()
          })
      })
    })

    it('it should not render edit page with wrong ID', (done) => {
      Notice.create({
        content: 'notice content test',
        publishedAt: new Date(),
      }).then(() => {
        const noticeId = ''
        chai
          .request(app)
          .get(`/notices/${noticeId}/edit`)
          .end((errors, res) => {
            expect(res).to.be.status(404)
            expect(errors).to.be.null
            done()
          })
      })
    })
  })

  describe('PATCH /notices/:id/update', () => {
    it('it should PATCH notice by ID', (done) => {
      Notice.create({
        content: 'notice content test',
        publishedAt: new Date(),
      }).then((notice) => {
        const noticeId = notice._id
        chai
          .request(app)
          .patch(`/notices/${noticeId}/update`)
          .send({
            content: 'updated content',
            publishedAt: new Date(),
          })
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(errors).to.be.null
            done()
          })
      })
    })

    it('it should not PATCH notice by wrong ID', (done) => {
      Notice.create({
        content: 'notice content test',
        publishedAt: new Date(),
      }).then(() => {
        const noticeId = ''
        chai
          .request(app)
          .patch(`/notices/${noticeId}/update`)
          .send({
            content: 'updated content',
          })
          .end((errors, res) => {
            expect(res).to.be.status(404)
            expect(errors).to.be.null
            done()
          })
      })
    })

    it('it should not PATCH notice without content', (done) => {
      Notice.create({
        content: 'notice content test',
        publishedAt: new Date(),
      }).then((notice) => {
        const noticeId = notice._id
        chai
          .request(app)
          .patch(`/notices/${noticeId}/update`)
          .send({
            content: '',
          })
          .end((errors, res) => {
            expect(res).to.be.status(404)
            expect(errors).to.be.null
            done()
          })
      })
    })

    it('it should not PATCH notice without publishedAt', (done) => {
      Notice.create({
        content: 'notice content test',
        publishedAt: new Date(),
      }).then((notice) => {
        const noticeId = notice._id
        chai
          .request(app)
          .patch(`/notices/${noticeId}/update`)
          .end((errors, res) => {
            expect(res).to.be.status(404)
            expect(errors).to.be.null
            done()
          })
      })
    })
  })

  describe('DELETE /notices/:id/delete', () => {
    it('it should DELETE notice by ID', (done) => {
      Notice.create({
        content: 'notice content test',
        publishedAt: new Date(),
      })
        .then((notice) => {
          const noticeId = notice._id
          chai
            .request(app)
            .delete(`/notices/${noticeId}/delete`)
            .end((errors, res) => {
              expect(res).to.be.status(200)
              expect(errors).to.be.null
              done()
            })
        })
        .catch((e) => {
          console.log(e)
        })
    })

    it('it should not DELETE notice by wrong ID', (done) => {
      Notice.create({
        content: 'notice content test',
        publishedAt: new Date(),
      }).then(() => {
        const noticeId = ''
        chai
          .request(app)
          .delete(`/notices/${noticeId}/delete`)
          .end((errors, res) => {
            expect(res).to.be.status(404)
            expect(errors).to.be.null
            done()
          })
      })
    })
  })

  describe('function getNoticeParams', () => {
    it('return notice', () => {
      const body = {
        content: 'test',
        publishedAt: new Date(),
      }

      expect(noticesController.getNoticeParams(body)).to.deep.includes({
        content: 'test',
      })
    })
  })
})