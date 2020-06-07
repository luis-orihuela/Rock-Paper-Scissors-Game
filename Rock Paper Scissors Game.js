const getUserChoice = userInput => { 
  userInput = userInput.toLowerCase();
  return userInput;
};
 const getComputerChoice = randomNumber => {
   randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber) {
  case 0 :
  return 'paper';
  break;
  case 1 :
  return 'scissors';
  break;
  case 2 :
  return 'rock';
  break;
  }
};
const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === computerChoice){
    return 'It is a tie!';
  } else if (userChoice === 'rock' && computerChoice == 'paper') {
     return 'Computer wins!';
  } else if (userChoice === 'scissors' && computerChoice == 'rock') {
    return 'Computer wins!';
  } else if (userChoice === 'paper' && computerChoice == 'scissors') {
   return 'Computer wins!';
    } else {
   return 'User wins!';
   }
};
const playGame = () => {
  const userChoice = getUserChoice('');
  const computerChoice = getComputerChoice();
  if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
  console.log('User chose: ' + userChoice);
  console.log('Computer chose: ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
  }  else {
    console.log('Error. User entered: ' + '[' + userChoice + ']. ' + 'Please enter rock, paper, or scissors.');
    return;
  }
}
playGame();

