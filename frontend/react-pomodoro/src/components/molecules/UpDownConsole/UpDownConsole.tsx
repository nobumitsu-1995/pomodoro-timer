import React from 'react'
import styled from 'styled-components'
import { Paper, Text } from '../../atoms'
import UpDownButton from '../UpDownButton/UpDownButton'

export type Props = {
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
  /** styleの継承 */
  className?: string
}

const UpDownConsole: React.FC<Props> = ({
  icon,
  title,
  value,
  error,
  onClickUp,
  onClickDown,
  className,
}) => {
  return (
    <Paper padding='15px' className={className}>
      <span className='material-icons md-18 md-dark'>{icon}</span>
      <StyledDiv1>
        <StyledDiv2>
          <Text size='1rem' bold='bold'>
            {title}
          </Text>
          {error && (
            <StyledText bold='bold' color='#CF4F4F' size='0.8rem'>
              <span className='material-icons md-10'>cancel</span>
              {error}
            </StyledText>
          )}
          <Text bold='bold' size='2.2rem'>
            {value}
            <StyledSpan>min</StyledSpan>
          </Text>
        </StyledDiv2>
        <UpDownButton onClickUp={onClickUp} onClickDown={onClickDown} />
      </StyledDiv1>
    </Paper>
  )
}

export default UpDownConsole

const StyledDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledDiv2 = styled.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledText = styled(Text)``

const StyledSpan = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
`
