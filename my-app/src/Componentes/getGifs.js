
const API_KEY = '1sfsJkqT6idZzEhvcKF7PuPBI7ngu7Ch';

export const getGifs = async (searchTerm) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=10&api_key=${API_KEY}`;
  const response = await fetch(url);
  const { data } = await response.json();
  return data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
};

export default getGifs;

  
