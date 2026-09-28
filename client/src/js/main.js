async function loadGames() {
  const container = document.getElementById('game-list');
  try {
    const res = await fetch('/api/games');
    const games = await res.json();

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
  } catch (err) {
    container.textContent = 'Could not load games.';
  }
}

loadGames();