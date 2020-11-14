// alert('hola');



// Interaccion 1

document.getElementById("btnabrir").addEventListener("click",function(){
  document.getElementsByClassName("fondo_transparente")[0].style.display="flex" 
  return false
});

document.getElementsByClassName("modal_cerrar")[0].addEventListener("click",function(){
   document.getElementsByClassName("fondo_transparente")[0].style.display="none" 
});

// Interaccion 2

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.dropdown-trigger');
  let instances = M.Dropdown.init(elems, options);
});

// ----------------------

// Interaccion 3

$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });


// // Interaccion 4 
// $(document).ready(function() {
//   $('.carousel.carousel-slider').carousel({
//     fullWidth: true
//   });

// -------hubo un problema con la interaccion 4, al estar activa, la interaccion 1 deja de funcionar de repente--------
// -------por eso la puse como un comentario (en texto verde) mientras tanto porque al parecer hay algo interfiriendo con la interaccion 1 (la del modal)--------


//   // Interaccion 5
  $(document).ready(function(){
    $('.carousel').carousel();
  });