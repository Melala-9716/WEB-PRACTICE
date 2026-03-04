function rollDice(){
 const numOfDice=document.getElementById("numofDice").value;
 const DiceResult=document.getElementById("diceResult");
 let Diceimages=document.getElementById("diceImages");
 let values=[];
 let images=[];
 for (let i=0; i<numOfDice;i++){
    let value=Math.floor(Math.random()*6)+1;
    values.push(value);
    images.push(`<img src="images/dice-${value}.png" alt="dice-images${values}">`);
 }
 DiceResult.textContent='Rolled Values:'+' '+values;
 Diceimages.innerHTML=images.join('');
}