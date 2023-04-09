import WorkTime from '../../src/models/workTime'
import Task from '../../src/models/task'
import '../../src/main'

describe('Save Data of WorkTime Model', () => {
  let taskId = '' as unknown

  beforeAll(async () => {
    const taskParams = {
      uid: 'uid',
      title: 'test title',
    }

    const task = await Task.create(taskParams)
    taskId = task._id
  })

  beforeEach(async () => {
    await WorkTime.deleteMany({})
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
            expect(workTimes.length).toBe(1)
            expect(workTimes[0]).toHaveProperty('_id')
            expect(workTimes[0]).toHaveProperty('uid')
            expect(workTimes[0]).toHaveProperty('taskId')
            expect(workTimes[0]).toHaveProperty('workTime')
            expect(workTimes[0]).toHaveProperty('createdAt')
            expect(workTimes[0].workTime).toBe(10)
            expect(workTimes[0].uid).toBe('test uid')
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
        expect(e).toHaveProperty('message')
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
        expect(e).toHaveProperty('message')
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
        expect(e).toHaveProperty('message')
        done()
      })
  })
})
