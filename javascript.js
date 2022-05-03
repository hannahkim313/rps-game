/**
 * Randomly returns a string value of either "Rock," "Paper," or
 * "Scissors" to represent the computer's play.
 * @returns {string} The computer's play for a single round
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
 * @param {string} word - The word to capitalize
 * @returns {string} word with only the first letter capitalized
 */
 function capitalize(word) {
    word = word.toLowerCase();
    const firstLetter = word.charAt(0).toUpperCase();
    return word = `${firstLetter}${word.slice(1, word.length)}`;
}