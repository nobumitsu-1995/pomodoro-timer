import express from 'express'
import { getNotices } from '../controllers/api/v1/noticesController'
const router = express.Router()

router.get('/notices', getNotices)

export default router
