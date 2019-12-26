//Funcion al accionar el boton
function clickboton(texto){

    //Buscar valores de la etiqueta
    var expt = document.getElementsByClassName("ediText")[0].value;
    //Metodo de Verificacion de texto
    if(expt==""){
        
                            //alert("error");
        //Iniciar funcion
        document.getElementById('escribir').innerHTML='Error completa este campo';
    
    }
    else{

                            //alert("Hola " + expt);
                            document.getElementById('escribir').innerHTML="Bienvenido " + expt;
    }

}

