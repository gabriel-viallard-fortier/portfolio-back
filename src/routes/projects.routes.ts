import { Router } from 'express'
import {
  getOne,
  getAll,
  create,
  update
} from '../controllers/projects.controller.js'
import validateProjects from '../validators/projects.validator.js'
import validate from '../middlewares/validate.js'

const router = Router()

router.get('/', getAll)
router.get('/:id', getOne)

router.post('/create', validateProjects, validate, create)
router.put('/:id', validateProjects, validate, update)

export default router
