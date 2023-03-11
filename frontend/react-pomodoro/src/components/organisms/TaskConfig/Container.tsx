import React, { useState } from 'react'
import { TaskType } from 'src/lib/types/modelType'
import { useDispatch } from 'react-redux'
import { useSelector } from 'src/feature/store'
import { currentTaskSelector, tasksSelector } from 'src/feature/selectors/task'
import {
  addTask,
  setCurrentTask,
  deleteTask,
  updateTask,
} from 'src/feature/slices/tasks'
import { api } from '../../../lib/functions/axios'
import Presenter from './Presenter'
import { tokenGetSelector } from 'src/feature/selectors/token'

const Container: React.FC = () => {
  const dispatch = useDispatch()
  const currentTask = useSelector(currentTaskSelector)
  const token = useSelector(tokenGetSelector)
  const tasks = useSelector(tasksSelector)

  const [task, setTask] = useState({
    title: '',
    id: '',
  })
  const [isEditMode, setIsEditMode] = useState(false)

  const onClickTask = (task: TaskType) => {
    dispatch(setCurrentTask(task))
  }

  const onClickDeleteTask = (id: string) => {
    if (!confirm('削除してよろしいですか？')) return
    api(token)
      .delete(`/v1/task/${id}/delete`)
      .then(() => {
        dispatch(deleteTask(id))
        setTask({ title: '', id: '' })
      })
      .catch((e) => {
        console.error(e)
      })
  }

  const onClickEditTask = (task: TaskType) => {
    setIsEditMode(true)
    setTask({ title: task.title, id: task._id })
  }

  const onClickUpdateTask = () => {
    if (task.title.length === 0) return

    api(token)
      .patch(`/v1/task/${task.id}/update`, {
        title: task.title,
      })
      .then((res) => {
        dispatch(updateTask(res.data))
        dispatch(setCurrentTask(res.data))
        setTask({ title: '', id: '' })
        setIsEditMode(false)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  const onClickCreateTask = () => {
    if (task.title.length === 0) return

    api(token)
      .post('/v1/task/create', {
        title: task.title,
      })
      .then((res) => {
        dispatch(addTask(res.data))
        dispatch(setCurrentTask(res.data))
        setTask({ title: '', id: '' })
      })
      .catch((e) => {
        console.error(e)
      })
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setTask({
      ...task,
      title: value,
    })
  }

  return (
    <Presenter
      task={task}
      tasks={tasks}
      currentTask={currentTask}
      isEditMode={isEditMode}
      onClickTask={onClickTask}
      onClickDeleteTask={onClickDeleteTask}
      onClickEditTask={onClickEditTask}
      onClickUpdateTask={onClickUpdateTask}
      onClickCreateTask={onClickCreateTask}
      onChangeInput={onChangeInput}
    />
  )
}

export default Container
