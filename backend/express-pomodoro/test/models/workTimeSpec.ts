import WorkTime from '../../src/models/workTime'
import Task from '../../src/models/task'
import { describe, it, beforeEach, before } from 'mocha'
import { expect } from 'chai'
import '../../src/main'

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

describe('Save Data of WorkTime Model', () => {
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

  it('it should save one WorkTime with correct params', (done) => {
    const workTimeParams = {
      uid: 'test uid',
      taskId: taskId,
      workTime: 10,
    }

    WorkTime.create(workTimeParams)
      .then(() => {
        WorkTime.find({})
          .then((workTimes) => {
            expect(workTimes.length).to.eq(1)
            expect(workTimes[0]).to.have.property('_id')
            expect(workTimes[0]).to.have.property('uid')
            expect(workTimes[0]).to.have.property('taskId')
            expect(workTimes[0]).to.have.property('workTime')
            expect(workTimes[0]).to.have.property('createdAt')
            expect(workTimes[0].workTime).to.eq(10)
            expect(workTimes[0].uid).to.eq('test uid')
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

  it('it should not save one WorkTime without uid', (done) => {
    const workTimeParams = {
      uid: '',
      taskId: taskId,
      workTime: 10,
    }

    WorkTime.create(workTimeParams)
      .then((workTime) => {
        console.log(workTime)
      })
      .catch((e) => {
        expect(e).to.have.property('message')
        done()
      })
  })

  it('it should not save one WorkTime without taskId', (done) => {
    const workTimeParams = {
      uid: 'test uid',
      taskId: null,
      workTime: 10,
    }

    WorkTime.create(workTimeParams)
      .then((workTime) => {
        console.log(workTime)
      })
      .catch((e) => {
        expect(e).to.have.property('message')
        done()
      })
  })

  it('it should not save one WorkTime without workTime', (done) => {
    const workTimeParams = {
      uid: 'test uid',
      taskId: taskId,
      workTime: null,
    }

    WorkTime.create(workTimeParams)
      .then((workTime) => {
        console.log(workTime)
      })
      .catch((e) => {
        expect(e).to.have.property('message')
        done()
      })
  })
})
