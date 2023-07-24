
fetch('/assets/json/games.json')
  .then((res) => res.json())
  .then((games) => {
    // Loop through each game and create a new game element for it
    games.forEach((game) => {
      const game105 = document.createElement('div');
      game105.className = 'games';
      game105.innerHTML = `${game.name}`;
      gamesContainer.appendChild(game105);
      // Add click event listener to the game element to show the game in the game container
      game105.onclick = (e) => {
      };

      // Add click event listener to the back button in the game container to go back to the games list
      gameNav.querySelector('#back').addEventListener('click', (e) => {
      });

      // Add click event listener to the fullscreen button in the game container to enter fullscreen mode
      gameNav.querySelector('#fullscreen').addEventListener('click', (e) => {
        if (!document.fullscreenElement) {
          gameFrame.requestFullscreen();
        }
      });
    });
  })
  .catch((e) => {
    alert('Could not load games\n-Sebastian-105');
    alert(e + "\n-Sebastian-105");
    location.replace('./file.html');
  });

