import { Router } from 'express';
import { login } from '../controllers/auth.controller.js';
import validateAuth from '../validators/auth.validator.js';
import validate from '../middlewares/validate.js';
const router = Router();
router.post('/login', validateAuth, validate, login);
export default router;
//# sourceMappingURL=auth.routes.js.map