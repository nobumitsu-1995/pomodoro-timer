/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import Theme from 'src/assets/styles/Theme'
import { store } from 'src/feature/store'
import Container from './Container'

describe('TimeConfig', () => {
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
    const { getAllByText, getByText } = render(
      <Provider store={store}>
        <Theme>
          <Container />
        </Theme>
      </Provider>
    )

    const workTimeUp = getAllByText('arrow_drop_up')[0]
    const restTimeUp = getAllByText('arrow_drop_up')[1]
    const workTimeDown = getAllByText('arrow_drop_down')[0]
    const restTimeDown = getAllByText('arrow_drop_down')[1]

    fireEvent.click(workTimeUp)
    fireEvent.click(workTimeUp)
    expect(getByText('35')).toBeTruthy()
    fireEvent.click(restTimeUp)
    fireEvent.click(restTimeUp)
    expect(getByText('15')).toBeTruthy()
    fireEvent.click(workTimeDown)
    fireEvent.click(workTimeDown)
    fireEvent.click(workTimeDown)
    expect(getByText('20')).toBeTruthy()
    fireEvent.click(restTimeDown)
    fireEvent.click(restTimeDown)
    fireEvent.click(restTimeDown)
    expect(getByText('5')).toBeTruthy()
    expect(getByText('too small')).toBeTruthy()
  })
})
