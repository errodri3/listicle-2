const pool = require('./database');
const games = require('../data/games');

async function reset() {
  await pool.query('DROP TABLE IF EXISTS games');

  await pool.query(`
    CREATE TABLE games (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(100) UNIQUE NOT NULL,
      name VARCHAR(150) NOT NULL,
      image VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      category VARCHAR(50) NOT NULL,
      players VARCHAR(20) NOT NULL
    )
  `);

  for (const g of games) {
    await pool.query(
      `INSERT INTO games (slug, name, image, description, category, players)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [g.id, g.name, g.image, g.description, g.category, g.players]
    );
  }

  console.log(`Seeded ${games.length} games`);
  await pool.end();
}

reset().catch(err => {
  console.error(err.message);
  process.exit(1);
});