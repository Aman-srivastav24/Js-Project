const color = ['red','blue','white','aqua','yellow'];
function change(){
   
    const randomnumber = getrandomnumber();
    document.getElementById('container').style.backgroundColor=color[randomnumber];
    document.getElementById('code').textContent=color[randomnumber].toUpperCase();
}
function getrandomnumber(){
    return Math.floor(Math.random() * color.length);
}