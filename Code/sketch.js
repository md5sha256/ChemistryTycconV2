/*

*/
var canvasID;
function preload()
{
  preloadIntro();
  preloadMainMenu();
  preloadPeriodicTable();
}

function setup()
{
  canvasID = 2;
  createCanvas(1000,500);
  setupMaker();
}

function draw()
{
  if (canvasID == 0)
  {
    drawIntro()
  }
  if (canvasID == 1)
  {
    drawMainMenu()
  }
  if (canvasID == -1)
  {
    drawMaker()
  }
  if (canvasID == 2)
  {
    drawPeriodicTable()
  }
/*
  if (canvasID == 3)
  {
    drawGameMedium()
  }
  if (canvasID == 4)
  {
    drawGameHard()
  }
*/
}
