console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

console.log("Destinos possíveis:");
console.log(listaDeDestinos);


const idadeComprador = 14

if(idadeComprador >=18){
    console.log("Comprador maior, venda feita")
    listaDeDestinos.splice(1, 1);
} else {
    console.log('Menor de idade, Não posso vender')
}

console.log("Destinos possíveis:");
console.log(listaDeDestinos);
