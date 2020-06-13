var playerChoice;
var rockButton = document.getElementsByClassName('rockButton');
rockButton[0].addEventListener("click", chooseRock);

var paperButton = document.getElementsByClassName('paperButton');
paperButton[0].addEventListener("click", choosePaper);

var scissorsButton = document.getElementsByClassName('scissorsButton');
scissorsButton[0].addEventListener("click", chooseScissors);

var playerScore = 0
var computerScore = 0

function computerChoice() {
    var computerVar = Math.random();
    if (computerVar < .3) {
        return "Rock"
    }
    else if (computerVar >=.3 && computerVar <=.6) {
        return "Paper"
    }
    else {
        return "Scissors"
    }

};

function chooseRock() {
   
    var cc = computerChoice();
    if (cc == "Rock") {
        document.getElementsByClassName("playerAnswer")[0].innerHTML="Rock";
        document.getElementsByClassName("computerAnswer")[0].innerHTML="Rock";
        document.getElementsByClassName("winner")[0].innerHTML="DRAW";
        document.getElementsByClassName("winner")[0].style.color = "black";
        
    }
    else if (cc== "Scissors") {
        document.getElementsByClassName("playerAnswer")[0].innerHTML="Rock";
        document.getElementsByClassName("computerAnswer")[0].innerHTML="Scissors";
        document.getElementsByClassName("winner")[0].innerHTML="YOU WIN!";
        document.getElementsByClassName("winner")[0].style.color = "green";
        playerScore++;
    }
    else if (cc == "Paper") {
        document.getElementsByClassName("playerAnswer")[0].innerHTML="Rock";
        document.getElementsByClassName("computerAnswer")[0].innerHTML="Paper";
        document.getElementsByClassName("winner")[0].innerHTML="YOU LOSE";
        document.getElementsByClassName("winner")[0].style.color = "red";
        computerScore++;
    };
    document.getElementById("playerScore").innerHTML=playerScore;
    document.getElementById("computerScore").innerHTML=computerScore;
    
}

function choosePaper() {
   
    var cc = computerChoice();
    if (cc == "Rock") {
        document.getElementsByClassName("playerAnswer")[0].innerHTML="Paper";
        document.getElementsByClassName("computerAnswer")[0].innerHTML="Rock";
        document.getElementsByClassName("winner")[0].innerHTML="YOU WIN!";
        document.getElementsByClassName("winner")[0].style.color = "green";
        playerScore++;
        
    }
    else if (cc== "Scissors") {
        document.getElementsByClassName("playerAnswer")[0].innerHTML="Paper";
        document.getElementsByClassName("computerAnswer")[0].innerHTML="Scissors";
        document.getElementsByClassName("winner")[0].innerHTML="YOU LOSE";
        document.getElementsByClassName("winner")[0].style.color = "red";
        computerScore++;
    }
    else if (cc == "Paper") {
        document.getElementsByClassName("playerAnswer")[0].innerHTML="Paper";
        document.getElementsByClassName("computerAnswer")[0].innerHTML="Paper";
        document.getElementsByClassName("winner")[0].innerHTML="DRAW";
        document.getElementsByClassName("winner")[0].style.color = "black";
    };
    document.getElementById("playerScore").innerHTML=playerScore;
    document.getElementById("computerScore").innerHTML=computerScore;
    
}

function chooseScissors() {
   
    var cc = computerChoice();
    if (cc == "Rock") {
        document.getElementsByClassName("playerAnswer")[0].innerHTML="Scissors";
        document.getElementsByClassName("computerAnswer")[0].innerHTML="Rock";
        document.getElementsByClassName("winner")[0].innerHTML="YOU LOSE";
        document.getElementsByClassName("winner")[0].style.color = "red";
        computerScore++;
    }
    else if (cc== "Scissors") {
        document.getElementsByClassName("playerAnswer")[0].innerHTML="Scissors";
        document.getElementsByClassName("computerAnswer")[0].innerHTML="Scissors";
        document.getElementsByClassName("winner")[0].innerHTML="DRAW";
        document.getElementsByClassName("winner")[0].style.color = "black";
    }
    else if (cc == "Paper") {
        document.getElementsByClassName("playerAnswer")[0].innerHTML="Scissors";
        document.getElementsByClassName("computerAnswer")[0].innerHTML="Paper";
        document.getElementsByClassName("winner")[0].innerHTML="YOU WIN!";
        document.getElementsByClassName("winner")[0].style.color = "green";
        playerScore++;
    };
     document.getElementById("playerScore").innerHTML=playerScore;
     document.getElementById("computerScore").innerHTML=computerScore;
    
}
; 