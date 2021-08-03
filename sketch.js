var i = 0
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
function preload() {
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
trex_collided = loadImage("trex_collided.png");
groundImage = loadImage("ground2.png")
}


function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    invisible_ground = createSprite(200,190,400,10);
    invisible_ground.visible = false;
    spawn_clouds();
}


function draw() {
    i++
    background(255);
    //jump when the space button is pressed
    if (keyDown("space") && (trex.y>160)) {
    trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8
    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }
    trex.collide(invisible_ground);
    
   console.log(frameCount+" " + i)
    drawSprites();
}


function spawn_clouds() {
    //var clouds = createSprite(600,80);
    //clouds.velocityX = -4
   for(var i = 0; i<5; i++) {
       var cloud = createSprite(600+200*i,75,50,50);
       cloud.velocityX = -4
   }

}