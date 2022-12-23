import express from 'express'
import { authenticateJWT } from '../../controllers/api/v1/authController'
import {
  createCustumConfig,
  deleteCustumConfig,
  getCustumConfig,
  getCustumConfigs,
  initializeCustumConfig,
  updateCustumConfig,
  validator as custumConfigValidator,
} from '../../controllers/api/v1/custumConfigController'
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
  validator as taskValidator,
} from '../../controllers/api/v1/tasksController'
import {
  createWorkTime,
  deleteWorkTime,
  getWorkTime,
  getWorkTimes,
  updateWorkTime,
  validator as workTimeValidator,
} from '../../controllers/api/v1/workTimesController'
import { getNotices } from '../../controllers/api/v1/noticesController'

const router = express.Router()

//notices
router.get('/notices', getNotices)

//custum_config
router.get('/custum_config', authenticateJWT, getCustumConfigs)
router.get('/custum_config/:id/show', authenticateJWT, getCustumConfig)
router.post(
  '/custum_config/create',
  authenticateJWT,
  custumConfigValidator,
  createCustumConfig
)
router.patch(
  '/custum_config/:id/update',
  authenticateJWT,
  custumConfigValidator,
  updateCustumConfig
)
router.delete('/custum_config/:id/delete', authenticateJWT, deleteCustumConfig)
router.post(
  '/custum_config/initialize',
  authenticateJWT,
  initializeCustumConfig
)

// task
router.get('/task', authenticateJWT, getTasks)
router.get('/task/:id/show', authenticateJWT, getTask)
router.post('/task/create', authenticateJWT, taskValidator, createTask)
router.patch('/task/:id/update', authenticateJWT, taskValidator, updateTask)
router.delete('/task/:id/delete', authenticateJWT, deleteTask)

// tworkTime
router.get('/work_time', authenticateJWT, getWorkTimes)
router.get('/work_time/:id/show', authenticateJWT, getWorkTime)
router.post(
  '/work_time/create',
  authenticateJWT,
  workTimeValidator,
  createWorkTime
)
router.patch(
  '/work_time/:id/update',
  authenticateJWT,
  workTimeValidator,
  updateWorkTime
)
router.delete('/work_time/:id/delete', authenticateJWT, deleteWorkTime)

export default router
