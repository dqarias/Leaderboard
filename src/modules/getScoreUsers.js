import {URL_BACKEND,  GamesId } from './baseurl'
const getScoreUsers = async () =>{
    const response = await fetch (`${URL_BACKEND}/${GamesId}/scores/`);
    const userData = await response.json();
    console.log(userData.result);
    return userData.result
}
const getScores = getScoreUsers()
console.log(getScores)
export default getScoreUsers;