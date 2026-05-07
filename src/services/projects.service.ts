import AppError from '../errors/AppError.js'
import type ProjectData from '../types/projects.types.js'
import {
  findOne,
  findAll,
  addOne,
  updateOne,
  removeOne
} from '../models/projects.model.js'

// CRUD
const getOne = async (id: number): Promise<ProjectData | null> => {
  const p = await findOne(id)
  if (!p) throw new AppError('Projet non trouvé', 404)
  return p
}
const getAll = async (): Promise<ProjectData[] | null> => {
  return await findAll()
}
const create = async (project: ProjectData) => {
  return await addOne(project)
}
const update = async (id: number, project: ProjectData) => {
  if (findOne(id) !== null) return await updateOne(id, project)
}
const deleteOne = async (id: number) => {
  const result = await removeOne(id)
  if (!result) throw new AppError('Projet non trouvé', 404)
}

export { getOne, getAll, create, update, deleteOne }
