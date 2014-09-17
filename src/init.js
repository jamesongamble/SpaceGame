
$(document).ready(function() {
  var heroShip = new SpaceShip();

  // window.onKeyDown = function(e) {
  $('body').keydown(function(e){

    if (e.keyCode == 37){
      heroShip.moveLeft();
    }
    if(e.keyCode == 39){
      heroShip.moveRight();
    }
    if (e.keyCode == 38) {
      heroShip.moveUp();
    }
    if (e.keyCode == 40) {
      heroShip.moveDown();
    }
  });
  $('body').append(heroShip.$node);

  setInterval(function(){
    var enemyShip = new Enemy($(window).width() * Math.random(), $(window).height() * Math.random());
    $('body').append(enemyShip.$node);
  },2000);

});

