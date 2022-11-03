import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '29769386-c1c38227ab8ea455d4e3063b7';
const HITS_PER_PAGE = 12;

  const fetchImages = async (query, page) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=${HITS_PER_PAGE}&page=${page}`
   );
    const normalizeData = response.data.hits.map(
      ({ id, largeImageURL, tags, webformatURL }) => ({
        id,
        largeImageURL,
        tags,
        webformatURL,
      })
    );
   return normalizeData;
};
const api = {
  fetchImages,
};

export default api;
