const playerdisplay=document.getElementById("playerdisplay");
const Computerdisplay=document.getElementById("Computerdisplay");
const computer=['rock','paper','scissor'];
const result=document.getElementById("result");
let playerscores = 0;
let computerscores = 0;
const playerscorenumbers=document.getElementById("playerscorenumbers");
const computerscorenumbers=document.getElementById("computerscorenumbers");
function playgame(input){
      const computerchoices=computer[Math.floor(Math.random()*3)];
      console.log(computerchoices);
    if(computerchoices===input){
        result.textContent="ITS A TIE!"
    }
    else{
        switch(input){
            case "rock":
                result.textContent=computerchoices==="scissor"? "YOU WIN":"YOU LOSE";
                break;
            case "paper":
                result.textContent=computerchoices==="rock"? "YOU WIN":"YOU LOSE";
                 break;
            case "scissor":
                result.textContent=computerchoices==="paper"? "YOU WIN":"YOU LOSE";
                 break;
        }
    }
    playerdisplay.textContent=`Player:${input}`;
    Computerdisplay.textContent=`Computer:${computerchoices}`;
    switch(result.textContent){
        case "YOU WIN":
            result.style.color="green";
            playerscores++;
            playerscorenumbers.textContent=` ${playerscores}`;
            break;
        case "YOU LOSE":
             result.style.color="red";
             computerscores++;
             computerscorenumbers.textContent=`${computerscores}`;
             break;
        default:
             result.style.color="Black";
             break;
    }       
}