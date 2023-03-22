import React from 'react'
import UpDownConsole from 'src/components/molecules/UpDownConsole/UpDownConsole'
import styled from 'styled-components/macro'

export type Props = {
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
    /** trueの時、アイコンが光る */
    isActive?: boolean
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
  width: 100%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 155px 155px;
`
