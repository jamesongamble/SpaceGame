var SpaceShip = function() {
  this.x = "100px";
  this.y = "100px";
  this.$node = $("<div class='protagonist'></div>");
};

SpaceShip.prototype.moveLeft = function() {
  $('.protagonist').animate({left:"-=40px"}, 0)
};

SpaceShip.prototype.moveRight = function() {
  $('.protagonist').animate({left:"+=40px"}, 0);
};

SpaceShip.prototype.moveUp = function() {
  $('.protagonist').animate({top:"-=40px"}, 0);
};

SpaceShip.prototype.moveDown = function() {
  $('.protagonist').animate({top:"+=40px"}, 0);
};



