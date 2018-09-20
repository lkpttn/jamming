const token = '';

const Spotify = {
  // Need some method for individual user auth.

  search(term) {
    const searchURL = 'https://api.spotify.com/v1/search';
    const queryParams = '?q=';
    const typeParams = '&type=track';
    // Make a GET request to the Spotify API and search for the term
    return fetch(searchURL + queryParams + term + typeParams, {
      // We need to send a valid access token from the Spotify Account service
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        // Manipulate the json response here and map to an array.
        if (jsonResponse.tracks) {
          console.log(jsonResponse);
          return jsonResponse.tracks.items.map(track => ({
            trackName: track.name,
            artistName: track.artists[0].name,
            albumName: track.album.name,
          }));
        }
      });
  },

  savePlaylist(playlist) {
    // Make a POST request to the Spotify API and save the playlist
  },
};

export default Spotify;
