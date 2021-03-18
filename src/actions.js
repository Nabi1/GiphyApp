const LOCAL_STORAGE_GIFS = 'favoritedGifList';

const savedGif = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_GIFS)) || [];

const handleClick = ({ id, url }) => {
  const savedGifs = savedGif();
  const savedGifsIds = savedGifs.map((gif) => gif.id);

  if (savedGifsIds.includes(id)) {
    const newGif = savedGifs.filter((gif) => gif.id !== id);
    localStorage.setItem(LOCAL_STORAGE_GIFS, JSON.stringify(newGif));
  } else {
    savedGifs.push({
      id,
      url,
    });
    localStorage.setItem(LOCAL_STORAGE_GIFS, JSON.stringify(savedGifs));
  }
};

export default {
  handleClick,
  savedGif,
};
