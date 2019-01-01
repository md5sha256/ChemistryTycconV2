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
  //Metalloids(1)10,200,60
  //Metalloids(2)10,180,60
  //NonMetals(1)50,200,200
  //NonMetals(2)50,180,200
  //NobleGases(1)
  //NobleGases(2)
  //Group8(1) 0,175,225
  //Group8(2) 0,150,200
  //Transition(1) 170,170,170
  //Transition(2) 200,200,200
  //Lanthanoids(1) 80,180,250
  //Lanthanoids(2) 60,160,230
  //Actinoids(1) 30,180,230
  //Actinoids(2) 20,150,230

  fill(50,200,200);
  rect(100,100,50,60);
  fill(0,0,0);
  textSize(24);
  text("Ti",atom1+5,atom2+5); //1
  textSize(10);
  text("204.38",atom1+1,atom2+20);
  textSize(15);
  text("81",atom1+8,atom2-20);


/*
  fill(170,170,170);
  rect(100,100,50,60);
  fill(0,0,0);
  textSize(40)
  text("?",atom1+4.5,atom2+10);
*/
}
