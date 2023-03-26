/* eslint-disable react/react-in-jsx-scope */
import { userEvent } from '@storybook/testing-library'
import { act, fireEvent, render } from '@testing-library/react'
import axios from 'axios'
import { Provider } from 'react-redux'
import Theme from 'src/assets/styles/Theme'
import Container from './Container'
import configureMockStore from 'redux-mock-store'
import { storeData } from 'src/mock/storeData'
import { Store, AnyAction } from '@reduxjs/toolkit'
import { StoreType } from 'src/feature/store'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const data = {
  title: 'testData',
  id: 'testId',
}

describe('TaskConfig', () => {
  const mockStore = configureMockStore()
  const initialState = storeData
  let store: Store<StoreType, AnyAction>

  beforeEach(() => {
    store = mockStore(initialState) as Store<StoreType, AnyAction>
  })

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

    const input = getByRole('textbox')
    const button = getByText('keyboard_arrow_right')

    act(() => {
      userEvent.type(input, 'testData')
      fireEvent.click(button)
    })

    expect(mockedAxios.post).toBeCalledWith('/v1/task/create', {
      title: 'testData',
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

    const editBtn = getAllByText('edit')
    const input = getByRole('textbox')
    const button = getByText('keyboard_arrow_right')

    act(() => {
      fireEvent.click(editBtn[0])
      userEvent.type(input, 'updateData')
      fireEvent.click(button)
    })

    expect(mockedAxios.patch).toBeCalledWith('/v1/task//update', {
      title: 'updateData',
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

    const deleteBtn = getAllByText('delete')

    act(() => {
      fireEvent.click(deleteBtn[0])
    })

    expect(mockedAxios.delete).toBeCalledWith('/v1/task/testId/delete')
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

    const input = getByRole('textbox')
    const button = getByText('keyboard_arrow_right')

    act(() => {
      userEvent.type(input, 'あ'.repeat(26))
      fireEvent.click(button)
    })

    expect(mockedAxios.post).not.toBeCalled()
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

    const editBtn = getAllByText('edit')
    const input = getByRole('textbox')
    const button = getByText('keyboard_arrow_right')

    act(() => {
      fireEvent.click(editBtn[0])
      userEvent.type(input, 'あ'.repeat(26))
      fireEvent.click(button)
    })

    expect(mockedAxios.patch).not.toBeCalled()
  })
})
