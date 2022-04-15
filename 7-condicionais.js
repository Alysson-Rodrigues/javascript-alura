console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

const idadeComprador = 14;
const estaAcompanhada = true;
const temPassagemComprada = true;

// if (idadeComprador >= 18) {
//   console.log("Comprador maior, venda feita");
//   listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//   console.log("Menor acompanhado, venda feita");
//   listaDeDestinos.splice(1, 1);
// } else {
//   console.log("Menor de idade e não está acompanhado, Não posso vender");
// }

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
  console.log("Comprador maior, venda feita");
  listaDeDestinos.splice(1, 1);
} else {
  console.log("Menor de idade e não está acompanhado, Não posso vender");
}

console.log("Embarque: \n\n");

if (idadeComprador >= 18 && temPassagemComprada) {
  console.log("Boa viagem");
} else {
  console.log("você não pode embarcar");
}

console.log("Destinos possíveis:");
console.log(listaDeDestinos);
