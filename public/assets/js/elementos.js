
//Oculta el hamburguer menu, al tocar sobre un elemento en vista Mobile
document.addEventListener("DOMContentLoaded", function(){
    var links = document.querySelectorAll(".navbar-nav li");
    for(var x=0; x<links.length; x++){
       links[x].onclick = function(){
          document.querySelector("button.navbar-toggler").click();

       }
    }
 });