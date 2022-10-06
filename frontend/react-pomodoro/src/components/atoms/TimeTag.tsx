import React from 'react'
import styled, { css } from 'styled-components/macro'

type Props = {
  /** 描画する日付 */
  time: string | Date
  /** display要素 */
  display?: string
  /** line-heightの値 */
  lineheight?: number
  /** text-align要素 */
  textalign?: 'center' | 'right' | 'left'
  /** fontのcolor要素 */
  color?: string
  /** font-sizeの値 */
  size?: string
  /** font-weightの値 */
  bold?: string | number
  className?: string
}

const TimeTag: React.FC<Props> = ({ time, ...props }) => {
  const _datetime = typeof time === 'string' ? new Date(time) : time
  const _year = _datetime.getFullYear()
  const _month = `0${_datetime.getMonth() + 1}`.slice(-2)
  const _date = `0${_datetime.getDate()}`.slice(-2)
  const datetime = `${_year}-${_month}-${_date}`

  return (
    <StyledTime
      className={props.className}
      css={`
        display: ${props.display || 'inline'};
        line-height: ${props.lineheight || 1};
        text-align: ${props.textalign || 'left'};
        color: ${props.color || '#666'};
        font-size: ${props.size || '1.2rem'};
        font-weight: ${props.bold || 400};
      `}
      dateTime={datetime}
    >
      {datetime.replace(/-/g, '/')}
    </StyledTime>
  )
}

export default TimeTag

const StyledTime = styled.time``
