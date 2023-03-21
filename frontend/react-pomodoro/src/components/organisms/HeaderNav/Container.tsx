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
      desc: 'UserInfo',
    },
    {
      modalContent: <Notice />,
      icon: 'notifications',
      desc: 'Notifications',
    },
    {
      modalContent: <p>Help Page</p>,
      icon: 'help',
      desc: 'Help',
    },
  ]

  return <Presenter listButtons={listButtons} isLoggedIn={isAuthenticated} />
}

export default Container
