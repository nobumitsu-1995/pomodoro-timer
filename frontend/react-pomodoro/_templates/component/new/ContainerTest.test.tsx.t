---
to: "<%= atomic === 'organisms' ? `src/components/${atomic}/${name}/Container.test.tsx` : null %>"
---
/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-test-renderer'
import Container from './Container'
import Theme from 'src/assets/styles/Theme'
import axios from 'axios'

import { Provider } from 'react-redux'
import { Store, AnyAction } from '@reduxjs/toolkit'
import { storeData } from 'src/mock/storeData'
import { StoreType } from 'src/feature/store'
import configureMockStore from 'redux-mock-store'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('<%=name%>', () => {
  const mockStore = configureMockStore()
  const initialState = storeData
  let store: Store<StoreType, AnyAction>

  beforeEach(() => {
    store = mockStore(initialState) as Store<StoreType, AnyAction>
    mockedAxios.create.mockReturnValueOnce(mockedAxios)
    mockedAxios.get.mockResolvedValueOnce({
      data: initialState.sample,
    })
  })

  afterEach(() => {
    mockedAxios.get.mockReset()
    mockedAxios.create.mockReset()
  })

  test('snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Theme>
          <Container />
        </Theme>
      </Provider>
    ).asFragment()
    expect(tree).toMatchSnapshot()
  })

  describe('コンポーネント機能の使用テスト', () => {
    test('ボタンのクリック', () => {
      const { getByText } = render(
        <Provider store={store}>
          <Theme>
            <Container />
          </Theme>
        </Provider>
      )

      const btn = getByText('+')
      const count = getByText('0')

      act(() => {
        fireEvent.click(btn)
      })

      expect(count).toHaveTextContent('1')
    })
  })
})