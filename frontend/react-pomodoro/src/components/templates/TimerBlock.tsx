import React from 'react'
import styled from 'styled-components'
import { Button } from '../atoms'
import { CycleConfig, SoundConfig, TimeConfig, Timer } from '../organisms'

const TimerBlock: React.FC = () => {
  return (
    <StyledDiv1>
      <Timer />
      <StyledDiv2>
        <TimeConfig />
        <CycleConfig />
        <StyledDiv3>
          <SoundConfig />
          <Button disabled size='90px' borderradius='10px'>
            {' '}
          </Button>
        </StyledDiv3>
      </StyledDiv2>
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
`

const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`
const StyledDiv3 = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 250px 90px;
`
