$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(275, 625, 200, 20);
createPlatform(300, 500, 200, 20);
createPlatform(800, 230, 200, 20);
createPlatform(725, 330, 200, 20);
createPlatform(1200, 500, 200, 20);
createPlatform(500, 625, 200, 20);
    // TODO 3 - Create Collectables
createCollectable('diamond', 450, 625, 0.5, 0.7)
createCollectable('silver', 275, 300, 0.5, 0.7)
createCollectable('max', 700, 420, 0.5, 0.7)
createCollectable('database', 350, 575, 0.5, 0.7)

    // TODO 4 - Create Cannons
createCannon('bottom', 500, 1000);
createCannon('right', 700, 1000);
createCannon('top', 600, 1000); 
createCannon('left', 350, 1000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
