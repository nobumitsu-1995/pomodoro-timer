import express from 'express'
import noticeRouter from './notice'

const router = express.Router()

router.use('/notices', noticeRouter)

export default router
