let particles = []

let previous;
let current;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  //create all particles and store them in the "particles []" array
   // "i" is how many times the for loop runs

  for (let i=0; i< 1000; i++){
    
    let p = new Particle ();
    particles.push (p);
    
    
    
    
    
  }
}

function draw() {
 //background(220);
  // loop through all the Particles in the particles[] array, update and show them
   //background (0)
  
  for (let i = 0; i < particles.length; i++) {
    
    let currentParticle = particles [i];
    currentParticle.update () //update() is a lot like "step ()" in RandomWalker class
    currentParticle.show() // 
    
  }
}

class Particle {
  constructor() {
    this.position = createVector(random(width), random(height));

    this.velocity = createVector(random(-1, 1), random(-1, 1));
    
    this.acceleration = createVector (random(-1, 1), random(-1,1), random (-1,1)) //in 3 dimesnions add another "random()"
                                    
    }
  // update is where all the calculating happens
  
  update() {
    this.velocity.add (this.acceleration)
     this.checkWalls ()
    this.position.add(this.velocity);
    this.age--
  }
  
  checkWalls (){
    // check top wall
    if (this.position.y < 0){
       this.velocity.y *= -1; // reverse the y direction, if its negative, it becomes positive, and v-ice versa
    }
    
    if (this.position.y > height){
      this.velocity.y *= -1
    }
    
    if (this.position.x < 0){
      this.velocity.x *= -1
    }
    
    if (this.position.x > width){
      this.velocity.x *= -1
    }
    

    
  }
  // show is where we display the particle based on what happened in update.
  
  show() {
   
   //push (30)
    orbitControl()
    
    ellipsoid (200,this.velocity.y*10, this.velocity.x*10, 20)
    stroke (30)
    
    fill (120,100,200)
    //pop(20)
    
  
   
    //ellipsoid (200, this.position.y*2, this.position.x*4, 20)
    
   
  }
}
