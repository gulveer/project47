const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var robber, robberImage, robberImage2;
var police1, police2, police3, policeImage;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9;
var vault, vaultImage;
var money1, money2, money3, money4, moneyImage, moneybagImage;
var box;
var gameState = 0;
var maImage, bankImage, sirenImage;



function preload() {
robberImage = loadImage("images/ROBBER_2.png");
robberImage2 = loadImage("images/ROBBER_1.png");
policeImage = loadImage("images/POLICE.png");
vaultImage = loadImage("images/VAULT.png");
moneyImage = loadImage("images/MONEY.png");
moneybagImage = loadImage("images/MONEYBAG.png");
maImage = loadImage("images/MA.jpg");
bankImage = loadImage("images/BANK.png");
sirenImage = loadImage("images/SIREN.jpg");

}

function setup() {
  createCanvas(displayWidth, displayHeight-115);
  engine = Engine.create();
	world = engine.world;
  
   
  
  //creating robber
  box = createSprite(displayWidth-70,displayHeight/2+70,10,10);
  box.shapeColor = "red";
  robber = createSprite(displayWidth-70,displayHeight/2-115,10,10);
  robber.addImage(robberImage);
  robber.scale = 0.1;
 
  
  //creating police (1,2,3)
  police1 = createSprite(displayWidth/2, 100,10,10);
  police1.addImage(policeImage);
  police1.scale = 0.1;
  police1.velocityX = +10;
  police2 = createSprite(displayWidth/2-250, 400,10,10);
  police2.addImage(policeImage);
  police2.scale = 0.1;
  police2.velocityY = +7;
  police3 = createSprite(displayWidth/2+250, 400,10,10);
  police3.addImage(policeImage);
  police3.scale = 0.1;
  police3.velocityY = -7;
  
  //creating wall (1,2,3)
  wall1 = createSprite(displayWidth/2-500,50,10, displayHeight-100);
  wall2 = createSprite(displayWidth/2+500,50,10, displayHeight-100);
  wall3 = createSprite(displayWidth/2,550,10, displayHeight-100);
  wall4 = createSprite(displayWidth/2-350,220,300,10);
  wall5 = createSprite(displayWidth/2+350,220,300,10);
  wall6 = createSprite(displayWidth/2+500,600,10, displayHeight/6);
  wall9 = createSprite(displayWidth/2-500,600,10, displayHeight/6);
  wall7 = createSprite(displayWidth/2-250,650,500,10);
  wall8 = createSprite(displayWidth/2+250,650,500,10);

  //creating vault/money
  vault = createSprite(80,80,10,10);
  vault.addImage(vaultImage);
  vault.scale = 0.4;
  money1 = createSprite(80,150,10,10);
  money1.addImage(moneyImage);
  money1.scale = 0.5;
  money2 = createSprite(80,170,10,10);
  money2.addImage(moneybagImage);
  money2.scale = 0.1;
  money3 = createSprite(40,180,10,10);
  money3.addImage(moneybagImage);
  money3.scale = 0.1;
  money4 = createSprite(120,180,10,10);
  money4.addImage(moneybagImage);
  money4.scale = 0.1;
  
  Engine.run(engine);
}

function draw() {
  background("white");  
  
  
  if(gameState === 0){
    background(bankImage);
    fill("black");
    textSize(30);
    text("ROB THE NATIONAL BANK WITHOUT GETTING CAUGHT",displayWidth/2-395, displayHeight/2-50);
    text("USE THE ARROW KEYS TO MOVE",displayWidth/2-245, displayHeight/2);
  
    
    fill("black");
    textSize(40);
    text("PRESS SPACE TO START",displayWidth/2-240, displayHeight/2+50);
  robber.visible = false;
  police1.visible = false;
  police2.visible = false;
  police3.visible = false;
  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
  wall5.visible = false;
  wall6.visible = false;
  wall7.visible = false;
  wall8.visible = false;
  wall9.visible = false;
  money1.visible = false;
  money2.visible = false;
  money3.visible = false;
  money4.visible = false;
  vault.visible = false;
  box.visible = false;

  if(keyDown("space")){
    gameState = 1;
     }
}



if(gameState === 1){
  robber.visible = true;
  police1.visible = true;
  police2.visible = true;
  police3.visible = true;
  wall1.visible = true;
  wall2.visible = true;
  wall3.visible = true;
  wall4.visible = true;
  wall5.visible = true;
  wall6.visible = true;
  wall7.visible = true;
  wall8.visible = true;
  wall9.visible = true;
  money1.visible = true;
  money2.visible = true;
  money3.visible = true;
  money4.visible = true;
  vault.visible = true;
  //box.visible = true;

if(robber.isTouching(police1) || robber.isTouching(police2) || robber.isTouching(police3)){
money1.x = 80;
money2.x = 150;
gameState = 2;
}

if(robber.isTouching(money1)){
  money1.visible = false;
  money2.visible = false;
  money3.visible = false;
  money4.visible = false;
  money1.x = robber.x;
  money1.y = robber.y;

if(money1.isTouching(box)){
gameState = 3;
}
}
}   
 
if(gameState === 2){
   background(sirenImage);
   
  fill("black");
  textSize(20);
  text("PRESS R TO TRY AGAIN",displayWidth/2-120, displayHeight/2-50);
  
  fill("black");
  textSize(30);
  text("YOU GOT CAUGHT, TRY AGAIN",displayWidth/2-230, displayHeight/2);
  
  robber.visible = false;
  police1.visible = false;
  police2.visible = false;
  police3.visible = false;
  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
  wall5.visible = false;
  wall6.visible = false;
  wall7.visible = false;
  wall8.visible = false;
  wall9.visible = false;
  money1.visible = false;
  money2.visible = false;
  money3.visible = false;
  money4.visible = false;
  vault.visible = false;
  box.visible = false;

if(keyDown("r")){

gameState = 1;
robber.x = displayWidth-70;
robber.y = displayHeight/2-115;
}

}   

if(gameState === 3){
 background(maImage);
 
  robber.visible = false;
  police1.visible = false;
  police2.visible = false;
  police3.visible = false;
  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
  wall5.visible = false;
  wall6.visible = false;
  wall7.visible = false;
  wall8.visible = false;
  wall9.visible = false;
  money1.visible = false;
  money2.visible = false;
  money3.visible = false;
  money4.visible = false;
  vault.visible = false;
  box.visible = false;




}



// to move robber
  if(keyDown("up")){
    robber.y = robber.y - 10;
  } else if(keyDown("down")){
    robber.y = robber.y + 10;
  } else if(keyDown("left")){
    robber.x = robber.x - 10;
    robber.addImage(robberImage);
  } else if(keyDown("right")){
    robber.x = robber.x + 10;
    robber.addImage(robberImage2);
  } 
  
  //adding colision
  police1.bounceOff(wall1);
  police1.bounceOff(wall2);
  
  police2.bounceOff(wall4);
  police2.bounceOff(wall5);
  police2.bounceOff(wall7);
  police2.bounceOff(wall8);
  
  police3.bounceOff(wall4);
  police3.bounceOff(wall5);
  police3.bounceOff(wall7);
  police3.bounceOff(wall8);
  
  robber.bounceOff(wall1);
  robber.bounceOff(wall2);
  robber.bounceOff(wall3);
  robber.bounceOff(wall4);
  robber.bounceOff(wall5);
  robber.bounceOff(wall6);
  robber.bounceOff(wall7);
  robber.bounceOff(wall8);
  robber.bounceOff(wall9);
  robber.bounceOff(vault);






  drawSprites();
}