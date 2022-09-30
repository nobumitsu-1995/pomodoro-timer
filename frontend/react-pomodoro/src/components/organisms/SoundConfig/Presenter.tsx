import React from 'react'
import styled from 'styled-components'
import { Paper, RangeBar } from '../../atoms'
import { MuteButton } from '../../molecules'

type InputProps = Omit<JSX.IntrinsicElements['input'], 'size'>

type Props = InputProps & {
  isMuted: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Presenter: React.FC<Props> = (props) => {
  const { isMuted, onClick, ...inputProps } = props
  return (
    <StyledPaper width='250px'>
      <MuteButton
        isMuted={isMuted}
        size='38px'
        borderRadius='10px'
        onClick={onClick}
        {...inputProps}
      />
      <RangeBar width={160} />
    </StyledPaper>
  )
}

export default Presenter

const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
