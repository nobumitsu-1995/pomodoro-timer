import Achievement from '../../src/models/achievement'
import Task from '../../src/models/task'
import '../../src/main'

describe('Save Data of Achievement Model', () => {
  let taskId = '' as unknown

  beforeEach(async () => {
    await Achievement.deleteMany({})
  })

  beforeAll(async () => {
    const taskParams = {
      uid: 'uid',
      title: 'test title',
    }

    const task = await Task.create(taskParams)
    taskId = task._id
  })

  test('it should save one Achievement with correct params', async () => {
    const achievementParams = {
      uid: 'test uid',
      taskId: taskId,
      time: 10,
    }

    await Achievement.create(achievementParams)
    const achievements = await Achievement.find({})

    expect(achievements.length).toBe(1)
    expect(achievements[0].time).toBe(10)
    expect(achievements[0].uid).toBe('test uid')
  })

  it('it should not save one Achievement without uid', async () => {
    const achievementParams = {
      uid: null,
      taskId: taskId,
      time: 10,
    }

    const res = await Achievement.create(achievementParams)

    expect(res).toHaveProperty('message')
  })

  it('it should not save one Achievement without taskId', async () => {
    const achievementParams = {
      uid: 'test uid',
      taskId: null,
      time: 10,
    }

    const res = await Achievement.create(achievementParams)

    expect(res).toHaveProperty('message')
  })

  it('it should not save one Achievement without time', async () => {
    const achievementParams = {
      uid: 'test uid',
      taskId: taskId,
      time: null,
    }

    const res = await Achievement.create(achievementParams)
    expect(res).toHaveProperty('message')
  })
})
