let randomNum = parseInt(Math.random() * 50 + 1);
const userInput = document.getElementById('guessfield');
const submitButton = document.getElementById('sumt');
const previous = document.querySelector('.guesses');
const remaining = document.querySelector('.remaining');
const toShow = document.querySelector('.lowOrHigh');
const startover = document.querySelector('.result');

const p = document.createElement('p');

let prev = [];
let numGuess = 1;

let playGame = true;

if(playGame)
{
    submitButton.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validateGuess(guess);
    });
    
}

function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert(`Please provide a Number between 1 and 50 to win `);
    }else if(guess < 1)
    {
        alert(`Please Provide a Number that is greater that 0 `);
    }else if(guess > 50)
    {
        alert(`Please provide a number that is less than 51`);
    }else
    {
        prev.push(guess);
        if(numGuess === 11)
        {
            displayGuess(guess);
            displayMsg(`Game Over You lost😭 The number is ${guess}`);
            endGame();
        }else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess)
{
    if(guess === randomNum)
    {
        displayMsg(`Yayyyy 😀!!  You win the Game and the Number is ${guess}`);
        endGame();
    }else if(guess < randomNum)
    {
        displayMsg(`You are guessing TOOO low 😑`);
    }else
    {
        displayMsg(`You are guessing TOOO High 😑`);
    }
}

function displayGuess(guess)
{
    userInput.value = '';
    previous.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMsg(msg)
{
    toShow.innerHTML = `<h2>${msg}</h2>`;
}

function endGame()
{
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame2"> Start New Game </h2>`;
    startover.appendChild(p);
    playGame = false;
    newGame();
}

function newGame()
{
    const newGameButton = document.querySelector('#newGame2');
    newGameButton.addEventListener('click', function(e){
        randomNum = parseInt(Math.random()*50 +1);
        prev = [];
        numGuess = 1;
        previous.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startover.removeChild(p);
        toShow.innerHTML = '';

        playGame = true;
    });
}







