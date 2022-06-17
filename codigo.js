//cagar la informacion a traves del evento LOAD
window.addEventListener("load",()=>{
    //busco los botones y el resultado
    const botones = document.getElementsByClassName("boton");

    //usar queryselector para que nos de el elemnto solo
    const resultado = document.querySelector(".resultado")

    //convierto la htmlcollection a array para poder iterar
    const botonLista = Array.from(botones)

    //agrego un evento de click a cada boton
    botonLista.forEach((boton)=>{
        boton.addEventListener("click",() =>{
            //llamo a una funcion cada vez que ocurra un click
            calculadora(boton,resultado)
        })
    })
})

function calculadora(boton,resultado){
    //funcion que decide que hacer
    switch(boton.innerHTML){
        case "C":
            borrar(resultado)
            break;

        case "=":
            calculador(resultado)
            break;

        default:
            actualizar(resultado,boton)
            break;
    }
}

function borrar(){
    if(resultado.innerHTML !=0){
        resultado.innerHTML =0
    }
}

function calculador(){
    //si la cadena de caracteres representa una expresion, eval()evalua la expresion.
    resultado.innerHTML = eval(resultado.innerHtml)
}

function actualizar(resultado, boton){
    if(resultado == 0){
        resultado.innerHTML = "";
    }

    resultado.innerHTML += boton.innerHTML;
}
