init();
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        if(dice !== 1) {
            roundScore += dice;    
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }

    }
    
});

// Functionality that allows to accumulate points ('hold')
document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if(gamePlaying) {

        // 1. Adding the current score to the global score
        scores[activePlayer] += roundScore; 

        // 2. Updating the UI (user interface) 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // 3. Checking if the player won the game
        if(scores[activePlayer] >= 100) {

            // Changing the name of the player to 'Winner!'
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            // Hiding the dice 
            document.querySelector('.dice').style.display = 'none';

            // Adding the 'winner' class to the player
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

            // Removing the active player status from the winner 
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            // Changing the 'gamePlaying' variable to 'false' 
            gamePlaying = false;

        } else {
            // If the player wins the game, then it's the next player's turn
            nextPlayer();
        }
    }
});

// Restarting the game after clicking the 'New Game' button 
document.querySelector(".btn-new").addEventListener('click', init);

// Function that initializes the game
function init() {

  // Setting the 'gamePlaying' variable to 'true' 
  gamePlaying = true;

  // Setting both scores back to 0
  scores = [0, 0];

  // Setting the activePlayer back to being 'Player 1'
  activePlayer = 0;

  // Setting the roundScore back to 0
  roundScore = 0;

  // Hiding the dice right from the beggining of the game
  document.querySelector('.dice').style.display = 'none';

  // Setting the scores to 0 by default (using the 'getElementById' method)
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0'; 

  // Removing the 'winner status' from the winning player
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2'; 
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  // Removing the 'active status' from the winning player 
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  // Make sure that the 'active status' from 'Player 2' is removed and given to 'Player 1'  
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}

// Function to giving the turn to the next player
function nextPlayer() {
    
    // It's the next player's turn if the dice number is 1 (using the ternary operator)
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // Setting the roundScore back to 0
    roundScore = 0;

    // Setting the current score back to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Adding the active class to the player who has the turn now
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // Example of removing a class using the remove method 
    // document.querySelector('.player-0-panel').classList.remove('active');
    // Example of adding a class using the add method 
    // document.querySelector('.player-1-panel').classList.add('active');

    // Hiding the dice after the active player changes 
    document.querySelector('.dice').style.display = 'none';

}            