---
to: "<%= atomic === 'organisms' ? `src/components/${atomic}/${name}/Presenter.tsx` : null %>"
---
import React, { FC } from 'react'
import styled from 'styled-components'

export type Props = {
  count: number
  plusButton: (event: React.MouseEvent<HTMLButtonElement>) => void
  loadButton: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Presenter: FC<Props> = ({ count, plusButton, loadButton }) => {
  return (
    <StyledDiv>
      <StyledP>{count}</StyledP>
      <button onClick={plusButton}>+</button>
      <button onClick={loadButton}>Load</button>
    </StyledDiv>
  )
}

export default Presenter

const StyledDiv = styled.div`
`

const StyledP = styled.p`
`