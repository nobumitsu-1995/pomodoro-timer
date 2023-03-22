import {
  addTask,
  deleteTask,
  initialState,
  setCurrentTask,
  setTasks,
  tasksReducer,
  updateTask,
} from '../tasks'

describe('first', () => {
  test('initial stateが返る', () => {
    expect(tasksReducer(undefined, { type: undefined })).toEqual(initialState)
  })

  test('setTasks', () => {
    const data = [
      {
        _id: '0',
        uid: 'hoge',
        title: 'fuga',
      },
      {
        _id: '1',
        uid: 'hoge',
        title: 'fuga',
      },
    ]
    expect(tasksReducer(initialState, setTasks(data))).toEqual({
      tasks: data,
      currentTask: {
        _id: '',
        uid: '',
        title: '',
      },
      length: 2,
    })
  })

  test('addTask', () => {
    const data = {
      _id: '1',
      uid: 'hoge',
      title: 'fuga',
    }
    expect(tasksReducer(initialState, addTask(data))).toEqual({
      tasks: [...initialState.tasks, data],
      currentTask: {
        _id: '',
        uid: '',
        title: '',
      },
      length: 2,
    })
  })

  test('updateTask', () => {
    const data = {
      _id: '0',
      uid: 'hoge',
      title: 'fuga',
    }
    expect(tasksReducer(initialState, updateTask(data))).toEqual({
      tasks: [data],
      currentTask: {
        _id: '',
        uid: '',
        title: '',
      },
      length: 1,
    })
  })

  test('deleteTask', () => {
    expect(tasksReducer(initialState, deleteTask('0'))).toEqual({
      tasks: [],
      currentTask: {
        _id: '',
        uid: '',
        title: '',
      },
      length: 0,
    })
  })

  test('setCurrentTask', () => {
    const data = {
      _id: '0',
      uid: 'hoge',
      title: 'fuga',
    }

    expect(tasksReducer(initialState, setCurrentTask(data))).toEqual({
      tasks: initialState.tasks,
      currentTask: data,
      length: 1,
    })
  })
})
