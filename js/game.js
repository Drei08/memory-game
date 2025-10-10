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

const creatCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../img/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

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