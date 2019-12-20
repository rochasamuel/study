//criando classe
class Negociacao {
    //construtor da classe
    constructor(data, quantidade, valor){
        //propriedades
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        //congelar propriedades SUPERFICIALMENTE   
        Object.freeze(this);
    }

    //os elementos com _ são os reais atributos
    //o get na frente faz com que podemos chamar a ação como se fosse um atributo ex: Negociacao.data != Negociacao._data
    get data(){
        return new Date(this._data.getTime()); 
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }
}