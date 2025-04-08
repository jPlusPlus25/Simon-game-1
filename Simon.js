let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purpe","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});
function levelup(){
    level++;
    h2.innerText='Level ${level}';
    //random btn choose
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randombtn=document.querySelector('.${randColor}')
    console.log(randomColor);
    console.log(randomIdx);
    console.log(randombtn);
    btnFlash(randombtn);
}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);

}
