import React from 'react'
import styled from 'styled-components/macro'

export type Props = {
  /** barの色 */
  backgroundColor?: string
}

/** Barコンポーネント */
const Bar: React.FC<Props> = ({ backgroundColor }) => {
  return (
    <StyledSpan
      css={`
        background-color: ${backgroundColor || '#666'};
      `}
    />
  )
}

export default Bar

const StyledSpan = styled.span`
  height: 8px;
  width: 100%;
  display: block;
  box-shadow: 5px 5px 10px #a2a2a2, -5px -5px 10px #ffffff;
  border-radius: 2px;
`
