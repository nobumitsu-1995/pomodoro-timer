import React from 'react'
import styled from 'styled-components'
import { Paper, Text } from 'src/components/atoms'
import { TaskType } from 'src/lib/types/modelType'
import SelectList from 'src/components/molecules/SelectList/SelectList'
import InputAreaWithButton from 'src/components/molecules/InputAreaWithButton/InputAreaWithButton'

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
      <StyledDiv1>
        <Text size='12px'>Current Task:</Text>
        <StyledDiv2>
          <StyledText bold='bold' textalign='center'>
            {currentTask.title}
          </StyledText>
        </StyledDiv2>
      </StyledDiv1>

      <InputAreaWithButton
        value={task.title}
        placeholder="New Task's Title"
        type='text'
        onClickButton={isEditMode ? onClickUpdateTask : onClickCreateTask}
        onChangeInput={onChangeInput}
        error={error}
      />

      {tasks.length === 0 ? (
        <Text textalign='center' bold='bold'>
          Task is not exist yet.
        </Text>
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

const StyledText = styled(Text)`
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`
