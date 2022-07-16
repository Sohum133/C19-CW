
var score=0
var flappyAnimated
var topPipeGroup,BottomPipeGroup;
var gameState="setup"

function preload(){
  
    flappyAnimated = loadImage("flappy1.png");
    
}

function setup() {
 
    createCanvas(400,400);
    flappy = createSprite(100,200);
    flappy.addImage("flappy",flappyAnimated);
    flappy.scale = 3;
    flappy.debug= false;
    flappy.setCollider("circle",0,5,8)
    
    topPipeGroup= createGroup();
    BottomPipeGroup= createGroup();

}

function draw() {

    createEdgeSprites();
    background("cyan");
    
   
    if(gameState==="setup"){
        fill("orange");
        textSize(15);
        text("Press R to fly!!",160,40);
        if(keyDown("r")){
            gameState="play";
        }
    }
   

    if(gameState==="play"){

        if(keyDown("space")){
            flappy.velocityY=-5;
        }
       
       
        fill("red")
        textSize(15)
        text("Score: "+ score,25,25)
        
        flappy.velocityY = flappy.velocityY + 0.8;
      
        
       

       if(flappy.isTouching(topPipeGroup)|| flappy.isTouching(BottomPipeGroup)|| flappy.y>400){
            textSize(55);
            fill("white")
            text("Game Over",50,200);
           
            reset();
        }
        topPipes()
    
       
    }

    drawSprites()
    
    
 
}





function topPipes(){
    if(frameCount%60==0){
        var topPipe= createSprite(400,random(-30,100),20,random(160,200));
        topPipe.shapeColor="green";
        topPipe.velocityX = -6;
        topPipeGroup.push(topPipe);
        var BottomPipe= createSprite(400,random(320,400),20,random(160,230));
        BottomPipe.shapeColor="green";
        BottomPipe.velocityX = -6;
        BottomPipeGroup.push(BottomPipe);
        score= score+1;
    }
}