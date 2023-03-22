import { initialState, noticesReducer, setNotices } from '../notices'

describe('Reducer notices', () => {
  test('initial stateが返る', () => {
    expect(noticesReducer(undefined, { type: undefined })).toEqual(initialState)
  })

  test('setNotices', () => {
    const datas = [
      {
        _id: '0',
        title: 'hoge',
        content: 'hoge',
        publishedAt: '',
        updatedAt: '',
        createdAt: '',
      },
      {
        _id: '1',
        title: 'hoge',
        content: 'hoge',
        publishedAt: '',
        updatedAt: '',
        createdAt: '',
      },
    ]
    expect(noticesReducer(initialState, setNotices(datas))).toEqual({
      notices: datas,
      length: 2,
    })
  })
})
