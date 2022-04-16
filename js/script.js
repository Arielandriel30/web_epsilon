// inicializamos la libreria
AOS.init();
let menu = document.getElementById('menu');
let menu_bar = document.getElementById('menu-bar');

menu_bar.addEventListener('click', function(){
    menu.classList.toggle('menu-toggle')
})

//ojos
var balls = document.getElementsByClassName("ball");
document.onmousemove = function(){
 var x = event.clientX * 100 / window.innerWidth + "%";
 var y = event.clientY * 100 / window.innerHeight + "%";

 for(var i=0;i<2;i++){
     balls[i].style.left = x;
     balls[i].style.top = y;
     balls[i].style.transform = "translate(-"+x+",-"+y+")";
 }  
}