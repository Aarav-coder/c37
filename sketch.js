
var database,position;
var form,game,player;
var gameState = 0,playerCount = 0;
var allPlayers;
var car1,car2,car3,car4,cars;
function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
   if(playerCount === 4){
       game.update(1);
   }
   if(gameState === 1){
       clear();
       game.play();
   }
}