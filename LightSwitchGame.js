//try to turn all boxes black
  var fill1 = 255;
  var fill2 = 0;
  var fill3 = 0;
  var fill4 = 255;
  var fill5 = 255;
  var fill6 = 0;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);

        //1
  fill(fill1);
  square(230,30,50);

  //2 right side top
  fill(fill2);
  square(380,150,50);

  //3 left side top
  fill(fill3);
  square(80,150,50);

  //4 left side bottom
  fill(fill4);
  square(150,290,50);

  //5 right side bottom
  fill(fill5);
  square(310,290,50);

  //6 center
    fill(fill6);
  square(230,165,50);

}
function mousePressed(){

    if ((fill1 === 0) && (fill2 === 0) && (fill3 === 0) && (fill4 === 0) && (fill5 === 0) && (fill6 === 0)){

    fill1 = (235, 53, 40);
    fill2 = (235, 53, 40);
    fill3 = (235, 53, 40);
    fill4 = (235, 53, 40);
    fill5 = (235, 53, 40);
    fill6 = (235, 53, 40);
  }
  //square 1: it will turn black when clicked and white when clicked again. If the two squares beside it 2&3 are black, they will stay that way, if they are white, they turn black
  if ((fill1 === 255) && (mouseX > width/2 - 25) && (mouseX < width/2 + 25) && (mouseY > 30) && (mouseY < 80)){
    fill1 = 0;
    fill2 = 0;
    fill3 = 0;
  } else if ((fill1 === 0) && (mouseX > width/2 - 25) && (mouseX < width/2 + 25) && (mouseY > 30) && (mouseY < 80)){
    fill1 = 255;
    fill2 = 0;
    fill3 = 0;
  }

  //square 2

    if ((fill2 === 0) && (mouseX > 380) && (mouseX < 430) && (mouseY > 150) && (mouseY < 200)){

    fill1 = 0;
    fill2 = 255;
    fill5 = 0;
  }

  else if ((fill2 === 255) && (mouseX > 380) && (mouseX < 430) && (mouseY > 150) && (mouseY < 200)){
    fill1 = 255;
    fill2 = 0;
    fill5 = 255;

  }
  //square 3

      if ((fill3 === 0) && (mouseX > 80) && (mouseX < 130) && (mouseY > 150) && (mouseY < 200)){

    fill1 = 0;
    fill3 = 255;
    fill4 = 0;
  }

  else if ((fill3 === 255) && (mouseX > 80) && (mouseX < 130) && (mouseY > 150) && (mouseY < 200)){
    fill1 = 255;
    fill3 = 0;
    fill4 = 255;

  }
  //square 4
        if ((fill4 === 255) && (mouseX > 150) && (mouseX < 200) && (mouseY > 290) && (mouseY < 340)){

    fill3 = 255;
    fill4 = 0;
    fill5 = 0;
  }

  else if ((fill4 === 0) && (mouseX > 150) && (mouseX < 200) && (mouseY > 290) && (mouseY < 340)){
    fill3 = 0;
    fill4 = 255;
    fill5 = 255;

  }
  //square 5
          if ((fill5 === 255) && (mouseX > 310) && (mouseX < 360) && (mouseY > 290) && (mouseY < 340)){

    fill2 = 255;
    fill4 = 0;
    fill5 = 0;
  }

  else if ((fill5 === 0) && (mouseX > 310) && (mouseX < 360) && (mouseY > 290) && (mouseY < 340)){
    fill2 = 0;
    fill4 = 255;
    fill5 = 255;

  }

  //square 6: resets to orginal
    if ((fill6 === 0) && (mouseX > width/2 - 25) && (mouseX < width/2 + 25) && (mouseY > 165) && (mouseY < 205)){
    fill6 = 0;
    fill1 = 255;
    fill2 = 0;
    fill3 = 0;
    fill4 = 255;
    fill5 = 255;
  } else if ((fill6 === 0) && (mouseX > width/2 - 25) && (mouseX < width/2 + 25) && (mouseY > 165) && (mouseY < 205)){
    fill6 = 0;
}



}
