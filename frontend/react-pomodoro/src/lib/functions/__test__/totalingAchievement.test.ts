import { AchievementType } from 'src/lib/types/modelType'
import { totalingAchievement } from '../totalingAchievement'

export const sampleData: AchievementType[] = [
  {
    _id: 'id1',
    uid: 'uid',
    time: 100,
    taskId: {
      _id: 'taskId1',
      uid: 'uid',
      title: 'title1',
    },
  },
  {
    _id: 'id2',
    uid: 'uid',
    time: 200,
    taskId: {
      _id: 'taskId1',
      uid: 'uid',
      title: 'title1',
    },
  },
  {
    _id: 'id3',
    uid: 'uid',
    time: 300,
    taskId: {
      _id: 'taskId1',
      uid: 'uid',
      title: 'title1',
    },
  },
  {
    _id: 'id4',
    uid: 'uid',
    time: 100,
    taskId: {
      _id: 'taskId2',
      uid: 'uid',
      title: 'title2',
    },
  },
  {
    _id: 'id5',
    uid: 'uid',
    time: 200,
    taskId: {
      _id: 'taskId3',
      uid: 'uid',
      title: 'title3',
    },
  },
]

export const returnSample: AchievementType[] = [
  {
    _id: 'id1',
    uid: 'uid',
    time: 600,
    taskId: {
      _id: 'taskId1',
      uid: 'uid',
      title: 'title1',
    },
  },
  {
    _id: 'id4',
    uid: 'uid',
    time: 100,
    taskId: {
      _id: 'taskId2',
      uid: 'uid',
      title: 'title2',
    },
  },
  {
    _id: 'id5',
    uid: 'uid',
    time: 200,
    taskId: {
      _id: 'taskId3',
      uid: 'uid',
      title: 'title3',
    },
  },
]

describe('totalingAchievement', () => {
  test('正常に値が返る', () => {
    const expected = totalingAchievement(sampleData)
    expect(expected).toEqual(returnSample)
  })
})
