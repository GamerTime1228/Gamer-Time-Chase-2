var START = 0;
var GAME = 1;
var DIAMOND = 2;
var END = 3;
var WIN = 4;
var gameState = START;

var blueNinja;
var redNinja;
var invisibleGround;
var bg;
var obby;
var obby2;

var bgImg;
var groundImg;

var blueNinjaImg;

var GamerTimeImg
var startImg
var gameOverImg
var upArrowImg
var downArrowImg

var upArrow
var downArrow

var BNwalk1Img;
var BNwalk2Img;
var BNwalk3Img;

var BNslide1Img;
var BNslide2Img;

var redNinjaImg;

var RNwalk1Img;
var RNwalk2Img;
var RNwalk3Img;

var obby1Img;
var obby2Img;
var obby3Img;
var obby4Img;
var obby5Img;
var obby6Img;

var title;
var startButton;
var gameOverButton;
var upButton;
var downButton;

var score = 0;

var diamondButton;
var diamond;

function preload() {
  GamerTimeImg = loadImage("./img1/GamerTime.png");

  bgImg = loadImage("./img1/bg.png");
  groundImg = loadImage("./img1/ground.png");

  startImg = loadImage("./img1/start.png");
  infiniteImg = loadImage("./img1/Infinite.png");
  findTheDiamondImg = loadImage("./img1/FindTheDiamond.png");
  gameOverImg = loadImage("./img1/gameOver.png");

  upArrowImg = loadImage("./img1/UpArrow.png");
  downArrowImg = loadImage("./img1/DownArrow.png");
  
  blueNinjaImg = loadImage("./img1/blueNinja.png");
  
  BNanimation = loadAnimation("./img1/BNwalk1.png","./img1/BNwalk2.png", "./img1/BNwalk3.png");
  // BNwalk1Img = loadImage("./img1/BNwalk1.png");
  // BNwalk2Img = loadImage("./img1/BNwalk2.png");
  BNjumpImg = loadAnimation("./img1/BNwalk3.png");
  
  BNanimation2 = loadAnimation("./img1/BNslide2.png");
  // BNslide1Img = loadImage("./img1/BNslide1.png");
  // BNslide2Img = loadImage("./img1/BNslide2.png");
  
  redNinjaImg = loadImage("./img1/redNinja.png");

  RNwinImg = loadAnimation("./img1/RNwin.png");
  RNloseImg = loadAnimation("./img1/RNlose.png");
  BNwinImg = loadAnimation("./img1/BNwin.png");
  
  RNanimation = loadAnimation("./img1/RNwalk1.png", "./img1/RNwalk2.png", "./img1/RNwalk3.png");
  // RNwalk1Img = loadImage("./img1/RNwalk1.png");
  // RNwalk2Img = loadImage("./img1/RNwalk2.png");
  // RNwalk3Img = loadImage("./img1/RNwalk3.png");
  
  obby1Img = loadImage("./img1/obby1.png");
  obby2Img = loadImage("./img1/obby2.png");
  obby3Img = loadImage("./img1/obby3.png");
  obby4Img = loadImage("./img1/obby4.png");
  obby5Img = loadImage("./img1/obby5.png");
  obby6Img = loadImage("./img1/obby6.png");

  diamondImg = loadImage("./img1/diamond.png");

}

function setup() {
  // The canvas size
  createCanvas(800,400);

  // The background sprite
  bg = createSprite(600,175,1600,200);
  bg.addImage(bgImg);
  bg.velocityX = -2;
  bg.x = bg.width / 2;
  bg.scale = 1.9;

  // The Gamer Time Ninja sprite and Hater Time Ninja sprite
  blueNinja = createSprite(300, 300, 50, 50);
  blueNinja.addAnimation("BNwalking", BNanimation);
  blueNinja.addAnimation("BNsliding", BNanimation2);
  blueNinja.addAnimation("BNjumping", BNjumpImg);
  blueNinja.addAnimation("BNwinning", BNwinImg);
  blueNinja.scale = 1.25;
  blueNinja.setCollider("circle", 0, 10, 20);

  redNinja = createSprite(75, 200, 50, 400);
  redNinja.addAnimation("RNwalking", RNanimation);
  redNinja.addAnimation("RNwinning", RNwinImg);
  redNinja.addAnimation("RNlosing", RNloseImg);
  redNinja.scale = 4;

  // Making groups of the obstacles
  obbyGroup = new Group();
  obbyGroup2 = new Group();

  // The ground that actually isn't invisible
  invisibleGround = createSprite(400, 380, 800, 20);
  invisibleGround.addImage(groundImg);
  invisibleGround.scale = 2;
  // invisibleGround.setCollider("rectangle", 0, 0, 0, 0);
  // invisibleGround.debug = true;
  // invisibleGround.visible = false;

  // The title sprite
  title = createSprite(400,150);
  title.addImage(GamerTimeImg);
  title.scale = 0.75;
  title.visible = false;

  //Start and Game Over Button Sprites
  startButton = createImg("./img1/Infinite.png");
  startButton.position(500, 300);
  startButton.size(100, 50);
  startButton.mouseClicked(gamePlayInfinite);

  diamondButton = createImg("./img1/FindTheDiamond.png");
  diamondButton.position(200, 300);
  diamondButton.size(100, 50);
  diamondButton.mouseClicked(gamePlayDiamond);

  gameOverButton = createImg("./img1/gameOver.png");
  gameOverButton.position(600, 200);
  gameOverButton.size(100, 50);
  gameOverButton.mouseClicked(gamePlayReset);

  // upButton = createImg("./img1/UpArrow.png");
  // upButton.position(600, 300);
  // upButton.size(100, 100);
  // upButton.mousePressed(jump);

}

function draw() {
  background(0); 

  // Start Screen
  if(gameState === START) {
    background("#004a8a"); 
    console.log("START");
  // Hiding images that shouldn't be here & fixing some positons and stuff
    title.visible = true;
    startButton.position(500, 300);
    diamondButton.position(200, 300);
    gameOverButton.position(-100, -100);
    bg.visible = false;
    blueNinja.x = 300;
    blueNinja.velocityX = 0;
    blueNinja.visible = false;
    blueNinja.scale = 1.25;
    redNinja.visible = false;
    obbyGroup.visible = false;
    invisibleGround.visible = false;
  }
  // Gameplay Screen
  else if(gameState === GAME) {
    console.log("GAME");
  // Removing start screen sprites
    title.visible = false;
    bg.visible = true;
    blueNinja.visible = true;
    redNinja.visible = true;
    redNinja.changeAnimation("RNwalking", RNanimation);
    redNinja.x = 75;
    redNinja.y = 200;
    redNinja.scale = 4;
    obbyGroup.visible = true;
    invisibleGround.visible = true;

  // Obstacle Spawning
    spawnObby();

  // Making the background move
    bg.velocityX = -2;

    if(bg.x < 0) {
      bg.x = bg.width / 2;
    }

  // Code when colliding with obstacles
    if(obbyGroup.collide(blueNinja)) {

        blueNinja.velocityX = -4;
        obbyGroup.setVelocityXEach(-4);

        if(keyDown("space")) {
          blueNinja.y -= 17;
          blueNinja.changeAnimation("BNjumping", BNjumpImg);
          blueNinja.x -= 4;
      }
        else if(keyDown("DOWN_ARROW")) {
          blueNinja.y = 310;
          blueNinja.changeAnimation("BNsliding", BNanimation2);
          blueNinja.x -= 4;
          blueNinja.setCollider("circle", 0, 10, 10);
        }

      if(score >= 10000) {
        blueNinja.velocityX = -6;
        obbyGroup.setVelocityXEach(-6);

        if(keyDown("space")) {
          blueNinja.y -= 17;
          blueNinja.changeAnimation("BNjumping", BNjumpImg);
          blueNinja.x -= 6;
        }
        else if(keyDown("DOWN_ARROW")) {
          blueNinja.y = 310;
          blueNinja.changeAnimation("BNsliding", BNanimation2);
          blueNinja.x -= 6;
          blueNinja.setCollider("circle", 0, 10, 10);
        }
      }

      if(score >= 20000) {
        blueNinja.velocityX = -8;
        obbyGroup.setVelocityXEach(-8);

        if(keyDown("space")) {
          blueNinja.y -= 17;
          blueNinja.changeAnimation("BNjumping", BNjumpImg);
          blueNinja.x -= 8;
      }
        else if(keyDown("DOWN_ARROW")) {
          blueNinja.y = 310;
          blueNinja.changeAnimation("BNsliding", BNanimation2);
          blueNinja.x -= 8;
          blueNinja.setCollider("circle", 0, 10, 10);
        }
      }

      if(score >= 30000) {
        blueNinja.velocityX = -10;
        obbyGroup.setVelocityXEach(-10);

        if(keyDown("space")) {
          blueNinja.y -= 17;
          blueNinja.changeAnimation("BNjumping", BNjumpImg);
          blueNinja.x -= 10;
      }
        else if(keyDown("DOWN_ARROW")) {
          blueNinja.y = 310;
          blueNinja.changeAnimation("BNsliding", BNanimation2);
          blueNinja.x -= 10;
          blueNinja.setCollider("circle", 0, 10, 10);
        }
      }

      if(score >= 40000) {
        blueNinja.velocityX = -15;
        obbyGroup.setVelocityXEach(-15);

        if(keyDown("space")) {
          blueNinja.y -= 17;
          blueNinja.changeAnimation("BNjumping", BNjumpImg);
          blueNinja.x -= 15;
      }
        else if(keyDown("DOWN_ARROW")) {
          blueNinja.y = 310;
          blueNinja.changeAnimation("BNsliding", BNanimation2);
          blueNinja.x -= 15;
          blueNinja.setCollider("circle", 0, 10, 10);
        }
      }

      if(score >= 50000) {
        blueNinja.velocityX = -20;
        obbyGroup.setVelocityXEach(-20);

        if(keyDown("space")) {
          blueNinja.y -= 17;
          blueNinja.changeAnimation("BNjumping", BNjumpImg);
          blueNinja.x -= 20;
      }
        else if(keyDown("DOWN_ARROW")) {
          blueNinja.y = 310;
          blueNinja.changeAnimation("BNsliding", BNanimation2);
          blueNinja.x -= 20;
          blueNinja.setCollider("circle", 0, 10, 10);
        }
      }
      
  }
    else {

  // gravity for Ninja
      blueNinja.velocityY += 0.8
  
      //if(keyDown(RIGHT_ARROW)) {
        //blueNinja.x = blueNinja.x + 25;
      //}
  
      //if(keyDown(LEFT_ARROW)) {
        //blueNinja.x = blueNinja.x - 25;
      //}
  
  // For suspension
      if(obbyGroup.x < blueNinja.x){
        redNinja.x = 75;
      }
  
  //To make him look like he is walking
      if(blueNinja.y <= 300) {
        blueNinja.changeAnimation("BNwalking", BNanimation);
      }

  //This is to help fix glitchs
      if(blueNinja.y <= 0) {
        blueNinja.y = 300;
        blueNinja.x += 5;
      }

      if(blueNinja.y >= 400) {
        blueNinja.y = 300;
      }

  // if Hater Time touches Gamer Time, YOU LOSE!
      if(blueNinja.x <= 100) {
        gameState = END;
      }
  
  // Extra stuff with collision and bounceOffs
      obbyGroup.setVelocityXEach(-4);
      obbyGroup.setVelocityYEach(0);
      blueNinja.collide(invisibleGround);
      obbyGroup.collide(invisibleGround);
      blueNinja.bounceOff(obbyGroup);
    }
  
  // Jumping
    if(keyDown("space")) {
      blueNinja.y -= 17;
      blueNinja.changeAnimation("BNjumping", BNjumpImg);
      blueNinja.velocityX = 0;
      
    }
  
  // Ducking
    else if(keyDown("DOWN_ARROW")) {
      blueNinja.y = 310;
      blueNinja.changeAnimation("BNsliding", BNanimation2);
      blueNinja.velocityX = 0;
      blueNinja.setCollider("circle", 0, 10, 10);
    }
  
  // fixing the colliders when running
    else {
      blueNinja.setCollider("circle", 0, 10, 20);
    }

  }

  else if(gameState === DIAMOND) {
    console.log("GAME");
  // Removing start screen sprites
    title.visible = false;
    bg.visible = true;
    blueNinja.visible = true;
    redNinja.visible = true;
    redNinja.changeAnimation("RNwalking", RNanimation);
    redNinja.x = 75;
    redNinja.y = 200;
    redNinja.scale = 4;
    obbyGroup.visible = true;
    invisibleGround.visible = true;

  // Obstacle Spawning
    spawnObby();

  // Making the background move
    bg.velocityX = -2;

    if(bg.x < 0) {
      bg.x = bg.width / 2;
    }

  // Code when colliding with obstacles
    if(obbyGroup.collide(blueNinja)) {
        blueNinja.velocityX = -4;
        obbyGroup.setVelocityXEach(-4);

        if(keyDown("space")) {
          blueNinja.y -= 17;
          blueNinja.changeAnimation("BNjumping", BNjumpImg);
          blueNinja.x -= 4;
      }
        else if(keyDown("DOWN_ARROW")) {
          blueNinja.y = 310;
          blueNinja.changeAnimation("BNsliding", BNanimation2);
          blueNinja.x -= 4;
          blueNinja.setCollider("circle", 0, 10, 10);
        }

      if(score >= 10000) {
        blueNinja.velocityX = -6;
        obbyGroup.setVelocityXEach(-6);

        if(keyDown("space")) {
          blueNinja.y -= 17;
          blueNinja.changeAnimation("BNjumping", BNjumpImg);
          blueNinja.x -= 6;
      }
        else if(keyDown("DOWN_ARROW")) {
          blueNinja.y = 310;
          blueNinja.changeAnimation("BNsliding", BNanimation2);
          blueNinja.x -= 6;
          blueNinja.setCollider("circle", 0, 10, 10);
        }
      }

      if(score >= 20000) {
        blueNinja.velocityX = -8;
        obbyGroup.setVelocityXEach(-8);

        if(keyDown("space")) {
          blueNinja.y -= 17;
          blueNinja.changeAnimation("BNjumping", BNjumpImg);
          blueNinja.x -= 8;
      }
        else if(keyDown("DOWN_ARROW")) {
          blueNinja.y = 310;
          blueNinja.changeAnimation("BNsliding", BNanimation2);
          blueNinja.x -= 8;
          blueNinja.setCollider("circle", 0, 10, 10);
        }
      }
  }
    else {

  // gravity for Ninja
      blueNinja.velocityY += 0.8
  
      //if(keyDown(RIGHT_ARROW)) {
        //blueNinja.x = blueNinja.x + 25;
      //}
  
      //if(keyDown(LEFT_ARROW)) {
        //blueNinja.x = blueNinja.x - 25;
      //}
  
  // For suspension
      if(obbyGroup.x < blueNinja.x){
        redNinja.x = 75;
      }
  
  //To make him look like he is walking
      if(blueNinja.y <= 300) {
        blueNinja.changeAnimation("BNwalking", BNanimation);
      }

  //This is to help fix glitchs
      if(blueNinja.y <= 0) {
        blueNinja.y = 300;
        blueNinja.x += 5;
      }

      if(blueNinja.y >= 400) {
        blueNinja.y = 300;
      }

  // if Hater Time touches Gamer Time, YOU LOSE!
      if(blueNinja.x <= 100) {
        gameState = END;
      }
  
  // Create the diamond in diamond mode
      if(frameCount === 1600) {
        diamond = createSprite(810, 250);
        diamond.addImage(diamondImg);
        diamond.scale = 1.25;
        diamond.velocityX = -2.25;
      }

      if(frameCount === 1900) {
        gameState = WIN;
      }

  
  // Extra stuff with collision and bounceOffs
  obbyGroup.setVelocityXEach(-4);

    if(score >= 10000) {
        obbyGroup.setVelocityXEach(-6);
    }

    if(score >= 20000) {
      obbyGroup.setVelocityXEach(-8);
    }

    if(score >= 30000) {
      obbyGroup.setVelocityXEach(-10);
    }

    if(score >= 40000) {
      obbyGroup.setVelocityXEach(-15);
    }

    if(score >= 50000) {
      obbyGroup.setVelocityXEach(-20);
    }

      obbyGroup.setVelocityYEach(0);
      blueNinja.collide(invisibleGround);
      obbyGroup.collide(invisibleGround);
      blueNinja.bounceOff(obbyGroup);
    }
  
  // Jumping
    if(keyDown("space")) {
      blueNinja.y -= 17;
      blueNinja.changeAnimation("BNjumping", BNjumpImg);
      blueNinja.velocityX = 0;
      
    }
  
  // Ducking
    else if(keyDown("DOWN_ARROW")) {
      blueNinja.y = 310;
      blueNinja.changeAnimation("BNsliding", BNanimation2);
      blueNinja.velocityX = 0;
      blueNinja.setCollider("circle", 0, 10, 10);
    }
  
  // fixing the colliders when running
    else {
      blueNinja.setCollider("circle", 0, 10, 20);
    }

  }

  else if(gameState === WIN){
    console.log("WIN");
    redNinja.changeAnimation("RNlosing", RNloseImg);
    redNinja.x = 300;
    redNinja.y = 230;
    redNinja.scale = 2;
    bg.velocityX = 0;
    bg.x = 500;
    blueNinja.changeAnimation("BNwinning", BNwinImg);
    blueNinja.x = 500;
    blueNinja.y = 250;
    blueNinja.scale = 2;
    blueNinja.velocityX = 0;
    blueNinja.visible = true;
    diamond.visible = false;
    obbyGroup.destroyEach();
    gameOverButton.position(600, 200);
  }

  // Game Over Screen
  else {
    console.log("END");
    redNinja.changeAnimation("RNwinning", RNwinImg);
    redNinja.x = 400;
    redNinja.y = 230;
    redNinja.scale = 2;
    bg.velocityX = 0;
    bg.x = 500;
    blueNinja.visible = false;
    // diamond.visible = false;
    obbyGroup.destroyEach();
    gameOverButton.position(600, 200);
  }
  // camera.position.x = blueNinja.x + 200;

  drawSprites();

  // the score for the game (I had to put it after the drawSprites so...)
  if(gameState === START) {
    score = 0;
  }

  if(gameState === GAME) {
    score = score + Math.round(frameCount/60);
    textSize(20);
    fill("white");
    text("Score: " + score, 650, 25);
  }

  if(gameState === DIAMOND) {
    score = score + Math.round(frameCount/60);
    textSize(20);
    fill("white");
    text("Score: " + score, 650, 25);
  }

  if(gameState === END) {
    textSize(20);
    fill("white");
    text("Score: " + score, 650, 25);
  }

  if(gameState === WIN) {
    textSize(20);
    fill("white");
    text("Score: WIN", 650, 25);
  }
}

function spawnObby() {
  if(frameCount % 100 === 0) {
    var ran3 = Math.round(random(1,2));
    if(ran3 === 1) {


    obby = createSprite(850, 300, 50, 75);
    obby.scale = 1.25;
    obby.velocityX = -4;
    obby.lifetime = 250;
    obby.setCollider("rectangle", 0, 0, 50, 50);

    if(score >= 10000) {
      obby.velocityX = -6;
    }

    if(score >= 20000) {
      obby.velocityX = -8;
    }

    if(score >= 30000) {
      obby.velocityX = -10;
    }

    if(score >= 40000) {
      obby.velocityX = -15;
    }

    if(score >= 50000) {
      obby.velocityX = -30;
    }

    var ran = Math.round(random(1,3))

    switch(ran){
      case 1 : obby.addImage(obby1Img);
      break; 
      case 2 : obby.addImage(obby4Img); 
      break; 
      case 3 : obby.addImage(obby5Img);
      break; 
      default: break; 
    }

    obbyGroup.add(obby);
  }
    
  else{
    obby2 = createSprite(850, 250, 50, 75);
    obby2.scale = 1.25;
    obby2.velocityX = -4;
    obby2.lifetime = 250;
    obby2.setCollider("rectangle", 0, -60, 20, 200);

    var ran2 = Math.round(random(1,3))

    switch(ran2){
      case 1 : obby2.addImage(obby2Img);
      break; 
      case 2 : obby2.addImage(obby3Img); 
      break; 
      case 3 : obby2.addImage(obby6Img);
      break; 
      default: break; 
    }

    obbyGroup.add(obby2);
  }
  }
}


function gamePlayInfinite() {
  gameState = GAME;
  startButton.position(-100, -100);
  diamondButton.position(-200, -200);
}

function gamePlayDiamond() {
  gameState = DIAMOND;
  startButton.position(-200, -200);
  diamondButton.position(-100, -100);
}

function gamePlayReset() {
  gameState = START;
}

function jump() {
  blueNinja.y -= 150;
  blueNinja.changeAnimation("BNjumping", BNjumpImg);
  blueNinja.velocityX = 0;
  if(blueNinja.y < 100) {
    blueNinja.y = 300;
  }
}