import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '../atoms'

type Props = {
  isLoggedIn: boolean
}

const AuthButton: React.FC<Props> = ({ isLoggedIn }) => {
  const { loginWithRedirect, logout } = useAuth0()
  return (
    <>
      {isLoggedIn ? (
        <Button
          size='50px'
          borderradius='8px'
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          <span className='material-icons'>logout</span>
        </Button>
      ) : (
        <Button
          size='50px'
          borderradius='8px'
          onClick={() => loginWithRedirect()}
        >
          <span className='material-icons'>login</span>
        </Button>
      )}
    </>
  )
}

export default AuthButton
