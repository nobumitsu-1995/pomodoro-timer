import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Presenter from './Presenter'
import Notice from '../Notice/Container'
import UserAchievement from '../UserAchievement/Container'

const Container: React.FC = () => {
  const { isAuthenticated } = useAuth0()

  const listButtons = [
    {
      modalContent: <UserAchievement />,
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

export default Container
