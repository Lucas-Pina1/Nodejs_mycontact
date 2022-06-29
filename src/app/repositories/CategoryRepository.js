const db = require('../../database');

class CategoriesRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM categories ORDER BY name');
    return rows;
  }

  async create({ name }) {
    const [row] = await db.query(`
    INSERT INTO categories(name)
    VALUE($1)
    RETURNING *
    `, [name]);
    return row;
  }
}

module.exports = new CategoriesRepository();
