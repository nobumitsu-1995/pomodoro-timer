import React from 'react'
import styled from 'styled-components'
import { Timer } from '../organisms'
import Console from './Console'

const TimerBlock: React.FC = () => {
  return (
    <StyledDiv1>
      <Timer />
      <StyledConsole />
    </StyledDiv1>
  )
}

export default TimerBlock

const StyledDiv1 = styled.div`
  margin: 0 auto;
  max-width: 740px;
  display: grid;
  grid-template-columns: 350px 350px;
  gap: 40px;

  @media (max-width: 767px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const StyledConsole = styled(Console)`
  @media (max-width: 767px) {
    display: none;
  }
`
