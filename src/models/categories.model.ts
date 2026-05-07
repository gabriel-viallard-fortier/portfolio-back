import db from '../config/database.js'

const findCategoryById = async (id: number) => {
  const sql = `SELECT * FROM category WHERE id=?`
  const [rows]: any = await db.pool.query(sql, [id])
  return rows[0] || null
}
const findAll = async () => {
  const sql = `SELECT * FROM category`
  const categories = await db.pool.query(sql)
  return categories[0]
}

const addCategory = async (name: string) => {
  const sql = `INSERT INTO category (name) VALUES (?)`
  const [result]: any = await db.pool.query(sql, [name])
  return result
}
export { findCategoryById, findAll, addCategory }
