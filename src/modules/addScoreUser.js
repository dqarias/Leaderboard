import { URL_BACKEND, GamesId } from './baseurl.js';

const addNewScoreUser = async (user, score) => {
  const response = await fetch(`${URL_BACKEND}/${GamesId}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user, score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const messageAddScore = await response.json();
  return messageAddScore;
};

export default addNewScoreUser;