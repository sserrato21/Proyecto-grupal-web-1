

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
  
  