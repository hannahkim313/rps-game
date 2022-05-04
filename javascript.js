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