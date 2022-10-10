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

const router = express.Router()

router.get('/', getNotices)
router.get('/:id/show', getNotice)
router.get('/new', renderNewPage)
router.post('/create', validator, createNotice)
router.get('/:id/edit', renderEditPage)
router.patch('/:id/update', validator, updateNotice)
router.delete('/:id/delete', deleteNotice)

export default router
