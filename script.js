// selectecting all buttons

const buttons = document.querySelectorAll("button");
const responseEl = document.querySelector("#response");
const user_scoreEl = document.querySelector("#user_score");
const computer_scoreEl = document.querySelector("#computer_score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        responseEl.textContent = result;
    })
})

const computerPlay = () => {
    const choices = ["rock", "paper", "scissor"];
    const choiceRandom = Math.floor(Math.random() * choices.length);
    return choices[choiceRandom];
}

const playRound = (playerSelection, computerSelection) => {
    if(playerSelection === computerSelection) {
        return "It's tie!";
    } else if(
        playerSelection === "rock" && computerSelection === "scissor" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissor" && computerSelection === "paper"
    ) {
        playerScore++;
        user_scoreEl.textContent = playerScore;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        computer_scoreEl.textContent = computerScore;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}