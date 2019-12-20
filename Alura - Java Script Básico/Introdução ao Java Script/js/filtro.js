//busca o input de filtro no HTML
var filtro = document.querySelector("#filtrar-tabela");

//adiciona o evento que é ativado quando qualquer alteração é feita
filtro.addEventListener("input", function (event) {
    //valor que está no input no momento
    this.value
    
    //busca paciente no HTML
    var pacientes = document.querySelectorAll(".paciente");
    
    //Compara se tem algo no input
    if(this.value.length > 0){
        //itera por todos os pacientes
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            
            //extraem o nome do paciente
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            //expressão regular
            var expressao = new RegExp(this.value,"i");
            
            //testa cada caractere com a expressão regular e adiciona as classes
            //de invisbilida
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else{
                paciente.classList.remove("invisivel");
            }
        }
    //retira a invisbilidade de todos quando não há nada no input
    }else{
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
