/**
 * Randomly returns a string value of either "Rock," "Paper," or
 * "Scissors" to represent the computer's play.
 * @returns {string} Computer's play for a single round.
 */
function computerPlay() {
    // Generate a random number between 1-3
    const randomNum = Math.floor(Math.random() * (3)) + 1;

    // Output "Rock," "Paper," or "Scissors" based on number
    if (randomNum === 1) {
        return "Rock";
    } else if (randomNum === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

/**
 * Returns a string with the first letter capitalized and the rest
 * of the letters in lowercase.
 * @param {string} word - Word to capitalize.
 * @returns {string} word with only the first letter capitalized.
 */
 function capitalize(word) {
    word = word.toLowerCase();
    const firstLetter = word.charAt(0).toUpperCase();
    return word = `${firstLetter}${word.slice(1, word.length)}`;
}

/**
 * Returns a string that declares whether the player has won or
 * lost a single round.
 * @param {string} playerSelection - The player's play.
 * @param {string} computerSelection - The computer's play.
 * @returns {string} Win or lose statement.
 */
function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);

    if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return "Win";
    } else if (playerSelection === computerSelection) {
        console.log(`It's a tie! You both picked ${playerSelection}`);
        return "Tie";
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "Lose";
    }
}

/**
 * Initiates game with the player.
 */
 function game() {
    console.log("Welcome to a game of Rock Paper Scissors!");
    console.log("We are going to play a total of 5 rounds.");
    console.log("The one with the highest score at the end of the 5 rounds wins.");
    console.log("Are you ready?");

    let playerScore = 0;
    let computerScore = 0;
    let tie = 0;

    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose your play: Rock, paper, or scissors?");

        if (playerSelection !== null) {
            while (playerSelection === "") {
                alert("You didn't make a move!");
                playerSelection = prompt("Choose your play: Rock, paper, or scissors?");
            }
    
            let playerWinOrLose = playRound(playerSelection, computerPlay());
    
            if (playerWinOrLose === "Win") {
                playerScore++;
            } else if (playerWinOrLose === "Lose") {
                computerScore++;
            } else if (playerWinOrLose === "Tie") {
                tie++;
            } else {
                break;
            }
        } else {
            break;
        }
    }

    if (playerScore === 0 && computerScore === 0 && tie === 0) {
        console.log("Sorry, looks like nothing happened this game!");
    } else {
        console.log(`End of game! Your final scores are: ${playerScore} wins, ${computerScore} losses, and ${tie} ties`);
    }
}

// Call game() to play in browser console
game();