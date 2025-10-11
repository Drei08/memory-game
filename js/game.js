const grid = document.querySelector('.grid');

const characters = [
  'beth',
  'jerry',
  'jessica',
  'meeseeks',
  'morty',
  'pessoa-passaro',
  'pickle-rick',
  'rick',
  'scroopy',
  'summer',
]

const createElement = (tag, className) => {
  const elemente = document.createElement(tag);
  elemente.className = className;
  return elemente;

}

let firstCard = '';
let secondCard = '';

const cheackEndGame  = () =>{

  const diabledCards = document.querySelectorAll('.disabled-card');

  if(diabledCards.length === 20){

    alert('Parabens, você completou!');

  }
}

const checkCards = () =>{

  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');
  
  if (firstCharacter === secondCharacter){

    firstCard.firstChild.classList.add('disabled-card'); 
    secondCard.firstChild.classList.add('disabled-card');
    
    firstCard = '';
    secondCard = '';

    cheackEndGame();

  }
  else {

    setTimeout(()=>{

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500)
  }
}

const revealCard = ({ target }) => {

  if (target.parentNode.classList.add('reveal-card')) {
    return;
  }

  if (firstCard === '') {
    target.parentNode.classList.add('reveal-card')
    firstCard = target.parentNode;
  }
  else if (secondCard === '') {
    target.parentNode.classList.add('reveal-card')
    secondCard = target.parentNode;
  }

  checkCards()

};

const creatCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../img/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character);

  return card;

}

const loadGame = () =>{

  const duplicateCharacters = [ ...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(()=>Math.random() - 0.5);
  
  shuffledArray.forEach((character) =>{

    const card = creatCard(character);
    grid.appendChild(card);
  })
}

loadGame();