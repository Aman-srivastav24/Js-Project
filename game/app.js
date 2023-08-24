const roll_dice = document.querySelector(".roll");
const hold_dice = document.querySelector(".hold");
const new_game = document.querySelector(".newgame");
const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");
let a = 0;
let b = 0;


roll_dice.addEventListener("click", function () {
    var x = Math.floor(Math.random() * 6) + 1;

    switch (x) {

        case 1:

            document.querySelector(".img1").src = "/game/img/dice-six-faces-one.png";
            

            break;


        case 2:

            document.querySelector(".img1").src = "/game/img/dice-six-faces-two.png";

            break;




        case 3:

            document.querySelector(".img1").src = "/game/img/dice-six-faces-three.png";

            break;
        case 4:

            document.querySelector(".img1").src = "/game/img/dice-six-faces-four.png";


            break;
        case 5:

            document.querySelector(".img1").src = "/game/img/dice-six-faces-five.png";



        default:

            document.querySelector(".img1").src = "/game/img/dice-six-faces-six.png";


    }
if(x==1){
    
}
console.log(x);
})


