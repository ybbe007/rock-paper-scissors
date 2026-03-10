

// Step 2: getComputerChoice

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

// Step 3: getHumanChoice

function getHumanChoice () {
    let humanPrompt = prompt("Choose Rock, Paper or Scissor", "");
    humanPrompt = humanPrompt.toLowerCase();

    if (humanPrompt === "rock" || humanPrompt === "paper" || humanPrompt === "scissor") {
        return humanPrompt;
    } else {
        return "Wrong Input";
    }


}



function playGame () {

    //Scores
    let humanScore = 0;
    let computerScore = 0;

    // Function that desides who win in a round and returns the output and increases score for the winner
    function playRound (humanChoice, computerChoice) {
        console.log(humanChoice);
        console.log(computerChoice);

        //Tied
        if (humanChoice === "rock" && computerChoice === "rock") {
            console.log(`Tie: Both Rock | Score: Human ${humanScore} - Computer ${computerScore}`)
        } else if (humanChoice === "scissor" && computerChoice === "scissor") {
            console.log(`Tied: Both Scissor | Score: Human ${humanScore} - Computer ${computerScore}`)
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log(`Tied: Both Scissor | Score: Human ${humanScore} - Computer ${computerScore}`)
        } 
        
        //Lose
        else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log(++computerScore);
            console.log(`You Lose: Paper beats Rock | Score: Human ${humanScore} - Computer ${computerScore}`)
        } else if (humanChoice === "paper" && computerChoice === "scissor") {
            console.log(++computerScore);
            console.log(`You Lose: Scissor beats Paper | Score: Human ${humanScore} - Computer ${computerScore}`)
        } else if (humanChoice === "scissor" && computerChoice === "rock") {
            console.log(++computerScore);
            console.log(`You Lose: Rock beats Scissor | Score: Human ${humanScore} - Computer ${computerScore}`)
        } 
        
        //Win
        else if (humanChoice === "rock" && computerChoice === "scissor") {
            console.log(++humanScore);
            console.log(`You Win: Rock beats Paper | Score: Human ${humanScore} - Computer ${computerScore}`)
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log(++humanScore);
            console.log(`You Win: Paper beats Rock | Score: Human ${humanScore} - Computer ${computerScore}`)
        } else if (humanChoice === "scissor" && computerChoice === "paper") {
            console.log(++humanScore);
            console.log(`You Win: Scissor beats Paper | Score: Human ${humanScore} - Computer ${computerScore}`)
        }

        //Default
        else {
            return "FUCK MAND LORTET VIRKER IKKEEE!!!!"
        }
    }
    
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("You WIN!!!")
    } else if (humanScore < computerScore) {
        console.log("You LOSE!!")
    } else {
        console.log("It's TIED")
    }
}