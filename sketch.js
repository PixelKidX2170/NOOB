var gameState=0
var playerCount=0
var form
var player
var game
var database


function setup (){
    createCanvas (400,400)
    //CanvasPattern ("black")
    database= firebase.database ();
    game=new Game()
    game.getgamestate()
    game.start()
}
function draw (){
    background (128)
}