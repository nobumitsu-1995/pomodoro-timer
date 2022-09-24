import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode | string
  display?: string
  lineheight?: number
  textalign?: 'center' | 'right' | 'left'
  color?: string
  size?: string
  bold?: string | number
}

const Text: React.FC<Props> = ({ children, ...props }) => {
  return <StyledP {...props}>{children}</StyledP>
}

export default Text

const StyledP = styled.p<Omit<Props, 'children'>>`
  display: ${({ display }) => display || 'block'};
  line-height: ${({ lineheight }) => lineheight || 1};
  text-align: ${({ textalign }) => textalign || 'left'};
  color: ${({ color }) => color || '#000'};
  font-size: ${({ size }) => size || '1.2rem'};
  font-weight: ${({ bold }) => bold || 400};
`
