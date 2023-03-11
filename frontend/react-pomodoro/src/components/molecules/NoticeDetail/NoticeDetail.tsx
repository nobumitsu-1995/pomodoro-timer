import React from 'react'
import styled from 'styled-components'
import { NoticeType } from '../../../lib/types/modelType'
import { Button, Text, TimeTag } from '../../atoms'

export type Props = NoticeType & {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  prevNotice?: NoticeType
  nextNotice?: NoticeType
}

const NoticeDetail: React.FC<Props> = ({
  title,
  content,
  updatedAt,
  publishedAt,
  onClick,
}) => {
  return (
    <StyledDiv1>
      <Text size='0.8rem' textalign='center'>
        <TimeTag size='0.8rem' time={publishedAt} />
        {updatedAt && (
          <>
            &nbsp;(更新日:&nbsp;
            <TimeTag size='0.8rem' time={updatedAt} />)
          </>
        )}
      </Text>
      <StyledH3>{title}</StyledH3>
      <Text size='1rem'>{content}</Text>
      <StyledDiv2>
        <Button onClick={onClick} fontsize='1rem' borderradius='5px'>
          Back
        </Button>
      </StyledDiv2>
    </StyledDiv1>
  )
}

export default NoticeDetail

const StyledDiv1 = styled.div`
  padding: 50px;
`

const StyledDiv2 = styled.div`
  margin: 60px auto 0;
  width: 100px;
`

const StyledH3 = styled.h3`
  margin: 10px 0 30px;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.color.black};
`
