'use strict';
module.exports = class Bird {
   constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 60;
      this.imageSize = 80;
      this.gravity = 0.5;
      this.yv = 0;
      this.jumpHeight = 10;
      this.image = new Image();
      this.image.src = require('./assets/images/bird.png').default;
      this.angle = 0;
      this.lerpAngle = 0;
      this.lerpAngleSpeed = 5;
      this.holdingDown = false;
   }
   degToRad(deg) {
      return (deg * Math.PI) / 180;
   }
   interpAngle(delta) {
      this.lerpAngle += (this.angle - this.lerpAngle) * delta * this.lerpAngleSpeed;
   }
   control(type, down) {
      if (type === 'up' && down) {
         this.yv = -this.jumpHeight;
         this.angle = -45;
      } else if (type === 'down') {
         this.holdingDown = down;
      }
   }
   pastPipe(pipe) {
      return this.x + this.size > pipe.x;
   }
   respawn(height) {
      this.y = height - this.size;
      this.yv = 0;
   }
   update(height, paused) {
      this.yv += this.gravity;
      if (this.holdingDown) {
         this.yv += this.gravity;
      }
      this.y += this.yv;
      if (this.y + this.size / 2 > height) {
         this.y = height - this.size / 2;
         this.yv = 0;
      }
      if (this.y - this.size / 2 < 0) {
         this.y = this.size / 2;
         this.yv = 0;
      }
      if (paused) {
         this.angle += 100;
      } else {
         if (this.yv >= this.jumpHeight / 2) {
            this.angle = 0;
         }
         if (this.yv >= 10) {
            this.angle = 45;
         }
      }
   }
   render(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.degToRad(this.lerpAngle));
      ctx.drawImage(this.image, -this.imageSize / 2, -this.imageSize / 2, this.imageSize, this.imageSize);
      ctx.restore();
   }
};
