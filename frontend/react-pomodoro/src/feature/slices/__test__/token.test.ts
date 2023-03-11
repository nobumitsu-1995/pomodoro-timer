import { initialState, setToken, tokenReducer } from '../token'

describe('Reducer token', () => {
  test('initial stateが返る', () => {
    expect(tokenReducer(undefined, { type: undefined })).toEqual(initialState)
  })

  test('setToken', () => {
    expect(tokenReducer(initialState, setToken('testToken'))).toEqual({
      token: 'testToken',
    })
  })
})
