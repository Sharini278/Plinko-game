var particles = [];
var plinkos = [];
var divisions = [];
var ground;

var divisionHeight;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}