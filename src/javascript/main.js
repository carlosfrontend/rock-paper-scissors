const buttons = document.querySelectorAll('.btn');
const message = document.getElementById('message');
const circles = document.querySelectorAll('#circles-container');
const reset = document.querySelector('#reset');
const volumeText = document.getElementById('volume-text');
const volumeLogo = document.getElementById('volume-logo');
const backgroundAudio = new Audio('../src/sounds/calm-music.mp3');
const rockAudio = new Audio('../src/sounds/rock.mp3');
const paperAudio = new Audio('../src/sounds/paper.mp3');
const scissorsAudio = new Audio('../src/sounds/scissors.mp3');
const playerPointAudio = new Audio('../src/sounds/player-point.mp3');
const machinePointAudio = new Audio('../src/sounds/machine-point.mp3');
const levelWinAudio = new Audio('../src/sounds/level-win.mp3');
const gameOverAudio = new Audio('../src/sounds/game-over.mp3');
let isMuted = true;
let computerSelection = '';
let playerSelection = '';
let roundNumber = 0;
let playerScore = 0;
let machineScore = 0;

volumeText.textContent = 'Game Muted';

volumeLogo.addEventListener('click', () => {
  backgroundAudio.play();
  if (isMuted) {
    volumeLogo.classList.remove('fa-volume-mute');
    volumeLogo.classList.add('fa-volume-up');
    volumeText.textContent = 'Playing Sounds';
    backgroundAudio.muted = false;
    backgroundAudio.volume = '0.2';
    backgroundAudio.loop = true;
    isMuted = false;
  } else {
    volumeLogo.classList.remove('fa-volume-up');
    volumeLogo.classList.add('fa-volume-mute');
    volumeText.textContent = 'Game Muted';
    backgroundAudio.muted = true;
    backgroundAudio.pause
    backgroundAudio.volume = '0';
    isMuted = true;
  }
});

message.textContent = 'WELCOME, CLICK ON THE ROCK, PAPER OR SCISSORS BUTTON TO START...';

let getComputerChoice = () => {
  const wordsArr = ['Rock', 'Paper', 'Scissors'];
  const randomNum = Math.floor(Math.random() * 3);
  const choice = wordsArr[randomNum];
  return choice;
}

let setPlayerChoice = (elem) => {
  let playerSelection = elem.target.id.toLowerCase();
  if (playerSelection === 'rock') {
    if (isMuted) {
      rockAudio.muted;
    } else {
      rockAudio.volume = '0.5';
      rockAudio.play();
    }
    buttons[1].removeEventListener('click', playRound);
    buttons[2].removeEventListener('click', playRound);
  }
  if (playerSelection === 'paper') {
    if (isMuted) {
      paperAudio.muted;
    } else {
      paperAudio.volume = '0.5';
      paperAudio.play();
    }
    buttons[0].removeEventListener('click', playRound);
    buttons[2].removeEventListener('click', playRound);
  }
  if (playerSelection === 'scissors') {
    if (isMuted) {
      scissorsAudio.muted;
    } else {
      scissorsAudio.volume = '0.5';
      scissorsAudio.play();
    }
    buttons[0].removeEventListener('click', playRound);
    buttons[1].removeEventListener('click', playRound);
  }

  switch (playerSelection) {
    case "rock":
      buttons[0].style = 'border: 8px solid #19ccf0';
      buttons[0].children[0].classList.add('fa-solid');
      break;
    case "paper":
      buttons[1].style = 'border: 8px solid #19ccf0';
      buttons[1].children[0].classList.add('fa-solid');
      break;
    case "scissors":
      buttons[2].style = 'border: 8px solid #19ccf0';
      buttons[2].children[0].classList.add('fa-solid');
      break;
  }
  return playerSelection;
}

let setComputerChoice = () => {
  let computerSelection = getComputerChoice().toLowerCase();
  switch (computerSelection) {
    case "rock":
      if (isMuted) {
        rockAudio.muted;
      } else {
        rockAudio.volume = '0.5';
        rockAudio.currentTime = 0;
        rockAudio.play();
      }
      buttons[0].style = 'border: 8px solid rgb(240, 8, 240);';
      buttons[0].children[0].classList.add('fa-solid');
      break;
    case "paper":
      if (isMuted) {
        paperAudio.muted;
      } else {
        paperAudio.volume = '0.5';
        paperAudio.currentTime = 0;
        paperAudio.play();
      }
      buttons[1].style = 'border: 8px solid rgb(240, 8, 240);';
      buttons[1].children[0].classList.add('fa-solid');
      break;
    case "scissors":
      if (isMuted) {
        scissorsAudio.muted;
      } else {
        scissorsAudio.volume = '0.5';
        scissorsAudio.currentTime = 0;
        scissorsAudio.play();
      }
      buttons[2].style = 'border: 8px solid rgb(240, 8, 240);';
      buttons[2].children[0].classList.add('fa-solid');
      break;
  }
  return computerSelection;
}


let removePlayerChoice = (playerSelection) => {
  switch (playerSelection) {
    case "rock":
      buttons[0].style = 'border: none);';
      buttons[0].children[0].classList.remove('fa-solid');
      break;
    case "paper":
      buttons[1].style = 'border: none);';
      buttons[1].children[0].classList.remove('fa-solid');
      break;
    case "scissors":
      buttons[2].style = 'border: none);';
      buttons[2].children[0].classList.remove('fa-solid');
      break;
  }
}

let removeMachineChoice = (computerSelection) => {
  switch (computerSelection) {
    case "rock":
      buttons[0].style = 'border: none);';
      buttons[0].children[0].classList.remove('fa-solid');
      break;
    case "paper":
      buttons[1].style = 'border: none);';
      buttons[1].children[0].classList.remove('fa-solid');
      break;
    case "scissors":
      buttons[2].style = 'border: none);';
      buttons[2].children[0].classList.remove('fa-solid');
      break;
  }
}

let playRound = (elem) => {
  roundNumber++;
  const allSelectionsArr = [];
  playerSelection = setPlayerChoice(elem);

  if (roundNumber === 1) {
    circles.forEach(circles => circles.children[0].style = 'visibility: visible');
  } else if (roundNumber === 2) {
    circles.forEach(circles => circles.children[1].style = 'visibility: visible');
  } else if (roundNumber === 3) {
    circles.forEach(circles => circles.children[2].style = 'visibility: visible');
  } else if (roundNumber === 4) {
    circles.forEach(circles => circles.children[3].style = 'visibility: visible');
  }
  else {
    circles.forEach(circles => circles.children[4].style = 'visibility: visible');
    removeClickHandler();
  }

  setTimeout(() => {
    computerSelection = setComputerChoice();
    allSelectionsArr.push(playerSelection, computerSelection);
    message.textContent = `THE PLAYER HAS CHOSEN ${playerSelection.toUpperCase()} AND THE MACHINE HAS CHOSEN ${computerSelection.toUpperCase()}.`;
  }, 1000);

  setTimeout(() => {
    if (allSelectionsArr[0] === allSelectionsArr[1]) {
      message.textContent = 'TIE!!';
    } else if (allSelectionsArr[0] === 'rock' && allSelectionsArr[1] === 'scissors') {
      message.textContent = 'YOU WON!!, ROCK BEATS SCISSORS';
    } else if (allSelectionsArr[0] === 'paper' && allSelectionsArr[1] === 'rock') {
      message.textContent = 'YOU WON!!, PAPER BEATS ROCK.';
    } else if (allSelectionsArr[0] === 'scissors' && allSelectionsArr[1] === 'paper') {
      message.textContent = 'YOU WON!!, SCISSORS BEATS PAPER';
    } else if (allSelectionsArr[1] === 'rock' && allSelectionsArr[0] === 'scissors') {
      message.textContent = 'YOU LOSE!!, ROCK BEATS PAPER.';
    }
    else if (allSelectionsArr[1] === 'paper' && allSelectionsArr[0] === 'rock') {
      message.textContent = 'YOU LOSE!!, PAPER BEATS ROCK.';
    } else if (allSelectionsArr[1] === 'scissors' && allSelectionsArr[0] === 'paper') {
      message.textContent = 'YOU LOSE!!, SCISSORS BEATS PAPER.';
    }
    switch (message.textContent[4]) {

      case 'W':

        playerScore += 1;
        if (isMuted) {
          playerPointAudio.muted;
        } else {
          playerPointAudio.volume = '0.5';
          playerPointAudio.play();
        }
        break;

      case 'L':

        machineScore += 1;
        if (isMuted) {
          machinePointAudio.muted;
        } else {
          machinePointAudio.volume = '0.5';
          machinePointAudio.play();
        }
        break;

      default:

        playerScore += 0;
        machineScore += 0;
        break;

    }
    document.querySelector('.player-score').textContent = playerScore;
    document.querySelector('.machine-score').textContent = machineScore;
  }, 3000);
  removeSelections();
}

let removeSelections = () => {
  buttons.forEach(button => button.disabled = false);
  setTimeout(() => {
    removePlayerChoice(playerSelection);
    removeMachineChoice(computerSelection);
    if (roundNumber === 5) {
      if (playerScore === machineScore) {
        message.textContent = `THE PLAYER AND THE MACHINE TIED!! ${playerScore} - ${machineScore}.`;
        buttons.forEach(button => button.disabled = true);
      } else if (playerScore > machineScore) {
        message.textContent = `CONGRATULATIONS!! YOU WON!! ${playerScore} - ${machineScore}.`;
        if (isMuted) {
          levelWinAudio.muted;
        } else {
          levelWinAudio.volume = '0.5';
          levelWinAudio.play();
        }
        buttons.forEach(button => button.disabled = true);
      } else {
        message.textContent = `GAME OVER!!, YOU LOSE!! ${playerScore} - ${machineScore}.`;
        if (isMuted) {
          gameOverAudio.muted;
        } else {
          gameOverAudio.volume = '0.5';
          gameOverAudio.play();
        }
        buttons.forEach(button => button.disabled = true);
      }
      setTimeout(() => {
        message.textContent = 'CLICK ON RESET BUTTON FOR PLAY AGAIN!';
      }, 2000);

    } else {
      message.textContent = 'TRY AGAIN!!';
    }

    playAgain();

  }, 5000);
}

let setClickHandler = () => {
  buttons.forEach(button => button.addEventListener('click', playRound, {
    capture: false,
    once: false
  }), false);

}

let removeClickHandler = () => {
  buttons.forEach(button => button.removeEventListener('click', playRound, false));
}

let resetGame = () => {
  buttons.forEach(button => button.disabled = false);
  message.textContent = 'WELCOME, CLICK ON THE ROCK, PAPER OR SCISSORS BUTTON TO START...';
  roundNumber = 0;
  playerScore = 0;
  machineScore = 0;
  document.querySelector('.player-score').textContent = playerScore;
  document.querySelector('.machine-score').textContent = machineScore;
  for (let i = 0; i < 5; i++) {
    circles.forEach(circles => circles.children[i].style = 'visibility: hidden');
  }
}

let playAgain = () => {

  reset.addEventListener('click', resetGame);
  game();
}

let game = () => {
  let newRound = setClickHandler();
}

playAgain();
game();