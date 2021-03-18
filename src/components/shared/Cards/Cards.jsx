import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Styles from './Cards.styles';

const Cards = ({ gifs, onClick, savedGifsIds }) => {
  return gifs.map((gif) => {
    const icon = savedGifsIds.includes(gif.id) ? <FavoriteIcon /> : <AddIcon />;

    return (
      <Styles.GifList key={gif.id}>
        <Styles.Card>
          <img src={gif.url} alt="gif" />
          <Styles.CardActions>
            <Styles.IconButton
              aria-label="add or remove from favorites"
              onClick={() => onClick(gif)}
            >
              {icon}
            </Styles.IconButton>
          </Styles.CardActions>
        </Styles.Card>
      </Styles.GifList>
    );
  });
};

Cards.propTypes = {
  onClick: PropTypes.func.isRequired,
  gifs: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
  savedGifsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Cards;
