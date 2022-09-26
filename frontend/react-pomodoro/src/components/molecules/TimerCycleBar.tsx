import React from 'react'
import styled from 'styled-components/macro'
import { Bar } from '../atoms'

type Props = {
  /** タイマーの繰り返し設定回数 */
  cycle: number
  /** タイマーの繰り返し残り回数 */
  leftCycle: number
  /** styleの継承 */
  className?: string
}

const TimerCycleBar: React.FC<Props> = ({ cycle, leftCycle, className }) => {
  return (
    <StyledUl className={className}>
      {[...Array(cycle)].map((_, index) => {
        const color = index + 1 > cycle - leftCycle ? '' : '#ebebeb'
        return (
          <StyledLi key={`bar${index}`}>
            <Bar backgroundColor={color} />
          </StyledLi>
        )
      })}
    </StyledUl>
  )
}

export default TimerCycleBar

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 4px;
`
const StyledLi = styled.li`
  flex-grow: 1;
`
