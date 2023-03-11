import React, { createContext, useContext, useMemo, useState } from 'react'

const ModalContext = createContext(
  {} as {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    contents: React.ReactNode
    setContents: React.Dispatch<React.SetStateAction<React.ReactNode>>
  }
)

export const useModalContext = () => {
  return useContext(ModalContext)
}

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false)
  const [contents, setContents] = useState('' as React.ReactNode)

  const value = useMemo(() => {
    return { open, setOpen, contents, setContents }
  }, [open, setOpen, contents, setContents])

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
