let myNumber = 20;
let total = 0;
let guesses = [];
let personObj = {};
let user = "";
reset();

function reset() {
  total = 0;
  guesses = [];
  user = prompt("Enter your name.");
  checkUser();
  guessing(prompt("Guess a number."));
}

function guessing(num) {
  total += 1;
  guesses.push(num);
  if (num == myNumber) {
    if (personObj[user] === 0) {
      alert(
        `That's correct ${user}! This was your first time playing the game!`
      );
    } else {
      if (total > personObj[user]) {
        alert(
          `That's correct ${user}! You did better in your last game by ${
            total - personObj[user]
          }.`
        );
      } else if (total < personObj[user]) {
        alert(
          `That's correct ${user}! And you beat your previous attempt by ${
            personObj[user] - total
          } fewer guesses!`
        );
      } else {
        alert(
          `That's correct ${user}! And you tied your previous score of ${total} guesses!`
        );
      }
    }
    personObj[user] = total;
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

function playAgain(input) {
  if (input.toLowerCase() === "yes") {
    reset();
  } else if (input.toLowerCase() === "maybe") {
    alert("Fine, I'll decide for you. You're playing again.");
    reset();
  } else if (input.toLowerCase() === "no") {
    alert("Fine. I see how it is.");
  } else {
    playAgain(prompt("C'mon, give me a real answer."));
  }
}

function guessAgain() {
  guessing(prompt("Guess Again."));
}

function checkUser() {
  if (!personObj.hasOwnProperty(user)) {
    personObj[user] = 0;
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

// Feature 6: Play Again:
// let total = 0;
// let guesses = [];
// let user = prompt("Enter your name.");
// function guessing(num) {
//     let myNumber = 20;
//     function guessAgain() {
//         guessing(prompt("Guess Again."));
//     };
//     total+=1;
//     guesses.push(num);
//     if (num == myNumber) {
//         if(total === 1) {
//             alert(`That's correct ${user}! ${num} was your only guess!`)
//         } else {
//             alert(`That's correct ${user}! Your previous guesses were ${guesses.join(', ')}!`);
//         }
//         playAgain(prompt("Would you like to play again?"));
//     } else if (num < myNumber) {
//         alert(`Sorry ${user}, guess higher.`);
//         guessAgain();
//     } else if (num > myNumber) {
//         alert(`Sorry ${user}, guess lower.`);
//         guessAgain();
//     } else {
//         alert(`${user}, what the hell are you doing?`);
//         guessAgain();
//     }
// }
// guessing(prompt("Guess a number."));

// function playAgain(input) {
//   if (input.toLowerCase() === 'yes') {
//     guesses = [];
//     total = 0;
//     guessing(prompt("Guess a number."));
//   } else if (input.toLowerCase() === 'maybe') {
//     guesses = [];
//     total = 0;
//     guessing(prompt("Fine, I'll decide for you. You're playing again. Guess a number."));
//   } else if (input.toLowerCase() === 'no') {
//     alert("I see how it is.");
//   } else {
//     playAgain(prompt("C'mon, give me a real answer."));
//   }
// }
