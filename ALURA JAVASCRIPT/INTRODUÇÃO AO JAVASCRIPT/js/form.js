//extrai o botao de add do HTML
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//adiciona um evento ao botão
botaoAdicionar.addEventListener("click", function(event) {
    //inmpede que a pagina recarregue ao apertar o botao
    event.preventDefault();
    
    //extrai campos do formulario
    var form = document.querySelector("#form-adiciona");
    //obtem paciente inserido no form
    var paciente = obtemPacienteDoFormulario(form);
    //cria a TR que vai abrigar as informações do form
    var pacienteTr = montaTr(paciente);
    
    //vetor de erros
    var erros = validaPaciente(paciente);
    
    //printa vetor de erros se possuir algum elemento 
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        //se achar erros não envia os dados do form para a tr
        return;
    }
    
    adicionaPacienteNaTabela(paciente);
    
    form.reset();
    
    //retira as mensagens de erro do HTML ao adicionar
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    //monta tr que vai abrigar as infos do form
    var pacienteTr = montaTr(paciente);
    //extrai a tabela inteira
    var tabela = document.querySelector("#tabela-pacientes");
    //adiciona a tr à tabela
    tabela.appendChild(pacienteTr);
    //reseta o formulario apos adicionar  
}

//cria um objeto com os valores do fomrulario
function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

//monta a tr
function montaTr(paciente) {
    //cria a tr
    var pacienteTr = document.createElement("tr");
    //adiciona uma classe
    pacienteTr.classList.add("paciente");
    
    
    //monta as td's e coloca eles dentro da tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//monta td adicionando o conteudo e a classe
function montaTd(dado, classe) {
    //cria o td
    var td = document.createElement("td");
    //adiciona a classe
    td.classList.add(classe);
    //coloca o valor dentro do td
    td.textContent = dado;

    return td;
}

//validaçao do paciente
function validaPaciente(paciente){
    //vetor de erros
    var erros = [];
    
    //caso algum erro apareça um mensagem é adicionada ao vetor para exibição
    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }
    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }
    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }
    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }
    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida");
    }
    
    return erros;
}

//exibe as mensagens presentes no vetor
function exibeMensagensDeErro(erros){
    //extrai a lista que vai abrigar os erros
    var ul = document.querySelector("#mensagens-erro");
    //limpa a ul
    ul.innerHTML = "";
    
    //itera cada elemento do vetor
    erros.forEach(function(erro){
        //cria uma li com o erro e coloca dentro da ul para ser exibida
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}