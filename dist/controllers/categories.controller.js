import { findCategoryById, findAll, addCategory } from '../models/categories.model.js';
const getOne = async (req, res) => {
    //   on verifie que l'id est un nombre
    const idStr = req.params.id;
    if (!idStr || isNaN(Number(idStr))) {
        return res.status(400).send({
            message: "L'ID doit être un nombre valide."
        });
    }
    const id = Number(idStr);
    const data = await findCategoryById(id);
    if (!data)
        return res.status(404).send({ message: 'Catégorie non trouvé' });
    return res.status(200).send(data);
};
const getAll = async (req, res) => {
    const categories = await findAll();
    if (!categories)
        return res.status(404).send({ message: 'Catégories non trouvées' });
    return res.status(200).send(categories);
};
const create = async (req, res) => {
    const c = req.body;
    const result = await addCategory(c.name);
    return res.status(201).send({ message: 'Catégorie ajoutée', data: result });
};
export { getOne, getAll, create };
//# sourceMappingURL=categories.controller.js.map