'use strict';

const Bird = require('./bird');
const Pipe = require('./pipe');

module.exports = class Game {
   constructor({ updateRate = 60 }) {
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.resize();
      document.body.appendChild(this.canvas);
      this.bird = new Bird(this.canvas.width / 2, this.canvas.height / 2);
      this.updateRate = updateRate;
      this.tick = 0;
      this.pipes = [];
      this.score = 0;
      this.controls = {
         32: 'up',
      };
   }
   resize() {
      this.canvas.height = window.innerHeight;
      this.canvas.width = window.innerWidth;
   }
   restart() {
      this.bird.die(this.canvas.height);
      this.score = 0;
      this.pipes = [];
   }
   start() {
      this.start = Date.now();
      (function run() {
         this.update();
         this.render();
         requestAnimationFrame(run.bind(this));
      }.bind(this)());
      window.addEventListener('keydown', this.trackKeys.bind(this));
      window.addEventListener('keyup', this.trackKeys.bind(this));
   }
   trackKeys({ keyCode, type, repeat }) {
      if (repeat) return;
      if (this.controls[keyCode] !== undefined && type === 'keydown') {
         this.bird.control(this.controls[keyCode]);
      }
   }
   update() {
      const expectedTick = Math.ceil((Date.now() - this.start) * (this.updateRate / 1000));
      while (this.tick < expectedTick) {
         if (this.tick % 45 === 0) {
            this.pipes.push(Pipe.create(this.canvas.width * 2, this.canvas.height));
         }
         for (let i = this.pipes.length - 1; i >= 0; i--) {
            const pipe = this.pipes[i];
            if (pipe.update(this.bird)) {
               this.restart();
               break;
            }
            if (this.bird.x + this.bird.size > pipe.x && !pipe.counted) {
               this.score++;
               pipe.counted = true;
            }
            if (pipe.x < 0) {
               this.pipes.splice(i, 1);
            }
         }
         this.bird.update();
         if (this.bird.y + this.bird.size / 2 > this.canvas.height) {
            this.bird.y = this.canvas.height - this.bird.size / 2;
         }
         if (this.bird.y - this.bird.size / 2 < 0) {
            this.bird.y = this.bird.size / 2;
         }
         this.tick++;
      }
   }
   render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.bird.render(this.ctx);
      for (const pipe of this.pipes) {
         pipe.render(this.ctx);
      }
      this.ctx.fillStyle = 'white';
      this.ctx.font = '70px Arial';
      this.ctx.fillText(this.score, this.canvas.width / 2, 50);
   }
};
