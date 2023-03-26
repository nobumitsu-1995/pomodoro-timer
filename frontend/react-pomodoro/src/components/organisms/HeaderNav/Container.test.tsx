/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { act } from 'react-test-renderer'
import Theme from 'src/assets/styles/Theme'
import { ModalProvider } from 'src/lib/functions/ModalContext'
import ModalBody from '../Modal/ModalBody'
import Container from './Container'
import configureMockStore from 'redux-mock-store'
import { storeData } from 'src/mock/storeData'
import { Store, AnyAction } from '@reduxjs/toolkit'
import { StoreType } from 'src/feature/store'

describe('HeaderNav', () => {
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

  test('コンポーネント機能の使用テスト', async () => {
    const { getAllByRole, getByText } = render(
      <Provider store={store}>
        <ModalProvider>
          <Theme>
            <Container />
            <ModalBody />
          </Theme>
        </ModalProvider>
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
