function setup() {
    createCanvas(600, 600);
  }
  
    function draw() { 
      setCenter(width/2, height/2);
      //background(220);
     
      noFill()
      stroke (135,140,120)
      polarEllipses(10, 40+sin(frameCount/30)*20, 80, 80);
      
    noFill()
      stroke (250,250,250)
      polarEllipses (10,30+sin(frameCount/30)*50, 60,60)
      
    noFill ()
      stroke(130,250,150)
      polarEllipses (10,50+sin(frameCount/30)*20, 100, 100)
   
      
      
  
  }