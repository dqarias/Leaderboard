import { URL_BACKEND, GamesId } from './baseurl.js';

const getScoreUsers = async () => {
  const response = await fetch(`${URL_BACKEND}/${GamesId}/scores/`);
  const userData = await response.json();
  return userData.result;
};

export default getScoreUsers;