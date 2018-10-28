var playlist = {
  artistName: "songTitle"
}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {["My Bloody Valentine", "Phil Ochs", "Slowdive"]: songTitle}
}
