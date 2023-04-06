import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'
import Console from 'src/components/templates/Console'
import { Notice } from '..'
import UserAchievement from '../UserAchievement/Container'
import Presenter from './Presenter'

const Container = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<string>('')
  const { isAuthenticated } = useAuth0()

  const touchButton = (id: string) => {
    if (id === content) {
      return setIsOpen(!isOpen)
    }
    if (isOpen) {
      return setContent(id)
    }
    setContent(id)
    setIsOpen(!isOpen)
  }

  const CONTENT_LIST = [
    {
      id: 'notice',
      content: <Notice />,
    },
    {
      id: 'help',
      content: <Notice />,
    },
    {
      id: 'config',
      content: <Console />,
    },
    {
      id: 'user',
      content: <UserAchievement />,
    },
  ]

  return (
    <Presenter
      isLoggedIn={isAuthenticated}
      isOpen={isOpen}
      content={CONTENT_LIST.find((v) => v.id === content)?.content}
      touchButton={touchButton}
    />
  )
}

export default Container
