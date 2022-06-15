import './style.css';

const result = [
  {
    user: 'John Doe',
    score: 42,
  },
  {
    user: 'Peter Parker',
    score: 35,
  },
  {
    user: 'Wonder Woman',
    score: 50,
  },
];

const scores = document.querySelector('.scores__body');

result.forEach((element) => {
  scores.innerHTML += `<li class="scores__list">${element.user} : ${element.score}</p></li>`;
});
