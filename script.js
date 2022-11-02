let hands = ["Rock","Paper","Scissors"]
let ComputerChoice
let PlayerChoice
let Message = document.getElementById("Message")
let Choice1 = document.getElementById("Choice1")    
let Choice2 = document.getElementById("Choice2")

let Rock = document.getElementById("Rock").onclick = function() {
    PlayerChoice = hands[0]
    RandomHand()
    Choice1.innerHTML = `Player Choice: ${PlayerChoice}`
    CheckWinner()
}
let Paper = document.getElementById("Paper").onclick = function() {
    PlayerChoice = hands[1]
    RandomHand()
    Choice1.innerHTML = `Player Choice: ${PlayerChoice}` 
    CheckWinner()
}
let Scissors = document.getElementById("Scissors").onclick = function() {
    PlayerChoice = hands[2]
    RandomHand()
    Choice1.innerHTML = `Player Choice: ${PlayerChoice}`
    CheckWinner()
}

function RandomHand() {
    let RandomHand = Math.floor(Math.random() *3)
    ComputerChoice = hands[RandomHand]
    Choice2.innerHTML = `Computer Choice: ${ComputerChoice}`
    return ComputerChoice
}

function CheckWinner() { 

    if (PlayerChoice === ComputerChoice) {
        Message.innerHTML = "Draw"
        Message.style = "color:	#FF9900"
    } else if (PlayerChoice === "Rock" && ComputerChoice === "Scissors") {
        Message.innerHTML = "Player Wins"
        Message.style = "color:black"
    } else if (PlayerChoice === "Paper" && ComputerChoice === "Rock") {
        Message.innerHTML = "Player Wins"
        Message.style = "color:black"
    } else if (PlayerChoice === "Scissors" && ComputerChoice === "Paper") {
        Message.innerHTML = "Player Wins"
        Message.style = "color:black"
    } else {
        Message.innerHTML = "Computer Wins" 
        Message.style = "color:#FD1D1D;"
    }
}