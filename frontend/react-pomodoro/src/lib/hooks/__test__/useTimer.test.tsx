import { renderHook } from '@testing-library/react'
import {
  setLeftTime,
  statusLongRest,
  statusRest,
  statusRunning,
  updateStatus,
} from 'src/feature/slices/timerStatus'
import { createAchievement } from 'src/lib/functions/createAchievement'
import { PlayFunction } from 'use-sound/dist/types'
import useTimer, { UseTimerProps } from '../useTimer'

jest.mock('src/feature/slices/timerStatus')
jest.mock('react-redux', () => ({
  useDispatch: () => mockedDispatch,
}))
jest.mock('src/lib/functions/createAchievement')

const mockedSetLeftTime = jest.mocked(setLeftTime)
const mockedDispatch = jest.fn()
const mockedPlayRestFinish = jest.fn()
const mockedPlayWorkFinish = jest.fn()
const mockedCreateAchievement = jest.mocked(createAchievement)
const mockedUpdateStatus = jest.mocked(updateStatus)
const mockedStatusRest = jest.mocked(statusRest)
const mockedStatusLongRest = jest.mocked(statusLongRest)
const mockedStatusRunning = jest.mocked(statusRunning)

const request: UseTimerProps = {
  playRestFinish: mockedPlayRestFinish as PlayFunction,
  playWorkFinish: mockedPlayWorkFinish as PlayFunction,
  cycle: 3,
  workTime: 25,
  restTime: 5,
  longRestTime: 10,
  cycleToLongRestTime: 2,
  leftTime: 1500,
  status: 'stop',
  endTime: 1111,
  taskId: 'taskId',
  token: 'token',
}

describe('useTimer', () => {
  beforeEach(() => {
    mockedDispatch.mockReset()
    mockedDispatch.mockReturnValue(jest.fn())
  })

  test('初期表示', () => {
    const { result } = renderHook((request) => useTimer(request), {
      initialProps: request,
    })
    mockedDispatch.mockReturnValue(jest.fn())

    expect(mockedSetLeftTime).toBeCalledWith(25)
    expect(result.current.time).toEqual({
      minutes: '25',
      seconds: '00',
    })
    expect(result.current.leftCycle).toEqual(3)
  })

  describe('running workTimeの終了時', () => {
    test('通常の休憩時間の場合', () => {
      const { result, rerender } = renderHook(
        (request) => useTimer(request as UseTimerProps),
        {
          initialProps: { ...request, status: 'running' },
        }
      )
      expect(mockedSetLeftTime).toBeCalledWith(25)
      expect(result.current.leftCycle).toEqual(3)
      expect(result.current.time).toEqual({
        minutes: '25',
        seconds: '00',
      })

      rerender({ ...request, status: 'running', leftTime: 0 })

      expect(mockedPlayWorkFinish).toBeCalled()
      expect(mockedCreateAchievement).toBeCalledWith('token', 'taskId', 75)
      expect(mockedUpdateStatus).toBeCalledWith('rest')
      expect(mockedStatusRest).toBeCalledWith(5)
      expect(result.current.leftCycle).toEqual(3)
      expect(result.current.time).toEqual({
        minutes: '00',
        seconds: '00',
      })
    })

    test('長い休憩時間の場合', () => {
      const { result, rerender } = renderHook(
        (request) => useTimer(request as UseTimerProps),
        {
          initialProps: {
            ...request,
            status: 'running',
            cycleToLongRestTime: 1,
          },
        }
      )
      expect(mockedSetLeftTime).toBeCalledWith(25)
      expect(result.current.leftCycle).toEqual(3)
      expect(result.current.time).toEqual({
        minutes: '25',
        seconds: '00',
      })

      rerender({
        ...request,
        status: 'running',
        cycleToLongRestTime: 1,
        leftTime: 0,
      })

      expect(mockedPlayWorkFinish).toBeCalled()
      expect(mockedCreateAchievement).toBeCalledWith('token', 'taskId', 75)
      expect(mockedUpdateStatus).toBeCalledWith('rest')
      expect(mockedStatusLongRest).toBeCalledWith(10)
      expect(result.current.leftCycle).toEqual(3)
      expect(result.current.time).toEqual({
        minutes: '00',
        seconds: '00',
      })
    })
  })

  describe('longRest 休憩時間の終了', () => {
    test('最後のサイクルではない場合', () => {
      const { result, rerender } = renderHook(
        (request) => useTimer(request as UseTimerProps),
        {
          initialProps: {
            ...request,
            status: 'longRest',
            leftTime: 600,
          },
        }
      )
      expect(mockedSetLeftTime).toBeCalledWith(25)
      expect(result.current.leftCycle).toEqual(3)
      expect(result.current.time).toEqual({
        minutes: '10',
        seconds: '00',
      })

      rerender({
        ...request,
        status: 'longRest',
        leftTime: 0,
      })

      expect(mockedPlayRestFinish).toBeCalled()
      expect(mockedStatusRunning).toBeCalledWith(25)
      expect(result.current.leftCycle).toEqual(2)
    })

    test('最後のサイクルの場合', () => {
      const { result, rerender } = renderHook(
        (request) => useTimer(request as UseTimerProps),
        {
          initialProps: {
            ...request,
            status: 'longRest',
            leftTime: 600,
            cycle: 1,
          },
        }
      )
      expect(mockedSetLeftTime).toBeCalledWith(25)
      expect(result.current.leftCycle).toEqual(1)
      expect(result.current.time).toEqual({
        minutes: '10',
        seconds: '00',
      })

      rerender({
        ...request,
        status: 'longRest',
        leftTime: 0,
        cycle: 1,
      })

      expect(mockedPlayRestFinish).toBeCalled()
      expect(mockedUpdateStatus).toBeCalledWith('stop')
      expect(mockedSetLeftTime).toBeCalledWith(25)
      expect(result.current.leftCycle).toEqual(1)
    })
  })

  describe('rest 休憩時間の終了', () => {
    test('最後のサイクルではない場合', () => {
      const { result, rerender } = renderHook(
        (request) => useTimer(request as UseTimerProps),
        {
          initialProps: {
            ...request,
            status: 'rest',
            leftTime: 600,
          },
        }
      )
      expect(mockedSetLeftTime).toBeCalledWith(25)
      expect(result.current.leftCycle).toEqual(3)
      expect(result.current.time).toEqual({
        minutes: '10',
        seconds: '00',
      })

      rerender({
        ...request,
        status: 'rest',
        leftTime: 0,
      })

      expect(mockedPlayRestFinish).toBeCalled()
      expect(mockedStatusRunning).toBeCalledWith(25)
      expect(result.current.leftCycle).toEqual(2)
    })

    test('最後のサイクルの場合', () => {
      const { result, rerender } = renderHook(
        (request) => useTimer(request as UseTimerProps),
        {
          initialProps: {
            ...request,
            status: 'rest',
            leftTime: 600,
            cycle: 1,
          },
        }
      )
      expect(mockedSetLeftTime).toBeCalledWith(25)
      expect(result.current.leftCycle).toEqual(1)
      expect(result.current.time).toEqual({
        minutes: '10',
        seconds: '00',
      })

      rerender({
        ...request,
        status: 'rest',
        leftTime: 0,
        cycle: 1,
      })

      expect(mockedPlayRestFinish).toBeCalled()
      expect(mockedUpdateStatus).toBeCalledWith('stop')
      expect(mockedSetLeftTime).toBeCalledWith(25)
      expect(result.current.leftCycle).toEqual(1)
    })
  })
})
