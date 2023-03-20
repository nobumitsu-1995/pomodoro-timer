/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import Theme from 'src/assets/styles/Theme'
import { store } from 'src/feature/store'
import Container from './Container'

describe('SoundConfig', () => {
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
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <Theme>
          <Container />
        </Theme>
      </Provider>
    )

    const range = getByRole('slider')
    expect(range).toHaveValue('50')

    const test = getByText('audiotrack')
    fireEvent.click(test)
    expect(test).toBeTruthy()

    const volume = getByText('volume_up')
    fireEvent.click(volume)
    expect(range).toHaveValue('0')
  })
})
