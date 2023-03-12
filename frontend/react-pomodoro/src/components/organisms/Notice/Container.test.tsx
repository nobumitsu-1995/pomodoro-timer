/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import Theme from 'src/assets/styles/Theme'
import { store } from 'src/feature/store'
import Container from './Container'

describe('Notice', () => {
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

    const link = getByText('title')
    expect(link).toBeTruthy()
    fireEvent.click(link)
    const button = getByText('Back')
    expect(button).toBeTruthy()
    fireEvent.click(button)
  })
})
