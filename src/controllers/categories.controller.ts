import type { Request, Response } from 'express'
import {
  findCategoryById,
  findAll,
  addCategory
} from '../models/categories.model.js'

const getOne = async (req: Request, res: Response) => {
  //   on verifie que l'id est un nombre
  const idStr = req.params.id as string

  if (!idStr || isNaN(Number(idStr))) {
    return res.status(400).send({
      message: "L'ID doit être un nombre valide."
    })
  }

  const id = Number(idStr)
  const data = await findCategoryById(id)
  if (!data) return res.status(404).send({ message: 'Catégorie non trouvé' })
  return res.status(200).send(data)
}
const getAll = async (req: Request, res: Response) => {
  const categories = await findAll()
  if (!categories)
    return res.status(404).send({ message: 'Catégories non trouvées' })
  return res.status(200).send(categories)
}
const create = async (req: Request, res: Response) => {
  const c = req.body as { name: string }
  const result = await addCategory(c.name)
  return res.status(201).send({ message: 'Catégorie ajoutée', data: result })
}

export { getOne, getAll, create }
