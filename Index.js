function buttonWasClicked() {
    console.log("Clicked!");
    let a = "Yes, I have been clicked";
    console.log(a);
    let b = 1;
    console.log(b);
    b += 1;
    b *= 2;
    console.log(b);
}

function foo() {
    let number = Math.floor(Math.random() * 10); // 0-10
    let random = "";
    if (number == 0) {
        random = "amazing"
    } else if (number == 1) {
        random = "fabulous"
    } else if (number == 2) {
        random = "excellent"
    } else if (number == 3) {
        random = "fantastic"
    } else if (number == 4) {
        random = "wonderful"
    } else if (number == 5) {
        random = "awesome"
    } else if (number == 6) {
        random = "great"
    } else if (number == 7) {
        random = "perfect"
    } else if (number == 8) {
        random = "incredible"
    } else if (number == 9) {
        random = "terrific"
    } else if (number == 10) {
        random = "superb"
    }
    const display = document.getElementById("random")
    display.innerText = random;
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
function goToNewSite() {
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
    let answer = Math.floor(Math.random() * 100)
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
    if (Password == "february7XXVIInoonpacificocean") {
        let a = prompt("Great job! Now go on completing the password!\n\n6) The company that invented the iPhone\n7) Something you rest your head on when you sleep\n8) The table that arranges the chemical elements into columns and rows\n9) Solve for x: 3x + 5 = 14\n10) An imaginary horse-like creature that has a horn on its head\n\nfebruary7XXVIInoonpacificocean…")
    } if (a == "applepillowperiodictable3unicorn") {
        let b = prompt("yuh")
    }
}

function countToTen() {
    let a = 0;
    while (a <= 10) {
        console.log(a + "!");
        a++;
    }
}

function usernameGenerator() {
    const words = ["cute", "golden", "blue", "good", "ugly", "beautiful", "pretty", "stinky", "bored", "embarassed", "shy", "confident", "cool", "smart", "weird", "simple", "bright", "evil", "fast", "quick", "slow", "sweet", "sour", "salty", "bitter", "cold", "sweaty", "linear", "fat", "skinny", "plump", "magical", "sparkly", "chatty", "fluffy", "annoying", "obnoxious", "kind", "angelic", "positive", "negative", "optimistic", "pessimistic", "tired", "sleepy", "quiet", "confident", "outgoing", "loud", "noisy", "overwhelmed", "crazy", "sigma", "skibidi", "rizzful", "tough", "watermelony", "dramatic", "lively", "courageous", "determined", "resilient", "self-aware", "open-minded", "collaborative", "risk-taking", "curious", "ambitious", "independent", "integrous", "humble", "tempestuous", "loquacious", "gregarious", "feisty", "selfish", "greedy", "malicious", "evil", "quadratic", "arbolic", "pastoral", "materwelony", "calm", "peaceful", "forbidden", "colorful", "dead", "alive", "friendly", "kingdom_of", "all_hail_the", "Thou_art_a", "im_a", "rocky", "pet", "weak", "strong", "gossipy", "square", "triangular", "flat", "spherical", "warm", "cold", "freezing", "boiled", "sliced", "roasted", "baked", "seasoned-with-ketchup", "deep-fried", "stir-fried", "stewed", "braised", "dried", "chopped", "raw", "cooked", "hollow"];
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    const usernameNumber = Math.floor(Math.random() * 99999)
    const username = randomWord + "_watermelon" + usernameNumber;
    const display = document.getElementById("username")
    display.textContent = username
}


