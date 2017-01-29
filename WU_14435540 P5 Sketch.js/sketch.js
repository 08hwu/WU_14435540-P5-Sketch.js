function setup() {
  resizeCanvas(600,450)

  

}




 var value = 0;
  var value2 = 0;

function draw() {

     var c9 = color(0, 1, 50);
  fill(c9);
  noStroke();
  triangle(value,350,50,250,250,250);
triangle(value+250,350,350,250,550,250);
triangle(value2,400,200,250,400,250);
  
  
}
function mouseClicked() {
  if (value == 0) {
    value = 300;
  } else {
    value = 0;
  }
  
    if (value2 == 0) {
    value2 = 450;
  } else {
    value2 = 0;
  }



  
  
  var c = color(300,250,0);
  fill(c);
  noStroke();
  rect(0,0,6000,6000);
  
   var c4 = color(255, 204, 0);
  fill(c4);
  noStroke();
  ellipse(mouseX, mouseY, 80, 80);
  
    
  var c5 = color('rgb(231, 95, 3)');
  fill(c5);
  noStroke();
  rect(0,250,600,350);
 
 
  
  
  var c3 = color('rgb(0,0,180)');
  fill(c3);
  noStroke();
  
  triangle(150,150,50,250,250,250);


 
  fill(c3);
  noStroke();
  
  triangle(450,150,350,250,550,250);
  
  var c2 = color('rgb(0,0,250)');
  fill(c2);
  noStroke();
  
  triangle(300,100,200,250,400,250);
  
   
}






