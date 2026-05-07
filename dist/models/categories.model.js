import db from '../config/database.js';
const findCategoryById = async (id) => {
    const sql = `SELECT * FROM category WHERE id=?`;
    const [rows] = await db.pool.query(sql, [id]);
    return rows[0] || null;
};
const findAll = async () => {
    const sql = `SELECT * FROM category`;
    const categories = await db.pool.query(sql);
    return categories[0];
};
const addCategory = async (name) => {
    const sql = `INSERT INTO category (name) VALUES (?)`;
    const [result] = await db.pool.query(sql, [name]);
    return result;
};
export { findCategoryById, findAll, addCategory };
//# sourceMappingURL=categories.model.js.map