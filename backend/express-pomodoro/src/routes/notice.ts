import express from 'express'
import {
  createNotice,
  deleteNotice,
  getNotice,
  getNotices,
  renderEditPage,
  renderNewPage,
  updateNotice,
  validator,
} from '../controllers/noticesController'

const noticeRouter = express.Router()

noticeRouter.get('/', getNotices)
noticeRouter.get('/:id/show', getNotice)
noticeRouter.get('/new', renderNewPage)
noticeRouter.post('/create', validator, createNotice)
noticeRouter.get('/:id/edit', renderEditPage)
noticeRouter.patch('/:id/update', validator, updateNotice)
noticeRouter.delete('/:id/delete', deleteNotice)

export default noticeRouter
