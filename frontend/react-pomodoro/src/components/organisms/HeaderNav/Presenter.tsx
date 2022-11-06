import React from 'react'
import { AuthButton } from 'src/components/molecules'
import styled from 'styled-components'
import ModalButton from '../Modal/ModalButton'

type Props = {
  listButtons: {
    modalContent: React.ReactNode
    icon: string
    isHide?: boolean
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
            <li key={button.icon}>
              <ModalButton
                size='50px'
                borderradius='8px'
                modalContent={button.modalContent}
              >
                <span className='material-icons'>{button.icon}</span>
              </ModalButton>
            </li>
          )
        })}
        <li>
          <AuthButton isLoggedIn={isLoggedIn} />
        </li>
      </StyledUl>
    </nav>
  )
}

export default Presenter

const StyledUl = styled.ul`
  display: flex;
  gap: 15px;
`
