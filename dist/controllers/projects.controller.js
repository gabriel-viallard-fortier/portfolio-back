import { getOne, getAll, create, update, deleteOne } from '../services/projects.service.js';
const getAllProjects = async (req, res) => {
    const allProjects = await getAll();
    return res.json(allProjects);
};
const getOneProject = async (req, res) => {
    //   on verifie que l'id est un nombre
    const idStr = req.params.id;
    if (!idStr || isNaN(Number(idStr))) {
        return res.status(400).send({
            message: "L'ID doit être un nombre valide."
        });
    }
    const id = Number(idStr);
    const data = await getOne(id);
    return res.json(data);
};
const createProject = async (req, res) => {
    const p = req.body;
    const result = await create(p);
    return res.json({ message: 'Project created successfully', data: result });
};
const updateProject = async (req, res) => {
    // On verifie que l'id est un nombre
    const idStr = req.params.id;
    if (!idStr || isNaN(Number(idStr))) {
        return res.status(400).send({
            message: "L'ID doit être un nombre valide."
        });
    }
    const id = Number(idStr);
    const p = req.body;
    const data = await update(id, p);
    return res.json({ message: 'Projet modifié', data });
};
const deleteOneProject = async (req, res) => {
    const idStr = req.params.id;
    if (!idStr || isNaN(Number(idStr))) {
        return res.status(400).send({ message: "L'ID doit être un nombre valide." });
    }
    const id = Number(idStr);
    const result = await deleteOne(id);
    return res.status(200).send({ message: 'Projet supprimé' });
};
export { getOneProject, getAllProjects, createProject, updateProject, deleteOneProject };
//# sourceMappingURL=projects.controller.js.map