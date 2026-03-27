const body = document.querySelector("body");

const div = document.createElement("div");
const divRes = document.createElement("div");
const pRes = document.createElement("p");
const pScore = document.createElement("p");


const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");

rockBtn.textContent = "rock";
paperBtn.textContent = "paper";
scissorBtn.textContent = "scissor";

div.appendChild(rockBtn);
div.appendChild(paperBtn);
div.appendChild(scissorBtn);

body.appendChild(div);
body.appendChild(divRes);
divRes.appendChild(pScore);
divRes.appendChild(pRes);

//Scores
let humanScore = 0;
let computerScore = 0;
let rounds = 0;


// Her vælger computeren enten sten, saks eller papir med 1/3 change for hver.

function getComputerChoice () {
    let randNum = Math.random();
    console.log(randNum);
    if (randNum <= 0.33) {
        return ("rock");
    } else if (randNum <= 0.66) {
        return ("paper");
    } else {
        return ("scissor");
    }
}

// Function that desides who win in a round and returns the output and increases score for the winner
function playRound (humanChoice, computerChoice) {

    //Tied
    if (humanChoice === "rock" && computerChoice === "rock") {
        pScore.textContent = `Tie: Both Rock`
    } else if (humanChoice === "scissor" && computerChoice === "scissor") {
        pScore.textContent = `Tied: Both Scissor`
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        pScore.textContent = `Tied: Both Scissor`
    } 
    
    //Lose
    else if (humanChoice === "rock" && computerChoice === "paper") {
        ++computerScore
        pScore.textContent = `You Lose: Paper beats Rock`
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        ++computerScore
        pScore.textContent = `You Lose: Scissor beats Paper`
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        ++computerScore
        pScore.textContent = `You Lose: Rock beats Scissor`
    } 
    
    //Win
    else if (humanChoice === "rock" && computerChoice === "scissor") {
        ++humanScore
        pScore.textContent = `You Win: Rock beats Paper`
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore
        pScore.textContent = `You Win: Paper beats Rock`
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        ++humanScore
        pScore.textContent = `You Win: Scissor beats Paper`

    }

    //Default
    else {
        return "FUCK MAND LORTET VIRKER IKKEEE!!!!"
    }
}
    

// UI ELEMENTS

div.addEventListener("click", startGame);

function startGame (e) {
    rounds += 1;
    console.log(rounds);
    
    if (rounds < 5) {
        playRound(e.target.textContent, getComputerChoice());

        if (rounds === 4) {
            if (humanScore > computerScore) {
                console.log("You WIN!!!")
                pRes.textContent = `You WIN!!! | Score: Human ${humanScore} - Computer ${computerScore}`;
            } else if (humanScore < computerScore) {
                console.log("You LOSE!!")
                pRes.textContent = `You LOSE!!! | Score: Human ${humanScore} - Computer ${computerScore}`;
            } else {
                console.log("It's TIED")
                pRes.textContent = `It's TIED | Score: Human ${humanScore} - Computer ${computerScore}`;
            }
        }
        
    }
}




