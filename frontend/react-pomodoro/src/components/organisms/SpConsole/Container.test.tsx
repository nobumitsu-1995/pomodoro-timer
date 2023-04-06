/* eslint-disable react/react-in-jsx-scope */
import configureMockStore from 'redux-mock-store'
import { Store, AnyAction } from '@reduxjs/toolkit'
import { storeData } from 'src/mock/storeData'
import { StoreType } from 'src/feature/store'
import { Provider } from 'react-redux'
import { act, fireEvent, render } from '@testing-library/react'
import Theme from 'src/assets/styles/Theme'
import Container from './Container'

describe('SpConsole', () => {
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

  test('正常系 アコーディオンの開閉', async () => {
    const { getAllByRole, getByText } = render(
      <Provider store={store}>
        <Theme>
          <Container />
        </Theme>
      </Provider>
    )

    const buttons = getAllByRole('button')

    act(() => {
      fireEvent.click(buttons[0])
    })

    const notices2 = getByText('Notices')
    expect(notices2).toBeTruthy()
  })
})
