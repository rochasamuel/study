//extrai a tabela completa do HTML
var table = document.querySelector("table");

console.log(table);

//adiciona evento na tabela
table.addEventListener("dblclick", function (event) {
    //verifica qual td foi clicadaa e aplica a classe no parente <tr> para apagar a linha inteira
    event.target.parentNode.classList.add("fadeout");
    
    //delay para aplica a animação css antes de apagar a linha
    setTimeout(function () {
        event.target.parentNode.remove();
    },500);
});
