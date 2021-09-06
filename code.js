var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sophia = createSprite(10,10,20,20);
sophia.shapeColor="purple"

var cup = createSprite(388, 388, 30, 30);
cup.shapeColor="white"

var wall1=createSprite(60,70,20,100);
var wall2=createSprite(125,110,20,110);
var wall3=createSprite(50,110,130,20);
var wall4=createSprite(140, 40,140,20);
var wall5=createSprite(250, 50,20,100);
var wall6=createSprite(250, 100,130,20);
var wall7=createSprite(190,137,20,100);
var wall8=createSprite(120, 250,20,100);
var wall9=createSprite(100,200,130,20);
var wall10=createSprite(340, 140,130,20);
var wall11 = createSprite(190, 250,130,20);
var wall12 = createSprite(180, 306,20,100);
var wall13 = createSprite(110, 330,130,20);
var wall14 = createSprite(340, 200,20,100);
var wall15 = createSprite(340, 300,130,20);
var wall16 = createSprite(56, 380,130,20);
var wall17 = createSprite(265, 260,20,100);
var wall18 = createSprite(220, 350,20,100);
var wall19 = createSprite(10, 260,140,20);
var wall20 = createSprite(340, 370,20,60);
var wall21 = createSprite(340, 50,20,100);
var wall22 = createSprite(270, 360,110,20);

wall1.shapeColor='red';
wall2.shapeColor='orange';
wall3.shapeColor='yellow';
wall4.shapeColor='green';
wall5.shapeColor='blue';
wall6.shapeColor='purple';
wall7.shapeColor='red';
wall8.shapeColor='oragne';
wall9.shapeColor='yellow';
wall10.shapeColor='green';
wall11.shapeColor='blue';
wall12.shapeColor='purple';
wall13.shapeColor='red';
wall14.shapeColor='orange';
wall15.shapeColor='yellow';
wall16.shapeColor='green';
wall17.shapeColor='blue';
wall18.shapeColor='purple';
wall19.shapeColor='red';
wall20.shapeColor='orange';
wall21.shapeColor='green';
wall22.shapeColor='blue';


function draw() {
  background("pink");
  createEdgeSprites();
  sophia.bounceOff(edges);
  
  if(keyDown(UP_ARROW)) {
    sophia.velocityX = 0;
    sophia.velocityY = -2;
  }
  if (keyDown("down")) {
    sophia.velocityY=2;
    sophia.velocityX=0;
  }
  if (keyDown("left")) {
    sophia.velocityX=-2;
    sophia.velocityY=0;
      
    }
  if (keyDown("right")) {
      sophia.velocityX=2;
      sophia.velocityY=0;
        }
  sophia.bounceOff(wall1);
  sophia.bounceOff(wall2);
  sophia.bounceOff(wall3);
  sophia.bounceOff(wall4);
  sophia.bounceOff(wall5);
  sophia.bounceOff(wall6);
  sophia.bounceOff(wall7);
  sophia.bounceOff(wall8);
  sophia.bounceOff(wall9);
  sophia.bounceOff(wall10);
  sophia.bounceOff(wall11);
  sophia.bounceOff(wall12);
  sophia.bounceOff(wall13);
  sophia.bounceOff(wall14);
  sophia.bounceOff(wall15);
  sophia.bounceOff(wall16);
  sophia.bounceOff(wall17);
  sophia.bounceOff(wall18);
  sophia.bounceOff(wall19);
  sophia.bounceOff(wall20);
  sophia.bounceOff(wall21);
  sophia.bounceOff(wall22);
  
  if (sophia.isTouching(cup)) {
    textSize(40);
    text("YOU WIN", 110, 200);
    
if (sophia.isTouching(cup)) {
    Gamecondition (over)
  }  }
     drawSprites();
}

  
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
