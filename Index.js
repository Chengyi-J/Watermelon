function buttonWasClicked()  {
    console.log("Clicked!");
    let a = "Yes, I have been clicked";
    console.log(a);
    let b=1;
    console.log(b);
    b += 1;
    b *= 2;
    console.log(b);
}

function foo() {
    let number = Math.floor(Math.random()* 10) ; // 0-10
    if(number == 0){
        console.log("amazing")
    } else if(number == 1){
        console.log("fabulous")
    } else if(number == 2){
        console.log("excellent")
    } else if(number == 3){
        console.log("fantastic")
    } else if(number == 4){
        console.log("wonderful")
    } else {
        console.log("Look at the alert")
    }
    switch(number){
        case 5:
            alert("awesome")
            break;
        case 6:
            alert("great")
            break;
        case 7:
            alert("perfect")
            break;
        case 8:
            alert("incredible")
            break;
        case 9:
            alert("terrific")
            break;
        case 10:
            alert("superb")
            break;
    }
}

function bob() { console.log("asdasd") }
function timer() {
    let count = 0;
    while (count < 10) {
        console.warn("Count " + count)
        count++;
    }
    console.log("Finished")
}
function goToOldSite() {
    window.location = "Watermelon.html"
}
function goToNewSite(){
    window.location = "index.html"
}

function askAndDisplayNumber() {
  const userInput = prompt("How much do you want the watermelon painting to cost?"); // Prompts the user for input
  const number = parseInt(userInput); // Converts the input string to an integer

  if (isNaN(number)) { // Checks if the conversion resulted in "Not a Number"
    alert("Invalid input. Please enter a valid number.");
  } else {
    alert("The watermelon painting costs $" + number + ".00."); // Displays the entered number in an alert box
  }
}

function guessTheNumber() {
    let answer = Math.floor(Math.random()* 100)
    let count = 0
    while (count < 11) {
    const userGuess = prompt("Guess a number from 0 to 100. You have 10 tries:");
    const numberGuess = parseInt(userGuess);
    if (isNaN(numberGuess)) {
        alert("Invalid input. Please enter a valid number.")
    } else if (numberGuess > answer) {
        alert("Too high! Try again.")
    } else if (numberGuess < answer) {
        alert("Too low! Try again.")
    } count++;
    if (numberGuess == answer) {
        alert("Congratulations! The number is " + answer + "!")
        return;
    } 
} 
}

function thePasswordGame() {
    let Password = prompt("Welcome to the Password Game! Your goal is to guess the password that fulfills the given conditions. Good luck!\n(Note: Answers are lowercase by default unless specified. The password does not have any spaces.)\n\n1) The 2nd month of the year\n2) The number of continents\n3)The Roman numeral form for the number '27' (ALL CAPS)\n4) Another name for 12:00 PM\n5) The largest ocean (you need to type 'ocean')"
    ) 
    if(Password == "february7XXVIInoonpacificocean") {
        let a = prompt("Great job! Now go on completing the password!\n\n6) The company that invented the iPhone\n7) Something you rest your head on when you sleep\n8) The table that arranges the chemical elements into columns and rows\n9) Solve for x: 3x + 5 = 14\n10) An imaginary horse-like creature that has a horn on its head\n\nfebruary7XXVIInoonpacificocean…")
    } if( a == "applepillowperiodictable3unicorn") {
        let b = prompt("yuh")
}
}    

function countToTen() {
    let a = 0;
    while(a <= 10) {
        console.log(a + "!");
        a++;
}
}

function generateRandomWord() {
  const words = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  return randomWord;
}


