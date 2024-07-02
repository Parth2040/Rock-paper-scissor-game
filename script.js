let compScore = 0;
let userScore = 0;

const choices = document.querySelectorAll(".choice");
const mess = document.querySelector("#mess");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const gameWinner = (theWinner, userChoice, compChoice) => {
  if (theWinner) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win");
    mess.innerText = `you win ${userChoice} beats ${compChoice}`;
    mess.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose");
    mess.innerText = `you loose ${compChoice} beats ${userChoice}`;
    mess.style.backgroundColor = "red";
  }
};

const genCompChoice = () => {
  const game = ["Rock", "Paper", "Scissor"];
  const play = Math.floor(Math.random() * 3);
  return game[play];
};

const drawGame = () => {
  console.log("Game was draw play again");
  mess.innerText = "Game was draw ! play again";
};

const startGame = (userChoice) => {
  console.log("userchoice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("compchoice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let theWinner = true;
    if (userChoice === "Rock" && compChoice === "Paper") {
      theWinner = false;
    } else if (userChoice === "Rock" && compChoice === "Scissor") {
      theWinner = true;
    } else if (userChoice === "Paper" && compChoice === "Rock") {
      theWinner = true;
    } else if (userChoice === "Paper" && compChoice === "Scissor") {
      theWinner = false;
    } else if (userChoice === "Scissor" && compChoice === "Paper") {
      theWinner = true;
    } else if (userChoice === "Scissor" && compChoice === "Rock") {
      theWinner = false;
    }
    // if (userChoice === "Rock") {
    //   theWinner = compChoice === "Paper" ? false : true;
    // } else if (userChoice === "Paper") {
    //   theWinner = compChoice === "Scissors" ? false : true;
    // } else  {
    //   theWinner = compChoice === "Rock" ? false : true;
    // }
    gameWinner(theWinner, userChoice, compChoice);
    /* gameWinner(theWinner);*/
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    startGame(userChoice);
  });
});
