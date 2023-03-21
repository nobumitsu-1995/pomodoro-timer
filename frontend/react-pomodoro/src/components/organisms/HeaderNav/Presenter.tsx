import React from 'react'
import AuthButton from 'src/components/molecules/AuthButton/AuthButton'
import styled from 'styled-components'
import ModalButton from '../Modal/ModalButton'

export type Props = {
  listButtons: {
    modalContent: React.ReactNode
    icon: string
    isHide?: boolean
    desc: string
  }[]
  isLoggedIn: boolean
}

const Presenter: React.FC<Props> = ({ listButtons, isLoggedIn }) => {
  return (
    <nav>
      <StyledUl>
        {listButtons.map((button) => {
          if (button.isHide) return
          return (
            <StyledLi content={button.desc} key={button.icon}>
              <ModalButton
                size='50px'
                borderradius='8px'
                modalContent={button.modalContent}
              >
                <span className='material-icons'>{button.icon}</span>
              </ModalButton>
            </StyledLi>
          )
        })}
        <StyledLi content={isLoggedIn ? 'Logout' : 'Login'}>
          <AuthButton isLoggedIn={isLoggedIn} />
        </StyledLi>
      </StyledUl>
    </nav>
  )
}

export default Presenter

const StyledUl = styled.ul`
  display: flex;
  gap: 15px;
`

const StyledLi = styled.li<{ content: string }>`
  position: relative;

  &::after {
    content: '${({ content }) => content}';
    position: absolute;
    bottom: -24px;
    opacity: 0;
    display: none;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
    padding: 4px 8px;
    border-radius: 4px;
    border: 2px solid #ccc;
    font-size: 0.6rem;
    font-weight: bold;
    color: #666;
    z-index: 3;
  }

  &:hover {
    &::after {
      opacity: 1;
      display: inline-block;
    }

    &:before {
      content: '';
      position: absolute;
      bottom: -2px;
      right: 50%;
      border: 10px solid transparent;
      border-top: 10px solid #ccc;
      transform: rotateZ(180deg);
      pointer-events: none;
    }
  }
`
