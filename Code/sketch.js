/*

*/
var canvasID;
function preload()
{
  preloadIntro();
  preloadMainMenu();
  preloadPeriodicTable();
  preloadShop()
  //preloadMarket()
  //preloadHydroCarbon()
  //preloadQuiz()
  //preloadCongrats()
  //preloadRetry()
}

function setup()
{
  canvasID = 2;
  createCanvas(1200,1000);
  fill(125,125,0);
  setupIntro();
  setupMainMenu();
  setupPeriodicTable();
  setupShop()
  setupMaker()
  //setupMarket()
  //setupHydroCarbon()
  //setupQuiz()
  //setupCongrats()
  //setupRetry()

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
  if (canvasID == 2)
  {
    drawPeriodicTable();
  }
  if (canvasID == 3)
  {
    drawShop()
  }
  if (canvasID == -1)
  {
    drawMaker()
  }
/*
  if (canvasID == 4)
  {
    drawMarket()
  }
  if (canvasID == 5)
  {
    drawHydroCarbon()
  }
  if (canvasID == 6)
  {
    drawQuiz()
  }
  if (canvasID == 7)
  {
    drawCongrats()
  }
  if (canvasID == 4)
  {
    drawRetry()
  }
*/
}
