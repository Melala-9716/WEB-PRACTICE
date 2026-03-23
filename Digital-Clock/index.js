const now=new Date();
const hours=now.getHours().toString().padStart(2,"0");
const minutes=now.getMinutes();
const seconds=now.getSeconds();
const whole=` ${hours}:${minutes}:${seconds}`;
document.getElementById("clock").textContent=whole;
function update(){
 const now=new Date();
const Hours=now.getHours().toString().padStart(2,"0");
const Minutes=now.getMinutes().toString().padStart(2,"0");
const Seconds=now.getSeconds().toString().padStart(2,"0");
const theWhole=`${Hours}:${Minutes}:${Seconds}`;
document.getElementById("clock").textContent=theWhole;
}
update();
setInterval(update,1000);