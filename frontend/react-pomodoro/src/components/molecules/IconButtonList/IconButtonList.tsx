import React from 'react'
import styled from 'styled-components'
import { Button } from '../../atoms'

export type Props = {
  /** 描画するButtonの情報配列
   * @param {string}  name - Iconの名前
   * @param {boolean}  disable - Buttonのクリックの可否
   * @param {(event: React.MouseEvent<HTMLButtonElement>) => void}  onClick - Buttonクリック時のアクション
   */
  iconButtonItems: {
    name: string
    disable: boolean
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  }[]
  /** styled-componentsのstyle継承 */
  className?: string
}

/** IconButtonの配列 */
const IconButtonList: React.FC<Props> = ({ iconButtonItems, className }) => {
  return (
    <StyledUl className={className}>
      {iconButtonItems.map((iconButton) => {
        return (
          <li key={iconButton.name}>
            <Button
              size='90px'
              onClick={iconButton.onClick}
              disabled={iconButton.disable}
            >
              <span className='material-icons'>{iconButton.name}</span>
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
