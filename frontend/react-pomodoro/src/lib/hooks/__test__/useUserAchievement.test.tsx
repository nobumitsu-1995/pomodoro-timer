import { useAuth0 } from '@auth0/auth0-react'
import { renderHook, waitFor } from '@testing-library/react'
import { AxiosAdapter } from 'axios'
import { setAchievements } from 'src/feature/slices/achievements'
import {
  returnSample,
  sampleData,
} from 'src/lib/functions/__test__/totalingAchievement.test'
import mockAdapter from 'src/mock/mockAdapter'
import useUserAchievement from '../useUserAchievement'

jest.mock('react-redux', () => ({
  useDispatch: () => mockedDispatch,
}))
jest.mock('@auth0/auth0-react')
jest.mock('src/feature/slices/achievements')
jest.mock('src/mock/mockAdapter', () => jest.fn())

const mockedDispatch = jest.fn()
const mockedUseAuth0 = jest.mocked(useAuth0)
const mockedSetAchievements = jest.mocked(setAchievements)
const axiosMockAdapter = mockAdapter as unknown as jest.Mock<
  ReturnType<AxiosAdapter>,
  Parameters<AxiosAdapter>
>

const response = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: sampleData,
}

const request = {
  token: 'testToken',
}

describe('useUserAchievement', () => {
  beforeEach(() => {
    mockedDispatch.mockReturnValue(jest.fn())
    mockedUseAuth0.mockReturnValue({
      isAuthenticated: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)
  })

  afterEach(() => {
    mockedDispatch.mockReset()
    axiosMockAdapter.mockReset()
    mockedUseAuth0.mockReset()
    mockedSetAchievements.mockReset()
  })

  test('正常系 ', async () => {
    axiosMockAdapter.mockResolvedValue(response)
    const { result } = renderHook((request) => useUserAchievement(request), {
      initialProps: request,
    })
    const callArgs = axiosMockAdapter.mock.calls[0]

    await waitFor(() => {
      expect(callArgs[0].url).toBe('/v1/achievement')
      expect(mockedSetAchievements).toBeCalledWith(sampleData)
      expect(result.current).toEqual({
        achievements: sampleData,
        totalAchievements: returnSample,
        isLoading: false,
      })
    })
  })

  test('異常系', async () => {
    axiosMockAdapter.mockRejectedValue(new Error())
    const { result } = renderHook((request) => useUserAchievement(request), {
      initialProps: request,
    })
    const callArgs = axiosMockAdapter.mock.calls[0]

    await waitFor(() => {
      expect(callArgs[0].url).toBe('/v1/achievement')
      expect(mockedSetAchievements).not.toBeCalled()
      expect(result.current).toEqual({
        achievements: [],
        totalAchievements: [],
        isLoading: false,
      })
    })
  })
})
