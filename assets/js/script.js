fetch("/assets/json/games.json")
  .then((res) => res.json())
  .then((games) => {
    // Loop through each game and create a new game element for it
    games.forEach((game) => {
      const game105 = document.createElement("div");
      game105.innerHTML = `<div class="gamelist">${game.name}</div>`;
      document.getElementById("games").appendChild(game105);
      // Add click event listener to th e game element to show the game in the game container
      game105.onclick = (e) => {
        width = screen.width;
        height = screen.height;
        var html = `<html>

<head>
<title> </title>
	<link rel="shortcut icon" href="https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico">
<style>
html, body{
  background-color:#27262b; margin:0px; padding:0px;
}
</style>
</head>
<body>
	<iframe src="${game.root}/${game.file}" frameborder="0" scrolling="no" width="100%" height="100%" allowfullscreen></iframe><script src="/assets/js/Sebastian-105.js" async defer></script><script src="https://unpkg.com/jquery"></script><script src="/assets/js/jQuery.min.js"></script>
</body>

</html>
`;

        var aboutblank = window.open("", "Games");
        aboutblank.document.write(html);
      };
    });
  })
  .catch((e) => {
    alert("Could not load games\n-Sebastian-105");
    alert(e + "\n-Sebastian-105");
  });
