import React from 'react'
import styled, { css } from 'styled-components/macro'

type Props = {
  /** 描画する要素 */
  children: React.ReactNode | string
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

/** textを描画するコンポーネント */
const Text: React.FC<Props> = ({ children, ...props }) => {
  return (
    <StyledP
      className={props.className}
      css={`
        display: ${props.display || 'block'};
        line-height: ${props.lineheight || 1};
        text-align: ${props.textalign || 'left'};
        color: ${props.color || '#666'};
        font-size: ${props.size || '1.2rem'};
        font-weight: ${props.bold || 400};
      `}
    >
      {children}
    </StyledP>
  )
}

export default Text

const StyledP = styled.p``
