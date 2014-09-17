var Enemy = function(x,y) {
  SpaceShip.call(this);
  this.$node = $("<div class='enemy'></div>");
  this.$node.css({top:x , left:y});

};

Enemy.prototype = Object.create(SpaceShip.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.moveDown = function() { //NEED TO FIX
  while (this.position()[top] < window.height) {
    $('.enemy').animate({top:x , left:y}, 0);
  }
};


