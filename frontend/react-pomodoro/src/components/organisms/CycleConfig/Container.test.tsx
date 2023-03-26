/* eslint-disable react/react-in-jsx-scope */
import { userEvent } from '@storybook/testing-library'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { act } from 'react-test-renderer'
import Theme from 'src/assets/styles/Theme'
import { validateCycle } from 'src/lib/functions/validation'
import Container from './Container'
import configureMockStore from 'redux-mock-store'
import { storeData } from 'src/mock/storeData'
import { Store, AnyAction } from '@reduxjs/toolkit'
import { StoreType } from 'src/feature/store'

jest.mock('src/lib/functions/validation')
const mockedValidateCycle = jest.mocked(validateCycle)

describe('CycleConfig', () => {
  const mockStore = configureMockStore()
  const initialState = storeData
  let store: Store<StoreType, AnyAction>

  beforeEach(() => {
    store = mockStore(initialState) as Store<StoreType, AnyAction>
  })

  afterEach(() => {
    mockedValidateCycle.mockReset()
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
    mockedValidateCycle.mockReturnValue('')

    const { getByRole } = render(
      <Provider store={store}>
        <Theme>
          <Container />
        </Theme>
      </Provider>
    )

    const cycle = getByRole('spinbutton')
    expect(cycle).toHaveValue(3)

    act(() => {
      userEvent.type(cycle, '0')
    })

    expect(cycle).toHaveValue(30)
  })
})
