//ADICIONANDO EVENTO NO BOTAO
$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

//REQUISIÇÃO PARA O SERVIDOR
function fraseAleatoria(){
    $("#spinner").toggle();
    $.get("http://localhost:3000/frases", trocaFrase)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        }, 2500);
    })
    .always(function(){
        $("#spinner").toggle();
    })
}

//FUNÇÃO DE TROCA
function trocaFrase(data){
    var randomNum = Math.floor(Math.random() * data.length);
    $(".frase").text(data[randomNum].texto);
    $("#tempo-digitacao").text(data[randomNum].tempo);
    atualizaPalavras();
    atualizaTempoInicial(data[randomNum].tempo);
}

function buscaFrase(){
    var nId = $("#frase-id").val();
    var idFrase = {id: nId}
    $("#spinner").toggle();
    $.get("http://localhost:3000/frases", idFrase , changeFrase)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        }, 2500);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function changeFrase(data){
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaPalavras();
    atualizaTempoInicial(data.tempo);
}