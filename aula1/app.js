console.log('oiiiiii polyana');

let nome = 'frase';

console.log('oiiiiii polyana', nome, 'depois da frase');

const primeiro = 5;
const segundo = 10;
const resultado = primeiro * segundo;
const resultadoduplo = resultado * 2;
let resultadotriplo = resultado * 3;

resultadotriplo = resultadotriplo + segundo;
console.log();
console.log(resultado);
console.log(resultadoduplo);
console.log(resultadotriplo);
console.log(typeof resultadotriplo);

const a = [1, 2];
const b = a;


console.log(a, b)

b.push(3)
console.log(a)


const pessoa = {
    nome: 'poly',
    idade: 23,
    cidade: 'maringa'
}

for(let key in pessoa){
    console.log(key, pessoa[key])
}