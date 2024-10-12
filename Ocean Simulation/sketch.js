let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //colorMode(RGB);

  //create all particles and store them in the "particles []" array
  // "i" is how many times the for loop runs

  //blendMode(ADD);
  for (let i = 0; i < 900; i++) {
    let p = new Particle();
    particles.push(p);
  }
}

function draw() {
  // loop through all the Particles in the particles[] array, update and show them

  push();
  translate(-width / 2, -height / 2);
  for (let i = 0; i < particles.length; i++) {
    let currentParticle = particles[i];
    currentParticle.update(); //update() is a lot like "step ()" in RandomWalker class
    currentParticle.show(); //
  }

  //rect(0, 0, width, height / 2);
  pop();
}

class Particle {
  constructor() {
    this.position = createVector(
      random(windowWidth + 2),
      random(windowHeight + 2),
      random(-100, 100)
    );

    this.velocity = createVector(random(-2, -2), random(2, -2), random(2, 2));
    this.yRate = random(5, 50);
    this.yRange = random(1, -1);

    this.blendValue = random(5);
  }

  // update is where all the calculating happens

  update() {
    this.checkWalls();
    this.position.add(this.velocity);

    let yMovement = map(
      sin(frameCount / this.yRate),
      -1,
      1,
      -this.yRange,
      this.yRange
    );

    this.position.y += yMovement;
  }

  checkWalls() {
    if (this.position.x < 20) {
      // if (this.position.z < -1 || this.position.z > 10) this.velocity.z *= 0;
    }
  }

  show() {
    //let c= color ("navy ")
    //directionalLight = (c,0,1,1)
    if (this.blendValue > 0.008) {
      blendMode(SCREEN);
    } else {
      blendMode(DIFFERENCE);
    }

    //console.log(blendValue)

    let c = color("lightblue");
    directionalLight(c, 0.001, 0, 0.03);

    push();
    fill("rgb(115, 147, 179)");

    translate(this.position.x * 2, this.position.y * 2, 10);

    //strokeWeight(1);
    //stroke("lightblue");
    //noStroke();

    ellipsoid(50, 3, 20, 18);
    pop();
  }
}
