import React from 'react'
import styled from 'styled-components'
import { Text } from '../../atoms'

export type Props = {
  /** 分 */
  minutes: string
  /** 秒 */
  seconds: string
}

/** タイマーの表示部分 */
const TimerView: React.FC<Props> = ({ minutes, seconds }) => {
  return (
    <StyledText color='#fff' size='3rem' bold='bold' textalign='center'>
      {minutes}:{seconds}
    </StyledText>
  )
}

export default TimerView

const StyledText = styled(Text)`
  padding: 10px;
  background-color: #000;
  border-radius: 5px;
  text-shadow: 0px 0px 30px rgba(95, 168, 211, 1),
    0px 0px 27px rgba(95, 168, 211, 1);
  font-family: 'Orbitron', sans-serif;
`
