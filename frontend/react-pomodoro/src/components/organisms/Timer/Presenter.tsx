import React from 'react'
import styled from 'styled-components/macro'
import { Paper } from '../../atoms'
import { IconButtonList, TimerCycleBar, TimerView } from '../../molecules'
import { TimerAnimation } from '../index'

type Props = {
  time: {
    minutes: string
    seconds: string
  }
  cycleBar: {
    cycle: number
    leftCycle: number
  }
  iconButtonItems: {
    name: string
    disable: boolean
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  }[]
}

const Presenter: React.FC<Props> = ({ time, cycleBar, iconButtonItems }) => {
  return (
    <Paper css='position: relative;' width='350px' padding='120px 20px 20px'>
      <TimerAnimation />
      <StyledDiv>
        <TimerView {...time} />
        <TimerCycleBar {...cycleBar} css='margin-top: 18px;' />
      </StyledDiv>
      <IconButtonList
        iconButtonItems={iconButtonItems}
        css={`
          margin-top: 250px;
        `}
      />
    </Paper>
  )
}

export default Presenter

const StyledDiv = styled.div`
  padding: 20px;
  width: 240px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 5px;
  position: absolute;
  right: 0;
  left: 0;
  margin: 0 auto;
`
