import React from 'react'
import styled from 'styled-components'
import { Button, Input, Paper, Text } from '../../atoms'

export type Props = {
  value: number
  error?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Presenter: React.FC<Props> = ({ value, error, onChange, onClick }) => {
  return (
    <Paper width='350px' padding='20px'>
      <label htmlFor='cycle'>
        <Text bold='bold' size='1.4rem'>
          <span className='material-icons md-18 md-dark'>timer</span>
          &ensp;Number of Cycle
        </Text>
        <Text size='0.8rem' color='#B5B5B5' textalign='right'>
          * 1-10
        </Text>
      </label>
      <StyledDiv>
        <Input
          onChange={onChange}
          value={value}
          name='cycle'
          id='cycle'
          placeholder='Number'
          type='number'
          borderradius='18px 0 0 18px'
        />
        <Button onClick={onClick} borderradius='0 18px 18px 0'>
          <span className='material-icons'>keyboard_arrow_right</span>
        </Button>
        {error && (
          <StyledText bold='bold' color='#CF4F4F' size='0.8rem'>
            <span className='material-icons md-10'>cancel</span>
            {error}
          </StyledText>
        )}
      </StyledDiv>
    </Paper>
  )
}

export default Presenter

const StyledDiv = styled.div`
  position: relative;
  margin: 15px 0;
  display: grid;
  grid-template-columns: 1fr 50px;
`

const StyledText = styled(Text)`
  position: absolute;
  bottom: -20px;
  left: 10px;
`
