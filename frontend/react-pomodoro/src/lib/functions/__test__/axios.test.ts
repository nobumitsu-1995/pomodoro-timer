import axios from 'axios'
import { api } from 'src/lib/functions/axios'

jest.mock('axios')

describe('axios', () => {
  test('api', () => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi, @typescript-eslint/no-explicit-any
    ;(axios.create as any).mockImplementation(async () => '')
    api('testToken')
    expect(axios.create).toBeCalledWith({
      baseURL: 'http://localhost:80/api',
      headers: { Authorization: 'testToken' },
      withCredentials: true,
    })
  })
})
