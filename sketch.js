let webcam;
let circleSystem = [];
let scale = 4; // Adjusted scale for higher resolution

function setup() {
  createCanvas(800, 800); // Increased canvas size
  pixelDensity(1);
  webcam = createCapture(VIDEO);
  webcam.size(width / scale, height / scale);
  webcam.hide();
  
  for (let x = 0; x < 200; x++) {
    let rx = random(15, width - 15);
    let ry = random(15, height - 15);
    let r = random(4, 30);
    circleSystem[x] = new Circle(rx, ry, r);
  }
}

function draw() {
  background(0); // Clear the background each frame
  webcam.loadPixels();
  for (let x = 0; x < circleSystem.length; x++) {
    circleSystem[x].move();
    circleSystem[x].show();
    circleSystem[x].checkEdges();
  }
}

class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-8, 8);
    this.y = this.y + random(-8, 8);
  }

  show() {
    let pX = this.x / scale;
    let pY = this.y / scale;
    let pixelColor = webcam.get(pX, pY);
    
    // Invert the colors
    let invertedColor = [
      255 - pixelColor[0],
      255 - pixelColor[1],
      255 - pixelColor[2]
    ];
    
    // Apply the inverted color
    fill(invertedColor[0], invertedColor[1], invertedColor[2]);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r); 
  }

  checkEdges() {
    if (this.x < 15) {
      this.x = 15;
    } else if (this.x > width - 15) {
      this.x = width - 15;
    }
    if (this.y < 15) {
      this.y = 15;
    } else if (this.y > height - 15) {
      this.y = height - 15;
    }
  }
}