import express from 'express'
import apiRouterV1 from './apiV1'
import noticeRouter from './notice'

const router = express.Router()

router.use('/api/v1', apiRouterV1)
router.use('/notices', noticeRouter)

export default router
