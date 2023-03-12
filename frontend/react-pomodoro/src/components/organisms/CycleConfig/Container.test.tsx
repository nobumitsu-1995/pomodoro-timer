/* eslint-disable react/react-in-jsx-scope */
import { userEvent } from '@storybook/testing-library'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import Theme from 'src/assets/styles/Theme'
import { store } from 'src/feature/store'
import { validateCycle } from 'src/lib/functions/validation'
import Container from './Container'

jest.mock('src/lib/functions/validation')
const mockedValidateCycle = jest.mocked(validateCycle)

describe('CycleConfig', () => {
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

    userEvent.type(cycle, '0')
    expect(cycle).toHaveValue(30)
  })
})
