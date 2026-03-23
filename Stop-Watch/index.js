let ms = 0;
 let start=document.getElementById("btn1");
 let stop1=document.getElementById("btn2");
 let reset=document.getElementById("btn3");
 let intervalId;
function display() {
    let hours = Math.floor(ms / 3600000).toString().padStart(2,"0");
    let minutes = Math.floor((ms % 3600000) / 60000).toString().padStart(2,"0");
    let seconds = Math.floor((ms % 60000) / 1000).toString().padStart(2,"0");
    let mili = (ms % 1000/10).toString().padStart(2,"0");
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}:${mili}`;
    ms += 10;
}
start.onclick=function(){
   intervalId= setInterval(display,10);
}
stop1.onclick=function(){
    clearInterval(intervalId);
}
reset.onclick=function(){
   clearInterval(intervalId);
   document.getElementById("clock").textContent = `00:00:00:00`;
}