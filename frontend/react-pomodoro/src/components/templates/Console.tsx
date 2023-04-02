import React, { FC } from 'react'
import styled from 'styled-components'
import { CycleConfig, SoundConfig, TimeConfig } from '../organisms'

type Props = {
  className?: string
}
const Console: FC<Props> = ({ className }) => {
  return (
    <StyledDiv className={className}>
      <TimeConfig />
      <CycleConfig />
      <SoundConfig />
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
