class Form{
    constructor(){
        this.input=createInput('Name'); 
        this.button=createButton('Play');
        this.greeting=createElement('h3');
        
    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(485,100);
        this.input.position(485,200);
        this.button.position(550,250);
       
        
        this.button.mousePressed(function(){
            
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(130, 100);
        })
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}