import React from "react";

const defaultImage =
  "https://purepng.com/public/uploads/large/purepng.com-cd-dvdcompact-discdvdcddvd-storagedisc-17015283459240fu8t.png";

const Artist = ({ name, imageSrc = defaultImage, popularity }) => (
  <div className="ArtistContainer">
    <img src={imageSrc} alt={name} className="ArtistImage" />
    <div className="ArtistDetailsContainer">
      <p className="ArtistName">{name}</p>
      <p className="ArtistPopularity">{popularity}</p>
    </div>
  </div>
);

export default Artist;
