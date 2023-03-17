import { TimerStatus } from 'src/feature/slices/timerStatus'

export const storeData = {
  timerConfig: {
    _id: 'testId',
    workTime: 25,
    restTime: 5,
    cycle: 3,
    longRestTime: 10,
    cycleToLongRestTime: 2,
  },
  timerStatus: {
    status: 'stop' as TimerStatus,
    endTime: new Date('2023-01-01').getTime(),
    leftTime: 60 * 25,
  },
  soundConfig: {
    volume: 50,
    casheVolume: 50,
  },
  notices: {
    notices: [
      {
        _id: 'testId',
        title: 'test title',
        content: 'test content',
        publishedAt: '2023-01-01',
        updatedAt: '2023-01-01',
        createdAt: '2023-01-01',
      },
    ],
    length: 1,
  },
  custumConfig: {
    custumConfig: [
      {
        _id: 'testId',
        workTime: 30,
        restTime: 10,
        cycle: 5,
        longRestTime: 30,
        cycleToLongRestTime: 3,
      },
    ],
    length: 1,
  },
  tasks: {
    tasks: [
      {
        _id: 'testId',
        uid: 'testUid',
        title: 'test title',
      },
    ],
    currentTask: {
      _id: 'testId',
      uid: 'testUid',
      title: 'test title',
    },
    length: 1,
  },
  achievements: {
    achievements: [
      {
        _id: 'testId',
        uid: 'testUid',
        time: 10,
        taskId: 'testTaskId',
      },
    ],
    length: 1,
  },
  token: {
    token: 'testToken',
  },
}
