let rulesbtn=document.getElementById("rules");
var modal=document.getElementById("Modal");
var cls=document.getElementsByClassName("close")[0];
var playerscore=0;
var selectionScreen=document.getElementsByClassName("selection-dis")[0];
var playAgn=document.getElementById("tryagain-btn");
var playerCh=document.getElementById("player-choice");
var pcCh=document.getElementById("pc-choice");

playAgn.onclick=function(){

    selectionScreen.classList.remove("hide");

};

const options=document.querySelectorAll(".white");
const compOptions = ["rock", "paper", "scissors"];

rulesbtn.onclick=function(){
    modal.classList.add("show");
}
cls.onclick=function(){
    modal.classList.remove("show");
}


options.forEach(option=>{
    option.addEventListener("click",function(){
        selectionScreen.classList.add("hide");
        const compNo=Math.floor(Math.random()*3);
        const compChoice=compOptions[compNo];
        console.log(this);
        compareHand(this.getAttribute("id"),compChoice); 
        


    });
});



const compareHand=(playerChoice,compChoice)=>{


    const winner=document.querySelector(".win-dis");
    console.log(playerChoice,compChoice);
    if(playerChoice==compChoice){
        winner.textContent="TIE";
        updatescore();
        return;
    }
    if(playerChoice==="rock"){
        if(compChoice==="paper"){
            winner.textContent="PC";
        }else{
            winner.textContent="You";
            playerscore++;
        }
    }else if(playerChoice==="paper"){
         if(compChoice==="scissors"){
            winner.textContent="PC";
        }else{
            winner.textContent="You";
            playerscore++;
        }

    }else if(playerChoice==="scissors"){
         if(compChoice==="rock"){
            winner.textContent="PC";
        }else{
            winner.textContent="You";
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

