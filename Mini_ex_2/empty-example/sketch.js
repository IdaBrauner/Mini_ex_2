var el

function setup() {
createCanvas(1500, 800,);
background(255,205,0);
el= color(255,205,0);/*baggrundsfarven*/
}

function draw() {
noStroke();
fill(el);
rect(475, 90, 55, 55);
fill(120,125,255)
rect(1100,300,55,55);
rect(400,300,55,55);

if(mouseX>475 && mouseX<530 && mouseY>90 && mouseY<145){
noStroke();
fill(214, 6, 41);
rect(475, 90,55,55);
fill(el);
rect(400,300,55,55);
rect(1100,300,55,55);
} else if (mouseX<850) {
  fill(255,205,0);
  noStroke();
  rect(400,300,55,55);
}else if (mouseX>850) {
  fill(el);
  noStroke();
  rect(1100,300,55,55);
}

textSize(32);
fill(255,166,4);
text('Press', 200, 100);
fill(240,4,81);
text('The', 290,125);
fill(5, 53, 251);
text('Square', 350, 145);


}
