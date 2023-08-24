const b1=document.getElementById('b1');
const b2=document.getElementById('b2');
const b3=document.getElementById('b3');
const con1=document.getElementById("con1");
const con2=document.getElementById("con2");
const con3=document.getElementById("con3");
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const myhr = document.getElementById("myhr");
const myhr1 = document.getElementById("myhr1");
const myhr2 = document.getElementById("myhr2");
b1.addEventListener('click',()=>{
   
   a1.classList.toggle('show');
   con1.classList.toggle('show');
   myhr.classList.toggle('show');
   
});
b2.addEventListener('click',()=>{
   
   a2.classList.toggle('show');
   con2.classList.toggle('show');
   myhr1.classList.toggle('show');
   
});
b3.addEventListener('click',()=>{
   
   a3.classList.toggle('show');
   con3.classList.toggle('show');
   myhr2.classList.toggle('show');
   
});
