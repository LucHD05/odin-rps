function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1)
    if (choice == 1){
        return "rock"
    }
    if (choice == 2){
        return "paper"
    }
    if (choice == 3){
        return "scissors"
    }
}

function playerSelection() {
    let input = prompt("Rock, Paper or Scissors?").toLowerCase()
    while (true) {
        switch (input) {
            case "rock":
                return input;

            case "paper":
                return input;

            case "scissors":
                return input;

        }
        input = prompt("That's not a option. Try again!").toLowerCase()
    }
}

function playRound() {
    let playerWin = 0;
    let playerLose = 0;
    for(let i = 0; i = 1; i + 0) {
        let player = playerSelection();
        let computer = getComputerChoice();
        console.log(player + " vs. " + computer);
        if (player == "rock") {
            if (computer == "rock") {
                console.log("draw")
            }
            if (computer == "paper") {
                console.log("you lose")
                playerLose++
            }
            if (computer == "scissors") {
                console.log("you win")
                playerWin++
            }
        }
        if (player == "paper") {
            if (computer == "rock") {
                console.log("you win")
                playerWin++
            }
            if (computer == "paper") {
                console.log("draw")
            }
            if (computer == "scissors") {
                console.log("you lose")
                playerLose++
            }
        }
        if (player == "scissors") {
            if (computer == "rock") {
                console.log("you lose")
                playerLose++
            }
            if (computer == "paper") {
                console.log("you win")
                playerWin++
            }
            if (computer == "scissors") {
                console.log("draw")
            }
        }
        console.log("Win: " + playerWin + "  " + "Lose: " + playerLose)
    }
}

playRound();