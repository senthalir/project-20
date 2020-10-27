var fixedrect;
var movingrect;

function setup() {
  createCanvas(1200,400);

  fixedrect=createSprite(600,200,50,80);
  fixedrect.shapeColor="red";
  fixedrect.debug=true;

  movingrect=createSprite(100,200,80,50);
  movingrect.shapeColor="red";
  movingrect.debug=true;
}

function draw() {
  background(0);
  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
   &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
   &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
   &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 ){
fixedrect.shapeColor="pink";
movingrect.shapeColor="pink";
  }
  else{
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }
  drawSprites();
}