const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  if (!e.target.id) return; // Prevent errors if button has no id
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3)
  console.log(randomNumber)

  if (randomNumber === 0) {
    computerChoice = 'rock'
  }
  if (randomNumber === 1) {
    computerChoice = 'paper'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'it\'s a draw!'
  } else if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!'
  } else if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lose!'
  } else if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!'
  } else if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!'
  } else if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
  } else if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
}
