import express from 'express'
import { getNotices } from '../../../controllers/api/v1/noticesController'

const v1NoticeRouter = express.Router()

//notices
v1NoticeRouter.get('/notices', getNotices)

export default v1NoticeRouter
