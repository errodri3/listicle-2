const express = require('express');
const path = require('path');
const gamesRouter = require('./routes/games');

const app = express();
const PORT = process.env.PORT || 3000;
const clientDir = path.join(__dirname, '../client/src');

app.use('/images', express.static(path.join(clientDir, 'assets/images')));
app.use(express.static(clientDir));

app.use('/api/games', gamesRouter);

app.get('/games/:slug', (req, res) => {
  res.sendFile(path.join(clientDir, 'detail.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(clientDir, '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});