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

  test('コンポーネント機能の使用テスト', () => {
    const data = {
      title: 'testData',
      id: 'testId',
    }
    mockedAxios.create.mockReturnValue(mockedAxios)
    mockedAxios.post.mockResolvedValueOnce({ data })
    mockedAxios.patch.mockResolvedValueOnce({ data })
    mockedAxios.delete.mockResolvedValueOnce({})
    window.confirm = jest.fn(() => true)

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

    act(() => {
      const deleteBtn = getByText('delete')
      fireEvent.click(deleteBtn)
      expect(mockedAxios.delete).toBeCalledWith('/v1/task/0/delete')
    })

    act(() => {
      const editBtn = getByText('edit')
      fireEvent.click(editBtn)
      const input = getByRole('textbox')
      userEvent.type(input, 'updateData')
      const button = getByText('keyboard_arrow_right')
      fireEvent.click(button)
      expect(mockedAxios.patch).toBeCalledWith('/v1/task//update', {
        title: 'testDataupdateData',
      })
    })
  })
})
