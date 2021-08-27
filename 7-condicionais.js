console.log("trabalhando com condicionais");

const listaDeDestinos = [
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
];

listaDeDestinos.push(`Curitiba`)

const idadeComprador = 18;
const estaAcompanhanda = true;
const temPassgemComprada = true;

console.log("Destino possíveis:")
console.log(listaDeDestinos);

/* if (idadeComprador >= 18) {
    console.log("comprador maior de idade");
    listaDeDestinos.splice(1, 1); //remover se for menor de idade
} else {
    //menor de idade
    if (estaAcompanhanda) {
        console.log("comprador está acompanhando");
        listaDeDestinos.splice(1, 1);
    } else {
        console.log("Comprador menor de idade!");
    }
};*/

if (idadeComprador >= 18   
        || estaAcompanhanda) {
            console.log("Boa viagem!");
            listaDeDestinos.splice(1, 1); //remover se for menor de idade
        }else {
            //menor de idade
            console.log("Comprador menor de idade!");
        };

console.log("Embarque: \n\n");

if(idadeComprador >= 18
        && temPassgemComprada){
            console.log("Boa viagem!");
        }else{
            console.log("Você não pode embarcar!");
        };

console.log(listaDeDestinos);