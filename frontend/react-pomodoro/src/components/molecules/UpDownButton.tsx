import React from 'react'
import styled from 'styled-components'
import { Button } from '../atoms'

type Props = {
  /** upボタンクリック時のアクション */
  onClickUp: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** downボタンクリック時のアクション */
  onClickDown: (event: React.MouseEvent<HTMLButtonElement>) => void
}

/** ▲ボタンと▼ボタンのコンポーネント */
const UpDownButton: React.FC<Props> = ({ onClickUp, onClickDown }) => {
  return (
    <StyledDiv>
      <Button size='50px' onClick={onClickUp}>
        <span className='material-icons'>arrow_drop_up</span>
      </Button>
      <Button size='50px' onClick={onClickDown}>
        <span className='material-icons'>arrow_drop_down</span>
      </Button>
    </StyledDiv>
  )
}

export default UpDownButton

const StyledDiv = styled.div`
  display: grid;
  gap: 15px;
`
