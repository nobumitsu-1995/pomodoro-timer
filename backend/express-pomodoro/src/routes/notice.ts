import express from 'express'
import { getNotices } from '../controllers/noticesController'

const router = express.Router()

router.get('/', getNotices)
router.get('/:id')
router.get('/new')
router.post('/create')
router.get('/:id/edit')
router.patch('/:id/update')
router.delete('/:id/delete')

export default router
