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
  var player1 = new Player($("#player1Name").val(), $('#player1Color option:selected').val(), 'up', 87, 83, 65, 68);
  var player2 = new Player($("#player2Name").val(), $('#player2Color option:selected').val(), 'down', 73, 75, 74, 76);
  $("div#t0up").append(player1.imgR);
  $("div#t0down").append(player2.imgR);
  $("div#formDiv").empty();
  $("div#formDiv").prepend('<h1 style="font-size: 10em">READY!</h1>');
  readySetGo('SET!', 1000);
  readySetGo('GO!!!', 2000);
  setTimeout(function(){
    $("div#formDiv").hide();
    player1.move(player1);
    player2.move(player2);
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
function Player(name, color, side, u, d, l, r) {
  //this.name = ...
  //this.position = ...
  this.name = name;
  this.color = color;
  this.imgR = '<img src="images/' + color + '-dolphin-r.png">';
  this.imgL = '<img src="images/' + color + '-dolphin-l.png">';
  this.progress = 0;
  this.side = side;
  this.u = u;
  this.d = d;
  this.l = l;
  this.r= r;
  //wins?
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function(player) {
  //update player's position
  $(window).keydown(function(e) {
    // d movement- Player One right
    if (event.keyCode === player.r) {
      if ((player.progress < 6) || ((player.progress > 13) && (player.progress < 19))){
        $("div#t" + player.progress.toString() + player.side).empty();
        $("div#t" + (player.progress + 1) + player.side).append(player.imgR);
        player.progress += 1;
      } else if ((player.progress > 7) && (player.progress < 14)){
        $("div#t" + player.progress.toString() + player.side).empty();
        $("div#t" + (player.progress - 1) + player.side).append(player.imgR);
        player.progress -= 1;
      }else if (player.progress === 19){
        $("div#t" + player.progress.toString() + player.side).empty();
        $("div#t" + (player.progress + 1) + player.side).append(player.imgR);
        player.progress += 1;
        window.alert("Congratulations!  " + player.name + " wins!");
        reset();
      }
    // s movement- Player One down
    }else if (event.keyCode === player.d){
      if (player.progress === 6){
        $("div#t" + player.progress.toString() + player.side).empty();
        $("div#t7" + player.side).append(player.imgL);
        player.progress += 1;
      } else if (player.progress === 13){
        $("div#t" + player.progress.toString() + player.side).empty();
        $("div#t14" + player.side).append(player.imgR);
        player.progress += 1;
      }
    // a movement- Player One left
    }else if (event.keyCode === player.l) {
      if (((player.progress > 0) && (player.progress < 7)) || (player.progress > 14)){
        $("div#t" + player.progress.toString() + player.side).empty();
        $("div#t" + (player.progress - 1) + player.side).append(player.imgL);
        player.progress -= 1;
      } else if ((player.progress > 6) && (player.progress < 13)){
        $("div#t" + player.progress.toString() + player.side).empty();
        $("div#t" + (player.progress + 1) + player.side).append(player.imgL);
        player.progress += 1;
      }
    // w movement- Player One up
    }else if (event.keyCode === player.u){
      if (player.progress === 7){
        $("div#t" + player.progress.toString() + player.side).empty();
        $("div#t6" + player.side).append(player.imgL);
        player.progress -= 1;
      } else if (player.progress === 14){
        $("div#t" + player.progress.toString() + player.side).empty();
        $("div#t13" + player.side).append(player.imgR);
        player.progress -= 1;
      }
    }
  });
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


