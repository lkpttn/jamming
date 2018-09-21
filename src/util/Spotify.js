const token =
    'BQArw6HvZZ5ap2m9FirhVplw9AYd-HBonLIyjWSg-mvvznv9T9S_ve-fhmG7lMynKdCRyWwkJcl9tY0relUtBWCBEQhBdQcDzKXYoXASDOCrplrCl9BvUdNTbNJYh5COujjtVcfQvPrlQ159ZSvg3TTIUhdiY13VZhM';
const clientID = '3a721c39583b4ea89334c18ae7ea0ec1';

const Spotify = {
    getAuthToken() {
        const authURL = 'https://accounts.spotify.com/authorize';
        const queryParams =
            '?response_type=token&&scope=user-read-private%20user-read-email&client_id=';
        const redirectURL = '&redirect_uri=http://localhost:3000/';

        console.log('Query: ' + authURL + queryParams + clientID + redirectURL);

        window.location.assign(authURL + queryParams + clientID + redirectURL);

        // TODO: Pull the token out of the url and assign it to the token variable.
    },

    search(term) {
        const searchURL =
            'https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search';
        const queryParams = '?q=';
        const typeParams = '&type=track';

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
