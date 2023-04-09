import Task from '../../src/models/task'
import '../../src/main'

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

describe('Save Data of Task Model', () => {
  it('it should save one Task with correct params', (done) => {
    const taskParams = {
      uid: 'uid',
      title: 'test title',
    }

    Task.create(taskParams)
      .then(() => {
        Task.find({})
          .then((tasks) => {
            expect(tasks.length).toBe(1)
            expect(tasks[0]).toHaveProperty('_id')
            expect(tasks[0]).toHaveProperty('uid')
            expect(tasks[0]).toHaveProperty('title')
            expect(tasks[0]).toHaveProperty('createdAt')
            expect(tasks[0].title).toBe('test title')
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

  it('it should not save one Notice without uid', (done) => {
    const taskParams = {
      uid: '',
      title: 'test title',
    }

    Task.create(taskParams)
      .then((task) => {
        console.log(task)
      })
      .catch((e) => {
        expect(e).toHaveProperty('message')
        done()
      })
  })

  it('it should not save one Notice without title', (done) => {
    const taskParams = {
      uid: 'uid',
      title: '',
    }

    Task.create(taskParams)
      .then((task) => {
        console.log(task)
      })
      .catch((e) => {
        expect(e).toHaveProperty('message')
        done()
      })
  })
})
