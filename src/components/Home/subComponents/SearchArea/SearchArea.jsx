import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Styles from './SearchArea.styles';

const SearchArea = ({ getGifs }) => {
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const keywordParam = params.get('keyword') || '';

  return (
    <Styles.SearchArea>
      <Styles.TextField
        label="Keyword"
        variant="outlined"
        value={keywordParam}
        onChange={(e) => history.push(`?keyword=${e.target.value}`)}
        onKeyDown={(e) => e.key === 'Enter' && getGifs()}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => getGifs()}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: keywordParam && (
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => history.push(`?keyword=`)}
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Styles.SearchArea>
  );
};

SearchArea.propTypes = {
  getGifs: PropTypes.func.isRequired,
};

export default SearchArea;
