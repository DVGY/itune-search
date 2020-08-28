import { create } from 'apisauce';

const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com';

const searchMusicAPI = async (searchQuery) => {
  const api = create({
    baseURL: `${CORS_ANYWHERE}/https://itunes.apple.com`,
  });

  return api.get(`/search?term=${searchQuery}`);
  //Try to return result after await
};

export default searchMusicAPI;
