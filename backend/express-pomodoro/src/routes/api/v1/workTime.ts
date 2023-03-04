import express from 'express'
import { authenticateJWT } from '../../../controllers/api/v1/authController'
import {
  createWorkTime,
  deleteWorkTime,
  getWorkTime,
  getWorkTimes,
  updateWorkTime,
  validator as workTimeValidator,
} from '../../../controllers/api/v1/workTimesController'

const v1WorkTimeRouter = express.Router()

// workTime
v1WorkTimeRouter.get('/work_time', authenticateJWT, getWorkTimes)
v1WorkTimeRouter.get('/work_time/:id/show', authenticateJWT, getWorkTime)
v1WorkTimeRouter.post(
  '/work_time/create',
  authenticateJWT,
  workTimeValidator,
  createWorkTime
)
v1WorkTimeRouter.patch(
  '/work_time/:id/update',
  authenticateJWT,
  workTimeValidator,
  updateWorkTime
)
v1WorkTimeRouter.delete(
  '/work_time/:id/delete',
  authenticateJWT,
  deleteWorkTime
)

export default v1WorkTimeRouter
