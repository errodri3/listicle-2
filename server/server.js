const express = require('express');
const path = require('path');
const gamesRouter = require('./routes/games');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/images', express.static(path.join(__dirname, '../client/src/assets/images')));
app.use(express.static(path.join(__dirname, '../client/src')));

app.use('/api/games', gamesRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});