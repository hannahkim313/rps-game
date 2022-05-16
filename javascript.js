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
 * Determines whether or not an image of the player's move is present.
 * @param {object} el - Element object of CSS selector.
 * @returns {boolean}
 */
 function hasPlayerImage(el) {
    return (el.lastElementChild.matches(".player-rock") ||
        el.lastElementChild.matches(".player-paper") ||
        el.lastElementChild.matches(".player-scissors")) ? true : false;
}

/**
 * Determines whether or not an image of the computer's move is present.
 * @param {object} el - Element object of CSS selector.
 * @returns {boolean}
 */
 function hasComputerImage(el) {
    return (el.lastElementChild.matches(".computer-rock") ||
        el.lastElementChild.matches(".computer-paper") ||
        el.lastElementChild.matches(".computer-scissors")) ? true : false;
}

/**
 * Adds an image of either rock, paper, or scissors under the player
 * section based on which button was clicked.
 * @param {object} btn - Element object of CSS selector.
 * @returns {string} move that the player made.
 */
function addPlayerMove(btn) {
    if (btn === rockBtn) {
        const rock = document.createElement("img");
        rock.classList.add("player-rock");
        rock.src = "images/rock.jpg";
        rock.alt = "A vector artwork of a rock";
        document.querySelector(".player-move").appendChild(rock);
        return "rock";
    }
    if (btn === paperBtn) {
        const paper = document.createElement("img");
        paper.classList.add("player-paper");
        paper.src = "images/paper.jpg";
        paper.alt = "A vector artwork of paper";
        document.querySelector(".player-move").appendChild(paper);
        return "paper";
    }
    if (btn === scissorsBtn) {
        const scissors = document.createElement("img");
        scissors.classList.add("player-scissors");
        scissors.src = "images/scissors.jpg";
        scissors.alt = "A vector artwork of scissors";
        document.querySelector(".player-move").appendChild(scissors);
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
    if (hasComputerImage(computerMoveContainer) === true) {
        hideElement(computerMoveContainer.lastElementChild);
    }
    if (computerMove === "rock") {
        const rock = document.createElement("img");
        rock.classList.add("computer-rock");
        rock.src = "images/rock.jpg";
        rock.alt = "A vector artwork of a rock";
        document.querySelector(".computer-move").appendChild(rock);
        return "rock";
    }
    if (computerMove === "paper") {
        const paper = document.createElement("img");
        paper.classList.add("computer-paper");
        paper.src = "images/paper.jpg";
        paper.alt = "A vector artwork of paper";
        document.querySelector(".computer-move").appendChild(paper);
        return "paper";
    }
    if (computerMove === "scissors") {
        const scissors = document.createElement("img");
        scissors.classList.add("computer-scissors");
        scissors.src = "images/scissors.jpg";
        scissors.alt = "A vector artwork of scissors";
        document.querySelector(".computer-move").appendChild(scissors);
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
 * Displays the game over pop-up box containing the final score and a
 * "play again" button.
 */
function displayGameOver() {
    gameOverContainer.style.display = "flex";
    const finalScore = document.createElement("div");
    finalScore.textContent = `${win.textContent} - ${tie.textContent} - ${lose.textContent}`;
    finalScore.style.fontSize = "20px";
    gameOverContainer.appendChild(finalScore);
    gameOverContainer.insertBefore(finalScore, playAgainBtn);
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
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
    if (hasPlayerImage(playerMoveContainer) === true) {
        hideElement(playerMoveContainer.lastElementChild);
    }
    const playerMove = addPlayerMove(rockBtn);
    const computerMove = addComputerMove();
    const roundResult = playRound(playerMove, computerMove);
    hideElement(imgPlaceholder);
    increaseScore(roundResult);
    printRoundMessage(roundResult, playerMove, computerMove);
    if (win.textContent == 5 || lose.textContent == 5) {
        displayGameOver();
    }
});

paperBtn.addEventListener("click", function(e) {
    if (hasPlayerImage(playerMoveContainer) === true) {
        hideElement(playerMoveContainer.lastElementChild);
    }
    const playerMove = addPlayerMove(paperBtn);
    const computerMove = addComputerMove();
    const roundResult = playRound(playerMove, computerMove);
    increaseScore(roundResult);
    printRoundMessage(roundResult, playerMove, computerMove);
    hideElement(imgPlaceholder);
    if (win.textContent == 5 || lose.textContent == 5) {
        displayGameOver();
    }
});

scissorsBtn.addEventListener("click", function(e) {
    if (hasPlayerImage(playerMoveContainer) === true) {
        hideElement(playerMoveContainer.lastElementChild);
    }
    const playerMove = addPlayerMove(scissorsBtn);
    const computerMove = addComputerMove();
    const roundResult = playRound(playerMove, computerMove);
    hideElement(imgPlaceholder);
    increaseScore(roundResult);
    printRoundMessage(roundResult, playerMove, computerMove);
    if (win.textContent == 5 || lose.textContent == 5) {
        displayGameOver();
    }
});

playAgainBtn.addEventListener("click", function(e) {
    location.reload();
});