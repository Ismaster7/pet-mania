class Carro {
    marca;
    cor;
    gastoMedioComb;

    constructor(marca, cor, gastoMedioComb){
        this.cor = cor;
        this.gastoMedioComb = gastoMedioComb;
        this.marca = marca;
    }

    calculadorCustos(qntdKm, precoComb){
        return Math.round(qntdKm*(precoComb/this.gastoMedioComb));
          
    }

}

const corsa = new Carro('corsa','cinza',12);

console.log(corsa.calculadorCustos(70, 5));