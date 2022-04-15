console.log('Trabalhando com listas');

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
)



console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 2);

listaDeDestinos.push('Cuiabá');
listaDeDestinos.push('Brasília');
listaDeDestinos.push('Amapá');
listaDeDestinos.push('Rondônia');

console.log("Destinos possíveis:")
console.log(listaDeDestinos)

console.log(listaDeDestinos[1])