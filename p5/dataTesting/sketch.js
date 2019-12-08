var canvas;
var h1;
var p;
var x = 100;
var y = 100;
var bgcolor;
var b;
var b2;
var on;
var slid;
var diam;
var input;
var nameP;
var b;

function setup() {
  p = createP("I am developing web skills");
  canvas = createCanvas(200, 200);
  createP('');
  slid = createSlider(10, 50, 30);
  nameP = createP('Name');
  b = createButton("press me");
  b2 = createButton("button 2");
  bgcolor = color(200);
  b2.mousePressed(boxAppear);
  b.mousePressed(changeColor);
  diam = slid.value();
  createP('');
  input = createInput('type your name');
  //h1 = createElement('h1', 'Waiting');
  //h1.position(400, 600)
  b = new Ball();
}

function draw() {
  //clear();
  background(bgcolor);
  diam = slid.value();
  fill(255, 0, 0);
  ellipse(x, y, diam, diam);
  x = x + random(-5, 5);
  //h1.position(x, y);
  if (on) {
    fill(0, 255, 0);
    stroke(255);
    text("clicked!", 25, 25);
    ellipse(0, 0, 25, 25);
    rect(25, 25, 50, 20);
    b.display();
    b.update();
  }
  nameP.html(input.value());
  text(input.value(), 10, 20);
}

function mousePressed() {
  //changeColor();
}

function boxAppear() {
  on = true;

}

// make button a callback 
function changeColor() {
  bgcolor = color(255, 0, 255);

}