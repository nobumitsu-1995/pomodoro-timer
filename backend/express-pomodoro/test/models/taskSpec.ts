import Task from '../../src/models/task'
import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
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
            expect(tasks.length).to.eq(1)
            expect(tasks[0]).to.have.property('_id')
            expect(tasks[0]).to.have.property('uid')
            expect(tasks[0]).to.have.property('title')
            expect(tasks[0]).to.have.property('createdAt')
            expect(tasks[0].title).to.eq('test title')
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
        expect(e).to.have.property('message')
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
        expect(e).to.have.property('message')
        done()
      })
  })
})
