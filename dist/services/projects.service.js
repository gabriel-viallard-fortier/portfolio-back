import AppError from '../errors/AppError.js';
import { findOne, findAll, addOne, updateOne, removeOne } from '../models/projects.model.js';
// CRUD
const getOne = async (id) => {
    const p = await findOne(id);
    if (!p)
        throw new AppError('Projet non trouvé', 404);
    return p;
};
const getAll = async () => {
    return await findAll();
};
const create = async (project) => {
    return await addOne(project);
};
const update = async (id, project) => {
    if (findOne(id) !== null)
        return await updateOne(id, project);
};
const deleteOne = async (id) => {
    return await removeOne(id);
};
export { getOne, getAll, create, update, deleteOne };
//# sourceMappingURL=projects.service.js.map