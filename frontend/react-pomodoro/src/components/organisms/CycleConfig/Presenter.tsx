import React from 'react'
import { UpDownButton } from 'src/components/molecules'
import InputAreaWithButton from 'src/components/molecules/InputAreaWithButton/InputAreaWithButton'
import styled from 'styled-components'
import { Paper, Text } from '../../atoms'

export type Props = {
  value: number
  error?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  onClickUp: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onClickDown: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Presenter: React.FC<Props> = ({
  value,
  error,
  onChange,
  onClick,
  onClickUp,
  onClickDown,
}) => {
  return (
    <Paper width='350px' padding='0 16px'>
      <StyledDiv1>
        <StyledDiv2>
          <Text bold='bold' size='1.4rem'>
            <span className='material-icons md-18 md-dark'>timer</span>
            &ensp;Number of Cycle
          </Text>
          <InputAreaWithButton
            value={value}
            type={'number'}
            onClickButton={onClick}
            onChangeInput={onChange}
            error={error}
          />
        </StyledDiv2>

        <UpDownButton onClickUp={onClickUp} onClickDown={onClickDown} />
      </StyledDiv1>
    </Paper>
  )
}

export default Presenter

const StyledDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 15px 0;
`

const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
