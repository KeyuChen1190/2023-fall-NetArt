function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    //set the background color to green
    background('#618447');

    //create a blue colored rectangle 
    fill('#5caaa2');
    noStroke();
    let blueRectWidth = width;
    let blueRectHeight = height / 5;
    rect(0, 40, blueRectWidth, blueRectHeight);

    //draw the white rectangle
    fill('#b4c4b3');
    noStroke();
    let whiteRectWidth = width - 70;
    let whiteRectHeight = height / 15;
    rect(20, 40 + blueRectHeight - whiteRectHeight, whiteRectWidth, whiteRectHeight);
    
    //draw the yellow rectangle
    fill('#dcb65a');
    noStroke();
    let yellowRectWidth = width - 70;
    let yellowRectHeight = height / 2;
    rect(20, 40 + blueRectHeight, yellowRectWidth, yellowRectHeight);

    //draw the large white rectangle
    fill('#b4c4b3');
    noStroke();
    let largeWhiteRectWidth = width - 120;
    let largeWhiteRectHeight = height * 3/5;
    rect(50, height - largeWhiteRectHeight, largeWhiteRectWidth, largeWhiteRectHeight); 

    //paint the bottom block of white rectangle to blue
    fill('#5caaa2');
    noStroke();
    let bottomBlueWidth = width - 120;
    let bottomBlueHeight = height - yellowRectHeight - blueRectHeight - 40;
    rect(50, yellowRectHeight + blueRectHeight + 40, bottomBlueWidth, bottomBlueHeight);

    //paint the left 'blue eye' 
    fill('#5caaa2');
    noStroke();
    let eyeWidth = width * (1 / 15);
    let eyeHeight = 50;
    rect(70, height - largeWhiteRectHeight + 50, eyeWidth, eyeHeight);
    rect(width - 130, height - largeWhiteRectHeight + 50, eyeWidth, eyeHeight);

    //paint the embedded yellow
    fill('#dcb65a');
    noStroke();
    let embeddedYellowWidth = 120;
    let embeddedYellowHeight = 100;
    rect(130, height - largeWhiteRectHeight, embeddedYellowWidth, embeddedYellowHeight);
  }