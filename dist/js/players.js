/***********************************************
            Players Object
 ***********************************************/

function Players(reference, name, image, hp, weapon, line, column, defensePosture) {
    this.reference = "";
    this.name = "";
    this.image = "";
    this.hp = 100;
    this.weapon = weapon1;
    this.line = "";
    this.column = "";
	this.defensePosture = false;

    this.isMoveTooLong = function (l, c) {
        let isTooLongMove = false;
        let deltaLine = Math.abs(l - this.line);
        let deltaCol = Math.abs(c - this.column);
        let move = Math.max(deltaLine, deltaCol);

        if (move > 3) {
            isTooLongMove = true;
        }
        return isTooLongMove;
    }

    this.isMoveDiagonal = function (l, c) {
        let isDiag = false;

        if ((this.line != l) && (this.column != c)) {
            isDiag = true;
        }

        return isDiag;
    }

    this.isMoveThroughWall = function (l, c) {
        let isWallOnPath = false;
        let deltaLine = Math.abs(l - this.line);
        let deltaCol = Math.abs(c - this.column);
        let move = Math.max(deltaLine, deltaCol);
        let isLineMove = true;
        let sens;

        if (deltaLine === 0) {
            isLineMove = false
            sens = (c > this.column) ? 1 : -1;
        } else {
            isLineMove = true;
            sens = (l > this.line) ? 1 : -1;
        }

        if ((isLineMove) && (sens > 0)) {
            for (let i = this.line + 1; i <= l; i = i + sens) {
                if (gameBoard.mnt[i][c] === wall.id) {
                    isWallOnPath = true;
                }
            }
        }
        if ((isLineMove) && (sens < 0)) {
            for (let j = this.line - 1; j >= l; j = j + sens) {
                if (gameBoard.mnt[j][c] === wall.id) {
                    isWallOnPath = true;
                }
            }
        }
        if (!(isLineMove) && (sens > 0)) {
            for (let k = this.column + 1; k <= c; k = k + sens) {
                if (gameBoard.mnt[l][k] === wall.id) {
                    isWallOnPath = true;
                }
            }
        }
        if (!(isLineMove) && (sens < 0)) {
            for (let m = this.column - 1; m >= c; m = m + sens) {
                if (gameBoard.mnt[l][m] === wall.id) {
                    isWallOnPath = true;
                }
            }
        }
        return isWallOnPath;
    }
	
    this.moveTo = function (l, c) {
        let isFight = false;
        let isValidMove = true;
        let deltaLine = Math.abs(l - this.line);
        let deltaCol = Math.abs(c - this.column);
        let move = Math.max(deltaLine, deltaCol);
        let isLineMove = true;
        let sens;
        
        if ((this.isMoveTooLong(l, c)) || (this.isMoveDiagonal(l, c)) || (this.isMoveThroughWall(l, c))) {
            isValidMove = false;
        } else {
            
                        
            let oldWeaponId = this.weapon.id;
            let newWeaponId = gameBoard.mnt[l][c];

            if (deltaLine === 0) {
                isLineMove = false
                sens = (c > this.column) ? 1 : -1;
            } else {
                isLineMove = true;
                sens = (l > this.line) ? 1 : -1;
            }

            if ((isLineMove) && (sens > 0)) {
                for (let i = this.line + 1; i <= l; i = i + sens) {
                    if ((gameBoard.mnt[i][c] >= weapon1.id) && (gameBoard.mnt[i][c] <= weapon4.id)) {
                        let oldWeapon = gameBoard.mnt[i][c];
                        gameBoard.mnt[i][c] = this.weapon.id;

                        switch (oldWeapon) {
                            case 1:
                                this.weapon = weapon1;
                                break;
                            case 2:
                                this.weapon = weapon2;
                                break;
                            case 3:
                                this.weapon = weapon3;
                                break;
                            case 4:
                                this.weapon = weapon4;
                                break;
                        }
                        this.draw();
                    }

                    this.setPosition(i, c);
                    if (playerAreClose()) {
						isFight = true;
						alert("Let's FIGHT!!!");
                        startFight();
						break;
                    }
                }
            }
            if ((isLineMove) && (sens < 0)) {
                for (let j = this.line - 1; j >= l; j = j + sens) {
                    if ((gameBoard.mnt[j][c] >= weapon1.id) && (gameBoard.mnt[j][c] <= weapon4.id)) {
                        let oldWeapon = gameBoard.mnt[j][c];
                        gameBoard.mnt[j][c] = this.weapon.id;

                        switch (oldWeapon) {
                            case 1:
                                this.weapon = weapon1;
                                break;
                            case 2:
                                this.weapon = weapon2;
                                break;
                            case 3:
                                this.weapon = weapon3;
                                break;
                            case 4:
                                this.weapon = weapon4;
                                break;
                        }
                        this.draw();
                    }

                    this.setPosition(j, c);
                    if (playerAreClose()) {
						isFight = true;
						alert("Let's FIGHT!!!");
                        startFight();
						break;
                    }
                }
            }

            if (!(isLineMove) && (sens > 0)) {
                for (let k = this.column + 1; k <= c; k = k + sens) {
                    if ((gameBoard.mnt[l][k] >= weapon1.id) && (gameBoard.mnt[l][k] <= weapon4.id)) {
                        let oldWeapon = gameBoard.mnt[l][k];
                        gameBoard.mnt[l][k] = this.weapon.id;

                        switch (oldWeapon) {
                            case 1:
                                this.weapon = weapon1;
                                break;
                            case 2:
                                this.weapon = weapon2;
                                break;
                            case 3:
                                this.weapon = weapon3;
                                break;
                            case 4:
                                this.weapon = weapon4;
                                break;
                        }
                        this.draw();
                    }
                    
                    this.setPosition(l, k);
                    if (playerAreClose()) {
						isFight = true;
						alert("Let's FIGHT!!!");
                        startFight();
						break;
                    }
                }
            }
            if (!(isLineMove) && (sens < 0)) {
                for (let m = this.column - 1; m >= c; m = m + sens) {
                    if ((gameBoard.mnt[l][m] >= weapon1.id) && (gameBoard.mnt[l][m] <= weapon4.id)) {
                        let oldWeapon = gameBoard.mnt[l][m];
                        gameBoard.mnt[l][m] = this.weapon.id;

                        switch (oldWeapon) {
                            case 1:
                                this.weapon = weapon1;
                                break;
                            case 2:
                                this.weapon = weapon2;
                                break;
                            case 3:
                                this.weapon = weapon3;
                                break;
                            case 4:
                                this.weapon = weapon4;
                                break;
                        }
                        this.draw(); 
                    }
                    
                    this.setPosition(l, m);
                    if (playerAreClose()) {
						isFight = true;
						alert("Let's FIGHT!!!");
                        startFight();
						break;
                    }
                }
            }
        }
        return isValidMove;
    }

    
    this.setPosition = function (l, c) {
        this.line = l;
        this.column = c;
    }

    this.draw = function () { 
        document.getElementById(this.reference + "name").textContent = "Name : " + this.name;
        document.getElementById(this.reference + "weapon").textContent = "Weapon : " + this.weapon.name;
        document.getElementById(this.reference + "damage").textContent = "Damage : " + this.weapon.dg;
        document.getElementById(this.reference + "health").textContent = "Health : " + this.hp;
    }
}


    function getActivePlayer(turn){
        let playerTurn;   
            if (turn % 2 === 0) {
            playerTurn = player2; 
	       }else {
            playerTurn = player1;
	       };
	   return playerTurn;
    }

    
    function getPassivePlayer(turn) {
	   let playerWait;
	       if (turn % 2 === 1) { 
		   playerWait = player2;
	       }else{
		   playerWait = player1;
	       }
	   return playerWait;
    }


let wall = {
	id : 5
};


/********************************EVERYTHING OK HERE********************************/

