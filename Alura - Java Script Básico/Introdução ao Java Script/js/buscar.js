//AJAX JS PURO
//captura o botao de busca
var botaoBuscar = document.querySelector("#buscar-pacientes");

//adiciona evento no botao adicionar
botaoAdicionar.addEventListener("click", function(event){
    //"cria" um AJAX
    var xhr = new XMLHttpRequest();
    
    //"faz uma requisição do tipo GET"
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    //adiciona evento que é chamado ao carregar
    xhr.addEventListener("load", function(){
        //captura a resposta da requisição
        var resposta = chr.responseText;
        //formata a resposta pra JSON
        var pacientes = JSON.parse();
        
        //loop para adicionar cada paciente da requisição na tabela
        pacientes.forEach( function (paciente){
            adicionaPacienteNaTabela(paciente);
        });
    });
    
    //termina a requisição
    xhr.send();
});