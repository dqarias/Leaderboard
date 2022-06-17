import './style.css';
import addNewScoreUser from './modules/addScoreUser'
import getScoreUsers from './modules/getScoreUsers'

const btnAddUser = document.getElementById('add_score')
const btnRefreshScore = document.getElementById('refresh')
const scoresUsers = document.querySelector('.scores__body');
const inputUser = document.getElementById('name')
const inputScore = document.getElementById('score')

const addScore = () =>{
  if(inputUser.value && inputScore.value){
    addNewScoreUser(inputUser.value, Number(inputScore.value) )
  }
  inputUser.value = '';
  inputScore.value = '';
}

const renderScores = () => {
  const userScore = getScoreUsers();
  console.log("userscore", userScore)
  scoresUsers.innerHTML='';
  userScore.then((scores)=>{
    scores.sort((a, b) => b.score - a.score);
    scores.forEach((element) => {
      scoresUsers.innerHTML += `<li class="scores__list">${element.user} : ${element.score}</p></li>`;
    });
  })
}

btnAddUser.addEventListener('click', addScore)
btnRefreshScore.addEventListener('click', renderScores)