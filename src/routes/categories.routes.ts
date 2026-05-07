import { Router } from 'express'
import { getOne, getAll, create } from '../controllers/categories.controller.js'

const router = Router()

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', create)

export default router
