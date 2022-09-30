import React from 'react'
import styled from 'styled-components'
import { Paper, RangeBar, Text } from '../../atoms'
import { MuteButton } from '../../molecules'

type InputProps = Omit<JSX.IntrinsicElements['input'], 'size'>

type Props = InputProps & {
  isMuted: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  value: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Presenter: React.FC<Props> = ({ isMuted, onClick, onChange, value }) => {
  return (
    <Paper width='250px'>
      <Text size='0.8rem' bold='bold' textalign='center'>
        Sound Config
      </Text>
      <StyledDiv>
        <MuteButton
          isMuted={isMuted}
          size='38px'
          borderRadius='10px'
          onClick={onClick}
        />
        <RangeBar width={160 as number} onChange={onChange} value={value} />
      </StyledDiv>
    </Paper>
  )
}

export default Presenter

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
