

let total = 0;
let guesses = [];
let user = prompt("Enter your name.");
function guessing(num) {
    let myNumber = 20;
    function guessAgain() {
        guessing(prompt("Guess Again."));
    };
    total+=1;
    guesses.push(num);
    if (num == myNumber) {
        if(total === 1) {
            alert(`That's correct ${user}! ${num} was your only guess!`)
        } else {
            alert(`That's correct ${user}! Your previous guesses were ${guesses.join(', ')}!`);
        }
        playAgain(prompt("Would you like to play again?"));
    } else if (num < myNumber) {
        alert(`Sorry ${user}, guess higher.`);
        guessAgain();
    } else if (num > myNumber) {
        alert(`Sorry ${user}, guess lower.`);
        guessAgain();
    } else {
        alert(`${user}, what the hell are you doing?`);
        guessAgain();
    }
}
guessing(prompt("Guess a number."));

function playAgain(input) {
  if (input.toLowerCase() === 'yes') {
    guesses = [];
    total = 0;
    guessing(prompt("Guess a number."));
  } else if (input.toLowerCase() === 'maybe') {
    guesses = [];
    total = 0;
    guessing(prompt("Fine, I'll decide for you. You're playing again. Guess a number."));
  } else if (input.toLowerCase() === 'no') {
    alert("I see how it is.");
  } else {
    playAgain(prompt("C'mon, give me a real answer."));
  }
}






//Feature 3: How many tries?:
// let total = 0;
// function guessing(num) {
//     let myNumber = 20;
//     total+=1;
//     if (num == myNumber) {
//         if(total === 1) {
//             alert(`Correct! It only took you ${total} guess!`)
//         } else {
//             alert(`Correct! It only took you ${total} guesses!`);}
//     } else if (num < myNumber) {
//         alert("Higher.");
//         guessAgain();
//     } else if (num > myNumber) {
//         alert("Lower.");
//         guessAgain();
//     } else {
//         alert("What the hell are you doing?");
//         guessAgain();
//     }
// }

// guessing(prompt("Guess a number."));

// function guessAgain() {
//     guessing(prompt("Guess Again."));
// }






//Feature 4: History in the Making
// let total = 0;
// let guesses = [];
// function guessing(num) {
//     let myNumber = 20;
//     function guessAgain() {
//         guessing(prompt("Guess Again."));
//     };
//     total+=1;
//     if (num == myNumber) {
//         if(total === 1) {
//             alert(`Correct! ${num} was your only guess!`)
//         } else {
//             alert(`Correct! Your previous guesses were ${guesses.join(', ')}!`);}
//     } else if (num < myNumber) {
//         alert("Higher.");
//         guesses.push(num);
//         guessAgain();
//     } else if (num > myNumber) {
//         alert("Lower.");
//         guesses.push(num);
//         guessAgain();
//     } else {
//         alert("What the hell are you doing?");
//         guesses.push(num);
//         guessAgain();
//     }
// }
// guessing(prompt("Guess a number."));
