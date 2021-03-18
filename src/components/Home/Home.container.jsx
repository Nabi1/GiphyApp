import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Home from './Home';

// API_KEY should be listed in setting.dist or env.dist file
const API_KEY = 'XEAkZeR976diLYKcNhMlxn8S9Uvbbfza&rating=pg&q=';
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';
const API_URL = `${BASE_URL}?api_key=${API_KEY}`;
const RESULT_MAX_LENGTH = 20;

const HomeContainer = () => {
  const [gifs, setGifs] = useState([]);

  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const keywordParam = params.get('keyword');

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const apiUrl = `${API_URL}${keywordParam || ''}&limit=${RESULT_MAX_LENGTH}`;
    const response = await fetch(apiUrl, { mode: 'cors' });
    const data = await response.json();
    const gifData = await data.data;
    console.log(gifData);
    if (gifData) {
      const gifsList = gifData.map((gif) => ({
        url: gif.images.fixed_height.url,
        id: gif.id,
      }));
      setGifs(gifsList);
    }
  };

  return <Home getGifs={getGifs} gifs={gifs} keywordParam={keywordParam} />;
};

export default HomeContainer;
