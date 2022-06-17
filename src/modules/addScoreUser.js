import {URL_BACKEND,  GamesId } from './baseurl'
const addNewScoreUser = async (user, score) =>{
    const response = await fetch (`${URL_BACKEND}/${GamesId}/scores/`,{
        method: 'POST',
        body: JSON.stringify({
          user, score
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    const messageAddScore = await response.json();
    console.log("Print message....")
    console.log(messageAddScore)
    return messageAddScore
}

export default addNewScoreUser;