import express from 'express'
import { authenticateJWT } from '../../controllers/api/v1/authController'
import {
  createCustumConfig,
  deleteCustumConfig,
  getCustumConfig,
  getCustumConfigs,
  updateCustumConfig,
  validator,
} from '../../controllers/api/v1/custumConfigController'
import { getNotices } from '../../controllers/api/v1/noticesController'

const router = express.Router()

router.get('/notices', getNotices)

router.get('/custum_config', authenticateJWT, getCustumConfigs)
router.get('/custum_config/:id/show', authenticateJWT, getCustumConfig)
router.post(
  '/custum_config/create',
  authenticateJWT,
  validator,
  createCustumConfig
)
router.patch(
  '/custum_config/:id/update',
  authenticateJWT,
  validator,
  updateCustumConfig
)
router.delete('/custum_config/:id/delete', authenticateJWT, deleteCustumConfig)

export default router
