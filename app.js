import { userGuess } from "./utils.js";

// import functions and grab DOM elements
const guessButton = document.getElementById ('guess-btn');
const displayTooHigh = document.getElementById ('too-high');
const displayTooLow = document.getElementById ('too-low');
const displayWin = document.getElementById ('win');
const displayUserOutcome = document.getElementById ('display-outcome');
const resetBtn = document.getElementById ('reset-btn');

// initialize state
let win = 0;
let loss = 0;
let rightNumber = Math.ceil(Math.random() * 20);
// set event listeners to update state and DOM

guessButton.addEventListener('click', () =>{
    const inputNumber = document.getElementById ('user-input').value;
    const gNumber = Number(inputNumber);
    if (userGuess(gNumber, rightNumber) === true){
        win++; 
    } else {
        loss++;
    }
    if (gNumber > rightNumber){
        displayTooHigh.textContent = `you guessed  ${gNumber} it is high`;
    }
    if (gNumber < rightNumber){
        displayTooLow.textContent = `you guessed  ${gNumber} it is low`;
    }
    if (gNumber === rightNumber){
        displayUserOutcome.textContent = `You have gotten the correct anwser ${win} / ${loss}`;
    }
    
    
});

resetBtn.addEventListener('click', () =>{  
    location.reload();
});
