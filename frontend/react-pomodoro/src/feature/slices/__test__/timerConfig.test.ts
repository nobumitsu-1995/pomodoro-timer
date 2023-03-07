import {
  decrementRestTime,
  decrementWorkTime,
  incrementRestTime,
  incrementWorkTime,
  initialState,
  setCustumTimerConfig,
  timerConfigReducer,
  updateCycle,
} from '../timerConfig'

describe('Reducer timerConfig', () => {
  test('initial stateが返る', () => {
    expect(timerConfigReducer(undefined, { type: undefined })).toEqual(
      initialState
    )
  })

  test('updateCycle', () => {
    expect(timerConfigReducer(initialState, updateCycle(1))).toEqual({
      ...initialState,
      cycle: 1,
    })
  })

  test('incrementWorkTime', () => {
    expect(timerConfigReducer(initialState, incrementWorkTime())).toEqual({
      ...initialState,
      workTime: 1800,
    })
  })

  test('decrementWorkTime', () => {
    expect(timerConfigReducer(initialState, decrementWorkTime())).toEqual({
      ...initialState,
      workTime: 1200,
    })
  })

  describe('incrementRestTime', () => {
    test('3300の時', () => {
      expect(
        timerConfigReducer(
          { ...initialState, restTime: 3300 },
          incrementRestTime()
        )
      ).toEqual({
        ...initialState,
        restTime: 3600,
      })
    })

    test('3600の時', () => {
      expect(
        timerConfigReducer(
          { ...initialState, restTime: 3600 },
          incrementRestTime()
        )
      ).toEqual({
        ...initialState,
        restTime: 3600,
      })
    })
  })

  describe('decrementRestTime', () => {
    test('600の時', () => {
      expect(
        timerConfigReducer(
          { ...initialState, restTime: 600 },
          decrementRestTime()
        )
      ).toEqual({
        ...initialState,
        restTime: 300,
      })
    })

    test('300の時', () => {
      expect(
        timerConfigReducer(
          { ...initialState, restTime: 300 },
          decrementRestTime()
        )
      ).toEqual({
        ...initialState,
        restTime: 300,
      })
    })
  })

  test('setCustumTimerConfig', () => {
    const data = {
      _id: '',
      cycle: 5,
      workTime: 30,
      restTime: 30,
      longRestTime: 40,
      cycleToLongRestTime: 3,
    }
    expect(
      timerConfigReducer(initialState, setCustumTimerConfig(data))
    ).toEqual({
      cycle: 5,
      workTime: 1800,
      restTime: 1800,
      longRestTime: 2400,
      cycleToLongRestTime: 3,
    })
  })
})
