/**
 * Randomly returns a string value of either "Rock," "Paper," or
 * "Scissors" to represent the computer's play.
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