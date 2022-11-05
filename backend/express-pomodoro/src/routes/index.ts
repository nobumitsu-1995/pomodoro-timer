import express from 'express'
import passport from 'passport'
import apiRouterV1 from './apiV1'
import noticeRouter from './notice'

const router = express.Router()

router.use('/api/v1', apiRouterV1)
router.use(
  '/',
  passport.authenticate('basic', { session: false }),
  noticeRouter
)

export default router
