'use strict';

require('./style.css');
const Game = require('./game');

const logo = new Image();
logo.src = require('./images/logo.png').default;
logo.width = 600;
logo.height = 160;
document.querySelector('.container').appendChild(logo);

const easyButton = document.querySelector('.easy-button');
const easyImage = new Image();
easyImage.src = require('./images/easy.png').default;
easyImage.width = 200;
easyImage.height = 200;
easyButton.appendChild(easyImage);

const hardButton = document.querySelector('.hard-button');
const hardImage = new Image();
hardImage.src = require('./images/hard.png').default;
hardImage.width = 200;
hardImage.height = 200;
hardButton.appendChild(hardImage);

const epicButton = document.querySelector('.epic-button');
const epicImage = new Image();
epicImage.src = require('./images/epic.png').default;
epicImage.width = 200;
epicImage.height = 200;
epicButton.appendChild(epicImage);

easyButton.addEventListener('click', (e) => {
   e.preventDefault();
   startGame('easy');
});
hardButton.addEventListener('click', (e) => {
   e.preventDefault();
   startGame('hard');
});
epicButton.addEventListener('click', (e) => {
   e.preventDefault();
   startGame('epic');
});

function startGame(mode) {
   const game = new Game({ updateRate: 60, mode });
   game.start();
   window.addEventListener('resize', game.resize);
   document.querySelector('.container').style.display = 'none';
}
/*
const game = new Game({ updateRate: 60 });
game.start();

window.addEventListener('resize', game.resize); */
