document.addEventListener("DOMContentLoaded", function() {
    let userChoice = document.getElementsByTagName("button");

    for (let button of userChoice) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "rock") {
                rock();
            } else if (this.getAttribute("data-type") === "paper") {
                paper();
            } else if (this.getAttribute("data-type") === "scissors") {
                scissors();
            } else if (this.getAttribute("data-type") === "lizard") {
                lizard();
            } else if (this.getAttribute("data-type") === "spock"){
                spock();
            }
        });
    }
 });

 let choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    let compChoice = choices[Math.floor(Math.random()*5)]
 
 function rock () {
    alert("You chose Rock");

    if (compChoice == 'Rock'){
        alert("There was a Draw");
    } else if (compChoice == 'Paper'){
        alert("You lose :( Computer chose Paper!");
        incrementLosses();
    } else if (compChoice == 'Scissors'){
        alert("You Win :D Computer chose Scissors!");
        incrementWins();
    } else if (compChoice == 'Lizard') {
        alert("You Win :D Computer chose Lizard");
        incrementWins();
    } else if (compChoice == 'Spock') {
        alert("You Lose :D Computer chose Spock");
        incrementLosses();
        
    }
}

function paper () {
    alert("You chose Paper!");

    if (compChoice == 'Paper'){
        alert("There was a Draw");
    } else if (compChoice == 'Rock'){
        alert("You Win :D Computer chose Rock!");
        incrementWins();
    } else if (compChoice == 'Scissors'){
        alert("You Lose :( Computer chose Scissors!");
        incrementLosses();
    } else if (compChoice == 'Lizard') {
        alert("You Lose :( Computer chose Lizard!");
        incrementLosses();
    } else if (compChoice == 'Spock') {
        alert("You Win :D Computer chose Spock!");
        incrementWins();
    }
}

function scissors () {
    alert("You chose Scissors!");

    if (compChoice == 'Scissors'){
        alert("There was a Draw");
    } else if (compChoice == 'Rock'){
        alert("You Lose :( Computer chose Rock!");
        incrementLosses();
    } else if (compChoice == 'Paper'){
        alert("You Win :D Computer chose Paper!");
        incrementWins();
    } else if (compChoice == 'Lizard') {
        alert("You Win :D Computer chose Lizard!");
        incrementWins();
    } else if (compChoice == 'Spock') {
        alert("You Lose :( Computer chose Spock!");
        incrementLosses();
    }
}

function lizard () {
    alert("You chose Lizard!");

    if (compChoice == 'Lizard'){
        alert("There was a Draw");
    } else if (compChoice == 'Rock'){
        alert("You Lose :( Computer chose Rock!");
        incrementLosses();
    } else if (compChoice == 'Paper'){
        alert("You Win :D Computer chose Paper!");
        incrementWins();
    } else if (compChoice == 'Scissors') {
        alert("You Lose :( Computer chose Scissors!");
        incrementLosses();
    } else if (compChoice == 'Spock') {
        alert("You Win :D Computer chose Spock!");
        incrementWins();
    }
}

function spock () {
    alert("You chose Spock!");

    if (compChoice == 'Spock'){
        alert("There was a Draw");
    } else if (compChoice == 'Rock'){
        alert("You Win :D Computer chose Rock!");
        incrementWins();
    } else if (compChoice == 'Paper'){
        alert("You Lose :( Computer chose Paper!");
        incrementLosses();
    } else if (compChoice == 'Scissors') {
        alert("You Win :D Computer chose Scissors!");
        incrementWins();
    } else if (compChoice == 'Lizard') {
        alert("You Lose :( Computer chose Lizard!");
        incrementLosses();
    }
}

function incrementWins() {
    let score = parseInt(document.getElementById("wins").innerText);
    document.getElementById("wins").innerText = ++score;
}

function incrementLosses() {
    let score = parseInt(document.getElementById("losses").innerText);
    document.getElementById("losses").innerText = ++score;
}