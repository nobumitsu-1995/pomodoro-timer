/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render } from '@testing-library/react'
import Container from './Container'
import { Provider } from 'react-redux'
import Theme from 'src/assets/styles/Theme'
import {
  validateCycle,
  validateCycleToLongRestTime,
  validateTimerConfig,
} from 'src/lib/functions/validation'
import axios from 'axios'
import { userEvent } from '@storybook/testing-library'
import { act } from 'react-test-renderer'
import { storeData } from 'src/mock/storeData'
import { Store, AnyAction } from '@reduxjs/toolkit'
import { StoreType } from 'src/feature/store'
import configureMockStore from 'redux-mock-store'

jest.mock('axios')
jest.mock('src/lib/functions/validation', () => ({
  validateCycle: jest.fn(),
  validateTimerConfig: jest.fn(),
  validateCycleToLongRestTime: jest.fn(),
}))

const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedValidateCycle = jest.mocked(validateCycle)
const mockedValidateCycleToLongRestTime = jest.mocked(
  validateCycleToLongRestTime
)
const mockedValidateTimerConfig = jest.mocked(validateTimerConfig)

describe('CustumConfig', () => {
  const mockStore = configureMockStore()
  const initialState = storeData
  let store: Store<StoreType, AnyAction>

  beforeEach(() => {
    store = mockStore(initialState) as Store<StoreType, AnyAction>
    mockedAxios.create.mockReturnValueOnce(mockedAxios)
    mockedAxios.patch.mockResolvedValueOnce({
      data: initialState.custumConfig.custumConfig[0],
    })
    mockedValidateCycle.mockReturnValue('')
    mockedValidateTimerConfig.mockReturnValue('')
    mockedValidateCycleToLongRestTime.mockReturnValue('')
  })

  afterEach(() => {
    mockedValidateCycle.mockReset()
    mockedValidateTimerConfig.mockReset()
    mockedValidateCycleToLongRestTime.mockReset()
    mockedAxios.patch.mockReset()
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
    test('formの入力', () => {
      const { getByLabelText } = render(
        <Provider store={store}>
          <Theme>
            <Container />
          </Theme>
        </Provider>
      )

      const workTime = getByLabelText('work time')
      const restTime = getByLabelText('rest time')
      const cycle = getByLabelText('cycle')
      const longRestTime = getByLabelText('long rest time')
      const cycleToLongRestTime = getByLabelText('Cycles to long rest periods')

      expect(workTime).toHaveValue(30)
      expect(restTime).toHaveValue(10)
      expect(cycle).toHaveValue(5)
      expect(longRestTime).toHaveValue(30)
      expect(cycleToLongRestTime).toHaveValue(3)

      act(() => {
        // formの入力
        userEvent.type(workTime, '{backspace}{backspace}25')
        userEvent.type(restTime, '{backspace}{backspace}10')
        userEvent.type(cycle, '{backspace}5')
        userEvent.type(longRestTime, '{backspace}{backspace}15')
        userEvent.type(cycleToLongRestTime, '{backspace}3')
      })

      expect(workTime).toHaveValue(25)
      expect(restTime).toHaveValue(10)
      expect(cycle).toHaveValue(5)
      expect(longRestTime).toHaveValue(15)
      expect(cycleToLongRestTime).toHaveValue(3)
    })

    test('selectorの変更', () => {
      const { getByRole } = render(
        <Provider store={store}>
          <Theme>
            <Container />
          </Theme>
        </Provider>
      )

      // セレクターの変更
      const selector = getByRole('combobox')
      expect(selector).toHaveValue('0')

      act(() => {
        userEvent.selectOptions(selector, '4')
      })

      expect(selector).toHaveValue('4')
    })

    test('入力情報の送信', () => {
      const { getByText } = render(
        <Provider store={store}>
          <Theme>
            <Container />
          </Theme>
        </Provider>
      )

      // 入力情報の送信
      const btn = getByText('UPDATE')

      act(() => {
        fireEvent.click(btn)
      })

      expect(mockedValidateCycle).toBeCalledTimes(1)
      expect(mockedValidateCycleToLongRestTime).toBeCalledTimes(1)
      expect(mockedValidateTimerConfig).toBeCalledTimes(3)
      expect(mockedAxios.patch).toBeCalledWith(
        '/v1/custum_config/testId/update',
        {
          _id: 'testId',
          cycle: 5,
          cycleToLongRestTime: 3,
          longRestTime: 30,
          restTime: 10,
          workTime: 30,
        }
      )
    })
  })
})
