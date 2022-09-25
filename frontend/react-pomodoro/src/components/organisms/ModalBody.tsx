import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useModalContext } from '../../lib/functions/ModalContext'
import { Paper } from '../atoms'

const ModalBody = () => {
  const { open, setOpen, contents, setContents } = useModalContext()
  const handleClick = () => {
    setOpen(false)
    setContents('')
  }
  return (
    <StyledDiv open={open} onClick={handleClick}>
      <StyledPaper onClick={(e) => e.stopPropagation()} width='800px'>
        {contents}
      </StyledPaper>
    </StyledDiv>
  )
}

export default ModalBody

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  1% {
    display: block;
  }
  to {
    opacity: 1;
  }
`

const StyledDiv = styled.div<{ open: boolean }>`
  width: 100vw;
  height: 100vh;
  display: none;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  animation: ${fadeIn} 0.2s linear;
  ${({ open }) =>
    open &&
    `
      display: block;
      opacity: 1
    `}
`

const StyledPaper = styled(Paper)`
  position: fixed;
  top: 100px;
  right: 0px;
  left: 0px;
  z-index: 15;
  margin: auto;
`
