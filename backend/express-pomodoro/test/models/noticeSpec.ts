import Notice from '../../src/models/notice'
import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import '../../src/main'

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

describe('Save Data of Notice Model', () => {
  it('it should save one Notice with correct params', (done) => {
    const noticeParams = {
      content: 'notice content test',
      title: 'title',
      publishedAt: new Date(),
    }

    Notice.create(noticeParams)
      .then(() => {
        Notice.find({})
          .then((result) => {
            expect(result.length).to.eq(1)
            expect(result[0]).to.have.property('_id')
            expect(result[0]).to.have.property('content')
            expect(result[0]).to.have.property('publishedAt')
            expect(result[0]).to.have.property('createdAt')
            expect(result[0].content).to.eq('notice content test')
            done()
          })
          .catch((e) => {
            console.log(e)
          })
      })
      .catch((e) => {
        console.log(e)
      })
  })

  it('it should not save one Notice without content', (done) => {
    const noticeParams = {
      content: '',
      title: 'title',
      publishedAt: new Date(),
    }

    Notice.create(noticeParams)
      .then((notice) => {
        console.log(notice)
      })
      .catch((e) => {
        expect(e).to.have.property('message')
        done()
      })
  })

  it('it should not save one Notice without publishedAt', (done) => {
    const noticeParams = {
      content: 'notice content test',
      title: 'title',
      publishedAt: '',
    }

    Notice.create(noticeParams)
      .then((notice) => {
        console.log(notice)
      })
      .catch((e) => {
        expect(e).to.have.property('message')
        done()
      })
  })
})
