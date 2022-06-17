//1.-crear un formulario con botones para ingresar informacion a traves de javaScript
//paso 01. seleccionar el boton que produzca un evento(ID)
//paso 02. añadimos un manejador de eventos 
document.getElementById("boton").addEventListener("click",function(){
    //Extraer los datos del usuario,declarando variable
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    let telefono = document.getElementById("telefono").value

    //Mostrar la informacion
    document.getElementById("salida").innerHTML=" Bienvenido "
    + nombre + " a nuestra panaderia Alison , te saludamos por tus " + edad+ " años de vida. "
})