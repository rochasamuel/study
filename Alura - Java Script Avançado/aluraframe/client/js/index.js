//cria um vetor com 3 campos, representados pelos id no DOM
var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
];

//Captura o tbody
tbody = document.querySelector("table tbody");

//captura o formulario e adiciona um evento escutando o SUBMIT
document.querySelector(".form").addEventListener('submit', function(event){
    event.preventDefault();

    //cria tr
    var tr = document.createElement("tr");

    //loop no vetor
    //cria td pra cada campo e preenche com o valor
    campos.forEach(function(campo){
        var td = document.createElement("td");
        td.textContent = campo.value;
        //junta a td criada à tr
        tr.appendChild(td);
    });

    //cria a td de volume
    tdVolume = document.createElement("td");
    //preenche a td com o calculo do volume
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    //junta a tr ao tbody
    tbody.appendChild(tr);

    //zera os campos
    campos[0].value = "";
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
})