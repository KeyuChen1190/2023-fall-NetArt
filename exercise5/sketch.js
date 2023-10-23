let img;
let imageSize = 100; 
let rotationSpeed = 0.8; 
let numImages = 6; // 

function preload() {
  img = loadImage('https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/110.png&w=350&h=254');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#5caaa2')
  // Use a for-loop to create a pattern of spinning images
  for (let i = 0; i < numImages; i++) {
    // Calculate position based on the angle
    let angle = i * TWO_PI / numImages; // evenly distribute images around the circle
    let x = width / 2 + cos(angle) * 150;
    let y = height / 2 + sin(angle) * 150
    // Rotate the image and the entire coordinate system
    push();
    translate(x, y);
    rotate(radians(frameCount * rotationSpeed))
    // Rotate the image itself
    rotate(radians(frameCount * rotationSpeed))
    // Display the image at the center
    imageMode(CENTER);
    image(img, 0, 0, imageSize, imageSize);
    pop()
    // Draw a circle around the image
    noFill();
    stroke(0);
    ellipse(x, y, imageSize + 20)
    // Draw a triangle around the image
    drawTriangle(x, y, imageSize + 40);
  }
}

function drawTriangle(x, y, size) {
  let angleOff = PI / 6; // Offset angle for the triangle vertices
  beginShape();
  for (let i = 0; i < 3; i++) {
    let angle = angleOff + i * TWO_PI / 3;
    let xPos = x + cos(angle) * size;
    let yPos = y + sin(angle) * size;
    vertex(xPos, yPos);
  }
  endShape(CLOSE);
}