'use strict';

require('./style.css');

const Game = require('./game');
const game = new Game({ updateRate: 60 });
game.start();

window.addEventListener('resize', game.resize);
