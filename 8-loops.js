console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

const idadeComprador = 14;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = false;
while(contador<3){

    if (listaDeDestinos[contador] == destino){
        console.log("destino disponível!")
        destinoExiste = true;
        break;
    }
    contador =+ 1;
}