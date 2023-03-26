import {
  initialState,
  setEndTime,
  setLeftTime,
  statusLongRest,
  statusRest,
  statusRunning,
  timerStatusReducer,
  updateStatus,
} from '../timerStatus'

describe('Reducer timerStatus', () => {
  beforeAll(() =>
    // 現在時刻をモック化
    jest.useFakeTimers().setSystemTime(new Date(1672574403000))
  )

  afterAll(() => {
    // 現在時刻のモック化を解除
    jest.useRealTimers()
  })

  test('initial stateが返る', () => {
    expect(timerStatusReducer(undefined, { type: undefined })).toEqual(
      initialState
    )
  })

  test('updateStatus', () => {
    expect(timerStatusReducer(initialState, updateStatus('longRest'))).toEqual({
      ...initialState,
      status: 'longRest',
    })
  })

  test('setLeftTime', () => {
    expect(timerStatusReducer(initialState, setLeftTime(3000))).toEqual({
      ...initialState,
      leftTime: 3000,
    })
  })

  test('setEndTime', () => {
    expect(timerStatusReducer(initialState, setEndTime(3))).toEqual({
      ...initialState,
      endTime: 1672574406000,
    })
  })

  test('statusRunning', () => {
    expect(timerStatusReducer(initialState, statusRunning(3))).toEqual({
      ...initialState,
      leftTime: 3,
      status: 'running',
      endTime: 1672574406000,
    })
  })

  test('statusRest', () => {
    expect(timerStatusReducer(initialState, statusRest(3))).toEqual({
      ...initialState,
      leftTime: 3,
      status: 'rest',
      endTime: 1672574406000,
    })
  })

  test('statusLongRest', () => {
    expect(timerStatusReducer(initialState, statusLongRest(3))).toEqual({
      ...initialState,
      leftTime: 3,
      status: 'longRest',
      endTime: 1672574406000,
    })
  })
})
