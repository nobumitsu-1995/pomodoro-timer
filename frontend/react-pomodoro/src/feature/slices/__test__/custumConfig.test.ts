import {
  custumConfigReducer,
  initialState,
  setCustumConfig,
  setCustumConfigs,
  updateCustumConfig,
} from '../custumConfig'

describe('Reducer custumConfig', () => {
  test('initial stateが返る', () => {
    expect(custumConfigReducer(undefined, { type: undefined })).toEqual(
      initialState
    )
  })

  test('setCustumConfigs', () => {
    const data = [
      {
        _id: 'testId',
        workTime: 10,
        restTime: 10,
        cycle: 5,
        longRestTime: 10,
        cycleToLongRestTime: 3,
      },
    ]
    expect(custumConfigReducer(initialState, setCustumConfigs(data))).toEqual({
      custumConfig: data,
      length: 1,
    })
  })

  test('setCustumConfig', () => {
    const data = {
      _id: 'testId',
      workTime: 10,
      restTime: 10,
      cycle: 5,
      longRestTime: 10,
      cycleToLongRestTime: 3,
    }

    expect(custumConfigReducer(initialState, setCustumConfig(data))).toEqual({
      custumConfig: [...initialState.custumConfig, data],
      length: 6,
    })
  })

  test('updateCustumConfig', () => {
    const _data = {
      _id: '4',
      workTime: 20,
      restTime: 20,
      cycle: 10,
      longRestTime: 30,
      cycleToLongRestTime: 2,
    }

    expect(
      custumConfigReducer(initialState, updateCustumConfig(_data))
    ).toEqual({
      custumConfig: [...initialState.custumConfig.slice(0, 4), _data],
      length: 5,
    })
  })
})
