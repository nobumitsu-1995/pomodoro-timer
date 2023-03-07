import {
  initialState,
  muteVolume,
  soundConfigReducer,
  unMuteVolume,
  updateVolume,
} from '../soundConfig'

describe('Reducer soundConfig', () => {
  test('initial stateが返る', () => {
    expect(soundConfigReducer(undefined, { type: undefined })).toEqual(
      initialState
    )
  })

  test('updateVolume', () => {
    expect(soundConfigReducer(initialState, updateVolume(10))).toEqual({
      volume: 10,
      casheVolume: 10,
    })
  })

  test('muteVolume', () => {
    expect(soundConfigReducer(initialState, muteVolume())).toEqual({
      volume: 0,
      casheVolume: 50,
    })
  })

  test('unmuteVolume', () => {
    expect(
      soundConfigReducer(
        {
          volume: 0,
          casheVolume: 50,
        },
        unMuteVolume()
      )
    ).toEqual({
      volume: 50,
      casheVolume: 50,
    })
  })
})
