// set Date
const date = document.getElementById("date");
date.innerHTML= new Date().getFullYear();
//close links
const navToggle=document.querySelector('.nav-toggle');
const linksContainer =document.querySelector('.links-container');
const links=document.querySelector('.links');
 
navToggle.addEventListener('click',function(){
//  linksContainer.classList.toggle("show-links");
const containerHeight = linksContainer.getBoundingClientRect().height;
const linksHeight = links.getBoundingClientRect().height;

if(containerHeight===0){
    linksContainer.getElementsByClassName.height = `${linksHeight}px`;
}
else{
    linksContainer.getElementsByClassName.height=0;
}
})
