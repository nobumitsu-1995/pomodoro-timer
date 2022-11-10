import React from 'react'
import styled from 'styled-components'
import { Paper, SelectBox, Text } from 'src/components/atoms'
import { Form } from 'src/components/molecules'

type Props = {
  formItems: {
    id: string
    label: string | React.ReactNode
    value: number
  }[]
  configLength: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Presenter: React.FC<Props> = ({
  formItems,
  configLength,
  onChange,
  onClick,
  onChangeSelect,
}) => {
  return (
    <Paper width='100%' padding='20px'>
      <StyledDiv>
        <Text bold='bold'>Custum Timer Config</Text>
        <SelectBox onChange={onChangeSelect} configLength={configLength} />
      </StyledDiv>
      <StyledFrom formItems={formItems} onChange={onChange} onClick={onClick} />
    </Paper>
  )
}

export default Presenter

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledFrom = styled(Form)`
  margin-top: 25px;
`
