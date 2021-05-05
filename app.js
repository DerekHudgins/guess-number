import { userGuess } from "./utils.js";

// import functions and grab DOM elements
const guessButton = document.getElementById ('guess-btn');
const displayTooHigh = document.getElementById ('too-high');
const displayTooLow = document.getElementById ('too-low');
const displayWin = document.getElementById ('win');
const displayUserOutcome = document.getElementById ('display-outcome');

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
        displayTooHigh.style.display = 'block';
        displayTooLow.style.display = 'none';
        displayWin.style.display = 'none';
    }
    if (gNumber < rightNumber){
        displayTooLow.style.display = 'block';
        displayTooHigh.style.display = 'none';
        displayWin.style.display = 'none';
    }
    if (gNumber === rightNumber){
        displayTooLow.style.display = 'none';
        displayTooHigh.style.display = 'none';
        displayWin.style.display = 'block';
    }
    displayUserOutcome.textContent = `You have gotten the correct anwser ${win} / ${loss}`;
});
