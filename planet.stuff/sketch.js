let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // pg = createGraphics(50, 50, WEBGL);
  colorMode(RGB);

  for (let i = 0; i < 300; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 30),
    });
  }
}

function draw() {
  background(0);

  push();
  resetMatrix();
  setCenter(width / 2, height / 2);
  rotate(frameCount * 0.04);
  
  polarEllipses(80, 30 ,110, 1, function (...args) {
    blendMode(LIGHTEST);
    blendMode (SCREEN)
   stroke(args[0]*250,200,0);
    
    
    fill(args[0] * 3, args[1] * 3, args[4] * 5, 20);
    // fill(args[0]*20, args[0]*40, args[0]/80, 150);

    args[2] = args[0] * 6;
    args[3] = args[1] * 20;
    args[4] = args[-2] * 5;

    return args;
  });

  pop();

  //stars;
  for (let star of stars) {
    strokeWeight(1);
    stroke(250); // White stars
    point(star.x, star.y);

    // star movement
    star.y += 0.7;

    if (star.y > height) {
      star.y = 30;
      star.x = random(width);
    }
  }
}
 