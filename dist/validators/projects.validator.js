import { body, validationResult } from 'express-validator';
import { findCategoryById } from '../models/categories.model.js';
const validateProjects = [
    body('title')
        .isString()
        .trim()
        .notEmpty()
        .withMessage('Titre requis')
        .isLength({ min: 2, max: 150 }),
    body('description').isString().isLength({ max: 2000 }),
    // Validation personnalisée pour category_id
    body('category_id')
        .custom(async (value) => {
        const exists = await findCategoryById(Number(value));
        if (!exists) {
            throw new Error(`Catégorie avec l'ID ${value} n'existe pas.`);
        }
        return true;
    })
        .isNumeric()
        .withMessage('category_id doit être un nombre'),
    body('tech_stack')
        .isString()
        .isLength({ max: 255 })
        .withMessage('La stack est trop longue'),
    body('github_url').isURL(),
    body('demo_url').isURL(),
    body('image_url').isURL()
];
export default validateProjects;
//# sourceMappingURL=projects.validator.js.map