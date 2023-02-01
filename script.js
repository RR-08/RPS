let rulesbtn=document.getElementById("rules");
var modal=document.getElementById("Modal");
var cls=document.getElementsByClassName("close")[0];
var playerscore=0;
var selectionScreen=document.getElementsByClassName("selection-dis")[0];
var resultScreen=document.getElementsByClassName("result-dis")[0];
var playAgn=document.getElementById("tryagain-btn");
var playerCh=document.getElementById("player-choice");
var pcCh=document.getElementById("pc-choice");
var Refreshbtn=document.getElementsByClassName("refresh")[0];

var html$='';
var html_='';

playAgn.onclick=function(){
    resultScreen.classList.add("hide");
    selectionScreen.classList.remove("hide");
    Refreshbtn.classList.add("show");

};

const options=document.querySelectorAll(".white");
const compOptions = ["rock", "paper", "scissors"];

rulesbtn.onclick=function(){
    modal.classList.add("show");
}
cls.onclick=function(){
    modal.classList.remove("show");
}

Refreshbtn.onclick=function(){
    playerscore=0;
    pscore.textContent=playerscore;
    Refreshbtn.classList.remove("show");

}


options.forEach(option=>{
    option.addEventListener("click",function(){
        var html$='';
        var html_='';
        resultScreen.classList.remove("hide");
        Refreshbtn.classList.remove("show");
        selectionScreen.classList.add("hide");
        const compNo=Math.floor(Math.random()*3);
        const compChoice=compOptions[compNo];
        console.log(this);
        var player=this.getAttribute("id");

        html$+='<div class="white won" id='+player+'>'+'<img src="img/'+player+'.png">'+'<div class="info">'+'</div>';

        html_+='<div class="white won" id='+compChoice+'>'+'<img src="img/'+compChoice+'.png">'+'<div class="info">'+'</div>';

        playerCh.innerHTML=html$;
        pcCh.innerHTML=html_;

        compareHand(player,compChoice); 

    });
});



const compareHand=(playerChoice,compChoice)=>{
    var lost=document.getElementsByClassName("won");
    console.log(lost[0]);

    const winner=document.querySelector(".win-dis");
    console.log(playerChoice,compChoice);
    if(playerChoice==compChoice){
        winner.textContent="TIE";
        lost[0].classList.remove("won");
        lost[1].classList.remove("won");
        return;
    }
    if(playerChoice==="rock"){
        if(compChoice==="paper"){
            winner.textContent="PC WON";
            lost[0].classList.remove("won");
    
        }else{
            winner.textContent="YOU WON";
            lost[1].classList.remove("won");
            playerscore++;
        }
    }else if(playerChoice==="paper"){
         if(compChoice==="scissors"){
            winner.textContent="PC WON";
            lost[0].classList.remove("won");

        }else{
            winner.textContent="YOU WON";
            lost[1].classList.remove("won");
            playerscore++;
        }

    }else if(playerChoice==="scissors"){
         if(compChoice==="rock"){
            winner.textContent="PC WON";
            lost[0].classList.remove("won");
        }else{
            winner.textContent="YOU WON";
            lost[1].classList.remove("won");
            playerscore++;
        }

    }
    updatescore();
    return;


}

var pscore=document.getElementById("score");
const updatescore=()=>{
    console.log(pscore);
    pscore.textContent=playerscore;
}

