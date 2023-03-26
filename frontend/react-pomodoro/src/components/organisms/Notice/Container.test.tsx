/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { act } from 'react-test-renderer'
import Theme from 'src/assets/styles/Theme'
import Container from './Container'
import configureMockStore from 'redux-mock-store'
import { storeData } from 'src/mock/storeData'
import { Store, AnyAction } from '@reduxjs/toolkit'
import { StoreType } from 'src/feature/store'

describe('Notice', () => {
  const mockStore = configureMockStore()
  const initialState = storeData
  let store: Store<StoreType, AnyAction>

  beforeEach(() => {
    store = mockStore(initialState) as Store<StoreType, AnyAction>
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

  test('コンポーネント機能の使用テスト', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Theme>
          <Container />
        </Theme>
      </Provider>
    )

    const link = getByText('test title')
    expect(link).toBeTruthy()

    act(() => {
      fireEvent.click(link)
    })

    const button = getByText('Back')
    expect(button).toBeTruthy()
  })
})
