let cardArray = [
  {
    name: 'ogata',
    img: 'images/ogata.jpg',
  },
  {
    name: 'ashiripa',
    img: 'images/ashiripa.jpg',
  },
  {
    name: 'koito',
    img: 'images/koito.png',
  },
  {
    name: 'shiraishi',
    img: 'images/shiraishi.jpg',
  },
  {
    name: 'sugimoto',
    img: 'images/sugimoto.png',
  },
  {
    name: 'tanigaki',
    img: 'images/tanigaki.jpg',
  },
  {
    name: 'tsukishima',
    img: 'images/tsukishima.png',
  }
]
cardArray = cardArray.concat(cardArray)
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []


function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  }
}

function checkMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneID = cardsChosenIds[0]
  const optionTwoID = cardsChosenIds[1]
  
  if (optionOneID == optionTwoID) {
    cards[optionOneID].setAttribute('src', 'images/blank.png')
    cards[optionTwoID].setAttribute('src', 'images/blank.png')
    alert('You have clicked the same image!')
  }
    else if (cardsChosen[0] === cardsChosen [1]){
      alert('You found a match!')
      cards[optionOneID].setAttribute('src', 'images/white.png')
      cards[optionTwoID].setAttribute('src', 'images/white.png')
      cards[optionOneID].removeEventListener('click', flipCard)
      cards[optionTwoID].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneID].setAttribute('src', 'images/blank.png')
      cards[optionTwoID].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again!')
    }
  cardsChosen = []
  cardsChosenIds = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}

function flipCard() {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
}

createBoard()

