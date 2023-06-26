const { pool } = require('./conexiones');

const getPosts = async () => {
  const result = await pool.query('SELECT * FROM posts');
  return result.rows; 
}

const agregarPost = async (titulo, img, descripcion, like) => {
  const result = await pool.query('INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)', [titulo, img, descripcion, like]);
  return result.rows;
}

module.exports = {
  getPosts,
  agregarPost
}