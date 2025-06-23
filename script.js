let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const message = document.getElementById("message");
  const choiceDisplay = document.getElementById("choices");

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a draw! 😐";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win! 🎉";
    playerScore++;
  } else {
    result = "You lose! 😢";
    computerScore++;
  }

  message.textContent = result;
  choiceDisplay.textContent = `You: ${playerChoice} | Computer: ${computerChoice}`;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}
