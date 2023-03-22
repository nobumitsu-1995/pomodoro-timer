import React from 'react'
import styled from 'styled-components/macro'
import { Bar } from '../../atoms'

export type Props = {
  /** タイマーの繰り返し設定回数 */
  cycle: number
  /** タイマーの繰り返し残り回数 */
  leftCycle: number
  /** 長い休憩時間 */
  cycleToLongRestTime: number
  /** styleの継承 */
  className?: string
}

const TimerCycleBar: React.FC<Props> = ({
  cycle,
  leftCycle,
  cycleToLongRestTime,
  className,
}) => {
  return (
    <StyledUl className={className}>
      {[...Array(cycle)].map((_, index) => {
        const color =
          index + 1 > cycle - leftCycle
            ? (index + 1) % cycleToLongRestTime === 0
              ? '#CF4F4F'
              : ''
            : '#ebebeb'
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
