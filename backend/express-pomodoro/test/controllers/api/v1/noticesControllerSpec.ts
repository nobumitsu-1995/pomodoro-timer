import chai, { expect } from 'chai'
import chaiHTTP from 'chai-http'
import app from '../../../../src/main'
import Notice from '../../../../src/models/notice'

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
  describe('GET api/v1/notices', () => {
    it('it should GET all notices json', (done) => {
      Notice.create({
        content: 'notice content test',
        title: 'title',
        publishedAt: new Date(),
      }).then(() => {
        chai
          .request(app)
          .get('/api/v1/notices')
          .end((errors, res) => {
            expect(res).to.be.status(200)
            expect(res.body.length).to.eq(1)
            expect(errors).to.be.null
            done()
          })
      })
    })
  })
})
