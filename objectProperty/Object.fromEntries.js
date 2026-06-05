/**
 O método Object.fromEntries() no JavaScript é usado para criar um objeto a partir de um iterável 
 de pares chave-valor, como arrays ou maps. 
 Ele transforma essas entradas em um objeto com 
 propriedades correspondentes às chaves e valores. ...
 */

 const pessoa =[["nome", "DevJocas"], ["local", "Luanda"], ["profissa","Programador"]]
const dadoPessoa =  Object.fromEntries(pessoa)
// console.log(dadoPessoa)

const pessoa = { nome: "Ana", idade: 25 };

const novo = Object.fromEntries(
  Object.entries(pessoa).filter(([chave]) => chave !== "idade")
);

console.log(novo);


// usando o Map

const map = new Map([['brand', 'Toyota'], ['model', 'Corolla'], ['year', 2020]]);
const car = Object.fromEntries(map);
console.log(car);


const original = { a: 1, b: 2, c: 3 };
const transformed = Object.fromEntries(
 Object.entries(original).map(([key, value]) => [key, value * 2])
);
console.log(transformed);
