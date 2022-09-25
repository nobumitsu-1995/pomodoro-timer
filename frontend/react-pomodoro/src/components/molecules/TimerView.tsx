import React from 'react'
import { Text } from '../atoms'

type Props = {
  /** 分 */
  minutes: string
  /** 秒 */
  seconds: string
}

/** タイマーの表示部分 */
const TimerView: React.FC<Props> = ({ minutes, seconds }) => {
  return (
    <Text size='3.6rem' bold='bold' textalign='center'>
      {minutes}:{seconds}
    </Text>
  )
}

export default TimerView
