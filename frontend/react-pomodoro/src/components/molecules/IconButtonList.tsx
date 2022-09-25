import React from 'react'
import styled from 'styled-components'
import { Button } from '../atoms'

type Props = {
  /** 描画するButtonの情報配列
   * @param {string}  name - Buttonの名前
   * @param {string | React.ReactNode}  icon - Buttonに使用するアイコン
   * @param {boolean}  disable - Buttonのクリックの可否
   * @param {(event: React.MouseEvent<HTMLButtonElement>) => void}  onClick - Buttonクリック時のアクション
   */
  iconButtonItems: {
    name: string
    icon: string | React.ReactNode
    disable: boolean
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  }[]
}

/** IconButtonの配列 */
const IconButtonList: React.FC<Props> = ({ iconButtonItems }) => {
  return (
    <StyledUl>
      {iconButtonItems.map((iconButton) => {
        return (
          <li key={iconButton.name}>
            <Button
              size='90px'
              onClick={iconButton.onClick}
              disabled={iconButton.disable}
            >
              {iconButton.icon}
            </Button>
          </li>
        )
      })}
    </StyledUl>
  )
}

export default IconButtonList

const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
