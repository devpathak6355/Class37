var database1;
var gameState=0;
var playerCount=0;
var game, player, form;
var allPlayers;
function setup(){
    createCanvas(500,500);
    database1=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount===4){
     game.update(1)
    }
    if(gameState===1){
        clear ();
        game.play();
    }
    

}