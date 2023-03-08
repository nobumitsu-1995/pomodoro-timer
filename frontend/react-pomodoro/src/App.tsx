import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Theme from './assets/styles/Theme'
import { ModalBody } from './components/organisms'
import { Header, TimerBlock, UserBlock } from './components/templates'
import { api } from './lib/functions/axios'
import { ModalProvider } from './lib/functions/ModalContext'
import { useSelector } from './feature/store'
import { setNotices } from './feature/slices/notices'
import { setToken } from './feature/slices/token'
import { tokenGetSelector } from './feature/selectors/token'
import { setCustumConfigs } from './feature/slices/custumConfig'
import { setCurrentTask, setTasks } from './feature/slices/tasks'

const App: React.FC = () => {
  // Auth0認証後に受け取るトークン
  const token = useSelector(tokenGetSelector)
  const dispatch = useDispatch()
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    api()
      .get('/v1/notices')
      .then((res) => {
        dispatch(setNotices(res.data))
      })
  }, [])

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

  return (
    <Theme>
      <ModalProvider>
        <Header />
        <StyledMain>
          <TimerBlock />
          {isAuthenticated && <UserBlock />}
          <ModalBody />
        </StyledMain>
      </ModalProvider>
    </Theme>
  )
}

export default App

const StyledMain = styled.main`
  margin-top: 50px;
`
