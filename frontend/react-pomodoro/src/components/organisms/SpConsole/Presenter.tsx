import React, { FC, ReactNode } from 'react'
import { Button } from 'src/components/atoms'
import { AuthButton } from 'src/components/molecules'
import styled from 'styled-components'

export type Props = {
  isLoggedIn: boolean
  isOpen: boolean
  content: ReactNode
  touchButton: (contentId: string) => void
}

const Presenter: FC<Props> = ({ isLoggedIn, isOpen, content, touchButton }) => {
  return (
    <>
      <StyledDiv1>
        <StyledNav>
          <Button
            onClick={() => touchButton('notice')}
            borderradius='28px'
            size='56px'
          >
            <span className='material-icons'>notifications</span>
          </Button>
          <Button
            onClick={() => touchButton('help')}
            borderradius='28px'
            size='56px'
          >
            <span className='material-icons'>help</span>
          </Button>
          <Button
            onClick={() => touchButton('config')}
            borderradius='36px'
            size='72px'
          >
            <span className='material-icons'>settings</span>
          </Button>
          {isLoggedIn ? (
            <Button
              onClick={() => touchButton('user')}
              borderradius='28px'
              size='56px'
            >
              <span className='material-icons'>person</span>
            </Button>
          ) : (
            <Button borderradius='28px' size='56px'>
              <span />
            </Button>
          )}
          <AuthButton isLoggedIn={isLoggedIn} isSp />
        </StyledNav>
      </StyledDiv1>
      <StyledDiv2 isOpen={isOpen}>{content}</StyledDiv2>
    </>
  )
}

export default Presenter

const StyledDiv1 = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 3;
  border-radius: 40px 40px 0 0;
  background: #e0e0e0;
  box-shadow: 50px 50px 100px #5a5a5a, -50px -50px 100px #ffffff;
`

const StyledDiv2 = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  padding-bottom: 88px;

  background: #fefefe;
  transform: translateY(100vh);
  transition: 0.5s transform;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: translateY(1vh);
  `};
`

const StyledNav = styled.nav`
  position: relative;
  top: -16px;
  z-index: 4;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`
