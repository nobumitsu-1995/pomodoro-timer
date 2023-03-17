import {
  achievementsReducer,
  initialState,
  addAchievement,
  setAchievements,
  updateAchievement,
  deleteAchievement,
} from '../achievements'

describe('Reducer custumConfig', () => {
  test('initial stateが返る', () => {
    expect(achievementsReducer(undefined, { type: undefined })).toEqual(
      initialState
    )
  })

  test('setAchievements', () => {
    const data = [
      {
        _id: 'testId',
        uid: 'testUid',
        time: 100,
        taskId: 'testTaskId',
      },
    ]
    expect(achievementsReducer(initialState, setAchievements(data))).toEqual({
      achievements: data,
      length: 1,
    })
  })

  test('addAchievement', () => {
    const data = {
      _id: 'testId',
      uid: 'testUid',
      time: 100,
      taskId: 'testTaskId',
    }

    expect(achievementsReducer(initialState, addAchievement(data))).toEqual({
      achievements: [...initialState.achievements, data],
      length: 2,
    })
  })

  test('updateAchievement', () => {
    const data = {
      _id: '',
      uid: 'testUid',
      time: 200,
      taskId: 'updatedAchievement',
    }

    expect(achievementsReducer(initialState, updateAchievement(data))).toEqual({
      achievements: [data],
      length: 1,
    })
  })

  test('deleteAchievement', () => {
    expect(achievementsReducer(initialState, deleteAchievement(''))).toEqual({
      achievements: [],
      length: 0,
    })
  })
})
