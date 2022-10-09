import chai, { expect } from 'chai'
import chaiHTTP from 'chai-http'
import app from '../../../../src/main'
import Notice from '../../../../src/models/notice'
import * as noticesController from '../../../../src/controllers/api/v1/noticesController'

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
    it('it should GET all notices json', (done) => {})
  })
})
