function getComputerChoice() {
  let wordsArr = ['Rock', 'Paper', 'Scissors'];
  let randomNum = Math.floor(Math.random() * 3);
  const choice = wordsArr[randomNum];
  console.log(choice);
}

getComputerChoice();