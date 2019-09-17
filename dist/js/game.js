/***********************************************
                 Globale variables
 ***********************************************/

let turnCounter;
let activePlayer;
let passivePlayer;


/********************Weapons Object*************************/  

function Weapons(name, image, id, dg) {
	this.name = "";
	this.image = "";
	this.id = "";
	this.dg = "";
	
	this.toString = function () {
		return "" + this.dg;
	};
}

let weapon1 = new Weapons();
	weapon1.name = "Apple";
	weapon1.id = 1;
	weapon1.dg = 10;

	weapon1.toString();

let weapon2 = new Weapons();
	weapon2.name= "Grapes";
	weapon2.id = 2;
	weapon2.dg = 20;

	weapon2.toString();

let weapon3 = new Weapons();
	weapon3.name = "Banana";
	weapon3.id = 3;
	weapon3.dg = 25;

	weapon3.toString();

let weapon4 = new Weapons();
	weapon4.name = "Pineapple";
	weapon4.id = 4;
	weapon4.dg = 50;

	weapon4.toString();

/************************************************Players Object***********************************************/  

let player1 = new Players();
	player1.reference = "p1";
	player1.name = "Red";
	player1.image = "src/red.png";

	player1.draw();

	
let player2 = new Players();
	player2.reference = "p2";
	player2.name = "Pig";
	player2.image = "src/pig.png";
	
	player2.draw();


/******************************************Game Initialiszation***********************************************/


function gameInitialize() {

	turnCounter = 1;
	activePlayer = getActivePlayer(turnCounter);
	document.getElementById("active").textContent = activePlayer.name + ", it's your turn to play.";
	passivePlayer = getPassivePlayer(turnCounter);
	gameBoard.initialize();
	click();
}


(function() {
	gameInitialize();
	gameBoard.drawHTML();
})();


function mouseClick(e) {
	let cell = e.target.parentElement.id;
    let line = Number(cell.charAt(1));
    let column = Number(cell.charAt(3));
    
		if (activePlayer.moveTo(line, column)) {
			turnCounter++;
			activePlayer = getActivePlayer(turnCounter);
			document.getElementById("active").textContent = activePlayer.name + ", it's your turn to play.";
			passivePlayer = getPassivePlayer(turnCounter);
        }
		gameBoard.drawHTML();
} 
        

function click() {
	document.getElementById("map").addEventListener("click", mouseClick);
} 

/********************************EVERYTHING OK HERE********************************/
