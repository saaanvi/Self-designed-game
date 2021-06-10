var skyImg
var fish
var craneImg,crane
var fish1, fish2

function preload() {
    skyImg=loadImage("picture.jpg");
    crane1Img=loadAnimation("crane.png");
    craneimg2= loadAnimation("cranemirror.png")
    fish1=loadImage("fish1_mirror.png");
    fish2=loadImage("fish2.png");

   
}

function setup(){
        
        createCanvas(1200,600);
    crane=createSprite(200,100,20,20);
    crane.addAnimation("standing",crane1Img);
    crane.addAnimation("mirror",craneimg2)
    crane.scale=0.8

    
}

function draw(){
    background(skyImg);


    if(keyDown("a")){
    crane.x=crane.x-2
    crane.changeAnimation("standing",crane1Img);
    }

    if(keyDown("w")){
    crane.y=crane.y-2        
    }

    if(keyDown("d")){
    crane.x=crane.x+2   
    crane.changeAnimation("mirror",craneimg2)     
    }

    if(keyDown("s")){
    crane.y=crane.y+2        
    }

    spawnFish()
    
   
drawSprites()
    
}
function spawnFish(){
    if (frameCount % 150 === 0){
      var fish = createSprite(0,random(300,600),10,40);
      fish.velocityX = 6;
      
       //generate random obstacles
       var rand = Math.round(random(1,2));
       switch(rand) {
         case 1: fish.addImage(fish1);
                 break;
         case 2: fish.addImage(fish2);
                 break;
        
         default: break;
       }
       fish.scale=0.4
    }
}
