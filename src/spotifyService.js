// See readme for bearer token
const bearerToken = "<<BEARER_TOKEN>>";

function getUrl(artist) {
  let formattedArtist = artist.toLowerCase().replace(/ /g, "%20");
  return `https://api.spotify.com/v1/search?q=${formattedArtist}&type=artist`;
}

async function searchArtist(artist) {
  if (!artist) {
    return [];
  }

  return fetch(getUrl(artist), {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`
    }
  })
    .then(response => {
      if (response.status !== 200) {
        throw response();
      }
      return response.json();
    })
    .then(data => data.artists.items)
    .catch(errorMessage => {
      return [`Error getting artists message is '${errorMessage}'`];
    });
}

export default searchArtist;
