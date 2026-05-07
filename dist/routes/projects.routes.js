import { Router } from 'express';
import { getOneProject, getAllProjects, createProject, updateProject, deleteOneProject } from '../controllers/projects.controller.js';
import validateProjects from '../validators/projects.validator.js';
import validate from '../middlewares/validate.js';
import authenticate from '../middlewares/authenticate.js';
const router = Router();
router.get('/', getAllProjects);
router.get('/:id', getOneProject);
router.post('/', authenticate, validateProjects, validate, createProject);
router.put('/:id', authenticate, validateProjects, validate, updateProject);
router.delete('/:id', authenticate, deleteOneProject);
export default router;
//# sourceMappingURL=projects.routes.js.map