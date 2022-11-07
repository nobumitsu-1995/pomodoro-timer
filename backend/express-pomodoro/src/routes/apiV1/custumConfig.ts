import express from 'express'
import {
  createCustumConfig,
  deleteCustumConfig,
  getCustumConfig,
  getCustumConfigs,
  updateCustumConfig,
  validator,
} from '../../controllers/api/v1/custumConfigController'

const router = express.Router()

router.get('/', getCustumConfigs)
router.get('/:id/show', getCustumConfig)
router.post('/create', validator, createCustumConfig)
router.patch('/:id/update', validator, updateCustumConfig)
router.delete('/:id/delete', deleteCustumConfig)

export default router
