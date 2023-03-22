import React from 'react'
import styled from 'styled-components/macro'

type InputProps = Omit<JSX.IntrinsicElements['input'], 'ref'>

export type Props = InputProps & {
  /** border-radiusの値 */
  borderradius?: string
  /** font-sizeの値 */
  fontsize?: string
}

/** ニューモフィズムInputコンポーネント */
const Input: React.FC<Props> = (props) => {
  const { fontsize, borderradius, ...inputProps } = props

  return (
    <StyledInput
      {...inputProps}
      css={`
        border-radius: ${borderradius || '20px'};
        font-size: ${fontsize || '1.2rem'};
      `}
    />
  )
}

export default Input

const StyledInput = styled.input`
  padding: 8px 20px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 5px 5px 10px #d4d4d4, inset -5px -5px 10px #ffffff,
    5px 5px 10px transparent, -5px -5px 10px transparent;
  background: ${(props) => props.theme.color.white};
  border: none;
  color: ${(props) => props.theme.color.black};
  transition: box-shadow ease-in-out 0.3s;

  &::placeholder {
    color: ${(props) => props.theme.color.gray};
  }

  &:focus {
    box-shadow: inset 5px 5px 10px transparent, inset -5px -5px 10px transparent,
      5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff;
    outline: none;
  }
`
