import React, { FC } from 'react'
import { Button, Input } from 'src/components/atoms'
import styled from 'styled-components'

export type Props = {
  error?: string
  value: string | number
  placeholder: string
  type: 'text' | 'number'
  onClickButton: (event: React.MouseEvent<HTMLButtonElement>) => void
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputAreaWithButton: FC<Props> = ({
  error,
  value,
  placeholder,
  type,
  onClickButton,
  onChangeInput,
}) => {
  return (
    <StyledDiv>
      {error && (
        <StyledP>
          <span className='material-icons md-10'>cancel</span>
          {error}
        </StyledP>
      )}
      <Input
        onChange={onChangeInput}
        value={value}
        placeholder={placeholder}
        type={type}
        borderradius='18px 0 0 18px'
      />
      <Button onClick={onClickButton} borderradius='0 18px 18px 0'>
        <span className='material-icons'>keyboard_arrow_right</span>
      </Button>
    </StyledDiv>
  )
}

export default InputAreaWithButton

const StyledDiv = styled.div`
  position: relative;
  margin: 15px 0;
  display: grid;
  grid-template-columns: 1fr 50px;
`

const StyledP = styled.p`
  position: absolute;
  top: -16px;
  padding: 4px 8px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #cf4f4f;
  border-radius: 6px;
  background: #e6e6e6;
  box-shadow: 7px 7px 14px #cacaca, -7px -7px 14px #ffffff;
`
