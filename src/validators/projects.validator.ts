import { body } from 'express-validator'

const validateProjects = [
  body('title')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Titre requis')
    .isLength({ min: 2, max: 150 }),
  body('description').isString().isLength({ max: 2000 }),
  body('category_id')
    .isNumeric()
    .withMessage('category_id doit être un nombre'),
  body('tech_stack')
    .isString()
    .isLength({ max: 255 })
    .withMessage('La stack est trop longue'),
  body('github_url').isURL(),
  body('demo_url').isURL(),
  body('image_url').isURL()
]

export default validateProjects
