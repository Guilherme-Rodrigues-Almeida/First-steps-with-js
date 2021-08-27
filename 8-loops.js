console.log("\nTrabalhando com loops");

const listaDeDestinos = [
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
];

const idadeComprador = 18;
const estaAcompanhanda = false;
let temPassgemComprada = false;
const destino = "Rio de Janeiro";

console.log("\nDestino possíveis:")
console.log(listaDeDestinos);

const podeComprar =  (idadeComprador >= 18 || estaAcompanhanda);

let destinoExiste = false;

for(let i = 0; i < listaDeDestinos.length; i++){
    
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break;
    }
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    
    console.log("Boa Viagem!");
}else{
    console.log("Desculpe ocorreu um erro!");
}