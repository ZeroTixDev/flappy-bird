'use strict';

const Bird = require('./bird');
const Pipe = require('./pipe');

module.exports = class Game {
   constructor({ updateRate = 60, mode = 'easy' }) {
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
         87: 'up',
         38: 'up',
         83: 'down',
         40: 'down',
      };
      this.deathPauseTime = 0.5;
      this.paused = false;
      this.lastTime = 0;
      this.defaults = {
         pipeSpeed: 10,
         pipeSpawnRate: 60,
      };
      this.mode = mode;
      if (this.mode === 'easy') {
         this.defaults.pipeSpeed = 15;
         this.defaults.pipeSpawnRate = this.updateRate * 0.75;
      } else if (this.mode === 'hard') {
         this.defaults.pipeSpeed = 20;
         this.defaults.pipeSpawnRate = this.updateRate / 2;
      } else if (this.mode === 'epic') {
         this.defaults.pipeSpeed = 30;
         this.defaults.pipeSpawnRate = 1;
      }
      this.pipeSpeed = this.defaults.pipeSpeed;
      this.pipeSpawnRate = this.defaults.pipeSpawnRate;
      this.speedSeconds = 4;
   }
   resize() {
      if (!this.canvas) {
         return;
      }
      this.canvas.height = window.innerHeight;
      this.canvas.width = window.innerWidth;
   }
   restart() {
      this.bird.respawn(this.canvas.height);
      this.score = 0;
      this.pipes = [];
      this.paused = false;
      for (const key of Object.keys(this.defaults)) {
         this[key] = this.defaults[key];
      }
   }
   start() {
      (function run(time = 0) {
         if (time === 0) {
            this.start = Date.now();
         }
         this.update(time);
         this.render();
         requestAnimationFrame(run.bind(this));
      }.bind(this)());
      window.addEventListener('keydown', this.trackKeys.bind(this));
      window.addEventListener('keyup', this.trackKeys.bind(this));
   }
   trackKeys({ keyCode, type, repeat }) {
      if (repeat) return;
      if (this.controls[keyCode] !== undefined) {
         this.bird.control(this.controls[keyCode], type === 'keydown');
      }
   }
   update(time) {
      const delta = (time - this.lastTime) / 1000;
      this.lastTime = time;
      const expectedTick = Math.ceil((Date.now() - this.start) * (this.updateRate / 1000));
      while (this.tick < expectedTick) {
         if (this.tick % (this.updateRate * this.speedSeconds) === 0 && this.mode !== 'epic') {
            this.pipeSpawnRate =
               this.pipeSpawnRate !== 10 && this.pipeSpawnRate > 5 ? this.pipeSpawnRate - 5 : this.pipeSpawnRate;
            this.pipeSpeed++;
            if (this.pipeSpeed > 20 && this.mode === 'easy') {
               this.pipeSpeed = 20;
            }
            if (this.pipeSpeed > 30 && this.mode === 'hard') {
               this.pipeSpeed = 30;
            }
         }
         if (this.tick % this.pipeSpawnRate === 0) {
            this.pipes.push(Pipe.create(this.canvas.width * 2, this.canvas.height, this.pipeSpeed));
         }
         for (let i = this.pipes.length - 1; i >= 0; i--) {
            const pipe = this.pipes[i];
            if (!this.paused) {
               pipe.update();
            }
            if (pipe.collide(this.bird) && !this.paused) {
               setTimeout(() => {
                  this.restart();
               }, this.deathPauseTime * 1000);
               this.paused = true;
               break;
            }
            if (this.bird.pastPipe(pipe) && !pipe.counted && !this.paused) {
               this.score++;
               pipe.counted = true;
            }
            if (pipe.offScreen && !this.paused) {
               this.pipes.splice(i, 1);
            }
         }
         this.bird.update(this.canvas.height, this.paused);
         this.tick++;
      }
      this.bird.interpAngle(delta);
   }
   render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.bird.render(this.ctx);
      for (const pipe of this.pipes) {
         pipe.render(this.ctx);
      }
      this.ctx.fillStyle = 'white';
      this.ctx.font = '40px Arial';
      this.ctx.fillText(this.score, this.canvas.width / 2, 50);
   }
};
