import React from 'react'
import styled from 'styled-components/macro'
import { IconButtonList, TimerCycleBar, TimerView } from '../../molecules'

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
    <StyledDiv>
      <TimerView {...time} />
      <TimerCycleBar {...cycleBar} css='margin-top: 25px;' />
      <IconButtonList
        iconButtonItems={iconButtonItems}
        css={`
          margin-top: 100px;
        `}
      />
    </StyledDiv>
  )
}

export default Presenter

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 350px;
`
