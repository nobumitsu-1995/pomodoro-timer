import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Theme from './assets/styles/Theme'
import { ModalBody } from './components/organisms'
import { Header, TimerBlock } from './components/templates'
import { setNotices } from './feature/slices/notices'
import { api } from './lib/functions/axios'
import { ModalProvider } from './lib/functions/ModalContext'

const App: React.FC = () => {
  const [token, setToken] = useState('')
  const dispatch = useDispatch()
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    api
      .get('/v1/notices', {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch(setNotices(res.data))
      })
  }, [token])

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently()
      setToken(token)
    }
    isAuthenticated && getToken()
  }, [isAuthenticated])

  return (
    <Theme>
      <ModalProvider>
        <Header />
        <StyledMain>
          <TimerBlock />
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
