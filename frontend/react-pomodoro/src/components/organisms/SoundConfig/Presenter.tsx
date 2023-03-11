import React from 'react'
import MuteButton from 'src/components/molecules/MuteButton/MuteButton'
import styled from 'styled-components'
import { PlayFunction } from 'use-sound/dist/types'
import { Button, Paper, RangeBar, Text } from '../../atoms'

type InputProps = Omit<JSX.IntrinsicElements['input'], 'size'>

export type Props = InputProps & {
  isMuted: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  value: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClickTry: PlayFunction
}

const Presenter: React.FC<Props> = ({
  isMuted,
  onClick,
  onChange,
  value,
  onClickTry,
}) => {
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
        <RangeBar width={140 as number} onChange={onChange} value={value} />
        <Button size='20px' onClick={() => onClickTry()}>
          <span className='material-icons md-10'>audiotrack</span>
        </Button>
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
