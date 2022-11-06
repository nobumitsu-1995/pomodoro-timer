import express from 'express'
import passport from 'passport'
import { authenticateJWT } from '../controllers/api/v1/authController'
import apiRouterV1 from './apiV1'
import noticeRouter from './notice'

const router = express.Router()

router.use('/api/v1', authenticateJWT, apiRouterV1)
router.use(
  '/notices',
  passport.authenticate('basic', { session: false }),
  noticeRouter
)
router.use('/', (req, res) => {
  res.render('index')
})

export default router
