/* eslint-disable react/react-in-jsx-scope */
import { userEvent } from '@storybook/testing-library'
import { act, fireEvent, render } from '@testing-library/react'
import axios from 'axios'
import { Provider } from 'react-redux'
import Theme from 'src/assets/styles/Theme'
import { store } from 'src/feature/store'
import Container from './Container'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const data = {
  title: 'testData',
  id: 'testId',
}

describe('TaskConfig', () => {
  afterEach(() => {
    mockedAxios.create.mockReset()
    mockedAxios.post.mockReset()
    mockedAxios.patch.mockReset()
    mockedAxios.delete.mockReset()
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

  test('正常系 タスクが作成できる', () => {
    mockedAxios.create.mockReturnValue(mockedAxios)
    mockedAxios.post.mockResolvedValueOnce({ data })

    const { getByText, getByRole } = render(
      <Provider store={store}>
        <Theme>
          <Container />
        </Theme>
      </Provider>
    )

    act(() => {
      const input = getByRole('textbox')
      userEvent.type(input, 'testData')
      const button = getByText('keyboard_arrow_right')
      fireEvent.click(button)
      expect(mockedAxios.post).toBeCalledWith('/v1/task/create', {
        title: 'testData',
      })
    })
  })

  test('正常系 タスクが更新できる', () => {
    mockedAxios.create.mockReturnValue(mockedAxios)
    mockedAxios.patch.mockResolvedValueOnce({ data })

    const { getAllByText, getByText, getByRole } = render(
      <Provider store={store}>
        <Theme>
          <Container />
        </Theme>
      </Provider>
    )

    act(() => {
      const editBtn = getAllByText('edit')
      fireEvent.click(editBtn[0])
      const input = getByRole('textbox')
      userEvent.type(input, 'updateData')
      const button = getByText('keyboard_arrow_right')
      fireEvent.click(button)
      expect(mockedAxios.patch).toBeCalledWith('/v1/task//update', {
        title: 'updateData',
      })
    })
  })

  test('正常系 タスクが削除できる', () => {
    mockedAxios.create.mockReturnValue(mockedAxios)
    mockedAxios.delete.mockResolvedValueOnce({})
    window.confirm = jest.fn(() => true)

    const { getAllByText } = render(
      <Provider store={store}>
        <Theme>
          <Container />
        </Theme>
      </Provider>
    )

    act(() => {
      const deleteBtn = getAllByText('delete')
      fireEvent.click(deleteBtn[0])
      expect(mockedAxios.delete).toBeCalledWith('/v1/task/0/delete')
    })
  })

  test('異常系 26文字でタスクが作成できない', () => {
    mockedAxios.create.mockReturnValue(mockedAxios)
    mockedAxios.post.mockResolvedValueOnce({ data })

    const { getByText, getByRole } = render(
      <Provider store={store}>
        <Theme>
          <Container />
        </Theme>
      </Provider>
    )

    act(() => {
      const input = getByRole('textbox')
      userEvent.type(input, 'あ'.repeat(26))
      const button = getByText('keyboard_arrow_right')
      fireEvent.click(button)
      expect(mockedAxios.post).not.toBeCalled()
    })
  })

  test('異常系 26文字でタスクが更新できない', () => {
    mockedAxios.create.mockReturnValue(mockedAxios)
    mockedAxios.patch.mockResolvedValueOnce({ data })

    const { getAllByText, getByText, getByRole } = render(
      <Provider store={store}>
        <Theme>
          <Container />
        </Theme>
      </Provider>
    )

    act(() => {
      const editBtn = getAllByText('edit')
      fireEvent.click(editBtn[0])
      const input = getByRole('textbox')
      userEvent.type(input, 'あ'.repeat(26))
      const button = getByText('keyboard_arrow_right')
      fireEvent.click(button)
      expect(mockedAxios.patch).not.toBeCalled()
    })
  })
})
