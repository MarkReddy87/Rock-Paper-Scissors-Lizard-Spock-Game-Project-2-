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
 
 function rock () {
    alert("You chose Rock");

    let choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    let compChoice = choices[Math.floor(Math.random()*5)]

    if (compChoice == 'Rock'){
        alert("There was a Draw");
    } else if (compChoice == 'Paper'){
        alert("You lose :( Computer chose Paper!");
    } else if (compChoice == 'Scissors'){
        alert("You Win :D Computer chose Scissors!");
    } else if (compChoice == 'Lizard') {
        alert("You Win :D Computer chose Lizard");
    } else if (compChoice == 'Spock') {
        alert("You Lose :D Computer chose Spock");
    }
}

function paper () {
    alert("You chose Paper!");

    let choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    let compChoice = choices[Math.floor(Math.random()*5)]

    if (compChoice == 'Paper'){
        alert("There was a Draw");
    } else if (compChoice == 'Rock'){
        alert("You Win :D Computer chose Rock!");
    } else if (compChoice == 'Scissors'){
        alert("You Lose :( Computer chose Scissors!");
    } else if (compChoice == 'Lizard') {
        alert("You Lose :( Computer chose Lizard!");
    } else if (compChoice == 'Spock') {
        alert("You Win :D Computer chose Spock!");
    }
}

function scissors () {
    alert("You chose Scissors!");

    let choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    let compChoice = choices[Math.floor(Math.random()*5)]

    if (compChoice == 'Scissors'){
        alert("There was a Draw");
    } else if (compChoice == 'Rock'){
        alert("You Lose :( Computer chose Rock!");
    } else if (compChoice == 'Paper'){
        alert("You Win :D Computer chose Paper!");
    } else if (compChoice == 'Lizard') {
        alert("You Win :D Computer chose Lizard!");
    } else if (compChoice == 'Spock') {
        alert("You Lose :( Computer chose Spock!");
    }
}

function lizard () {
    alert("You chose Lizard!");

    let choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    let compChoice = choices[Math.floor(Math.random()*5)]

    if (compChoice == 'Lizard'){
        alert("There was a Draw");
    } else if (compChoice == 'Rock'){
        alert("You Lose :( Computer chose Rock!");
    } else if (compChoice == 'Paper'){
        alert("You Win :D Computer chose Paper!");
    } else if (compChoice == 'Scissors') {
        alert("You Lose :( Computer chose Scissors!");
    } else if (compChoice == 'Spock') {
        alert("You Win :D Computer chose Spock!");
    }
}

function spock () {
    alert("You chose Spock!");

    let choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    let compChoice = choices[Math.floor(Math.random()*5)]

    if (compChoice == 'Spock'){
        alert("There was a Draw");
    } else if (compChoice == 'Rock'){
        alert("You Win :D Computer chose Rock!");
    } else if (compChoice == 'Paper'){
        alert("You Lose :( Computer chose Paper!");
    } else if (compChoice == 'Scissors') {
        alert("You Win :D Computer chose Scissors!");
    } else if (compChoice == 'Lizard') {
        alert("You Lose :( Computer chose Spock!");
    }
}

function incrementWins() {

}

function incrementLosses() {

}