/***************************************************************************
                                Fights Functions   
 **************************************************************************/

function startFight() {
	
	gameBoard.drawHTML();
	document.getElementById('map').removeEventListener("click", mouseClick);
	document.getElementById('section').style.visibility = 'visible'; 
	document.getElementById('reload').style.visibility = 'hidden'; 

	let playAgain = document.getElementById('playAgain');
    
    
	function isAttack() {
		activePlayer.defensePosture = false;
			if (passivePlayer.defensePosture === true) {
				passivePlayer.hp -= activePlayer.weapon.dg / 2;
				} else {
					passivePlayer.hp -= activePlayer.weapon.dg;
				} 
			passivePlayer.draw();
			document.getElementById('fight').textContent = activePlayer.name + " his attacking!";
			endCombatTurn();
			turnCounter++;
			activePlayer = getActivePlayer(turnCounter);
    		passivePlayer = getPassivePlayer(turnCounter);
			document.getElementById("active").textContent = activePlayer.name + ", it's your turn to play.";
	}
	
    
	function isPare() {
		activePlayer.defensePosture = true;
		document.getElementById('fight').textContent = activePlayer.name + ", is defending himself";
		endCombatTurn();
		turnCounter++;
		activePlayer = getActivePlayer(turnCounter);
    	passivePlayer = getPassivePlayer(turnCounter);
		document.getElementById("active").textContent = activePlayer.name + ", it's your turn to play.";
	}
    
	
	let buttonAttack = document.getElementById("attack");
		buttonAttack.addEventListener("click", isAttack);
        
	let buttonPare = document.getElementById("defend");
		buttonPare.addEventListener("click", isPare);
    
	
	function endCombatTurn() {
		passivePlayer.draw();
		if (passivePlayer.hp <= 0) {

			alert("Winner is " + activePlayer.name + " ! Game over");
			
			document.getElementById('section').style.visibility = 'hidden';
			turnCounter++;
            
			document.getElementById('active').style.visibility = 'hidden';
			document.getElementById('fight').style.visibility = 'hidden';
	
			//Reload Game
			document.getElementById('reload').style.visibility = 'visible'; 
			playAgain.addEventListener('mousedown' , function(){
				window.location.reload();
				
			}); 
		} 
	}
}
