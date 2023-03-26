/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { act } from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'
import Theme from 'src/assets/styles/Theme'
import Container from './Container'
import { storeData } from 'src/mock/storeData'
import { Store, AnyAction } from '@reduxjs/toolkit'
import { StoreType } from 'src/feature/store'
import {
  decrementRestTime,
  decrementWorkTime,
  incrementRestTime,
  incrementWorkTime,
} from 'src/feature/slices/timerConfig'

describe('TimeConfig', () => {
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

  describe('コンポーネント機能の使用テスト', () => {
    describe('workTime', () => {
      test('up', () => {
        const { getAllByText } = render(
          <Provider store={store}>
            <Theme>
              <Container />
            </Theme>
          </Provider>
        )

        const workTimeUp = getAllByText('arrow_drop_up')[0]

        act(() => {
          fireEvent.click(workTimeUp)
        })

        expect(store.getActions()).toEqual([incrementWorkTime()])
      })

      test('down', () => {
        const { getAllByText } = render(
          <Provider store={store}>
            <Theme>
              <Container />
            </Theme>
          </Provider>
        )

        const workTimeDown = getAllByText('arrow_drop_down')[0]

        act(() => {
          fireEvent.click(workTimeDown)
        })

        expect(store.getActions()).toEqual([decrementWorkTime()])
      })
    })

    describe('restTime', () => {
      test('up', () => {
        const { getAllByText } = render(
          <Provider store={store}>
            <Theme>
              <Container />
            </Theme>
          </Provider>
        )

        const restTimeUp = getAllByText('arrow_drop_up')[1]

        act(() => {
          fireEvent.click(restTimeUp)
        })

        expect(store.getActions()).toEqual([incrementRestTime()])
      })

      test('down', () => {
        store = mockStore({
          ...initialState,
          timerConfig: { ...initialState.timerConfig, restTime: 600 },
        }) as Store<StoreType, AnyAction>

        const { getAllByText } = render(
          <Provider store={store}>
            <Theme>
              <Container />
            </Theme>
          </Provider>
        )

        const restTimeDown = getAllByText('arrow_drop_down')[1]

        act(() => {
          fireEvent.click(restTimeDown)
        })

        expect(store.getActions()).toEqual([decrementRestTime()])
      })
    })
  })
})
