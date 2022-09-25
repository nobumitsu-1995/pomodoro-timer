import React from 'react'
import styled from 'styled-components/macro'
import { IconButtonList, TimerView } from '../../molecules'

type Props = {
  time: {
    minutes: string
    seconds: string
  }
  iconButtonItems: {
    name: string
    disable: boolean
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  }[]
}

const Presenter: React.FC<Props> = ({ time, iconButtonItems }) => {
  return (
    <StyledDiv>
      <TimerView {...time} />
      <IconButtonList
        iconButtonItems={iconButtonItems}
        css={`
          margin-top: 120px;
        `}
      />
    </StyledDiv>
  )
}

export default Presenter

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 350px;
`
