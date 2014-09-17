
$(document).ready(function() {
  var heroShip = new SpaceShip();

  // window.onKeyDown = function(e) {
  $('body').keydown(function(e){
    console.log('key code');

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

  setTimeout(function(){
    var enemyShip = new Enemy($(document).width() * Math.random(), $(document).height() * Math.random());
    $('enemy').append(enemyShip.$node);
  },5000);

});

