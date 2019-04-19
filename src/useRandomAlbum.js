import { useState, useEffect } from 'react';
import { getRandomAlbum } from './spotifyService';

function useRandomAlbum() {
  const [randomAlbumArt, setRandomAlbumArt] = useState(undefined);

  useEffect(() => {
    const fetchRandomAlbum = async () => {
      const randAlbum = await getRandomAlbum();
      setRandomAlbumArt(randAlbum);
    };
    fetchRandomAlbum();
  }, []);

  return randomAlbumArt;
}

export default useRandomAlbum;
