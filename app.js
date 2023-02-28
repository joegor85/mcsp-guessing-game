//console.log("It works!");

//alert("This is an alert");

//let favoriteColor = prompt("What is your favorite color?");
//console.log(favoriteColor);

//let guess = prompt("Guess a number.");

let total = 0;
function guessing(num) {
    let myNumber = 20;
    total+=1;
    if (num == myNumber) {
        if(total === 1) {
            alert(`Correct! It only took you ${total} guess!`)
        } else {
            alert(`Correct! It only took you ${total} guesses!`);}
    } else if (num < myNumber) {
        alert("Higher.");
        guessAgain();
    } else if (num > myNumber) {
        alert("Lower.");
        guessAgain();
    } else {
        alert("What the hell are you doing?");
        guessAgain();
    }
}

guessing(prompt("Guess a number."));

function guessAgain() {
    guessing(prompt("Guess Again."));
}






