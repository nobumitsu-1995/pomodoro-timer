import React from 'react'
import styled from 'styled-components'
import { CustumConfig } from '../organisms'

const UserBlock = () => {
  return (
    <StyledDiv>
      <CustumConfig />
    </StyledDiv>
  )
}

export default UserBlock

const StyledDiv = styled.div`
  margin: 30px auto;
  max-width: 740px;
  display: grid;
  grid-template-columns: 380px 320px;
  gap: 40px;
`
