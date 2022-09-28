import React from 'react'
import styled from 'styled-components/macro'
import UpDownConsole from '../../molecules/UpDownConsole'

type Props = {
  consoleItems: {
    /** コンソールのアイコン(material-icon) */
    icon: string
    /** コンソールの題名 */
    title: string
    /** コンソールの値 */
    value: number
    /** コンソールのエラー */
    error?: string
    /** upボタンクリック時のアクション */
    onClickUp: (event: React.MouseEvent<HTMLButtonElement>) => void
    /** downボタンクリック時のアクション */
    onClickDown: (event: React.MouseEvent<HTMLButtonElement>) => void
  }[]
}

const Presenter: React.FC<Props> = ({ consoleItems }) => {
  return (
    <StyledDiv>
      {consoleItems.map((consoleItem) => {
        return (
          <UpDownConsole
            css='width: 155px'
            key={consoleItem.title}
            {...consoleItem}
          />
        )
      })}
    </StyledDiv>
  )
}

export default Presenter

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`
