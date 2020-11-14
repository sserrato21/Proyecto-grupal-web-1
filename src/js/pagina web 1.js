// alert('hola');

// Interaccion 1

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(elems, options);
  });

// ----------------------

// Interaccion 2

$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });


  // Interaccion 3
  $(document).ready(function() {
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });



  // Interaccion 4
  $(document).ready(function(){
    $('.carousel').carousel();
  });