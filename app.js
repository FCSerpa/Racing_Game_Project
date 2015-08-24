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

function init() {
  // Remove choice screen. Place avatars. Place effects (fish?)? Ready/Set/Go?
  //Set player2 name === 'computer'(change case) to automate player2?
  player1 = new Player($("#player1Name").val(), $('#player1Color option:selected').val(), 'up', 87, 83, 65, 68);
  player2 = new Player($("#player2Name").val(), $('#player2Color option:selected').val(), 'down', 73, 75, 74, 76);
  player1.name = player1.name || "Player One";
  player2.name = player2.name || "Player Two";
  $("div#t0" + player1.side).append(player1.imgR);
  $("div#t0" + player2.side).append(player2.imgR);
  readySetGo('READY!', 0);
  readySetGo('SET!', 1000);
  readySetGo('GO!!!', 2000);
  setTimeout(function(){
    $("div#formDiv").hide();
    $("div#formDiv").empty();
    var time = Date.now();
    player1.move(player1, time);
    player2.move(player2, time);
  }, 3000); 
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function(player, time) {
  //update player's position
  $(window).keydown(function(e) {
    // movement- right
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
        end(player, time);
      }
    // movement- down
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
    // movement- left
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
    // movement- up
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

function readySetGo(rsg, timer){
  setTimeout(function(){
    $("div#formDiv").empty();
    $("div#formDiv").append('<h1 style="font-size: 10em">' + rsg + '!</h1>');
}, timer);
};

function end(player, time) {
  // Stop game. Show victory screen. Score? Time?
  $(window).off("keydown");
  $("div#formDiv").show();
  $("div#finishLine").empty();
  $("div#formDiv").append("<br>" + player.imgR);
  $("div#formDiv").append("<h1>" + player.name + " wins!</h1><br><h1>" + (Date.now() - time)/1000 + " seconds!</h1>");
  $("div#formDiv").append('<br><button id="reset">Play Again</button>');
  $("button#reset").click(function(){
    playAgain();
  });
};

function playAgain() {
  player1.progress = 0;
  player2.progress = 0;
  $("img").remove();
  $("div#finishLine").append('<img src="images/giphy.gif">');
  $("div#t0" + player1.side).append(player1.imgR);
  $("div#t0" + player2.side).append(player2.imgR);
  readySetGo('READY!', 0);
  readySetGo('SET!', 1000);
  readySetGo('GO!!!', 2000);
  setTimeout(function(){
    $("div#formDiv").hide();
    $("div#formDiv").empty();
    var time = Date.now();
    player1.move(player1, time);
    player2.move(player2, time);
  }, 3000);
};

$( document ).ready(function(){

  $("#nameColorBtns").click(function(){
    init();
  });



});


