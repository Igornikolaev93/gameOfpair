let game = document.getElementById('game');
let firstCard = null;
let secondCard = null;
let button = document.createElement('button');
button.textContent="Cыграть еще раз";
button.classList.add('butt')

function start(game) {
  // создание массива
function createNumbersArray(count) {
  let l= [];
 for (let f = 1; f <= count; f ++) for(let g = 1; g <= 2; g++) {
   l.push(f)

 }
 return l;
}

// перемешивание

let m = createNumbersArray(8);

function sortArr(arr){
 for (let i = arr.length -1; i > 0; i--) {
   let j = Math.floor(Math.random() * i)
   let k = arr[i]
   arr[i] = arr[j]
   arr[j] = k
 }
 return arr;
}
console.log(sortArr(m))

let sort = sortArr(m)

for (let item of sort) {
  let card = document.createElement('div')
  card.textContent = item;

  card.classList.add('card');

  card.addEventListener('click', function(){
    if(card.classList.contains('open')) {return}

    if( firstCard != null && secondCard != null) {
      firstCard.classList.remove('open')
      secondCard.classList.remove('open')
      firstCard = null;
      secondCard = null;

    }

    card.classList.add('open');

    if (firstCard== null) {
      firstCard=card
    } else{
      secondCard = card
    }

    if( firstCard != null && secondCard != null) {

      let firstCardNumber = firstCard.textContent;
      let secondCardNumber = secondCard.textContent;

      if(firstCardNumber == secondCardNumber) {
        firstCard.classList.add('complete')
        secondCard.classList.add('complete')
      }
    }

    if( sort.length == document.querySelectorAll('.complete').length) {

      setTimeout (function(){
        alert("Игра завершена")
      },400);
      game.append(button);
      button.addEventListener('click',NewGame);
    }

    function NewGame() {
     game.innerHTML="";
     return start(game);
    }

  }
  )

  game.append(card)
}

}
start(game);
