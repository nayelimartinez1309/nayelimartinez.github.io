function Ball () {
  this.x = 0;
  this.y = 0;
  this.image = new Image();
  this.image.src = 'star.png';
}

Ball.prototype.draw = function (context) {
  if (this.image.complete) {
    context.drawImage (this.image, this.x, this.y, 150, 150)
  }
};
