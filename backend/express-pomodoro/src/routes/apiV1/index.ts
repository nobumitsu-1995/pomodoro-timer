import express from 'express'
import noticeRoute from './notice'
import custumConfigRoute from './custumConfig'
import { authenticateJWT } from '../../controllers/api/v1/authController'

const router = express.Router()

router.use('/notices', noticeRoute)
router.use('/custum_config', authenticateJWT, custumConfigRoute)

export default router
