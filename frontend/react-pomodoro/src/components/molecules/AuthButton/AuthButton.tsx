import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '../../atoms'

export type Props = {
  isLoggedIn: boolean
  isSp?: boolean
}

const AuthButton: React.FC<Props> = ({ isLoggedIn, isSp = false }) => {
  const { loginWithRedirect, logout } = useAuth0()
  return (
    <>
      {isLoggedIn ? (
        <Button
          size={isSp ? '56px' : '50px'}
          borderradius={isSp ? '28px' : '8px'}
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          <span className='material-icons'>logout</span>
        </Button>
      ) : (
        <Button
          size={isSp ? '56px' : '50px'}
          borderradius={isSp ? '28px' : '8px'}
          onClick={() => loginWithRedirect()}
        >
          <span className='material-icons'>login</span>
        </Button>
      )}
    </>
  )
}

export default AuthButton
