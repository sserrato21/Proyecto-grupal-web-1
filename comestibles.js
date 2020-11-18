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

  // Interaccion 4

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();