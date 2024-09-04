function setup() {
    createCanvas(1920, 1080);
  // the american angle mode? (fuck the brits)
    angleMode (DEGREES)
    colorMode(RGB)
    background(0,0,0)
    
  }
  
  function draw() {
    background(20);
  
    let stepSize=1;
    for (let i=stepSize/2; i<width-2; i+=stepSize/2)
    
    {
       let hue= map (i, stepSize/20, width, 20,300,100)
      fill (0,0,0)
      
      let y= map(sin (i/9 + 10* frameCount/9), -1, 1, height/30, 2*height)
     
    //stroke (128,128,128)
      //strokeWeight (2)
    ellipse (i, y, stepSize*5, stepSize*8)
    stroke (hue,hue,hue)
    line (i,y/2, (i/2+60) *stepSize ,y*2) 
  }

  
  }

function windowResized (){
   
}

