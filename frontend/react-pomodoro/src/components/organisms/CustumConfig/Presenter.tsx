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
  changeEdit: (event: React.ChangeEvent<HTMLInputElement>) => void
  clickUpdate: (event: React.MouseEvent<HTMLButtonElement>) => void
  onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Presenter: React.FC<Props> = ({
  formItems,
  configLength,
  changeEdit,
  clickUpdate,
  onChangeSelect,
}) => {
  return (
    <Paper width='100%' padding='20px'>
      <StyledDiv1>
        <Text bold='bold'>Custum Timer Edit</Text>
        <SelectBox onChange={onChangeSelect} configLength={configLength} />
      </StyledDiv1>
      <StyledForm
        formItems={formItems}
        buttonText='UPDATE'
        onChange={changeEdit}
        onClick={clickUpdate}
      />
    </Paper>
  )
}

export default Presenter

const StyledDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledForm = styled(Form)`
  margin-top: 25px;
`
