import React from 'react'
import styled from 'styled-components'

type InputProps = Omit<JSX.IntrinsicElements['input'], 'ref'>

type Props = InputProps & {
  borderradius?: string
  fontsize?: string
}

const Input: React.FC<Props> = (props) => {
  const { fontsize, borderradius, ...inputProps } = props

  return (
    <StyledInput
      borderradius={borderradius}
      fontsize={fontsize}
      {...inputProps}
    />
  )
}

export default Input

const StyledInput = styled.input<Props>`
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: ${({ borderradius }) => borderradius || '3px'};
  font-size: ${({ fontsize }) => fontsize || '1.2rem'};

  &::placeholder {
    color: #ddd;
  }

  &:focus {
    outline: 2px solid #888;
  }
`
