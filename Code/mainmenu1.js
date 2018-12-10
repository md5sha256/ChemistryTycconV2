var atom1;
var atom2;
var elementID;

var display;
var displayX;
var display2X;
var displayY;
var display2Y;


function preloadDrawMaker()
{

}

function setupMaker()
{
//Making Stuff
    atom1 = 109;
    atom2 = 135;
}

function drawMaker()
{
  background(255,255,255);
  //Group1(1) 255,150,0
  //Group1(2) 235,150,0
  //Group2(1) 255,255,60
  //Group2(2) 235,235,60
  //Transition(1) 170,170,170
  //Transition(2) 200,200,200
  //Lanthanoids(1) 80,180,250
  //Lanthanoids(2) 60,160,230
  //Actinoids(1) 30,180,230
  //Actinoids(2) 20,150,230


  fill(200,200,200);
  rect(100,100,50,60);
  fill(0,0,0);
  textSize(24)
  text("Mn",atom1+0.5,atom2+5);
  textSize(10);
  text("54.938",atom1+1.5,atom2+20);
  textSize(15);
  text("25",atom1+7.5,atom2-20);


/*
  fill(170,170,170);
  rect(100,100,50,60);
  fill(0,0,0);
  textSize(40)
  text("?",atom1+4.5,atom2+10);
*/
}
