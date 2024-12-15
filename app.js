let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice=()=>{
  //rock,paper,scissors
  const options = ["rock","paper","scissors"];
  const ranInx = Math.floor(Math.random()*3);
  return options[ranInx];
}

const drawGame=()=>{
  console.log("Game was Draw. ");
  msg.innerText = "Game Was Draw.Play Again";
  msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>{
  if(userWin)
  {
    userscore++;
    userScorePara.innerText = userscore;
    console.log(" You Win! ");
    msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else{
    compscore++;
    compScorePara.innerText = compscore;
    console.log(" You Lose! ");
    msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "Red";
  }
}

const playGame =(userChoice)=>{
 console.log("user choice = ",userChoice);
 //Generate computer choice
 const compChoice=genCompChoice();
 console.log("Computer choice = ", compChoice);

 if(userChoice===compChoice)
 {
   //draw game
   drawGame();
 }
 else{
  let userWin= true;
  if(userChoice === "rock")
  {
    //paper,scissors
    userWin = compChoice === "paper" ? false : true;
  }
  else if(userChoice === "paper")
  {
    //rock,scissors
    userWin = compChoice === "scissors" ? false : true;
  }
  else{
    //rock,paper
    userWin = compChoice === "rock" ? false : true;
  }
  showWinner(userWin,userChoice,compChoice);
 }
} 

choices.forEach((choice)=> {
  choice.addEventListener("click",()=>{
  const userChoice = choice.getAttribute("id");
  playGame(userChoice); 
  });
});