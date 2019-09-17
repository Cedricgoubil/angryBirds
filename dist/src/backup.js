/*--------------------------------------------------------------
                    P6 Build a turn-based board game
--------------------------------------------------------------*/


/*----------------------------------------------------------------
                    Create the board in the HTML page
----------------------------------------------------------------*/

let board = document.getElementById('board'),
context = board.getContext('2d');
let x = board.width; 
let y = board.height; 
let cols = 0;
let rows = 0;
    // Size of board case 60px
    caseSize = 60, 
    // The width size of the cases multiply by the width of the board
    numberCaseWidth = x / caseSize, 
    // The height size of the cases multiply by the height of the board    
    numberCaseHeight = y / caseSize, 
    // # of cases in the width multiply by # of cases in the height    
    numberCase = numberCaseWidth * numberCaseHeight,
    // Table with number of cases    
    casesList = []; 

// Create each case for the board game
function createBoard() {
    // Background color of board is blue
    context.fillStyle = "#0077be"; 
    // Fill up each case
    context.fillRect(0, 0, x, y); 
    // For each case on board game 
    for (var i = 0; i < numberCase; i++) {
    // Border color of the case is dark blue
    context.strokeStyle = '#0018be';
    // Case coordinate on board    
    context.strokeRect(caseSize * cols, caseSize * rows, caseSize, caseSize); 

    // ID for the case we want empty
    casesList[i] = {
      numerocase: i,
      id: "emptycase",
      positionX: caseSize * cols,
      positionY: caseSize * rows
    };
    cols++;

    if (cols === numberCaseWidth) {
      cols = 0;
      rows++;
    }
  }
}
createBoard();

/*----------------------------------------------------------------
                    Create the Dimmed cases
----------------------------------------------------------------*/

// Create 10 dimmed cases
let dimmedCase = 10; 
// Function which return randomly number of dimmed cases on board
function randomNumber() {
  return Math.floor(Math.random() * (numberCase - 1));
}
for (var i = 0; i < dimmedCase; i++) {
  var randomN = randomNumber();
  if (casesList[randomN].id !== "emptycase") {
    i--;
  }else{
    casesList[randomN].id = "dimmed";
  }
}

for (var i = 0; i < numberCase; i++) {
  (function(i) {
    if (casesList[i].id === "dimmed") {
      let dimmedPic = new Image();
      dimmedPic.src = "src/palm.png";
      dimmedPic.addEventListener('load', function() {
      context.drawImage(dimmedPic, casesList[i].positionX, casesList[i].positionY);
      }, false);
    }
  })(i);
}
/*----------------------------------------------------------------
                    Create the Players
----------------------------------------------------------------*/

// create player Red var cake = {flavor: "strawberry",levels: 2,price: "$10",occasion: "birthday",
let player1 = 1; 
// Function which return randomly player1 the on board
function randomNumber() {
  return Math.floor(Math.random() * (numberCase - 1));
}

for (var p = 0; p < player1; p++) {
  var randomN = randomNumber();
  if (casesList[randomN].id !== "emptycase") {
    p--;
  } else {
    casesList[randomN].id = "player1";
  }
}
for (var p = 0; p < numberCase; p++) {
  (function(p) {
    if (casesList[p].id === "player1") {
      let red = new Image();
      red.src = "src/red.png";
      red.addEventListener('load', function() {
      context.drawImage(red, casesList[p].positionX, casesList[p].positionY);
      }, false);
    }
  })(p);
}

let player2 = 1; 
// Function which return randomly player2 the on board
function randomnumber() {
  return Math.floor(Math.random() * (numberCase - 1));
}

for (var q = 0; q < player2; q++) {
  var randomN = randomnumber();
  if (casesList[randomN].id !== "emptycase") {
    q--;
  } else {
    casesList[randomN].id = "player2";
  }
}
for (var q = 0; q < numberCase; q++) {
  (function(q) {
    if (casesList[q].id === "player2") {
let bomb = new Image();
      bomb.src = "src/bomb.png";
      bomb.addEventListener('load', function() {
        context.drawImage(bomb, casesList[q].positionX, casesList[q].positionY);
      }, false);
    }
  })(q);
}

/*----------------------------------------------------------------
                    Create the Weapons
----------------------------------------------------------------*/

// create the banana weapon (do object oriented damage, name, etc...)
let weapon1 = 1; 
function randomnumber() {
  return Math.floor(Math.random() * (numberCase - 1));
}
for (var b = 0; b < weapon1; b++) {
  var randomN = randomnumber();
  if (casesList[randomN].id !== "emptycase") {
    b--;
  } else {
    casesList[randomN].id = "weapon1";
  }
}
for (var b = 0; b < numberCase; b++) {
  (function(b) {
    if (casesList[b].id === "weapon1") {
let banana = new Image();
      banana.src = "src/banana.png";
      banana.addEventListener('load', function() {
        context.drawImage(banana, casesList[b].positionX, casesList[b].positionY);
      }, false);
    }
  })(b);
}
 
// create the grapes weapon 
let weapon2 = 1;
function randomnumber() {
  return Math.floor(Math.random() * (numberCase - 1));
}
for (var g = 0; g < weapon2; g++) {
  var randomN = randomnumber();
  if (casesList[randomN].id !== "emptycase") {
    g--;
  } else {
    casesList[randomN].id = "weapon2";
  }
}
for (var g = 0; g < numberCase; g++) {
  (function(g) {
    if (casesList[g].id === "weapon2") {
let grapes = new Image();
      grapes.src = "src/grapes.png";
      grapes.addEventListener('load', function() {
        context.drawImage(grapes, casesList[g].positionX, casesList[g].positionY);
      }, false);
    }
  })(g);
}

// create the pineapple weapon   
let weapon3 = 1;
function randomnumber() {
  return Math.floor(Math.random() * (numberCase - 1));
}

for (var p = 0; p < weapon3; p++) {
  var randomN = randomnumber();
  if (casesList[randomN].id !== "emptycase") {
    p--;
  } else {
    casesList[randomN].id = "weapon3";
  }
}
for (var p = 0; p < numberCase; p++) {
  (function(p) {
    if (casesList[p].id === "weapon3") {
let pineapple = new Image();
      pineapple.src = "src/pineapple.png";
      pineapple.addEventListener('load', function() {
        context.drawImage(pineapple, casesList[p].positionX, casesList[p].positionY);
      }, false);
    }
  })(p);
}
   
// create the apple weapon
let weapon4 = 1;
function randomnumber() {
  return Math.floor(Math.random() * (numberCase - 1));
}

for (var a = 0; a < weapon4; a++) {
  var randomN = randomnumber();
  if (casesList[randomN].id !== "emptycase") {
    a--;
  } else {
    casesList[randomN].id = "weapon4";
  }
}
for (var a = 0; a < numberCase; a++) {
  (function(a) {
    if (casesList[a].id === "weapon4") {
let apple = new Image();
      apple.src = "src/apple.png";
      apple.addEventListener('load', function() {
        context.drawImage(apple, casesList[a].positionX, casesList[a].positionY);
      }, false);
    }
  })(a);
}







    










