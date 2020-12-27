'use strict';

module.exports = class Pipe {
   constructor(x, y, height, width) {
      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
      this.vel = 10;
      this.counted = false;
   }
   render(ctx) {
      ctx.fillStyle = 'gray';
      ctx.fillRect(this.x, this.y, this.width, this.height);
   }
   get offScreen() {
      return this.x < 0;
   }
   collide(bird) {
      const dx = Math.abs(bird.x - (this.x + this.width / 2));
      const dy = Math.abs(bird.y - (this.y + this.height / 2));

      if (dx > bird.size / 2 + this.width / 2) {
         return false;
      }
      if (dy > bird.size / 2 + this.height / 2) {
         return false;
      }

      if (dx <= this.width) {
         return true;
      }
      if (dy <= this.height) {
         return true;
      }
      return (
         (dx - this.width) * (dx - this.width) + (dy - this.height) * (dy - this.height) <=
         (bird.size / 2) * (bird.size / 2)
      );
      /*return (
         bird.x + bird.size > this.x &&
         bird.x < this.x + this.width &&
         bird.y + bird.size > this.y &&
         bird.y < this.y + this.height
      );*/
   }
   update() {
      this.x -= this.vel;
   }
   static create(width, height) {
      if (Math.random() > 0.5) {
         return new Pipe(width, 0, Math.random() * (height - 200), 50);
      } else {
         const pipeHeight = Math.random() * (height - 200);
         return new Pipe(width, height - pipeHeight, pipeHeight, 50);
      }
   }
};
