
/***************************************************************************
                                Create the board
 **************************************************************************/

let gameBoard = {
	mnt: [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	],

	drawHTML: function () {
		let image;
		for (let y = 0; y <= 9; y++) {
			for (let x = 0; x <= 9; x++) {
				switch (this.mnt[y][x]) {

					case 1:
						image = "src/apple.png";
						break;
					case 2:
						image = "src/grapes.png";
						break;
					case 3:
						image = "src/banana.png";
						break;
					case 4:
						image = "src/pineapple.png";
						break;
					case 5:
						image = "src/palm.png";
						break;
					default:
						image = "src/step.png";
				}
				document.getElementById("y" + y + "x" + x).innerHTML = "<img src='" + image + "'/>";
			}
		}
		//activePlayer = player1
		document.getElementById("y" + player1.line + "x" + player1.column).innerHTML = "<img src='" + player1.image + "'/>";
		document.getElementById("y" + player2.line + "x" + player2.column).innerHTML = "<img src='" + player2.image + "'/>";
		let playerY = document.getElementById(`y${player1.line + 1}x${player1.column}`);
        let actLine;
        let actCol;
		// let playerY = document.getElementById(`y${player1.line + 1}x${player1.column}`);
		// let playerY = document.getElementById(`y${player1.line + 1}x${player1.column}`);


		let rm = document.getElementsByTagName("TD");
		$(rm).on("click", function () {
			$('.possibleSteps').removeClass('possibleSteps');
		})

	},

	initialize: function () {
		this.initializePalm();
		this.initializeApple();
		this.initializeGrapes();
		this.initializeBanana();
		this.initializePineapple();
		this.initializePlayer1();
		this.initializePlayer2();
		this.initAvaliable();
	},

	/************************************************Walls***********************************************/

	initializePalm: function () {
		let wallNb = 10;
		let wallCounter = 0;

		do {
			let y = myRandom();
			let x = myRandom();

			if (gameBoard.mnt[y][x] === 0) {
				this.mnt[y][x] = 5;
				wallCounter++;
			}
		} while (wallCounter < wallNb);
	},


	/************************************************Weapons***********************************************/


	initializeApple: function () {
		let weaponNb = 1;
		let weaponCounter = 0;

		do {
			let y = myRandom();
			let x = myRandom();

			if (gameBoard.mnt[y][x] === 0) {
				this.mnt[y][x] = 1;
				weaponCounter++;
			}
		} while (weaponCounter < weaponNb);
	},



	initializeGrapes: function () {
		let weaponNb = 1;
		let weaponCounter = 0;

		do {
			let y = myRandom();
			let x = myRandom();

			if (gameBoard.mnt[y][x] === 0) {
				this.mnt[y][x] = 2;
				weaponCounter++;
			}
		} while (weaponCounter < weaponNb);
	},

	initializeBanana: function () {
		let weaponNb = 1;
		let weaponCounter = 0;

		do {
			let y = myRandom();
			let x = myRandom();

			if (gameBoard.mnt[y][x] === 0) {
				this.mnt[y][x] = 3;
				weaponCounter++;
			}
		} while (weaponCounter < weaponNb);
	},

	initializePineapple: function () {
		let weaponNb = 1;
		let weaponCounter = 0;

		do {
			let y = myRandom();
			let x = myRandom();

			if (gameBoard.mnt[y][x] === 0) {
				this.mnt[y][x] = 4;
				weaponCounter++;
			}
		} while (weaponCounter < weaponNb);
	},

	/************************************************PLAYERS***********************************************/

	initializePlayer1: function () {
		let playerOneOk = false;

		do {
			let y = myRandom();
			let x = myRandom();

			if (gameBoard.mnt[y][x] === 0) {
				player1.line = y;
				player1.column = x;
				playerOneOk = true;
			}
		} while (!playerOneOk);
	},


	initializePlayer2: function () {
		let playerTwoOk = true;

		do {
			playerTwoOk = true;
			let y = myRandom();
			let x = myRandom();

			if (gameBoard.mnt[y][x] === 0) {
				player2.line = y;
				player2.column = x;

				if ((player1.line === y) && (player1.column === x)) {
					playerTwoOk = false;
				}

				if (playerAreClose()) {
					playerTwoOk = false;
				}
			}
		} while (!playerTwoOk);
	},

	initAvaliable: function () {


		function determine() {
			if (activePlayer === player1) {
				actLine = player1.line
				actCol = player1.column

			} else {
				actLine = player2.line
				actCol = player2.column
			}

			// Grab all the blocked fields
			let blocked = $("img[src='src/palm.png']").parent()

			let oneUp = document.getElementById(`y${actLine - 1}x${actCol}`);
			let twoUp = document.getElementById(`y${actLine - 2}x${actCol}`);
			let threeUp = document.getElementById(`y${actLine - 3}x${actCol}`);

			let oneDown = document.getElementById(`y${actLine + 1}x${actCol}`);
			let twoDown = document.getElementById(`y${actLine + 2}x${actCol}`);
			let threeDown = document.getElementById(`y${actLine + 3}x${actCol}`);

			let oneLeft = document.getElementById(`y${actLine}x${actCol - 1}`);
			let twoLeft = document.getElementById(`y${actLine}x${actCol - 2}`);
			let threeLeft = document.getElementById(`y${actLine}x${actCol - 3}`);

			let oneRight = document.getElementById(`y${actLine}x${actCol + 1}`);
			let twoRight = document.getElementById(`y${actLine}x${actCol + 2}`);
			let threeRight = document.getElementById(`y${actLine}x${actCol + 3}`);


			// Set the highlighted fields
			if (actCol - 3 >= 0) {
				threeLeft.classList = "possibleSteps "
			}
			if (actCol - 2 >= 0) {
				twoLeft.className = "possibleSteps"
				console.log(twoLeft)
			}
			if (actCol - 1 >= 0) {
				oneLeft.className = "possibleSteps"
			}
			if (actLine - 1 >= 0) {
				oneUp.className = "possibleSteps";
			}
			if (actLine - 2 >= 0) {
				twoUp.className = "possibleSteps";
			}
			if (actLine - 3 >= 0) {
				threeUp.classList = "possibleSteps";
			}

			if (actCol + 3 >= 0 && actCol + 3 <= 9) {
				threeRight.className = "possibleSteps"
			}
			if (actCol + 2 >= 0 && actCol + 2 <= 9) {
				twoRight.className = "possibleSteps"
			}
			if (actCol + 1 >= 0 && actCol + 1 <= 9) {
				oneRight.className = "possibleSteps"
			}

			if (actLine + 1 >= 0 && actLine + 1 <= 9) {
				oneDown.className = "possibleSteps";
			}
			if (actLine + 2 >= 0 && actLine + 2 <= 9) {
				twoDown.className = "possibleSteps";
			}
			if (actLine + 3 >= 0 && actLine + 3 <= 9) {
				threeDown.classList = "possibleSteps";
			}

			// Loop through blocked fields and assign them a class of "blocked"
			for (var b = 0; b < blocked.length; b++) {
				blocked[b].className = "blocked"
			}

			// If adjecent field has a class of blocked, remove higlight
			if (oneLeft.className === "blocked") {

				twoLeft.classList = "blocked";
				threeLeft.classList = "blocked";
			}
			if (twoLeft.className === "blocked") {
				threeLeft.classList = "blocked";
			}

			if (oneRight.className === "blocked") {
				twoRight.classList = "blocked";
				threeRight.classList = "blocked";
			}
			if (twoRight.className === "blocked") {
				threeRight.classList = "blocked";
			}

			if (oneUp.className === "blocked") {
				twoUp.classList = "blocked";
				threeUp.classList = "blocked";
			}
			if (twoUp.className === "blocked") {
				threeUp.classList = "blocked";
			}

			if (oneDown.className === "blocked") {
				twoDown.classList = "blocked";
				threeDown.classList = "blocked";
			}
			if (twoDown.className === "blocked") {
				threeDown.classList = "blocked";
			}
		}

		$("#gameTable").hover(determine);
	}
};

    function myRandom(minimum, maximum) {
	   let borne1 = minimum || 0;
	   let borne2 = maximum || 9;
	   let min = Math.min(borne1, borne2);
	   let max = Math.max(borne2, borne1);
	
	   return min + Math.floor(Math.random()*(max - min + 1));
    }

    function playerAreClose() {
	   let isClose;
	   let deltaL = Math.abs((player1.line) - (player2.line));
	   let deltaC = Math.abs((player1.column) - (player2.column));
	
	       if (((deltaL === 1) && (deltaC === 0)) || ((deltaL === 0) && (deltaC === 1))) {
            isClose = true;
	       }else{
            isClose = false;
           }
	   return isClose;
    }