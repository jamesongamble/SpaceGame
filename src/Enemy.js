var Enemy = function(x,y) {
  SpaceShip.call(this);
  this.$node.addClass('enemy');
};

Enemy.prototype = Object.create(SpaceShip.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.moveDown = function() {
  while (this.position()[top] < window.height) {
    $('.enemy').animate({top:"+=40px"}, 0);
  }
};


