var playlist = {
  artistName: "songTitle"
}

objects updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {[artistName]: songTitle}
}
