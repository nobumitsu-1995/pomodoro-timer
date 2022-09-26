import React from 'react'
import { useModalContext } from '../../../lib/functions/ModalContext'
import { Button } from '../../atoms'

type Props = {
  children: React.ReactNode | string
  modalContent: React.ReactNode | string
  borderradius?: string
}

const ModalButton: React.FC<Props> = ({
  children,
  modalContent,
  borderradius,
}) => {
  const { open, setOpen, setContents } = useModalContext()
  const handleClick = () => {
    setOpen(!open)
    setContents(modalContent)
  }
  return (
    <Button borderradius={borderradius} onClick={handleClick}>
      {children}
    </Button>
  )
}

export default ModalButton
