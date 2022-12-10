import React from 'react'
import styled from 'styled-components'
import { Input, Text } from '../atoms'

type Props = {
  className?: string
  id: string
  label: React.ReactNode
  value: string | number
  error?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputArea: React.FC<Props> = ({
  className,
  id,
  label,
  value,
  error,
  onChange,
}) => {
  return (
    <StyledDiv className={className}>
      <label htmlFor={id}>
        <Text bold='bold' size='1rem'>
          {label}
        </Text>
      </label>
      <StyledDiv2>
        <Input
          onChange={onChange}
          value={value}
          name={id}
          id={id}
          placeholder='Number'
          type='number'
          borderradius='18px'
          fontsize='1rem'
        />
        {error && (
          <StyledText bold='bold' color='#CF4F4F' size='0.8rem'>
            <span className='material-icons md-10'>cancel</span>
            {error}
          </StyledText>
        )}
      </StyledDiv2>
    </StyledDiv>
  )
}

export default InputArea

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledDiv2 = styled.div`
  width: 180px;
  position: relative;
`

const StyledText = styled(Text)`
  position: absolute;
  bottom: -15px;
  left: 10px;
`
