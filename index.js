function getComputerChoice() {
  const wordsArr = ['Rock', 'Paper', 'Scissors'];
  const randomNum = Math.floor(Math.random() * 3);
  const choice = wordsArr[randomNum];
  return (choice);
}

let playRound = function (playerSelection, computerSelection) {
  let roundMessage = '';
  const allSelectionsArr = [];
  allSelectionsArr.push(playerSelection, computerSelection);

  if (allSelectionsArr[0] === allSelectionsArr[1]) {
    console.log('Player saids: ' + allSelectionsArr[0]);
    console.log('Machine saids: ' + allSelectionsArr[1]);
    roundMessage = 'You tied!!';
  } else if (allSelectionsArr[0] === 'rock' && allSelectionsArr[1] === 'scissors') {
    console.log('Player saids: ' + allSelectionsArr[0]);
    console.log('Machine saids: ' + allSelectionsArr[1]);
    roundMessage = 'You won! Rock beats Scissors';
  } else if (allSelectionsArr[0] === 'paper' && allSelectionsArr[1] === 'rock') {
    console.log('Player saids: ' + allSelectionsArr[0]);
    console.log('Machine saids: ' + allSelectionsArr[1]);
    roundMessage = 'You won! Paper beats Rock';
  } else if (allSelectionsArr[0] === 'scissors' && allSelectionsArr[1] === 'paper') {
    console.log('Player saids: ' + allSelectionsArr[0]);
    console.log('Machine saids: ' + allSelectionsArr[1]);
    roundMessage = 'You won! Scissors beats Paper';
  } else if (allSelectionsArr[1] === 'rock' && allSelectionsArr[0] === 'scissors') {
    console.log('Player saids: ' + allSelectionsArr[0]);
    console.log('Machine saids: ' + allSelectionsArr[1]);
    roundMessage = 'You Lose! Rock beats Scissors';
  }
  else if (allSelectionsArr[1] === 'paper' && allSelectionsArr[0] === 'rock') {
    console.log('Player saids: ' + allSelectionsArr[0]);
    console.log('Machine saids: ' + allSelectionsArr[1]);
    roundMessage = 'You Lose! Paper beats Rock';
  } else if (allSelectionsArr[1] === 'scissors' && allSelectionsArr[0] === 'paper') {
    console.log('Player saids: ' + allSelectionsArr[0]);
    console.log('Machine saids: ' + allSelectionsArr[1]);
    roundMessage = 'You Lose! Scissors beats Paper';
  }

  return roundMessage;
}

function game() {

  for (let i = 0; i < 5; i++) {

    let playerSelection = prompt('Write Rock, Paper or Scissors to play:');
    let computerSelection = getComputerChoice();

    if (playerSelection !== null) {
      playerSelection = playerSelection.toLocaleLowerCase();
      computerSelection = computerSelection.toLocaleLowerCase();

    } else {
      console.log('You cancelled the game!\nYou must write Rock Paper or Scissors...\nPress F5 key for play again!');
      return;
    }

    if (playerSelection !== '' && (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
      let messagePlayRound = playRound(playerSelection, computerSelection);
      console.log(messagePlayRound);
    } else {
      console.log('The text was empty or an invalid text!\nYou must write Rock Paper or Scissors...\nPress F5 key for play again!');
      return;
    }

  }

}

game();