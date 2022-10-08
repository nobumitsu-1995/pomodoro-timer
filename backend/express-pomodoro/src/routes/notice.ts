import express from 'express'
import {
  createNotice,
  getNotice,
  getNotices,
  renderEditPage,
  renderNewPage,
  updateNotice,
} from '../controllers/noticesController'

const router = express.Router()

router.get('/', getNotices)
router.get('/:id/show', getNotice)
router.get('/new', renderNewPage)
router.post('/create', createNotice)
router.get('/:id/edit', renderEditPage)
router.patch('/:id/update', updateNotice)
router.delete('/:id/delete')

export default router
