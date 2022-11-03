// Grab the HTML elements we want to interact with
const userInput = document.querySelector("#userInput");
const guessBtn = document.querySelector("#guessBtn");
const icon = document.querySelector("#icon");
const gauge = document.querySelector("#gauge");
const previousDiv = document.querySelector("#previousGuesses");


// Global variables
let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Shhhh... the secret # is ${secretNumber}`);
let numberOfGuesses = 0;

// create event listener for the guess button
guessBtn.addEventListener("click", function(){
    const guess = Number(userInput.value);
    
    numberOfGuesses++; // increase by 1
    // set the width of the status bar
    gauge.style.width = (10 * numberOfGuesses) + "%";

    // check if the # is correct
    if(guess === secretNumber){
        // they guessed right
        icon.textContent = `Way to go!!!! You are right!!!! :) Refresh the page to play again!`;
        icon.style.color = "green";
        previousDiv.innerHTML += `<p class="correct">${guess}</p>`;
        gameOver();
    } else {
        // they guessed wrong
        icon.textContent = `You were wrong!!!!!! :(`;
        icon.style.color = "red";

        //user friendly
        userInput.value = ""; //clear out the box
        userInput.focus(); // put the cursor in the box

        //record previous guess
        let clrClass = "low";
        if(guess > secretNumber){
            clrClass = "high";
        }
        previousDiv.innerHTML += `<p class="${clrClass}">${guess}</p>`;

        // are there any guesses left???
        if(numberOfGuesses >= 10){
            // the game should end
            icon.textContent = `Sorry, you are out of guesses. The number was ${secretNumber}. Refresh the page to play again.`;
            icon.style.color = "lightseagreen";
            gameOver();
        }

    } //end of else

});  // end of guessBtn event listener



// a function is named block of code that can be defined
// once and re-used as many times as you need it.

function gameOver(){
    // alll the stuff we want to do when the game ends
    guessBtn.disabled = true;
    userInput.disabled = true;
    document.querySelector("h1").style.color = "darkslategray";
    
} // end of gameOver()

// try to create a funciton called resetGame() that will 
// allow the user to play the game again without refreshing
// the page... only write/define the function... don't
// worry about calling it just create it

function resetGame(){
    numberOfGuesses = 0;
    secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`new secret # ${secretNumber}`);
    userInput.disabled = false;
    guessBtn.disabled = false;
    userInput.value = "";
    userInput.focus();
    icon.textContent = "?";
    icon.style.color = "black";
    previousDiv.innerHTML = "";
    gauge.style.width = "0%";
    document.querySelector("h1").style.color = "black";
} //end of resetGame()





