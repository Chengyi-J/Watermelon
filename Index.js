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
        console.log("Goodbye")
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
            alert("unbelievable")
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
