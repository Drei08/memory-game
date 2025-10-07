const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login__form');

const inputValidade = ({target}) => {
  if(target.value.length > 2){
    button.removeAttribute('disabled');
  }
  else{
    button.setAttribute('disabled', '');
  }
};

const formValidade = (event) =>{

  event.preventDefault();
  console.log(input.value);
  localStorage.setItem('player', input.value);
  window.location = 'pages/game.html';
}

input.addEventListener('input', inputValidade);
form.addEventListener('submit', formValidade);
