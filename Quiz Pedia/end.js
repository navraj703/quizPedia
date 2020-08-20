const checkScore=document.getElementById("score_check_btn")
const endScore=document.getElementById("endScore");
endScore.innerText=localStorage.getItem("mostRecentScore")
const Score=endScore.innerText
checkScore.addEventListener("click",function(){
    if( endScore.innerText<=30){
        endScore.style.display="block"
        endScore.style.color="red";
     
    }
    else{endScore.style.color="green"}
    endScore.innerText=localStorage.getItem("mostRecentScore")
    endScore.style.display="block"
   
 
})
