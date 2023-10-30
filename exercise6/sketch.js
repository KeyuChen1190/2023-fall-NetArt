let rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];
let rainbowX;
let rainbowY;
let rainbowRadius;

let stars = [];

function setup() {
  createCanvas(600, 400);
  rainbowX = width / 2;
  rainbowY = height - 50;
  rainbowRadius = 100;

  // Create initial stars
  for (let i = 0; i < 10; i++) {
    stars.push(createStar());
  }
}

function draw() {
  background('#5caaa2');

  // Check if the mouse is over the rainbow
  let isHovering = dist(mouseX, mouseY, rainbowX, rainbowY) < rainbowRadius;

  // Change rainbow color based on mouse hover
  if (isHovering) {
    drawRainbow(true);
  } else {
    drawRainbow(false);
  }

  // Draw stars
  for (let star of stars) {
    drawStar(star);
    moveStar(star);
  }
}

function mousePressed() {
  if (dist(mouseX, mouseY, rainbowX, rainbowY) < rainbowRadius) {
    // Add a burst of stars at the mouse position when clicked
    for (let i = 0; i < 5; i++) {
      stars.push(createStar(mouseX, mouseY));
    }
  }
}

function drawRainbow(isHovering) {
  noStroke();
  for (let i = 0; i < rainbowColors.length; i++) {
    let segmentWidth = rainbowRadius / rainbowColors.length;
    let segmentX = rainbowX - rainbowRadius + i * segmentWidth;
    let segmentY = rainbowY;

    // Calculate the position of the curve
    let curveY = rainbowY + map(cos(frameCount / 50 + i), -1, 1, -30, 30);

    let segmentHeight = 20;

    fill(rainbowColors[i]);

    // Adjust the shading based on mouse hover
    if (isHovering) {
      let shading = map(segmentX, rainbowX - rainbowRadius, rainbowX + rainbowRadius, 255, 100);
      fill(shading, shading, shading);
    }

    arc(segmentX, curveY, segmentWidth * 2, segmentHeight, PI, 0, PIE);
  }
}

function createStar(x, y) {
  return {
    x: x,
    y: y,
    size: random(5, 15),
    speed: random(1, 3),
  };
}

function drawStar(star) {
  fill(255, 255, 0);
  noStroke();
  ellipse(star.x, star.y, star.size, star.size);
}

function moveStar(star) {
  star.y += star.speed;

  // Reset star if it goes off the bottom of the canvas
  if (star.y > height) {
    star.y = 0;
    star.x = random(width);
  }
}
