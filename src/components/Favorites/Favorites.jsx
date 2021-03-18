import React, { useState } from 'react';

import Cards from '../shared/Cards/Cards';
import Actions from '../../actions';
import Styles from './Favorite.styles';

const LOCAL_STORAGE_GIFS = 'favoritedGifList';

const Favorites = () => {
  const [list, setList] = useState(Actions.savedGif());
  const savedGifs = Actions.savedGif();
  const savedGifsIds = savedGifs.map((gif) => gif.id);

  const removeSelectedGif = (selectedGif) => {
    const newGif = savedGifs.filter((gif) => gif.id !== selectedGif.id);
    localStorage.setItem(LOCAL_STORAGE_GIFS, JSON.stringify(newGif));
    setList(newGif);
  };

  const displayFavorites = () => {
    return savedGifsIds.length > 0 ? (
      <Cards
        gifs={list}
        savedGifsIds={savedGifsIds}
        onClick={(gifId) => removeSelectedGif(gifId)}
      />
    ) : (
      <Styles.EmptyList>
        <Styles.Typography variant="subtitle1" gutterBottom>
          This list is currently empty
        </Styles.Typography>
        <img
          src="https://media.giphy.com/media/3oFzm6E9URrNKG81Q4/giphy.gif"
          alt="default gif"
        ></img>
      </Styles.EmptyList>
    );
  };

  return (
    <>
      <Styles.Typography variant="h4" gutterBottom>
        You loved them
      </Styles.Typography>

      {displayFavorites()}
    </>
  );
};

export default Favorites;
