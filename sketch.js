var box 
var dog 

function setup() {
  createCanvas(400,400);
box = createSprite (200,200,40,40)
dog= createSprite (100,200,40,40)

}

function draw() 
{
  background(30);
if(keyIsDown(LEFT_ARROW)) {
box.x= box.x-5
}
if(keyIsDown(RIGHT_ARROW)) {
  box.x= box.x+5
  }
  if(keyIsDown(UP_ARROW)) {
    box.y= box.y-5 
    }
    if(keyIsDown(DOWN_ARROW)) {
      box.y= box.y+5
      }
  drawSprites()

}




