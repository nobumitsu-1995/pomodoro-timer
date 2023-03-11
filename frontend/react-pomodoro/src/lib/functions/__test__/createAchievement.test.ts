import { AxiosAdapter } from 'axios'
import { createAchievement } from '../createAchievement'
import mockAdapter from 'src/mock/mockAdapter'

jest.mock('src/mock/mockAdapter', () => jest.fn())

const axiosMockAdapter = mockAdapter as unknown as jest.Mock<
  ReturnType<AxiosAdapter>,
  Parameters<AxiosAdapter>
>

describe('createAchievement', () => {
  beforeEach(() => {
    axiosMockAdapter.mockClear()
  })

  test('正常系 achievementデータ作成成功', async () => {
    const response = {
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
      data: {
        _id: 'id',
        taskId: 'taskId',
        time: 10,
      },
    }

    axiosMockAdapter.mockResolvedValue(response)

    const result = await createAchievement('testToken', 'testId', 10)
    const callArgs = axiosMockAdapter.mock.calls[0]

    expect(result).toEqual({
      _id: 'id',
      taskId: 'taskId',
      time: 10,
    })
    expect(callArgs[0].url).toBe('/v1/achievement/create')
    expect(callArgs[0].headers).toHaveProperty(
      'Content-Type',
      'application/json'
    )
    expect(callArgs[0].data).toBe('{"taskId":"testId","time":10}')
  })
})
