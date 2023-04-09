---
to: "<%= atomic !== 'organisms' ? `src/components/${atomic}/${name}/${name}.tsx` : null %>"
---
import React, { FC } from 'react'
import styled from 'styled-components/macro'

export type Props = {
  /** propsの説明 */
  title: string
}

/** コンポーネントの説明 */
const <%= name %>: FC<Props> = ({ title }) => {
  return (
    <StyledDiv>{ title }</StyledDiv>
  )
}

export default <%= name %>

const StyledDiv = styled.div`

`