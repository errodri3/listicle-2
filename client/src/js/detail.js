async function loadGame() {
  const container = document.getElementById('game-detail');
  const slug = window.location.pathname.split('/').pop();

  try {
    const res = await fetch(`/api/games/${encodeURIComponent(slug)}`);
    if (!res.ok) {
      container.textContent = 'Game not found.';
      return;
    }
    const game = await res.json();
    document.title = game.name;

    const title = document.createElement('h1');
    title.textContent = game.name;

    const img = document.createElement('img');
    img.src = game.image;
    img.alt = game.name;
    img.style.maxWidth = '300px';

    const desc = document.createElement('p');
    desc.textContent = game.description;

    const category = document.createElement('p');
    const categoryLabel = document.createElement('strong');
    categoryLabel.textContent = 'Category: ';
    category.append(categoryLabel, game.category);

    const players = document.createElement('p');
    const playersLabel = document.createElement('strong');
    playersLabel.textContent = 'Players: ';
    players.append(playersLabel, game.players);

    container.append(title, img, desc, category, players);
  } catch (err) {
    container.textContent = 'Could not load game.';
  }
}

loadGame();