var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(event){
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){
        var resposta = chr.responseText;
        var pacientes = JSON.parse();
        
        pacientes.forEach( function (paciente){
            adicionaPacienteNaTabela(paciente);
        });
    });
    
    xhr.send();
})