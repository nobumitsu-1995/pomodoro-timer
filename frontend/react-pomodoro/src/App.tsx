import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Theme from './assets/styles/Theme'
import { ModalBody, SpConsole } from './components/organisms'
import { Header, TimerBlock, UserBlock } from './components/templates'
import { api } from './lib/functions/axios'
import { ModalProvider } from './lib/functions/ModalContext'
import { useSelector } from './feature/store'
import { setNotices } from './feature/slices/notices'
import { tokenGetSelector } from './feature/selectors/token'
import useUserData from './lib/hooks/useUserData'

const App: React.FC = () => {
  // Auth0認証後に受け取るトークン
  const token = useSelector(tokenGetSelector)
  const dispatch = useDispatch()
  const { isAuthenticated } = useUserData({ token })

  useEffect(() => {
    api()
      .get('/v1/notices')
      .then((res) => {
        dispatch(setNotices(res.data))
      })
  }, [])

  return (
    <Theme>
      <ModalProvider>
        <Header />
        <StyledMain>
          <TimerBlock />
          <StyledDiv>
            {isAuthenticated && <UserBlock />}
            <ModalBody />
          </StyledDiv>
          <StyledDiv2>
            <SpConsole />
          </StyledDiv2>
        </StyledMain>
      </ModalProvider>
    </Theme>
  )
}

export default App

const StyledMain = styled.main`
  margin-top: 50px;

  @media (max-width: 767px) {
    margin-top: 40px;
  }
`

const StyledDiv = styled.div`
  display: block;

  @media (max-width: 767px) {
    display: none;
  }
`

const StyledDiv2 = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`
