import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import addNewScoreUser from './modules/addScoreUser.js';
import getScoreUsers from './modules/getScoreUsers.js';

const btnAddUser = document.getElementById('add_score');
const btnRefreshScore = document.getElementById('refresh');
const scoresUsers = document.querySelector('.scores__body');
const inputUser = document.getElementById('name');
const inputScore = document.getElementById('score');

const addScore = () => {
  if (inputUser.value && inputScore.value) {
    addNewScoreUser(inputUser.value, Number(inputScore.value));
  }
  inputUser.value = '';
  inputScore.value = '';
};

const renderScores = () => {
  const userScore = getScoreUsers();
  scoresUsers.innerHTML = '';
  userScore.then((scores) => {
    scores.sort((a, b) => b.score - a.score);
    scores.forEach((element) => {
      scoresUsers.innerHTML += `<li class="scores__list"><p class="scores__list-p"><span class="scores__list-user">${element.user}</span> <span class="scores__list-score"><i class="icon-Medal fa-solid fa-award"></i>${element.score}</span> </p></li>`;
    });
  });
};

btnAddUser.addEventListener('click', addScore);
btnRefreshScore.addEventListener('click', renderScores);