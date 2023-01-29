let rulesbtn=document.getElementById("rules");
var modal=document.getElementById("Modal");
var cls=document.getElementsByClassName("close")[0];

rulesbtn.onclick=function(){
    modal.classList.add("show");
}
cls.onclick=function(){
    modal.classList.remove("show");
}
