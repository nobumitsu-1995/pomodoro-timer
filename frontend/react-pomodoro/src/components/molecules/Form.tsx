import React from 'react'
import styled from 'styled-components'
import { Button } from '../atoms'
import InputArea from './InputArea'

type Props = {
  formItems: {
    id: string
    label: string | React.ReactNode
    value: number
  }[]
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}

const Form: React.FC<Props> = ({ className, formItems, onChange, onClick }) => {
  return (
    <form className={className}>
      {formItems.map((input) => {
        return (
          <StyledInputArea
            key={input.id}
            id={input.id}
            label={input.label}
            value={input.value}
            onChange={onChange}
            error='error'
          />
        )
      })}
      <StyledButton onClick={onClick} borderradius='10px'>
        UPDATE
      </StyledButton>
    </form>
  )
}

export default Form

const StyledInputArea = styled(InputArea)`
  &:not(:first-child) {
    margin-top: 20px;
  }
`

const StyledButton = styled(Button)`
  margin: 30px auto 0;
  padding: 5px;
  font-size: 1rem;
  font-weight: bold;
`
