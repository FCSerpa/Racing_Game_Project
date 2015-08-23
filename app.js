// OOP Racing Game example boilerplate code

function Game(time) {
  //Create a new instance of player 1
  //this.player1 = ...

  //Do the same for a player 2
  //this.player2 = ...

  //Create the track
  //this.track = ...
  this.startTime = time;

};

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
  // Remove choice screen. Place avatars. Place effects (fish?)? Ready/Set/Go?
  //Set player2 name === 'computer'(change case) to automate player2?
  var player1 = new Player($("#player1Name").val(), $('#player1Color option:selected').val());
  var player2 = new Player($("#player2Name").val(), $('#player2Color option:selected').val());
  $("div#t0up").append(player1.imgR);
  $("div#t0down").append(player2.imgR);
  $("div#formDiv").empty();
  $("div#formDiv").prepend('<h1 style="font-size: 10em">READY!</h1>');
  readySetGo('SET!', 1000);
  readySetGo('GO!!!', 2000);
  setTimeout(function(){
    $("div#formDiv").hide();
}, 3000);
};
function readySetGo(rsg, timer){
  setTimeout(function(){
    $("h1").text(rsg);
}, timer);
};
function keyboardOn(){
//of Game?
// functions for each button? In terms of player?
};
function keyboardOff(){
//of Game?
// functions for each button? In terms of player?
};
Game.prototype.end = function() {
  // Stop game. Show victory screen. Score? Time?
};
Game.prototype.playAgain = function() {
  // Redundant? Can this be built into init?
};
Game.prototype.restart = function() {
  // Back to choices screen.
};
// A starter Player constructor.
function Player(name, color) {
  //this.name = ...
  //this.position = ...
  this.name = name;
  this.color = color;
  this.imgR = '<img src="images/' + color + '-dolphin-r.png">';
  this.imgL = '<img src="images/' + color + '-dolphin-l.png">';
  this.progress = 0;
  //wins?
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function() {
  //update player's position
};


// A starter Track constructor.
function Track() {
  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
};

$( document ).ready(function(){
// Start the game!
  var game = new Game();

  $("#nameColorBtns").click(function(){
    game.init();
  });



});


