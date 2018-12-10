var element;
var elementID;
var elements;
var maxElements;
var maxHeight;
var elementX;
var elementY;
var numberOfElements;
var elementWidth;
var elementHeight;
var showElement;
var numberOfElements;

var element1;
var element2;
var element3;
var potassium;
var caesium;
var francium;
var beryllium;
var calcium;
var strontium;
var barium;
var radium;
var scandium;
var lanthanoids;
var actinoids;
var alpha;

function preloadPeriodicTable()
{
  element = -1;
  for (var c = 0; c < maxElements; c++)
  {
      if (element[c][0] > mouseX && element[c][0] < mouseX + element[c][2] && mouseY > element[c][1] && mouseY < element[c][1] + element[c][3])
      {
          elementID = c;
      }
  }


	elementWidth = 40;
	elementHeight = 50;

  elementX = [100,100,100];
	elementY = [100,100+60,100+60*2,100+60*3];



  numberOfElements = 28;
	element = new Array(numberOfElements);
  for (var x = 1; x < numberOfElements; x++)
  {
    element[x] = new Array(4);
  }

//hydrogen
  for  (var x = 1; x < 8; x++)
  {

    element[x][0] = loadImage('https://md5sha256.github.io/ChemistryTycoonV2/Assets/Icons/Element' + x + '-OnDisplay.png');
  	element[x][1] = 100;
  	element[x][2] = 100+elementHeight*x;
    element[x][3] = loadImage('https://md5sha256.github.io/ChemistryTycoonV2/Assets/Icons/Element' + x + '-OnHover.png');
  }
  //beryllium
  for  (var x = 8, y = 2; x < 14; x++, y++)
  {
    element[x][0] = loadImage('https://md5sha256.github.io/ChemistryTycoonV2/Assets/Icons/Element' + x + '-OnDisplay.png');
  	element[x][1] = 140;
  	element[x][2] = 100+elementHeight*y;
    element[x][3] = loadImage('https://md5sha256.github.io/ChemistryTycoonV2/Assets/Icons/Element' + x + '-OnHover.png');
  }
//scandium
  for  (var x = 14, y = 4; x < 18; x++, y++)
  {
    element[x][0] = loadImage('https://md5sha256.github.io/ChemistryTycoonV2/Assets/Icons/Element' + x + '-OnDisplay.png');
    element[x][1] = 180;
    element[x][2] = 100+elementHeight*y;
    element[x][3] = loadImage('https://md5sha256.github.io/ChemistryTycoonV2/Assets/Icons/Element' + x + '-OnHover.png');
  }
//titanium
  for  (var x = 18, y = 4; x < 22; x++, y++)
  {
    element[x][0] = loadImage('https://md5sha256.github.io/ChemistryTycoonV2/Assets/Icons/Element' + x + '-OnDisplay.png');
    element[x][1] = 220;
    element[x][2] = 100+elementHeight*y;
    element[x][3] = loadImage('https://md5sha256.github.io/ChemistryTycoonV2/Assets/Icons/Element' + x + '-OnHover.png');
  }
//
  for  (var x = 22, y = 4; x < 24; x++, y++)
  {
    element[x][0] = loadImage('https://md5sha256.github.io/ChemistryTycoonV2/Assets/Icons/Element' + x + '-OnHover.png');
    element[x][1] = 260;
    element[x][2] = 100+elementHeight*y;
    element[x][3] = loadImage('https://md5sha256.github.io/ChemistryTycoonV2/Assets/Icons/Element' + x + '-OnDisplay.png');
  }

  for  (var x = 24, y = 4; x < 28; x++, y++)
  {
    element[x][0] = loadImage('https://md5sha256.github.io/ChemistryTycoonV2/Assets/Icons/Element' + x + '-OnDisplay.png');
    element[x][1] = 260;
    element[x][2] = 100+elementHeight*y;
    element[x][3] = loadImage('https://md5sha256.github.io/ChemistryTycoonV2/Assets/Icons/Element' + x + '-OnHover.png');
  }

}

function setupPeriodicTable()
{
}

function drawPeriodicTable()
{
  showElement();
}

function showElement()
{
	for (var i = 1; i < numberOfElements; i++)
	{
		image(element[i][0],element[i][1],element[i][2],elementWidth,elementHeight);
    if (mouseX > element[i][1] && mouseX < element[i][1] + elementWidth && mouseY > element[i][2] && mouseY < element[i][2] + elementHeight)
    {
      image(element[i][3],element[i][1],element[i][2],elementWidth,elementHeight)
    }
	}
}
