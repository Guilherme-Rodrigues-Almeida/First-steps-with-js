console.log("Trabalhando com listas");

/*const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;*/

const listaDeDestinos = [
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`
]; 

listaDeDestinos.push(`Curitiba`)

console.log("Destino possíveis:")
//console.log(rioDeJaneiro, salvador, saoPaulo);
listaDeDestinos.splice(1, 1);

console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);