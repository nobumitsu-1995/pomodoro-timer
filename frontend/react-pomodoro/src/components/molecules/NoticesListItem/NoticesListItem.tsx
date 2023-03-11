import React from 'react'
import styled from 'styled-components/macro'
import { NoticeType } from '../../../lib/types/modelType'
import { TimeTag } from '../../atoms'

export type Props = {
  notice: NoticeType
  setCurrentNotice: React.Dispatch<React.SetStateAction<NoticeType | undefined>>
}

const NoticesListItem: React.FC<Props> = ({ notice, setCurrentNotice }) => {
  const { publishedAt, title } = notice
  return (
    <StyledLi>
      <TimeTag size='1rem' time={publishedAt} />
      <StyledA onClick={() => setCurrentNotice(notice)}>{title}</StyledA>
    </StyledLi>
  )
}

export default NoticesListItem

const StyledLi = styled.li`
  padding: 30px 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  &:not(:first-child) {
    border-top: 1px solid ${(props) => props.theme.color.gray};
  }
`

const StyledA = styled.a`
  text-decoration: underline;
  color: ${(props) => props.theme.color.black};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s;

  :hover {
    opacity: 0.6;
  }
`
