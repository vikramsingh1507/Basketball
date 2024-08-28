let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let winner = document.getElementById("win");

let countHome = 0;
let countGuest = 0;

function oneH() {
    if (countHome < 50){
        countHome += 1;
    }
    scoreHome.textContent = countHome;
    ahead();
    won();
}

function twoH() {
    if (countHome < 50){
        countHome += 2;
    }
    scoreHome.textContent = countHome;
    ahead();
    won();
}

function threeH() {
    if (countHome < 50){
        countHome += 3;
    }
    scoreHome.textContent = countHome;
    ahead();
    won();
}

function oneG() {
    if (countGuest < 50){
        countGuest += 1;
    }
    scoreGuest.textContent = countGuest;
    ahead();
    won();
}

function twoG() {
    if (countGuest < 50){
        countGuest += 2;
    }
    scoreGuest.textContent = countGuest; 
    ahead();  
    won();     
}

function threeG() {
    if (countGuest < 50){
        countGuest += 3;
    }
    scoreGuest.textContent = countGuest;
    ahead();
    won();
}

function ahead(){
    if (countGuest > countHome){
        winner.textContent = "Guest is winning";
    } else {
        winner.textContent = "Home is winning";
    }
}

function restart() {
    countGuest = 0;
    countHome = 0;
    winner.textContent = "Home is winning";
    scoreGuest.textContent = 0;
    scoreHome.textContent = 0;
}

function won() {
    if (countGuest >= 50 ){
        winner.textContent = "GUEST WON 🏆"
    }else if (countHome >= 50 ){
        winner.textContent = "HOME WON 🏆"
    }
}




