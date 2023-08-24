const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const content = document.querySelectorAll(".content");
 about.addEventListener('click' , function(e){
     const id = e.target.dataset.i;
     if(id){
         //remove avtive from butons
         btns.forEach(function (btn) {
             btn.classList.remove("active");
            });
            e.target.classList.add("active");
         //hide content
         content.forEach(function (article) {
             article.classList.remove("active");
         });
         const element = document.getElementById(id);
         element.classList.add("active");
     }


 });