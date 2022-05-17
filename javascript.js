/**
 * 
 * Element object declarations start here.
 * 
 */

 const homeContainer = document.querySelector("#home-container");
 const startButton = document.querySelector(".start-button");
 
 const gameContainer = document.querySelector("#game-container");

 const rockBtn = document.querySelector(".rock");
 const paperBtn = document.querySelector(".paper");
 const scissorsBtn = document.querySelector(".scissors");

 const playerMoveContainer = document.querySelector(".player-move");
 const computerMoveContainer = document.querySelector(".computer-move");

 const imgPlaceholder = document.querySelectorAll(".img-placeholder");

 const win = document.querySelector(".win");
 const tie = document.querySelector(".tie");
 const lose = document.querySelector(".lose");
 
 const mainRoundMessage = document.querySelector(".main-text");
 const subRoundMessage = document.querySelector(".sub-text");

 const gameOverContainer = document.querySelector(".game-over-container");
 const gameOverSubText = document.querySelector(".game-over-sub-text");
 const playAgainBtn = document.querySelector(".play-again");

 const footer = document.querySelector("#footer");

/**
 * 
 * Function declarations start here.
 * 
 */

/**
 * Fades an element from 100% opacity to 0% opacity within the specified
 * transition duration and hides the entire element afterwards.
 * @param {object} el - Element object of CSS selector.
 */
function fadeElement(el) {
    el.style.opacity = "0";
    el.addEventListener("transitionend", () => {
        el.style.display = "none";
    });
}

/**
 * Displays a hidden element after a transition event has ended.
 * @param {object} el - Element object of CSS selector.
 * @param {string} val - Value of display property.
 */
function displayElement(el, val) {
    window.addEventListener("transitionend", () => {
        el.style.display = val;
        footer.style.margin = "15px auto auto auto";
    })
}

/**
 * Hides an element.
 * @param {object} el - Element object of CSS selector(s).
 */
function hideElement(el) {
    if (el.length !== undefined) {
        for (let i = 0; i < el.length; i++) {
            el[i].style.display = "none";
        }
    } else {
        el.style.display = "none";
    }
}

/**
 * Determines whether or not an image of the player's or computer's
 * move is present.
 * @param {object} el - Element object of CSS selector.
 * @param {string} name - Name of either player or computer.
 * @returns {boolean}
 */
function hasImage(el, name) {
    return el.lastElementChild.matches(`.${name}-rock`) ||
        el.lastElementChild.matches(`.${name}-paper`) ||
        el.lastElementChild.matches(`.${name}-scissors`) ? true : false;
}

/**
 * Creates and appends an image element of either the player's or computer's
 * move to the respective class selector.
 * @param {string} name - Name of either player or computer.
 * @param {string} move - Move that the player or computer made.
 */
function addImage(name, move) {
    const moveImage = document.createElement("img");
    moveImage.classList.add(`${name}-${move}`);
    moveImage.src = `images/${move}.jpg`;
    moveImage.alt = `A vector artwork of a ${move}`;
    document.querySelector(`.${name}-move`).appendChild(moveImage);
}

/**
 * Adds an image of either rock, paper, or scissors under the player
 * section based on which button was clicked.
 * @param {object} btn - Element object of CSS selector.
 * @returns {string} move that the player made.
 */
function addPlayerMove(btn) {
    if (btn === rockBtn) {
        addImage("player", "rock");
        return "rock";
    }
    if (btn === paperBtn) {
        addImage("player", "paper");
        return "paper";
    }
    if (btn === scissorsBtn) {
        addImage("player", "scissors");
        return "scissors";
    }
}

/**
 * Adds an image of either rock, paper, or scissors under the computer
 * section based on which move was randomly made.
 * @param {object} btn - Element object of CSS selector.
 * @returns {string} move that the player made.
 */
function addComputerMove() {
    const randomNum = Math.floor(Math.random() * (3)) + 1;
    const computerMove = (randomNum === 1) ? "rock"
        : (randomNum === 2) ? "paper"
        : "scissors";
    if (hasImage(computerMoveContainer, "computer") === true) {
        hideElement(computerMoveContainer.lastElementChild);
    }
    if (computerMove === "rock") {
        addImage("computer", "rock");
        return "rock";
    }
    if (computerMove === "paper") {
        addImage("computer", "paper");
        return "paper";
    }
    if (computerMove === "scissors") {
        addImage("computer", "scissors");
        return "scissors";
    }
}

/**
 * Returns a string that declares the result of the round.
 * @param {string} playerMove - The player's move.
 * @param {string} computerMove - The computer's move.
 * @returns {string} Win, lose, or tie statement.
 */
 function playRound(playerMove, computerMove) {
    return (playerMove === "rock" && computerMove === "scissors" ||
        playerMove === "paper" && computerMove === "rock" ||
        playerMove === "scissors" && computerMove === "paper") ? "win"
        : (playerMove === computerMove) ? "tie"
        : "lose";
}

/**
 * Increases the scoreboard based on the results from a single round.
 * @param {string} roundResult  - The result of a single round.
 */
function increaseScore(roundResult) {
    let score = 0;
    if(roundResult === "win") {
        score += parseInt(win.textContent);
        score++;
        win.textContent = score;
    }
    if (roundResult === "tie") {
        score += parseInt(tie.textContent);
        score++;
        tie.textContent = score;
    }
    if (roundResult === "lose") {
        score += parseInt(lose.textContent);
        score++;
        lose.textContent = score;
    }
}

/**
 * Returns a string with the first letter capitalized and the rest
 * of the letters in lowercase.
 * @param {string} word - The word to capitalize.
 * @returns {string} word with only the first letter capitalized.
 */
 function capitalize(word) {
    word = word.toLowerCase();
    const firstLetter = word.charAt(0).toUpperCase();
    return word = `${firstLetter}${word.slice(1, word.length)}`;
} 

/**
 * Prints the results of a single round.
 * @param {string} roundResult - The result from a single round. 
 * @param {string} playerMove - The player's move.
 * @param {string} computerMove - The computer's move.
 */
function printRoundMessage(roundResult, playerMove, computerMove) {
    playerMove = capitalize(playerMove);
    computerMove = capitalize(computerMove);
    if (roundResult === "win") {
        mainRoundMessage.textContent = "You win!";
        subRoundMessage.textContent = `${playerMove} beats ${computerMove}.`;
    }
    if (roundResult === "tie") {
        mainRoundMessage.textContent = "It's a tie!";
        subRoundMessage.textContent = `You both picked ${playerMove}.`;
    }
    if (roundResult === "lose") {
        mainRoundMessage.textContent = "You lose!";
        subRoundMessage.textContent = `${computerMove} beats ${playerMove}.`;
    }
}

/**
 * Displays a game over pop-up box containing a message of whether the player
 * has won or lost the game, the final score, and a "play again" button.
 */
function displayGameOver() {
    // Set display property to reveal currently hidden element
    gameOverContainer.style.display = "flex";

    const gameOverText = document.createElement("div");
    gameOverText.textContent = (win.textContent > lose.textContent) ? "You win!"
        : "You lose!";
    gameOverContainer.appendChild(gameOverText);
    gameOverContainer.insertBefore(gameOverText, gameOverSubText);
    const finalScore = document.createElement("div");
    finalScore.textContent = `${win.textContent} - ${tie.textContent} - 
        ${lose.textContent}`;
    finalScore.style.fontSize = "20px";
    gameOverContainer.appendChild(finalScore);
    gameOverContainer.insertBefore(finalScore, playAgainBtn);

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

/**
 * Plays a single round of the game each time the player clicks on one of
 * the move buttons and ends the game when either the player or
 * computer reaches 5 points.
 * @param {object} btn - Element object of CSS selector.
 */
function playGame(btn) {
    const playerMove = addPlayerMove(btn);
    const computerMove = addComputerMove();
    const roundResult = playRound(playerMove, computerMove);
    hideElement(imgPlaceholder);
    increaseScore(roundResult);
    printRoundMessage(roundResult, playerMove, computerMove);
    if (win.textContent == 5 || lose.textContent == 5) displayGameOver();
}

/**
 * 
 * Event listeners start here.
 * 
 */

window.addEventListener("pageshow", function(e) {
    gameContainer.style.display = "none";
    gameOverContainer.style.display = "none";
});

startButton.addEventListener("click", function(e) {
    fadeElement(homeContainer);
    displayElement(gameContainer, "flex");
});

rockBtn.addEventListener("click", function(e) {
    if (hasImage(playerMoveContainer, "player") === true) {
        hideElement(playerMoveContainer.lastElementChild);
    }
    playGame(rockBtn);
});

paperBtn.addEventListener("click", function(e) {
    if (hasImage(playerMoveContainer, "player") === true) {
        hideElement(playerMoveContainer.lastElementChild);
    }
    playGame(paperBtn);
});

scissorsBtn.addEventListener("click", function(e) {
    if (hasImage(playerMoveContainer, "player") === true) {
        hideElement(playerMoveContainer.lastElementChild);
    }
    playGame(scissorsBtn);
});

playAgainBtn.addEventListener("click", function(e) {
    location.reload();
});