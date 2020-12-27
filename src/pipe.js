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
   collide(bird) {
      return (
         bird.x + bird.size > this.x &&
         bird.x < this.x + this.width &&
         bird.y + bird.size > this.y &&
         bird.y < this.y + this.height
      );
   }
   update(bird) {
      this.x -= this.vel;
      return this.collide(bird);
   }
   static create(width, height) {
      if (Math.random() > 0.5) {
         return new Pipe(width, 0, Math.random() * (height - 200), 20);
      } else {
         const pipeHeight = Math.random() * (height - 200);
         return new Pipe(width, height - pipeHeight, pipeHeight, 20);
      }
   }
};
