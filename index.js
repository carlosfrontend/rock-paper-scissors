function getComputerChoice() {
  const wordsArr = ['Rock', 'Paper', 'Scissors'];
  const randomNum = Math.floor(Math.random() * 3);
  const choice = wordsArr[randomNum];
  return(choice);
}
const computerSelection = getComputerChoice().toLowerCase();
const playerSelection = prompt('Write Rock, Paper or Scissors to play:').toLowerCase();

function playRound(playerSelection, computerSelection) {
  let roundMessage = '';
  const allSelectionsArr = [];
  allSelectionsArr.push(playerSelection,computerSelection);
  if(allSelectionsArr[0] === allSelectionsArr[1]){
    roundMessage = 'You tied!!';
  }else if(allSelectionsArr[0] === 'rock' && allSelectionsArr[1] === 'scissors' ){
    roundMessage = 'You won! Rock beats Scissors';
  }else if(allSelectionsArr[0] === 'paper' && allSelectionsArr[1] === 'rock' ){
    roundMessage = 'You won! Paper beats Rock';
  }else if(allSelectionsArr[0] === 'scissors' && allSelectionsArr[1] === 'paper' ){
    roundMessage = 'You won! Scissors beats Paper';
  }else if(allSelectionsArr[1] === 'rock' && allSelectionsArr[0] === 'scissors' ){
    roundMessage = 'You Lose! Rock beats Scissors';
  }
  else if(allSelectionsArr[1] === 'paper' && allSelectionsArr[0] === 'rock' ){
    roundMessage = 'You Lose! Paper beats Rock';
  }else if(allSelectionsArr[1] === 'scissors' && allSelectionsArr[0] === 'paper' ){
    roundMessage = 'You Lose! Scissors beats Paper';
  }
  
  console.log('Player saids: ' + allSelectionsArr[0]);
  console.log('Machine saids: ' + allSelectionsArr[1]);
  return roundMessage;
}
 
console.log(playRound(playerSelection, computerSelection));