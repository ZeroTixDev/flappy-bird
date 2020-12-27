'use strict';

module.exports = class Bird {
   constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 50;
      this.gravity = 0.5;
      this.yv = 0;
      this.jumpHeight = 10;
      this.image = new Image();
      this.image.src = require('./images/bird.png').default;
   }
   control(type) {
      if (type === 'up') {
         this.yv = -this.jumpHeight;
      }
   }
   die(height) {
      this.y = height - this.size;
      this.yv = 0;
   }
   update() {
      this.yv += this.gravity;
      this.y += this.yv;
   }
   render(ctx) {
      ctx.fillStyle = 'white';
      ctx.drawImage(this.image, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
      // ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
   }
};
