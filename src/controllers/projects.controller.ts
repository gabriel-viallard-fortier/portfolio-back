import type { Request, Response } from 'express'
import type ProjectData from '../types/projects.types.js'
import {
  findOne,
  findAll,
  addOne,
  updateOne
} from '../models/projects.model.js'

const getAll = async (req: Request, res: Response) => {
  const data = await findAll()
  return res.status(200).send(data)
}

const getOne = async (req: Request, res: Response) => {
  //   on verifie que l'id est un nombre
  const idStr = req.query.id as string

  if (!idStr || isNaN(Number(idStr))) {
    return res.status(400).send({
      message: "L'ID doit être un nombre valide."
    })
  }

  const id = Number(idStr)

  const data = await findOne(id)
  if (!data) return res.status(404).send({ message: 'Projet non trouvé' })
  console.log(data)
  return res.status(200).send(data)
}

const create = async (req: Request, res: Response) => {
  const p = req.body as ProjectData
  const result = await addOne(p)
  return res
    .status(201)
    .send({ message: 'Project created successfully', data: result })
}

const update = async (req: Request, res: Response) => {
  // On verifie que l'id est un nombre
  const idStr = req.query.id as string

  if (!idStr || isNaN(Number(idStr))) {
    return res.status(400).send({
      message: "L'ID doit être un nombre valide."
    })
  }
  const id = Number(idStr)

  // Validation du corps de la requête
  if (!req.body || typeof req.body !== 'object') {
    return res.status(400).send({
      message: 'Le corps de la demande doit être un objet JSON valide.'
    })
  }
  const p = req.body as ProjectData

  const data = await updateOne(id, p)
  return res.status(200).send({ message: 'Projet modifié', data })
}

export { getOne, getAll, create, update }
