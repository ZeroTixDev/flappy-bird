'use strict';

require('./style.css');
const Game = require('./game');

const music = document.createElement('audio');
music.src = require('./assets/music/song.mp3').default;
music.setAttribute('preload', 'auto');
music.setAttribute('controls', 'none');
music.style.display = 'none';
music.loop = true;
music.volume = 0.5;
document.body.appendChild(music);

const background = document.createElement('audio');
background.src = require('./assets/music/background.mp3').default;
background.setAttribute('preload', 'auto');
background.setAttribute('controls', 'none');
background.style.display = 'none';
background.loop = true;
background.volume = 1;
document.body.appendChild(background);

const logo = new Image();
logo.src = require('./assets/images/logo.png').default;
logo.width = 600;
logo.height = 160;
document.querySelector('.container').appendChild(logo);

const easyButton = document.querySelector('.easy-button');
const easyImage = new Image();
easyImage.src = require('./assets/images/easy.png').default;
easyImage.width = 200;
easyImage.height = 200;
easyButton.appendChild(easyImage);

const hardButton = document.querySelector('.hard-button');
const hardImage = new Image();
hardImage.src = require('./assets/images/hard.png').default;
hardImage.width = 200;
hardImage.height = 200;
hardButton.appendChild(hardImage);

const epicButton = document.querySelector('.epic-button');
const epicImage = new Image();
epicImage.src = require('./assets/images/epic.png').default;
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
   if (mode === 'epic') {
      music.play();
   } else {
      background.play();
   }
}
/*
const game = new Game({ updateRate: 60 });
game.start();

window.addEventListener('resize', game.resize); */
