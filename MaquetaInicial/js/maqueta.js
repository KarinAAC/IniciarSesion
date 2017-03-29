window.addEventListener('load',function() {

  var registrate = document.getElementById("registrate");

  registrate.addEventListener('click',function(e) {
    e.preventDefault();
    window.location = "../Registrar/registrar.html";

  });

  var iniciar = document.getElementById("iniciar");
  iniciar .addEventListener("click", function(e){
    e.preventDefault();
    //window.location = "";
  });

});
