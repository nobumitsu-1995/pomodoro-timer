import React from 'react'
import { useModalContext } from '../../../lib/functions/ModalContext'
import { Button } from '../../atoms'

export type Props = {
  children: React.ReactNode | string
  modalContent: React.ReactNode | string
  borderradius?: string
  size: string
}

const ModalButton: React.FC<Props> = ({
  children,
  modalContent,
  borderradius,
  size,
}) => {
  const { open, setOpen, setContents } = useModalContext()
  const handleClick = () => {
    setOpen(!open)
    setContents(modalContent)
  }
  return (
    <Button size={size} borderradius={borderradius} onClick={handleClick}>
      {children}
    </Button>
  )
}

export default ModalButton
