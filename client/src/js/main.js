let allGames = [];

function renderGames(games) {
  const container = document.getElementById('game-list');
  container.textContent = '';

  if (games.length === 0) {
    container.textContent = 'No games match your search.';
    return;
  }

  games.forEach(game => {
    const card = document.createElement('article');

    const img = document.createElement('img');
    img.src = game.image;
    img.alt = game.name;
    img.style.width = '100%';
    img.style.maxHeight = '200px';
    img.style.objectFit = 'cover';

    const heading = document.createElement('h3');
    const link = document.createElement('a');
    link.href = `/games/${encodeURIComponent(game.slug)}`;
    link.textContent = game.name;
    heading.appendChild(link);

    const desc = document.createElement('p');
    desc.textContent = game.description;

    card.append(img, heading, desc);
    container.appendChild(card);
  });
}

async function loadGames() {
  const container = document.getElementById('game-list');
  try {
    const res = await fetch('/api/games');
    allGames = await res.json();
    renderGames(allGames);
  } catch (err) {
    container.textContent = 'Could not load games.';
  }
}

document.getElementById('search-input').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = allGames.filter(game =>
    game.name.toLowerCase().includes(term) ||
    game.category.toLowerCase().includes(term)
  );
  renderGames(filtered);
});

loadGames();