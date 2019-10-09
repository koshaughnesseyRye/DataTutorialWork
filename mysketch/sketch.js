let x = 500;
let y = 500;
let speedx = 50;
let speedy = 100;
let diam = 35;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(100, 200, 0);
	textSize(40);
	text("Hi, Mac", windowWidth / 2, windowHeight / 2);
	fill(255, 0, 0);
	ellipse(x, y, diam, diam);
	x += speedx;
	y += speedy;
	if (x > windowWidth - diam / 2 || x < diam / 2) {
		speedx *= -1;
	}
	if (y > windowHeight - diam / 2 || y < diam / 2) {
		speedy *= -1;
	}

}