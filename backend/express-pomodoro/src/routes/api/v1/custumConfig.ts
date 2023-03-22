import express from 'express'
import { authenticateJWT } from '../../../controllers/api/v1/authController'
import {
  createCustumConfig,
  deleteCustumConfig,
  getCustumConfig,
  getCustumConfigs,
  initializeCustumConfig,
  updateCustumConfig,
  validator as custumConfigValidator,
} from '../../../controllers/api/v1/custumConfigController'

const v1CustumConfigRouter = express.Router()

//custum_config
v1CustumConfigRouter.get('/custum_config', authenticateJWT, getCustumConfigs)
v1CustumConfigRouter.get(
  '/custum_config/:id/show',
  authenticateJWT,
  getCustumConfig
)
v1CustumConfigRouter.post(
  '/custum_config/create',
  authenticateJWT,
  custumConfigValidator,
  createCustumConfig
)
v1CustumConfigRouter.patch(
  '/custum_config/:id/update',
  authenticateJWT,
  custumConfigValidator,
  updateCustumConfig
)
v1CustumConfigRouter.delete(
  '/custum_config/:id/delete',
  authenticateJWT,
  deleteCustumConfig
)
v1CustumConfigRouter.post(
  '/custum_config/initialize',
  authenticateJWT,
  initializeCustumConfig
)

export default v1CustumConfigRouter
