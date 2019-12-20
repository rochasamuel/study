//teste para extrai o titulo da pagina do HTML
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//guarda na varieavel os pacientes
var pacientes = document.querySelectorAll(".paciente");

//itera cada paciente
for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    
    //extrai peso do paciente
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    //extrai altura do paciente
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    //extrai imc do paciente
    var tdImc = paciente.querySelector(".info-imc");
    
    //guarda em variaveis os teste de validação
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    
    if (!pesoEhValido) {
        pesoEhValido = false;
        //substitui o valor na tabela pelo erro
        tdImc.textContent = "Peso inválido";
        //adiciona a classe css de erro
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    //se a validação passar calcula o imc e coloca na tabela
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

//calcula o imc
function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    
    //toFixed(2) => função que arrendonda os numeros float 
    return imc.toFixed(2);
}

//validação de peso
function validaPeso(peso){
    if(peso > 0 && peso <500){
        return true;
    }else{
        return false;
    }
}

//validação de altura
function validaAltura(altura){
    if(altura > 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}