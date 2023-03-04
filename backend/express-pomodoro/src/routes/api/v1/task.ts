import express from 'express'
import { authenticateJWT } from '../../../controllers/api/v1/authController'
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
  validator as taskValidator,
} from '../../../controllers/api/v1/tasksController'

const v1TaskRouter = express.Router()

// task
v1TaskRouter.get('/task', authenticateJWT, getTasks)
v1TaskRouter.get('/task/:id/show', authenticateJWT, getTask)
v1TaskRouter.post('/task/create', authenticateJWT, taskValidator, createTask)
v1TaskRouter.patch(
  '/task/:id/update',
  authenticateJWT,
  taskValidator,
  updateTask
)
v1TaskRouter.delete('/task/:id/delete', authenticateJWT, deleteTask)

export default v1TaskRouter
