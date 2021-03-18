import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import Cards from '../../../shared/Cards/Cards';
import Styles from './GifList.styles';
import Actions from '../../../../actions';

const GifList = ({ gifs }) => {
  const [clickedGif, setClickedGif] = useState(null);

  const savedGifs = Actions.savedGif();
  const savedGifsIds = savedGifs.map((gif) => gif.id);

  useEffect(() => {
    if (clickedGif) {
      Actions.handleClick(clickedGif);
    }
    setClickedGif(null);
  }, [clickedGif]);

  const displayResults = () => {
    return gifs.length > 0 ? (
      <Styles.GifList>
        <Cards
          gifs={gifs}
          savedGifsIds={savedGifsIds}
          onClick={setClickedGif}
        />
      </Styles.GifList>
    ) : (
      <Styles.Welcome>
        <Typography variant="overline" display="block" gutterBottom>
          Any result yet
        </Typography>
      </Styles.Welcome>
    );
  };

  return displayResults();
};

GifList.propTypes = {
  gifs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

GifList.defaultProps = {
  gifs: [],
};

export default GifList;
