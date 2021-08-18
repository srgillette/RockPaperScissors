function game(rounds){
    for(let i = 0; i < rounds; i++){
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    }
}
function computerPlay(){
    let randomSelection = Math.floor(Math.random() * 3)
    let selections = ['rock', 'paper', 'scissors']
    return selections[randomSelection]
}

function playerPlay(){
    const input = prompt("Choose Rock, Paper, or Scissors.")
    return(input.toLowerCase())
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case 'rock':
            if(computerSelection === 'rock'){
                winner = "It's a tie!"
                scoreBoard.ties += 1
            }
            else if(computerSelection === 'paper'){
                winner = "Computer wins!"
                scoreBoard.computerWins += 1
            }
            else if(computerSelection === 'scissors'){
                winner = "Player wins!"
                scoreBoard.playerWins += 1
            }
            break;
        case 'paper':
            if(computerSelection === 'paper'){
                winner = "It's a tie!"
                scoreBoard.ties += 1
            }
            else if(computerSelection === 'scissors'){
                winner = "Computer wins!"
                scoreBoard.computerWins += 1
            }
            else if(computerSelection === 'rock'){
                winner = "Player wins!"
                scoreBoard.playerWins += 1
            }
            break;
        case 'scissors':
            if(computerSelection === 'scissors'){
                winner = "It's a tie!"
                scoreBoard.ties += 1
            }
            else if(computerSelection === 'rock'){
                winner = "Computer wins!"
                scoreBoard.computerWins += 1
            }
            else if(computerSelection === 'paper'){
                winner = "Player wins!"
                scoreBoard.playerWins += 1
            }
            break;
    }
    const results = ('Results: Player- '+ playerSelection + ' Computer- ' + computerSelection + "\n" + winner
    + "\n Scores:"
    + "\n Player Wins: " + scoreBoard.playerWins
    + "\n Computer Wins: " + scoreBoard.computerWins
    + "\n Ties: " + scoreBoard.ties);
    return(results)
}


let scoreBoard = {playerWins: 0, computerWins: 0, ties: 0}
let winner = ''
game(5)
