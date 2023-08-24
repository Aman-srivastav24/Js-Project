const Num = document.querySelector(".yourNo");
const checkBtn = document.querySelector(".check");
const msgs =  document.querySelector(".msg");
const counter = document.querySelector(".count");
let x = Math.floor(Math.random()*20);
let noOfGuess = 0 ;

function remove(){
  Num.value="";
}

checkBtn.addEventListener("click" , 
function play(){
  let a = Num.value;
  console.log(a);
  if(a>x){
    msgs.textContent="Guess is High"
    noOfGuess += 1;
   counter.textContent="No of Guess :" + noOfGuess;
  }
  else if(a<x){
    msgs.innerHTML="Guess is low"
    noOfGuess += 1;
    counter.textContent="No of Guess :" + noOfGuess;
  }
  else if(a==x){
    msgs.textContent="Guess is Correct ! You Won"
    noOfGuess += 1;
    counter.textContent="No of Guess :" + noOfGuess;
    document.querySelector('.main').style = 'background-color : red ; color:black; width:625px; height:625px;';
    let html = "<marquee>Winner Winner! Developer Mode on </marquee>";
    document.getElementById("welcome").insertAdjacentHTML("afterend",html);
    msgs.style='border:2px solid white; border-radius:5px; color: white;';
  }
});



