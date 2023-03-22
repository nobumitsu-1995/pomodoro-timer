import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCustumConfigs } from 'src/feature/slices/custumConfig'
import { setCurrentTask, setTasks } from 'src/feature/slices/tasks'
import { setToken } from 'src/feature/slices/token'
import { api } from '../functions/axios'

type Props = {
  token: string
}

/** ユーザーデータの取得に関するHooks */
const useUserData = ({ token }: Props) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()

  // Auth0認証後トークンを発行、Reduxに保存
  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently()
      await dispatch(setToken(token))
    }
    isAuthenticated && getToken()
  }, [isAuthenticated])

  // トークン取得後、ユーザー固有の情報をAPIから取得
  useEffect(() => {
    if (!isAuthenticated || !token) return

    // ユーザーのカスタムコンフィグ情報を取得
    api(token)
      .get('/v1/custum_config')
      .then((res) => {
        if (res.data.length === 0) {
          return api(token)
            .post('/v1/custum_config/initialize')
            .then((res) => {
              return dispatch(setCustumConfigs(res.data))
            })
            .catch((e) => {
              console.error(e)
            })
        }
        dispatch(setCustumConfigs(res.data))
      })
      .catch((e) => {
        console.error(e)
      })

    // ユーザーのタスク一覧を取得
    api(token)
      .get('/v1/task')
      .then((res) => {
        dispatch(setTasks(res.data))
        dispatch(setCurrentTask(res.data[0] || ''))
      })
      .catch((e) => {
        console.error(e)
      })
  }, [token])

  return { isAuthenticated }
}

export default useUserData
