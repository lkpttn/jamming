let token = '';
const clientID = '3a721c39583b4ea89334c18ae7ea0ec1';

const Spotify = {
    getAuthToken() {
        const authURL = 'https://accounts.spotify.com/authorize';
        const queryParams =
            '?response_type=token&&scope=user-read-private%20user-read-email&client_id=';
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
                console.log(response);
                // TODO: If there's no user token, go retrieve one.
                // TODO: Clean up responses and error messages.
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
