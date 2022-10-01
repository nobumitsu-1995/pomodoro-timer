import React from 'react'
import styled from 'styled-components'
import { ModalBody } from './components/organisms'
import { Header, TimerBlock } from './components/templates'
import { ModalProvider } from './lib/functions/ModalContext'

const App: React.FC = () => {
  return (
    <ModalProvider>
      <Header />
      <StyledMain>
        <TimerBlock />
        <ModalBody />
      </StyledMain>
    </ModalProvider>
  )
}

export default App

const StyledMain = styled.main`
  margin-top: 50px;
`
