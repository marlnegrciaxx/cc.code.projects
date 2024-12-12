let x;
let y;

let r;
let g;
let b;

function setup() {
  createCanvas(windowWidth,windowHeight);

  x = width/2 ;
  y = height/2 ;
  
  r= random (250,143)
  g=random(11,102)
  b=random (0)
 
  colorMode (RGB)
  background(0);
}

function draw() {
// for function works with point variable, creates point walker   
  
  for (let i = 0; i < 100; i++) {
   
    x = constrain (x, 0, width)
    y = constrain (y, 0, height)
    x += random(-1, 1);
    y += random(-1, 1);
  }
// let nextY/X function works for line variable, creates different walker effect compared to the point
 
 // let nextX = x + random (-20,20)
  //let nextY = y + random (-20,20)

  //nextX= constrain (nextX, 0, width)
 // nextY= constrain (nextY, 0, height)
  
  r += (-10,-10)
  g += random (-10,10)
  b += random (-10,10)
  
  r + constrain (g, 0, 10)
   
  g + constrain (20, 140, 240)
   
  b + constrain (20, 120, 160)
    
  stroke(r,g,b);
  strokeWeight (5)
    point(x,y, 30)
  
  
  
  //x= nextX
  //y=nextY
          } 

