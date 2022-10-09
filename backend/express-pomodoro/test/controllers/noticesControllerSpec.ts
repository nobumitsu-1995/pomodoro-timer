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
    it('it should GET all notices', (done) => {})
  })

  describe('GET /notices/:id/show', () => {
    it('it should GET notice by ID', (done) => {})

    it('it should not GET notice by wrong ID', (done) => {})
  })

  describe('GET /notices/new', () => {
    it('it should render new page', (done) => {})
  })

  describe('POST /notices/:id/create', () => {
    it('it should POST notice with correct params', (done) => {})

    it('it should not POST notice without content', (done) => {})

    it('it should not POST notice without publishedAt', (done) => {})
  })

  describe('GET /notices/:id/edit', () => {
    it('it should render edit page with ID', (done) => {})

    it('it should not render edit page with wrong ID', (done) => {})
  })

  describe('PATCH /notices/:id/update', () => {
    it('it should PATCH notice by ID', (done) => {})

    it('it should not PATCH notice by wrong ID', (done) => {})

    it('it should not PATCH notice without content', (done) => {})

    it('it should not PATCH notice without publishedAt', (done) => {})
  })

  describe('DELETE /notices/:id/delete', () => {
    it('it should DELETE notice by ID', (done) => {})

    it('it should not DELETE notice by wrong ID', (done) => {})
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
