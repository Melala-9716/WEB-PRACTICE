const increaseBtn=document.getElementById("increase");
const decreaseBtn=document.getElementById("decrease");
const resetBtn =document.getElementById("restart");
let count=0;
increaseBtn.onclick=function(){
    count++;
    document.getElementById("start").textContent=count;
}
decreaseBtn.onclick=function(){
    count--;
    document.getElementById("start").textContent=count;
}
resetBtn .onclick=function(){
    count=0;
    document.getElementById("start").textContent=count;
}

