import React from 'react'
import styled from 'styled-components/macro'

type DivProps = Omit<JSX.IntrinsicElements['div'], 'ref'>

export type Props = DivProps & {
  /** 描画する子要素 */
  children: React.ReactNode | string
  /** max-widthの値 */
  width?: string
  /** Paperのpadding */
  padding?: string
  /** styled-componentのstyleを継承する */
  className?: string
}

/** Paperコンポーネント */
const Paper: React.FC<Props> = (props) => {
  const { children, width, padding, className, ...divProps } = props
  return (
    <StyledDiv
      className={className}
      css={`
        padding: ${padding || '20px'};
        max-width: ${width || '100%'};
      `}
      {...divProps}
    >
      {children}
    </StyledDiv>
  )
}

export default Paper

const StyledDiv = styled.div`
  background: ${(props) => props.theme.color.white};
  box-shadow: 10px 10px 20px #dddddd, -10px -10px 20px #f9f9f9;
  border-radius: 5px;
  overflow: hidden;
`
