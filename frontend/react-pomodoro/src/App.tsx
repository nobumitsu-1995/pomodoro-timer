import React from 'react'
import { ModalBody } from './components/organisms'
import { Header, TimerBlock } from './components/templates'
import { ModalProvider } from './lib/functions/ModalContext'

const App: React.FC = () => {
  return (
    <ModalProvider>
      <Header />
      <TimerBlock />
      <ModalBody />
    </ModalProvider>
  )
}

export default App
