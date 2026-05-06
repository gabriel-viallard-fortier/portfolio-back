import db from '../config/database.js'
import type ProjectData from '../types/projects.types.js'

const findAll = async () => {
  const sql = `SELECT * FROM projects ORDER BY created_at DESC`
  const [rows]: any = await db.pool.query(sql)
  if (rows.length > 0) return rows
  return null
}

const findOne = async (id: number) => {
  const sql = `SELECT * FROM projects WHERE id=?`
  const rows: any = await db.pool.query(sql, [id])
  return rows
}

const addOne = async (projectData: ProjectData) => {
  const sql = `INSERT INTO projects (title, description, category_id, tech_stack, github_url, demo_url, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)`
  return await db.pool.query(sql, [
    projectData.title,
    projectData.description,
    projectData.category_id,
    projectData.tech_stack,
    projectData.github_url,
    projectData.demo_url,
    projectData.image_url
  ])
}

const updateOne = async (id: number, projectData: ProjectData) => {
  const sql = `UPDATE projects SET title=?, description=?, category_id=?, tech_stack=?, github_url=?, demo_url=?, image_url=? WHERE id=?`
  return await db.pool.query(sql, [
    projectData.title,
    projectData.description,
    projectData.category_id,
    projectData.tech_stack,
    projectData.github_url,
    projectData.demo_url,
    projectData.image_url,
    id
  ])
}
export { findOne, findAll, addOne, updateOne }
