import React from 'react'
import { ThemeProvider } from 'styled-components'

type Props = {
  children: React.ReactNode
}

const Theme: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const theme = {
  color: {
    black: '#000',
    white: '#fff',
    red: 'red',
    blue: 'blue',
    green: 'green',
  },
  size: {
    small: '1.0rem',
    normal: '1.2rem',
    big: '2.0rem',
  },
} as const

export default Theme
