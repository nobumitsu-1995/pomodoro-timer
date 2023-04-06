import React, { FC } from 'react'
import styled from 'styled-components'
import {
  CustumConfig,
  CycleConfig,
  SoundConfig,
  TaskConfig,
  TimeConfig,
} from '../organisms'
import { useAuth0 } from '@auth0/auth0-react'

type Props = {
  className?: string
}
const Console: FC<Props> = ({ className }) => {
  const { isAuthenticated } = useAuth0()

  return (
    <StyledDiv className={className}>
      <TimeConfig />
      <CycleConfig />
      <SoundConfig />
      {isAuthenticated && (
        <StyledDiv2>
          <CustumConfig />
          <TaskConfig />
        </StyledDiv2>
      )}
    </StyledDiv>
  )
}

export default Console

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 767px) {
    margin: 40px auto 0;
    max-width: 350px;
  }
`

const StyledDiv2 = styled(StyledDiv)`
  display: none;
  @media (max-width: 767px) {
    margin: 0 auto;
    display: flex;
  }
`
