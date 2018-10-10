var wave;
var surfer;

function preload () {
  wave = loadImage('wave.jpg');
  surf = loadImage('surfer.png');
}

function setup() {
  createCanvas(700, 500);
}

function draw() {
  image(wave, 0, 0);
  image(surf, mouseX, mouseY, 200, 140);
}
