/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render } from '@testing-library/react'
import Container from './Container'
import { Provider } from 'react-redux'
import { store } from 'src/feature/store'
import Theme from 'src/assets/styles/Theme'
import {
  validateCycle,
  validateCycleToLongRestTime,
  validateTimerConfig,
} from 'src/lib/functions/validation'
import axios from 'axios'
import { initialState } from 'src/feature/slices/custumConfig'
import { userEvent } from '@storybook/testing-library'

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
  afterEach(() => {
    mockedValidateCycle.mockReset()
    mockedValidateTimerConfig.mockReset()
    mockedValidateCycleToLongRestTime.mockReset()
    mockedAxios.patch.mockReset()
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
    mockedAxios.create.mockReturnValueOnce(mockedAxios)
    mockedAxios.patch.mockResolvedValueOnce({
      data: initialState.custumConfig[0],
    })
    mockedValidateCycle.mockReturnValue('')
    mockedValidateTimerConfig.mockReturnValue('')
    mockedValidateCycleToLongRestTime.mockReturnValue('')

    const { getByText, getByLabelText, getByRole } = render(
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

    expect(workTime).toHaveValue(5)
    expect(restTime).toHaveValue(5)
    expect(cycle).toHaveValue(1)
    expect(longRestTime).toHaveValue(5)
    expect(cycleToLongRestTime).toHaveValue(1)

    // formの入力
    userEvent.type(workTime, '{backspace}25')
    userEvent.type(restTime, '{backspace}10')
    userEvent.type(cycle, '{backspace}5')
    userEvent.type(longRestTime, '{backspace}15')
    userEvent.type(cycleToLongRestTime, '{backspace}3')

    expect(workTime).toHaveValue(25)
    expect(restTime).toHaveValue(10)
    expect(cycle).toHaveValue(5)
    expect(longRestTime).toHaveValue(15)
    expect(cycleToLongRestTime).toHaveValue(3)

    // 入力情報の送信
    const btn = getByText('UPDATE')
    fireEvent.click(btn)
    expect(mockedValidateCycle).toBeCalledTimes(3)
    expect(mockedValidateCycleToLongRestTime).toBeCalledTimes(3)
    expect(mockedValidateTimerConfig).toBeCalledTimes(12)
    expect(mockedAxios.patch).toBeCalledWith('/v1/custum_config/0/update', {
      _id: '0',
      cycle: '5',
      cycleToLongRestTime: '3',
      longRestTime: '15',
      restTime: '10',
      workTime: '25',
    })

    // セレクターの変更
    const selector = getByRole('combobox')
    expect(selector).toHaveValue('0')
    userEvent.selectOptions(selector, '4')
    expect(selector).toHaveValue('4')
    expect(workTime).toHaveValue(5)
    expect(restTime).toHaveValue(5)
    expect(cycle).toHaveValue(1)
    expect(longRestTime).toHaveValue(5)
    expect(cycleToLongRestTime).toHaveValue(1)
  })
})
