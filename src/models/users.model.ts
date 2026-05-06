import db from '../config/database.js'

const findUserByEmail = async (email: string) => {
  const sql = `SELECT * FROM users WHERE email=?`
  const [rows]: any = await db.pool.query(sql, [email])

  if (rows && rows.length > 0) return rows[0]
  else return null
}

export { findUserByEmail }
