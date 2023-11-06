let mountainHeight = 150;
let waterLevel = 400;
let willowHeight = 50;
let waveOffset = 0;
let leaves = [];

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 50; i++) {
    leaves.push(new Leaf(random(width), random(waterLevel - willowHeight), random(5, 15)));
  }
}

function draw() {
  background(240);

  fill(100, 150, 100);
  triangle(0, waterLevel, width / 2, waterLevel - mountainHeight, width, waterLevel);

  drawWater();

  drawWillowTree(100, waterLevel - willowHeight);

  waveOffset += 0.2;

  for (let leaf of leaves) {
    leaf.display();
    leaf.update();
  }
}

function drawWater() {
  fill(100, 150, 255);

  beginShape();
  let waveHeight = 10;
  for (let x = 0; x <= width; x += 10) {
    let y = waterLevel + sin(radians(x + waveOffset)) * waveHeight;
    vertex(x, y);
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function drawWillowTree(x, y) {
  fill(139, 69, 19);
  rect(x - 5, y, 10, willowHeight * 1.5);

  fill(34, 139, 34);
  for (let i = 0; i < 5; i++) {
    let branchY = y - i * 15;
    ellipse(x, branchY, 40, 20);
  }
}

class Leaf {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.angle = random(TWO_PI);
    this.speed = random(0.02, 0.1);
  }

  display() {
    fill(34, 139, 34);
    ellipse(this.x, this.y, this.size, this.size);
  }

  update() {
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;

    if (this.x > width + this.size) {
      this.x = -this.size;
    }
    if (this.x < -this.size) {
      this.x = width + this.size;
    }
    if (this.y > waterLevel - this.size) {
      this.y = waterLevel - this.size;
    }
    if (this.y < 0) {
      this.y = waterLevel - this.size;
    }

    if (random() < 0.005) {
      this.angle += random(-PI / 4, PI / 4);
    }
  }
}
