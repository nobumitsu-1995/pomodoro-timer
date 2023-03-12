/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import Theme from 'src/assets/styles/Theme'
import { store } from 'src/feature/store'
import { ModalProvider } from 'src/lib/functions/ModalContext'
import ModalBody from '../Modal/ModalBody'
import Container from './Container'

describe('HeaderNav', () => {
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
    fireEvent.click(buttons[0])
    const notices2 = getByText('Notices')
    expect(notices2).toBeTruthy()
  })
})
