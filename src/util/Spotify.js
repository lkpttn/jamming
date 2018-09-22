let token = '';
const clientID = '3a721c39583b4ea89334c18ae7ea0ec1';

const Spotify = {
    getAuthToken() {
        const authURL = 'https://accounts.spotify.com/authorize';
        const queryParams =
            '?response_type=token&&scope=user-read-private%20playlist-modify-public&client_id=';
        const redirectURL = '&redirect_uri=http://localhost:3000/';

        // Sends an auth request to Spotify and redirects us to a url with an access_token in it.
        window.location.assign(authURL + queryParams + clientID + redirectURL);
    },

    readAuthToken() {
        // Pulls a parameter called #access_token out of the url and assigns it to the token variable.
        const newURL = window.location.href;
        const url = new URL(newURL);
        const paramsString = url.hash;
        const searchParams = new URLSearchParams(paramsString);
        token = searchParams.get('#access_token');
    },

    getUserId() {
        // Make a GET request to Spotify and return the user's id
        const idURL = 'https://api.spotify.com/v1/me';

        // If there's no token, get that first
        if (token === '') {
            this.readAuthToken();
        }

        return fetch(idURL, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Request failed!');
            })
            .then(jsonResponse => {
                return jsonResponse.id;
            });
    },

    search(term) {
        const searchURL =
            'https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search';
        const queryParams = '?q=';
        const typeParams = '&type=track';

        // If token is blank, try to read it from the url.
        // Can I out the auth call in here?
        if (token === '') {
            this.readAuthToken();
        }

        console.log('Query: ' + searchURL + queryParams + term + typeParams);
        // Make a GET request to the Spotify API and search for the term
        return fetch(searchURL + queryParams + term + typeParams, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(response => {
                // If the response is ok, parse the results
                // Otherwise, go get a new auth token.
                if (response.ok) {
                    return response.json();
                } else {
                    this.getAuthToken();
                }
                throw new Error('Request failed!');
            })
            .then(jsonResponse => {
                // Manipulate the json response here and map to an array.
                if (jsonResponse.tracks) {
                    return jsonResponse.tracks.items.map(track => ({
                        id: track.id,
                        uri: track.uri,
                        trackName: track.name,
                        artistName: track.artists[0].name,
                        albumName: track.album.name,
                    }));
                }
            });
    },

    savePlaylist(playlist) {
        // Make a POST request to the Spotify API and save the playlist
        const playlistURL = 'https://api.spotify.com/v1/users/';
        const playlistParams = '/playlists';
        const playlistName = { name: 'Playlist' };

        const addTracksURL = 'https://api.spotify.com/v1/playlists/';
        const trackParams = '/tracks';
        const URIarray = playlist.map(result => {
            return result.uri;
        });
        const playlistURIs = { uris: URIarray };

        // Get the user ID and get started
        // Some real voodoo going on here trying to time out creating the playlist and adding tracks
        // after the user id has been retrieved

        // We could move the ID get request in here too for an even longer promise chain since we aren't using it anywhere else
        // TODO: Think about doing this with async/await
        this.getUserId().then(response => {
            // Create a new playlist
            fetch(playlistURL + response + playlistParams, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(playlistName),
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then(jsonResponse => {
                    // Add tracks to the playlist
                    // Grabbing the id from the jsonReponse
                    fetch(addTracksURL + jsonResponse.id + trackParams, {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(playlistURIs),
                    });
                })
                .then(response => {
                    console.log(response.json());
                });
        });
    },
};

export default Spotify;
