
window.addEventListener('load',function() {

  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var correo = document.getElementById("correo");
  var contraseña = document.getElementById("contraseña");

  function datos(nombre,apellido,contraseña,correo){
    this.nombre     = nombre;
    this.apellido   = apellido;
    this.correo     = correo;
    this.contraseña = contraseña;
    this.imprimir = function(){
      return ("Nombre: " + this.nombre + "<br>" + "Apellido: "+this.apellido + "<br>" + "Correo: " + this.correo + "<br>" + "Contraseña: " + this.contraseña + "<br>");
    }
  }

  var todosInputs = document.getElementsByClassName("validacion-inputs");
  var validacionInputs = function (e){
    if(this.value.trim().length==0){
      this.value="";
      this.nextElementSibling.nextElementSibling.nextElementSibling.innerText="Este campo es obligatorio";
    }
    else {
      this.nextElementSibling.nextElementSibling.nextElementSibling.innerText="";
    }
  }
  for(var i=0; i<todosInputs.length; i++){
    todosInputs[i].onblur=validacionInputs;
  }
  if ( !(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ .test(correo.value))){
       alert("Error, la dirección de correo es incorrecta.");
   }
  else if(!(contraseña.value).length >6 ){
     alert("La contraseña debe tener al menos 6 a 20 caracteres");
   }

var registrarDatos = document.getElementById("registrarDatos");
registrarDatos.addEventListener('click',function(e) {
  e.preventDefault();

  if(nombre.value.length!=0 && apellido.value.length!=0 && correo.value.length!=0 && contraseña.value.length!=0){

      var usuario = new datos(nombre.value,apellido.value,correo.value,contraseña.value);
      localStorage.setItem("usuario-registrada",JSON.stringify(usuario));
      window.location="../Bienvenida/bienvenida.html"
    }
  });
});
