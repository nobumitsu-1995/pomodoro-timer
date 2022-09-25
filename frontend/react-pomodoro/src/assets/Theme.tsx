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
    black: '#666666',
    gray: '#B5B5B5',
    white: '#ebebeb',
    red: '#CF4F4F',
    blue: '#5FA8D3',
    lightblue: '#D6EFFF',
    green: '#46C35B',
  },
  size: {
    small: '1.0rem',
    normal: '1.2rem',
    big: '2.0rem',
  },
} as const

export default Theme
