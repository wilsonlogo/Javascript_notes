# Project Related To Dom
## Project links
[Click Here](https://stackblitz.com/edit/vitejs-vite-b61pcvgh?file=1-color_changer%2Fjs_code.js)

## Solution to Projects
### Project-1

``` javascript
const button = document.querySelectorAll(".button")
const body=document.querySelector("body")

button.forEach(function(buttons){
  console.log(buttons)
  buttons.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id==='grey'){
      body.style.backgroundColor="grey"
    }
    if(e.target.id==='white'){
      body.style.backgroundColor="white"
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor="blue"
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor="yellow"
    }
  })
})
```
### Project-2
```javascript
const form = document.querySelector("form")

form.addEventListener("submit",function(e){
  e.preventDefault()
  const height=parseInt(document.getElementById("height").value)
  const weight=parseInt(document.getElementById("weight").value)
  const result=document.getElementById("results")

  if(height == " " || height<0 || isNaN(height)){
    console.log("Please Enter the Valid Height")
  }
  else if(weight == " " || weight<0 || isNaN(weight)){
    console.log("Please Enter the Valid weight")
  }else{
    const bmi=(weight / ((height*height)/10000)).toFixed(2)
    result.innerHTML=`<span>${bmi}</span>`
  }
  
})
```

### Project-3
```javascript
const clock=document.getElementById("clock")

setInterval(function(){
  const time=new Date()
  clock.innerHTML=time.toLocaleTimeString()
},1000)
```

### Project-4
```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```
### Project-5
```javascript
const randomColor =function(){
  const hex="0123456789ABCDEF"
  let color='#'
  for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color
}
let timezone = null
const startColor = function(){
  const setTime =function(){
    document.body.style.backgroundColor=randomColor()
  }
  if(!timezone){
    timezone=setInterval(setTime,1700)
  }
 
}
const stopColor=function(){
  clearInterval(timezone)
  timezone=null
}

document.querySelector('#start').addEventListener('click',startColor)

document.querySelector('#stop').addEventListener('click',stopColor)
```