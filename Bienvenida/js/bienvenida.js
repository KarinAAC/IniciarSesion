window.addEventListener("load", function (e) {


  var nombre  = document.getElementById("nombre-usuario");
  var apellido = document.getElementById("apellido-usuario");
  var correo     = document.getElementById("correo-usuario");
  var contraseña   = document.getElementById("contraseña-usuario");

  var ObjetoPaciente = JSON.parse(localStorage.getItem("usuario-registrada"));

  nombre.innerText   = ObjetoPaciente.nombre;
  apellido.innerText = ObjetoPaciente.apellido;
  correo.innerText     = ObjetoPaciente.correo;
  contraseña.innerText   = ObjetoPaciente.contraseña;
  e.preventDefault();

  var editar = document.getElementById("editar-perfil");
  editar.addEventListener('click',function(e) {
    e.preventDefault();

    window.location="../Editar/editar.html"
    });
  });
