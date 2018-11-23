import React, { Component } from "react";
import searchArtist from "./spotifyService";
import ReactDOM from "react-dom";
import Artist from "./artist";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      searchResults: []
    };
  }

  onArtistSearch = event => {
    event.persist();
    this.setState({ searchValue: event.target.value });
    searchArtist(event.target.value).then(response =>
      this.setState({ searchResults: response })
    );
  };

  renderSearchResults = () => {
    if (this.state.searchResults.length === 0) {
      return [];
    }

    if (typeof this.state.searchResults[0] === "string") {
      return (
        <div>
          <p>{this.state.searchResults}</p>
        </div>
      );
    }

    return (
      <div className="Results">
        <h3 className="ResultTitle">Results:</h3>
        {this.state.searchResults.map(result => (
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

  render() {
    return (
      <div className="App">
        <h1 className="Header">Search an Artist</h1>
        <input
          className="Input"
          type="text"
          onChange={this.onArtistSearch}
          placeholder="Enter an Artist"
        />
        {this.renderSearchResults()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
