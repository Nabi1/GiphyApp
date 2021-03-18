import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Home.styles';
import SearchArea from './subComponents/SearchArea/SearchArea';
import GifsList from './subComponents/GifList/GifList';

const Home = ({ getGifs, gifs, keywordParam }) => {
  return (
    <Styles.Paper elevation={3}>
      <div>
        <SearchArea getGifs={getGifs} />
        <GifsList gifs={gifs} />
      </div>
    </Styles.Paper>
  );
};

Home.propTypes = {
  getGifs: PropTypes.func.isRequired,
  keywordParam: PropTypes.string.isRequired,
  gifs: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default Home;
