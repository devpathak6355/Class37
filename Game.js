class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database1.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database1.ref('/').update({
            gameState: state
        }) 
    }
    async start(){
        if(gameState===0){
            form=new Form();
            form.display();
            player=new Player();
            var playerCountRef=await database1.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
        }
    }
    play(){
       if(gameState===1){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();
        //allplayers[player1,player2,player3]
        //allplayers[0].name
        //allplayers[0].distance
        if(allPlayers!==undefined){
            var display_position=130;
            for (var plr in allPlayers){
                if(plr==="player"+player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                display_position+=20;
                textSize(15);
                text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,display_position)
            }        
        }
        if(keyIsDown(UP_ARROW)&& player.index!=null){
            player.distance+=50;
            player.update();
        }
       }
    }
}