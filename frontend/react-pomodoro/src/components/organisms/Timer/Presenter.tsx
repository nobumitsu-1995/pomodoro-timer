import React from 'react'
import 'styled-components/macro'
import { Paper } from '../../atoms'
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
    <Paper width='350px' padding='120px 20px 50px'>
      <TimerView {...time} />
      <TimerCycleBar {...cycleBar} css='margin-top: 25px;' />
      <IconButtonList
        iconButtonItems={iconButtonItems}
        css={`
          margin-top: 120px;
        `}
      />
    </Paper>
  )
}

export default Presenter
