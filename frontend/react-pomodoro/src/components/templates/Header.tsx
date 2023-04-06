import React from 'react'
import styled from 'styled-components'
import { HeaderNav } from '../organisms/'

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledH1>Pomodoro Timer</StyledH1>
      <StyledDiv>
        <HeaderNav />
      </StyledDiv>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  padding: 20px 40px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ebebeb;
  box-shadow: inset 15px 15px 30px #cfcfcf, inset -15px -15px 30px #ffffff;
`

const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.color.black};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3),
    -2px -2px 4px rgba(255, 255, 255, 1);
`

const StyledDiv = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`
