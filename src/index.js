import React, { useState } from "react";
import { searchArtist } from "./spotifyService";
import ReactDOM from "react-dom";
import Artist from "./artist";
import useRandomAlbum from './useRandomAlbum';

import "./styles.css";

const renderSearchResults = (searchResults) => {
  if (searchResults.length === 0) {
    return [];
  }

  if (typeof searchResults[0] === "string") {
    return (
      <div>
        <p>{searchResults}</p>
      </div>
    );
  }

  return (
    <div className="Results">
      <h3 className="ResultTitle">Results:</h3>
      {searchResults.map(result => (
        <Artist
          key={result.id}
          name={result.name}
          imageSrc={result.images[0] ? result.images[0].url : undefined}
          popularity={result.popularity}
        />
      ))}
    </div>
  );
};

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const randomAlbumArt = useRandomAlbum();

  const onArtistSearch = event => {
    event.persist();
    setSearchValue(event.target.value);
    searchArtist(event.target.value).then((response) =>
      setSearchResults(response)
    );
  };

  return(
    <div className="App">
      <h2 className="Header">Random Album</h2>
      {
        randomAlbumArt &&
          <img
            src={randomAlbumArt}
            alt="Smiley face"
            width="250vw"
          />
      }
      <h2 className="Header">Search an Artist</h2>
      <input
        className="Input"
        type="text"
        onChange={onArtistSearch}
        placeholder="Enter an Artist"
        value={searchValue}
      />
      {renderSearchResults(searchResults)}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
