import { URL_BACKEND } from './baseurl.js';

const createNewGame = async () => {
  const response = await fetch(URL_BACKEND, {
    method: 'POST',
    body: JSON.stringify({
      name: 'PES2022',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const gameId = await response.json();
  return gameId;
};

export default createNewGame;