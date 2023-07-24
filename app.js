let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_span = document.getElementById("r");
const paper_span = document.getElementById("p");
const scissors_span = document.getElementById("s");


function getComputerChoice()
{
    const choices = ['r','p','s'];
   const randomnumber = Math.floor(Math.random()*3);
   return choices[randomnumber];
}

  
 function Win(userChoice) 
{
userScore++;
console.log(userScore);
console.log("win");
userScore_span.innerHTML = userScore;
document.getElementById(userChoice).classList.add('green-glow');
setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},500);

}

function lose(userChoice)
{
computerScore++;
computerScore_span.innerHTML = computerScore;
document.getElementById(userChoice).classList.add('red-glow');
setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},500);
}
function Draw(userChoice)
{
console.log("draw");
document.getElementById(userChoice).classList.add('gray-glow');
setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},500);
}



function Game(userChoice)
{
   

    const computerChoice = getComputerChoice();
  
        switch (userChoice + computerChoice) {
           
            case "rs":
                result_p.innerHTML =("ROCK BEATS SCISSORS. YOU WON!🔥");
                Win(userChoice);
                break;
                case "pr":
                    result_p.innerHTML =("PAPER BEATS ROCK. YOU WON!🔥");
                    Win(userChoice);
                    break;
                    case "sp":
                result_p.innerHTML =("SCISSORS BEATS PAPER. YOU WON!🔥");
                Win(userChoice);
            
        
        
        break;
        case "rp":
            result_p.innerHTML =("PAPER BEATS ROCKS. YOU LOSE!:(");
                lose(userChoice);
                break;
            case "ps":
                result_p.innerHTML =("SCISSORS BEATS PAPER. YOU LOSE!:(");
                lose(userChoice);
                break;
            case "sr":
                result_p.innerHTML =("ROCK BEATS SCISSORS. YOU LOSE!:(");
                lose(userChoice);
                break;
               
        
        case "rr":
            case "pp":
            case "ss":
               Draw(userChoice);
               result_p.innerHTML =("IT'S  A DRAW");
}

}

function main()
{
rock_span.addEventListener('click',()=> Game("r"));
paper_span.addEventListener('click',() => Game("p"));
scissors_span.addEventListener('click',() =>Game("s"));
}
main();

