import Achievement from '../../src/models/achievement'
import Task from '../../src/models/task'
import { describe, it, beforeEach, before } from 'mocha'
import { expect } from 'chai'
import '../../src/main'

beforeEach((done) => {
  Achievement.deleteMany({})
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

  it('it should save one Achievement with correct params', (done) => {
    const achievementParams = {
      uid: 'test uid',
      taskId: taskId,
      time: 10,
    }

    Achievement.create(achievementParams)
      .then(() => {
        Achievement.find({})
          .then((achievements) => {
            expect(achievements.length).to.eq(1)
            expect(achievements[0]).to.have.property('_id')
            expect(achievements[0]).to.have.property('uid')
            expect(achievements[0]).to.have.property('taskId')
            expect(achievements[0]).to.have.property('time')
            expect(achievements[0]).to.have.property('createdAt')
            expect(achievements[0].time).to.eq(10)
            expect(achievements[0].uid).to.eq('test uid')
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

  it('it should not save one Achievement without uid', (done) => {
    const achievementParams = {
      uid: null,
      taskId: taskId,
      time: 10,
    }

    Achievement.create(achievementParams)
      .then((achievement) => {
        console.log(achievement)
      })
      .catch((e) => {
        expect(e).to.have.property('message')
        done()
      })
  })

  it('it should not save one Achievement without taskId', (done) => {
    const achievementParams = {
      uid: 'test uid',
      taskId: null,
      time: 10,
    }

    Achievement.create(achievementParams)
      .then((achievement) => {
        console.log(achievement)
      })
      .catch((e) => {
        expect(e).to.have.property('message')
        done()
      })
  })

  it('it should not save one Achievement without time', (done) => {
    const achievementParams = {
      uid: 'test uid',
      taskId: taskId,
      time: null,
    }

    Achievement.create(achievementParams)
      .then((achievement) => {
        console.log(achievement)
      })
      .catch((e) => {
        expect(e).to.have.property('message')
        done()
      })
  })
})
