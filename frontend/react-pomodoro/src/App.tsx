import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Theme from './assets/styles/Theme'
import { ModalBody } from './components/organisms'
import { Header, TimerBlock } from './components/templates'
import { setNotices } from './feature/notices'
import { api } from './lib/functions/axios'
import { ModalProvider } from './lib/functions/ModalContext'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    api.get('notices').then((res) => {
      dispatch(setNotices(res.data))
    })
  }, [])

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
