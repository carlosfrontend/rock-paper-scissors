// ROCK PAPER SCISSORS CONSOLE GAME

console.log('%cROCK PAPER SCISSORS GAME, PLAY WITH THE MACHINE FIVE ROUND', 'color:white;font-weight:bold; font-size:19px; text-decoration:underline;padding:8px; background-color:#000000;');

let roundNumber = 0;

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

  console.group('%cROUND ' + (roundNumber = roundNumber + 1), 'font-size:16px; font-weight:bold; color:#9C27B0');

  if (allSelectionsArr[0] === allSelectionsArr[1]) {

    console.log('%cPlayer saids: ' + allSelectionsArr[0], 'font-size:14px; font-weight:bold;color:#26A69A');
    console.log('%cMachine saids: ' + allSelectionsArr[1], 'font-size:14px; font-weight:bold;color:#42A5F5');
    roundMessage = 'You tied!!';

  } else if (allSelectionsArr[0] === 'rock' && allSelectionsArr[1] === 'scissors') {

    console.log('%cPlayer saids: ' + allSelectionsArr[0], 'font-size:14px; font-weight:bold;color:#26A69A');
    console.log('%cMachine saids: ' + allSelectionsArr[1], 'font-size:14px; font-weight:bold;color:#42A5F5');
    roundMessage = 'You Won! Rock beats Scissors';

  } else if (allSelectionsArr[0] === 'paper' && allSelectionsArr[1] === 'rock') {

    console.log('%cPlayer saids: ' + allSelectionsArr[0], 'font-size:14px; font-weight:bold;color:#26A69A');
    console.log('%cMachine saids: ' + allSelectionsArr[1], 'font-size:14px; font-weight:bold;color:#42A5F5');
    roundMessage = 'You Won! Paper beats Rock';

  } else if (allSelectionsArr[0] === 'scissors' && allSelectionsArr[1] === 'paper') {

    console.log('%cPlayer saids: ' + allSelectionsArr[0], 'font-size:14px; font-weight:bold;color:#26A69A');
    console.log('%cMachine saids: ' + allSelectionsArr[1], 'font-size:14px; font-weight:bold;color:#42A5F5');
    roundMessage = 'You Won! Scissors beats Paper';

  } else if (allSelectionsArr[1] === 'rock' && allSelectionsArr[0] === 'scissors') {

    console.log('%cPlayer saids: ' + allSelectionsArr[0], 'font-size:14px; font-weight:bold;color:#26A69A');
    console.log('%cMachine saids: ' + allSelectionsArr[1], 'font-size:14px; font-weight:bold;color:#42A5F5');
    roundMessage = 'You Lose! Rock beats Scissors';

  }
  else if (allSelectionsArr[1] === 'paper' && allSelectionsArr[0] === 'rock') {

    console.log('%cPlayer saids: ' + allSelectionsArr[0], 'font-size:14px; font-weight:bold;color:#26A69A');
    console.log('%cMachine saids: ' + allSelectionsArr[1], 'font-size:14px; font-weight:bold;color:#42A5F5');
    roundMessage = 'You Lose! Paper beats Rock';

  } else if (allSelectionsArr[1] === 'scissors' && allSelectionsArr[0] === 'paper') {

    console.log('%cPlayer saids: ' + allSelectionsArr[0], 'font-size:14px; font-weight:bold;color:#26A69A');
    console.log('%cMachine saids: ' + allSelectionsArr[1], 'font-size:14px; font-weight:bold;color:#42A5F5');
    roundMessage = 'You Lose! Scissors beats Paper';

  }

  return roundMessage;

}

function game() {

  let gameMessage = '';
  let playerScore = 0;
  let machineScore = 0;

  for (let i = 0; i < 5; i++) {

    let playerSelection = prompt('Write Rock, Paper or Scissors to play:');
    let computerSelection = getComputerChoice();

    if (playerSelection !== null) {

      playerSelection = playerSelection.toLocaleLowerCase();
      computerSelection = computerSelection.toLocaleLowerCase();

    } else {

      console.log('%cYou cancelled the game!\nYou must write Rock Paper or Scissors...\nPress F5 key for play again!', 'color:red;font-size:14px; font-weight:bold;');
      return;

    }

    if (playerSelection !== '' && (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {

      let messagePlayRound = playRound(playerSelection, computerSelection);

      console.log('%c' + messagePlayRound, 'font-size:14px; font-weight:bold;color:#E91E63;');

      switch (messagePlayRound[4]) {

        case 'W':

          playerScore += 1;
          break;

        case 'L':

          machineScore += 1;
          break;

        default:

          playerScore += 0;
          machineScore += 0;
          break;

      }

    } else {

      console.log('%cThe text was empty or an invalid text!\nYou must write Rock Paper or Scissors...\nPress F5 key for play again!', 'color:orange;font-size:14px; font-weight:bold;');
      return;

    }

    console.log('%cThe player score is: ' + playerScore + '  | ' + ' The Machine score is: ' + machineScore, 'font-size:14px; font-weight:bold; background:#000000;color:#CCFF00; padding:8px;');

    console.groupEnd('ROUND');

  }

  console.group('%cEND OF GAME', 'font-size:16px; font-weight:bold; background:#000000; color:white;');

  if (playerScore === machineScore) {

    gameMessage = 'The Player and the Machine Tied!! \n' + playerScore + ' - ' + machineScore;

  } else if (playerScore > machineScore) {

    gameMessage = 'The Player Won and the Machine Lost!!\n' + playerScore + ' - ' + machineScore;

  } else {

    gameMessage = 'The Machine Won and the Player Lost!!\n' + machineScore + ' - ' + playerScore;

  }

  console.log('%c' + gameMessage, 'font-size:18px; text-align:center; font-weight:bold; padding:12px;border:2px dotted olive; color:#FF0099; background:black; border-radius:15px;');

  return gameMessage;

}
console.groupEnd('END OF GAME');

game();