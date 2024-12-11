let stars = [];

console.log("ok")

function setup() {
  createCanvas(windowWidth, windowHeight);
  // pg = createGraphics(50, 50, WEBGL);
  colorMode(RGB);

  for (let i = 0; i < 80; i++) {
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
  rotate(frameCount * 0.09);
  
  polarEllipses(50, 300 ,110, 16, function (...args) {
    blendMode(ADD);
    //blendMode (BLEND)
   noStroke()
    fill(args[0] * 2, args[1] * 20, args[4] * 140, 20);
    // fill(args[0]*20, args[0]*40, args[0]/80, 150);

    
    args[2] = args[0] * 5;
    args[3] = args[1] * 40;
    args[4] = args[-2] * 2;

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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}