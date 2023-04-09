import Notice from '../../src/models/notice'
import '../../src/main'

describe('Save Data of Notice Model', () => {
  beforeEach(async () => {
    await Notice.deleteMany({})
  })

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
            expect(result.length).toBe(1)
            expect(result[0]).toHaveProperty('_id')
            expect(result[0]).toHaveProperty('content')
            expect(result[0]).toHaveProperty('publishedAt')
            expect(result[0]).toHaveProperty('createdAt')
            expect(result[0].content).toBe('notice content test')
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
        expect(e).toHaveProperty('message')
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
        expect(e).toHaveProperty('message')
        done()
      })
  })
})
