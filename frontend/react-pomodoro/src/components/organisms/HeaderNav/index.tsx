import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Presenter from './Presenter'
import Notice from '../Notice'

const index: React.FC = () => {
  const { isAuthenticated } = useAuth0()

  const listButtons = [
    {
      modalContent: <Notice />,
      icon: 'person',
      isHide: !isAuthenticated,
    },
    {
      modalContent: <Notice />,
      icon: 'notifications',
    },
    {
      modalContent: <p>Help Page</p>,
      icon: 'help',
    },
  ]

  return <Presenter listButtons={listButtons} isLoggedIn={isAuthenticated} />
}

export default index
