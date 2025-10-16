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