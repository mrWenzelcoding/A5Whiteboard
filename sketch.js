let x = 200;
let y = 200;
let r = 100;
let g = 100;
let b = 100;
let tarR = 100;
let tarG = 100;
let tarB = 100;
let eraser = 0;
let diameter = 20;

function setup() {
  createCanvas(800, 800);

  background("black");
}

function draw() {
  r += (tarR - r) / 5;
  g += (tarG - g) / 5;
  b += (tarB - b) / 5;

  noStroke();

  fill(r, 0, 0);
  rect(0, 0, 800, 40);
  fill(0, g, 0);
  rect(0, 40, 800, 40);
  fill(0, 0, b);
  rect(0, 80, 800, 40);
  fill("white");
  rect((r / 255) * 800, 0, 5, 40);
  rect((g / 255) * 800, 40, 5, 40);
  rect((b / 255) * 800, 80, 5, 40);

  fill("black");
  stroke(r, g, b);
  rect(700, 700, 50, 50);
  noStroke();

  fill(r, g, b);
  rect(0, 780, 800, 20);
  rect(0, 120, 20, 780);
  rect(0, 120, 800, 20);
  rect(780, 120, 20, 780);

  if (mouseIsPressed) {
    noStroke();

    fill(r, g, b);

    if (mouseX > 700 && mouseX < 750 && mouseY > 700 && mouseY < 750) {
      background("black");
    }

    circle(mouseX, mouseY, diameter);

    if (mouseY < 40) {
      tarR = (mouseX / 800) * 255;
    }
    if (mouseY < 80 && mouseY >= 40) {
      tarG = (mouseX / 800) * 255;
    }
    if (mouseY < 120 && mouseY >= 80) {
      tarB = (mouseX / 800) * 255;
    }
  } else {
  }
}
