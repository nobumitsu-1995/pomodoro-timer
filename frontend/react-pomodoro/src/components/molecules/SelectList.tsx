import React from 'react'
import styled from 'styled-components'
import { TaskType } from 'src/lib/types/modelType'
import { Button, Text } from '../atoms'

type Props = {
  listItem: TaskType[]
  activeId: string
  onClick: (task: TaskType) => void
  onClickEdit: (task: TaskType) => void
  onClickDelete: (id: string) => void
}

const SelectList: React.FC<Props> = ({
  listItem,
  activeId,
  onClick,
  onClickEdit,
  onClickDelete,
}) => {
  return listItem.length === 0 ? null : (
    <StyledUl>
      {listItem.map((item) => {
        const color = activeId === item._id ? '#CF4F4F' : '#666'
        return (
          <StyledLi key={item._id}>
            <StyledText bold='bold' color={color} onClick={() => onClick(item)}>
              {item.title}
            </StyledText>
            <StyledDiv>
              <Button size='30px' onClick={() => onClickEdit(item)}>
                <span className='material-icons md-18'>edit</span>
              </Button>
              <Button size='30px' onClick={() => onClickDelete(item._id)}>
                <span className='material-icons md-18'>delete</span>
              </Button>
            </StyledDiv>
          </StyledLi>
        )
      })}
    </StyledUl>
  )
}

export default SelectList

const StyledUl = styled.ul`
  padding: 10px;
  max-height: 220px;
  overflow: scroll;
  border-radius: 10px;
  box-shadow: inset 5px 5px 10px #d4d4d4, inset -5px -5px 10px #ffffff,
    5px 5px 10px transparent, -5px -5px 10px transparent;
`

const StyledLi = styled.li`
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:first-child) {
    border-top: 1px solid #aaa;
  }
`

const StyledText = styled(Text)`
  padding: 0 8px;
  max-width: 190px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`

const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
`
