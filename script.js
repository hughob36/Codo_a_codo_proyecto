

function realizarCalculo(event){
    event.preventDefault();

    var canti = parseFloat(document.getElementById("cantidad").value);
    var selectValue = document.getElementById("tipos").value;

    if(selectValue === "opcion1"){      
         
        var resultado = canti*0.2;
        
        document.getElementById("resultado").value = resultado;
    }    
    else if(selectValue === "opcion2"){
        var resultado = canti*0.5;
        document.getElementById("resultado").value = resultado;
    }
    else if(selectValue === "opcion3"){
        var resultado = canti*0.75;
        document.getElementById("resultado").value = resultado;
    }
}


