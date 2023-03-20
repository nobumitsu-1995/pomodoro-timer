import React from 'react'
import styled from 'styled-components'
import { Button, Input, Paper, Text } from 'src/components/atoms'
import { TaskType } from 'src/lib/types/modelType'
import SelectList from 'src/components/molecules/SelectList/SelectList'

export type Props = {
  task: {
    title: string
    id: string
  }
  tasks: TaskType[]
  currentTask: TaskType
  isEditMode: boolean
  error: string
  onClickTask: (task: TaskType) => void
  onClickDeleteTask: (id: string) => void
  onClickEditTask: (task: TaskType) => void
  onClickUpdateTask: () => void
  onClickCreateTask: () => void
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Presenter: React.FC<Props> = ({
  task,
  tasks,
  currentTask,
  isEditMode,
  error,
  onClickTask,
  onClickDeleteTask,
  onClickEditTask,
  onClickUpdateTask,
  onClickCreateTask,
  onChangeInput,
}) => {
  return (
    <Paper>
      {/* <Text bold='bold' textalign='left'>
        Task
      </Text> */}

      <StyledDiv1>
        <Text size='12px'>Current Task:</Text>
        <StyledDiv2>
          <StyledText bold='bold' textalign='center'>
            {currentTask.title}
          </StyledText>
        </StyledDiv2>
      </StyledDiv1>

      <StyledDiv3>
        {error && (
          <StyledP>
            <span className='material-icons md-10'>cancel</span>
            {error}
          </StyledP>
        )}
        <Input
          onChange={onChangeInput}
          value={task.title}
          name='task'
          id='task'
          placeholder="New Task's Title"
          type='text'
          borderradius='18px 0 0 18px'
        />
        <Button
          onClick={isEditMode ? onClickUpdateTask : onClickCreateTask}
          borderradius='0 18px 18px 0'
        >
          <span className='material-icons'>keyboard_arrow_right</span>
        </Button>
      </StyledDiv3>

      {tasks.length === 0 ? (
        <Text>Task is not exist yet.</Text>
      ) : (
        <SelectList
          listItem={tasks}
          activeId={currentTask._id}
          onClick={onClickTask}
          onClickEdit={onClickEditTask}
          onClickDelete={onClickDeleteTask}
        />
      )}
    </Paper>
  )
}

export default Presenter

const StyledDiv1 = styled.div`
  padding: 10px;
  height: 80px;
  border-radius: 5px;
  box-shadow: inset 5px 5px 10px #d4d4d4, inset -5px -5px 10px #ffffff,
    5px 5px 10px transparent, -5px -5px 10px transparent;
`

const StyledDiv2 = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledDiv3 = styled.div`
  position: relative;
  margin: 15px 0;
  display: grid;
  grid-template-columns: 1fr 50px;
`

const StyledP = styled.p`
  position: absolute;
  top: -16px;
  padding: 4px 8px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #cf4f4f;
  border-radius: 6px;
  background: #e6e6e6;
  box-shadow: 7px 7px 14px #cacaca, -7px -7px 14px #ffffff;
`

const StyledText = styled(Text)`
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`
