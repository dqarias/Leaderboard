import {URL_BACKEND} from './baseurl'

const createNewGame = async () =>{
    const response = await fetch (URL_BACKEND,{
        method: 'POST',
        body: JSON.stringify({
          name : 'PES2022'
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    const gameId = await response.json();
    console.log(gameId);
    return gameId
}

export default createNewGame;