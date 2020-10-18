//var hypnoticBall, database;
//var position;
//var gameState = 0;
//var playerCount;
//var form,game,player;
var canvas, backgroundImage; var gameState = 0; var playerCount; var database; var form, player, game;
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game(); 
  game.getState(); 
  game.start();
}

function draw(){
 


}
