const display=document.getElementById("Display");

function appendToDisplay(input){
     display.value+=input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
    display.value=eval(display.value);
     }
    catch(error){
        display.value="Error";
    }
}
function clickoneDisplay(){
    display.value=display.value.slice(0,-1);
}
function clearoneDisplay(){
    display.value = display.value.slice(0, -1);
}