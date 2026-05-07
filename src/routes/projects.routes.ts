import { Router } from 'express'
import {
  getOneProject,
  getAllProjects,
  createProject,
  updateProject,
  deleteOneProject
} from '../controllers/projects.controller.js'
import validateProjects from '../validators/projects.validator.js'
import validate from '../middlewares/validate.js'
import authenticate from '../middlewares/authenticate.js'
import authorize from '../middlewares/authorize.js'
const router = Router()

router.get('/', getAllProjects)
router.get('/:id', getOneProject)
router.post(
  '/',
  authenticate,
  authorize(['admin']),
  validateProjects,
  validate,
  createProject
)
router.put(
  '/:id',
  authenticate,
  authorize(['admin']),
  validateProjects,
  validate,
  updateProject
)
router.delete('/:id', authenticate, authorize(['admin']), deleteOneProject)

export default router
