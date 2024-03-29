import React from 'react'
import styled from 'styled-components/macro'

type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'ref'>

export type Props = ButtonProps & {
  /** 描画する要素 */
  children: React.ReactNode | string
  /** font-sizeの値 */
  fontsize?: string
  /** width, heightの値 */
  size?: string
  /** border-radiusの値 */
  borderradius?: string
}

/** ニューモフィズムButtonコンポーネント */
const Button: React.FC<Props> = (props) => {
  const { children, fontsize, size, borderradius, ...buttonProps } = props

  return (
    <StyledButton
      type='button'
      {...buttonProps}
      css={`
        height: ${size || '100%'};
        width: ${size || '100%'};
        border-radius: ${borderradius || '50%'};
        font-size: ${fontsize || '1.2rem'};
      `}
    >
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ebebeb;
  box-shadow: 10px 10px 20px #c8c8c8, -10px -10px 20px #ffffff;
  text-align: center;
  color: ${(props) => props.theme.color.black};
  transition: box-shadow ease-out 0.13s;

  &:hover {
    box-shadow: 10px 10px 20px #bcbcbc, -10px -10px 20px #ffffff;
  }

  &:active,
  &:disabled {
    box-shadow: 10px 10px 20px #e2e2e2, -10px -10px 20px #f4f4f4;
  }
`
