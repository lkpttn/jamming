const token =
  'BQDDlmmRk_FGzQo4A-9OhiQQFF2bMmIyteYiBuFsvGhxf96-M9PCkuFu0INMg9rzTUS_9o41F23tRmSy20vMH0j4Ks1JqCtv988jspzLD0txA2CUbCrTyG6M7eueWt_tLJ1EPUc7xyWZ6eK6ja0RMfAsZy6BeobOziav8eB-GFaWc3BDBbet40E7f7451CFJkgWjsepH_TLYw2HFiPKrtUReLsYYoGLWCsp-nSTNOs_QcAng5ynu';

const Spotify = {
  // Need some method for individual user auth.

  search(term) {
    const searchURL = 'https://api.spotify.com/v1/search';
    const queryParams = '?q=';
    const typeParams = '&type=track';

    console.log('Query: ' + searchURL + queryParams + term + typeParams);
    // Make a GET request to the Spotify API and search for the term
    return fetch(searchURL + queryParams + term + typeParams, {
      // We need to send a valid access token from the Spotify Account service
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        if (response.ok) {
          console.log('Request ok');
          return response.json();
        }
        throw new Error('Request failed!');
      })
      .then(jsonResponse => {
        // Manipulate the json response here and map to an array.
        if (jsonResponse.tracks) {
          console.log(jsonResponse);
          return jsonResponse.tracks.items.map(track => ({
            id: track.id,
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
